(this.webpackJsonpdados=this.webpackJsonpdados||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(6),o=c.n(n),s=c(7),l=c(2),r=(c(12),c(0)),i=function(){var e=Object(a.useState)("one"),t=Object(l.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)("Blue"),i=Object(l.a)(o,2),u=i[0],b=i[1],j=Object(a.useState)(!1),d=Object(l.a)(j,2),O=d[0],h=d[1],g=Object(a.useState)(!0),m=Object(l.a)(g,2),v=m[0],f=m[1],x=Object(a.useState)([]),N=Object(l.a)(x,2),k=N[0],p=N[1],L=Object(a.useState)(["Red","Margent","Blue","Green","Yellow","Orange"]),C=Object(l.a)(L,2),M=C[0],w=C[1],B=["one","two","three","four","five","six"],S=["Red","Margent","Blue","Green","Yellow","Orange"],G=function(){h(!0),setTimeout((function(){h(!1)}),1e3)},R=function(){n(B[Math.floor(6*Math.random())]),b(M[Math.floor(Math.random()*M.length)]),h(G)},Y=function(e){if(e.target.classList.contains("color".concat(e.target.value))){e.target.classList.remove("color".concat(e.target.value));for(var t=0;t<k.length;t++)k[t]===e.target.value&&k.splice(t,1)}else e.target.classList.add("color".concat(e.target.value)),p((function(t){return[].concat(Object(s.a)(t),[e.target.value])}))};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)("i",{onClick:R,className:"fas fa-dice-".concat(c," Die ").concat(u," ").concat(O&&"shaking")}),Object(r.jsx)("div",{className:"organizer",children:Object(r.jsx)("button",{className:"button",onClick:function(){f(!v),w(S),p([])},children:v?"escolha 3 cores":"use 6 cores"})})]}),!v&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"options",children:Object(r.jsx)("button",{className:"button",id:"btn",onClick:function(){3===k.length?(w(k),R()):alert("Voc\xea precisa selecionar 3 cores")},children:"Use as 3 cores"})}),Object(r.jsx)("button",{className:"colorList buttonYellow",onClick:Y,value:"Yellow",children:"Amarelo"}),Object(r.jsx)("button",{className:"colorList buttonBlue",onClick:Y,value:"Blue",children:"Azul"}),Object(r.jsx)("button",{className:"colorList buttonOrange",onClick:Y,value:"Orange",children:"Laranja"}),Object(r.jsx)("button",{className:"colorList buttonMargent",onClick:Y,value:"Margent",children:"Margenta"}),Object(r.jsx)("button",{className:"colorList buttonGreen",onClick:Y,value:"Green",children:"Verde"}),Object(r.jsx)("button",{onClick:Y,className:"colorList buttonRed",value:"Red",children:"Vermelho"})]})]})};o.a.render(Object(r.jsx)(i,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e982c68f.chunk.js.map