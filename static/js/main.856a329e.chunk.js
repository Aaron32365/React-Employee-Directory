(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"firstName":"Aaron","lastName":"Williams","position":"Web Developer","Salary":65000},{"firstName":"Steve","lastName":"Smith","position":"Accountant","Salary":60000},{"firstName":"John","lastName":"Doe","position":"Product Manager","Salary":85000}]')},,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l);t(11),t(12);var o=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-10 header-container"},"Employee Directory"),r.a.createElement("div",{className:"col-sm-1"}))},s=t(1),m=t(5),i=(t(13),t(14),r.a.createContext({db:[],sort:function(){},filter:function(){}}));var d=function(){var e=Object(n.useContext)(i);return r.a.createElement("div",{className:"col-sm-3 query-container"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"radio-container"},r.a.createElement("input",{id:"descRadio",type:"radio",name:"sort",onChange:e.sort}),r.a.createElement("label",null,"Sort by Descending Salary"),r.a.createElement("br",null),r.a.createElement("input",{id:"ascRadio",type:"radio",name:"sort",onChange:e.filter}),r.a.createElement("label",null,"Filter: Management only")))))};t(15);var u=function(){var e=Object(n.useContext)(i).db.map((function(e){return r.a.createElement("tr",{className:" row"},r.a.createElement("td",{className:"col-sm-3"},e.firstName),r.a.createElement("td",{className:"col-sm-3"},e.lastName),r.a.createElement("td",{className:"col-sm-3"},e.position),r.a.createElement("td",{className:"col-sm-3"},e.Salary))}));return r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"col-sm-12",id:"header"},"Employee Directory"),r.a.createElement("table",{className:"list-group search-results"},r.a.createElement("tr",{className:"row"},r.a.createElement("th",{className:"col-sm-3"},"First Name"),r.a.createElement("th",{className:"col-sm-3"},"Last Name"),r.a.createElement("th",{className:"col-sm-3"},"Position"),r.a.createElement("th",{className:"col-sm-3"},"Salary")),e))},E=t(4),N={bigPad:{minHeight:80},littlePad:{minHeight:26},centerText:{textAlign:"center"},test:{backgroundColor:"red",height:400}};var v=function(){var e=Object(n.useState)({db:E,sort:function(){var e=t.db.sort((function(e,a){return e.Salary<a.Salary?1:-1}));return console.log("Directory sorted by descending salary: "+JSON.stringify(e)),l(Object(s.a)(Object(s.a)({},t),{},{db:e}))},filter:function(){var e=t.db.filter((function(e){return e.position.toLowerCase().includes("manager")}));return console.log("Directory filtered to contain only management: "+JSON.stringify(e)),l(Object(s.a)(Object(s.a)({},t),{},{db:e}))}}),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement(i.Provider,{value:t},r.a.createElement("div",{className:"col-sm-12"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-8 body-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12",style:N.bigPad}),r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement(d,null),r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-6 employee-card"},r.a.createElement(u,null))))))},f={pad:{minHeight:70}};var y=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("div",{className:"col-sm-12",style:f.pad}),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.856a329e.chunk.js.map