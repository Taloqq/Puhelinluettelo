(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),u=n.n(o),c=(n(6),n(2)),l=n(4),i=n(3),s=n.n(i),m="http://localhost:3001/api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e,t){return s.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e))},p=function(e){e.errorStyle;var t=e.setErrorStyle,n=e.setErrorMessage,r=e.persons,o=e.setPersons,u=e.newName,c=e.setNewName,i=e.newNumber,s=e.setNewNumber,m=e.handleNameChange,f=e.handleNumberChange,b=function(e,a){var u=e.id;if(window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))){console.log("OK!");var c=Object(l.a)(Object(l.a)({},e),{},{number:a});h(u,c).then((function(e){o(r.map((function(t){return t.id!==u?t:e})))})).catch((function(r){t({color:"red"}),n("Info of ".concat(e.name," has already been removed for the server")),setTimeout((function(){n(null)}),3e3)}))}};return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:u,number:i};if(r.some((function(e){return e.name.toLowerCase()===u.toLowerCase()}))){var l=r.find((function(e){return e.name===a.name}));b(l,a.number)}else d(a).then((function(e){o(r.concat(e)),t({color:"green"}),n("Added ".concat(a.name))})).then(t({color:"green"})).catch((function(e){t({color:"red"}),n(e.response.data.error)})),setTimeout((function(){n(null)}),3e3);c(""),s("")}},a.a.createElement("div",null," name: ",a.a.createElement("input",{value:u,onChange:m})),a.a.createElement("div",null," number: ",a.a.createElement("input",{value:i,onChange:f})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},E=function(e){var t=e.person,n=e.persons,r=e.setPersons;return a.a.createElement("li",null,t.name," ",t.number,a.a.createElement("button",{type:"button",onClick:function(){return e=t.id,void(window.confirm("are u sure ?")&&(console.log("deleting person id ".concat(e)),b(e).then(r(n.filter((function(t){return t.id!==e}))))));var e}},"delete"))},v=function(e){var t=e.filter,n=e.handleFilter;return a.a.createElement("div",null,"filters shown with ",a.a.createElement("input",{value:t,onChange:n}))},g=function(e){var t=e.message,n=e.errorStyle;return null===t?null:a.a.createElement("div",{className:"error",style:n},t)},w=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)(""),l=Object(c.a)(u,2),i=l[0],s=l[1],m=Object(r.useState)(""),d=Object(c.a)(m,2),h=d[0],b=d[1],w=Object(r.useState)(""),N=Object(c.a)(w,2),O=N[0],j=N[1],S=Object(r.useState)(null),y=Object(c.a)(S,2),C=y[0],k=y[1],P=Object(r.useState)(),M=Object(c.a)(P,2),L=M[0],A=M[1];Object(r.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var F=O?n.filter((function(e){return e.name.toLowerCase().includes(O)})):n;return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{message:C,errorStyle:L}),a.a.createElement(v,{filter:O,handleFilter:function(e){j(e.target.value)}}),a.a.createElement("h2",null,"Add a new contact"),a.a.createElement(p,{errorStyle:L,setErrorStyle:A,errorMessage:C,setErrorMessage:k,persons:n,setPersons:o,newName:i,setNewName:s,newNumber:h,setNewNumber:b,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){b(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement("ul",null,F.map((function(e){return a.a.createElement(E,{key:e.id,person:e,persons:n,setPersons:o})}))))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.d72256fd.chunk.js.map