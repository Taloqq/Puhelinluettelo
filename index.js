const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')
app.use(express.json())
app.use(cors())
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    id: 1,
    name: "Arto  Hellas",
    number: "040-1231232"
  },
  {
    id: 2,
    name:"Ada Lovelace",
    number:"030-202020"
  },
  {
    id: 3,
    name:"Dan Abrakadabra",
    number:"050-5029599"
  },
  {
    id: 4,
    name: "Mary Poppedick",
    number: "304-19492-24"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const timeNow = new Date();
  const howMany = persons.length
  response.send(`Phonebook has info for ${howMany} people <br>
  ${timeNow}`)

})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    response.json(person) 
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end();
})

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.number || !body.name) {
    return response.status(400).json({
      error: 'must include name and number'
    })
  }
  if (persons.map(p => p.name).includes(body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }
  persons = persons.concat(person)
  response.json(person)
})
const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)