(this["webpackJsonpconta-simples"]=this["webpackJsonpconta-simples"]||[]).push([[0],{23:function(e,n,a){},28:function(e,n,a){e.exports=a.p+"static/media/logo.4f59c0d9.svg"},30:function(e){e.exports=JSON.parse('[{"nome":"Dax Oliveira","email":"dax.oliveira.br@gmail.com","agencia":"0001","conta":"1234-5","senha":"conta","minhaconta":[{"id":1,"transacao":"Transfer\xeancia Recebida","empresa":"Gove","valor":"2.032,00","data":"18 FEV"},{"transacao":"Transfer\xeancia Enviada","empresa":"Hrestart","valor":"3.032,00","data":"19 FEV"},{"transacao":"Transfer\xeancia Recebida","empresa":"Linker","valor":"2.032,00","data":"20 FEV"},{"transacao":"Transfer\xeancia Enviada","empresa":"Creators","valor":"2.032,00","data":"21 FEV"},{"transacao":"Transfer\xeancia Recebida","empresa":"Gove","valor":"2.032,00","data":"18 FEV"},{"transacao":"Transfer\xeancia Enviada","empresa":"Hrestart","valor":"3.032,00","data":"19 FEV"},{"transacao":"Transfer\xeancia Recebida","empresa":"Linker","valor":"2.032,00","data":"20 FEV"},{"transacao":"Transfer\xeancia Enviada","empresa":"Creators","valor":"2.032,00","data":"21 FEV"}],"cartaodecredito":[{"nomedaempresa":"Adobe Creative Collection","valor":"2.799,99","data":"21 MAR"},{"nomedaempresa":"Uber Inc.","valor":"2.799,99","data":"21 MAR"},{"nomedaempresa":"FaceBook Inc.","valor":"2.799,99","data":"21 MAR"},{"nomedaempresa":"SalesForce Inc.","valor":"2.799,99","data":"21 MAR"},{"nomedaempresa":"Etna S/A","valor":"2.799,99","data":"21 MAR"},{"nomedaempresa":"Sodexo","valor":"2.799,99","data":"21 MAR"}],"gestaodecobrancas":[{"iniciais":"ChatClass","vencimento":"03 de Fevereiro de 2020","valor":"1.200,49","situacao":"ATRASADO"},{"iniciais":"Convenia","vencimento":"07 de Fevereiro de 2020","valor":"1.700,49","situacao":"PAGO"},{"iniciais":"Creators","vencimento":"11 de Fevereiro de 2020","valor":"2.401,00","situacao":"ATRASADO"},{"iniciais":"Cuidas","vencimento":"14 de Fevereiro de 2020","valor":"3.700,49","situacao":"PAGO"},{"iniciais":"Vittude","vencimento":"16 de Fevereiro de 2020","valor":"4.100,49","situacao":"PAGO"},{"iniciais":"Yubb","vencimento":"21 de Fevereiro de 2020","valor":"1.700,49","situacao":"ATRASADO"}]}]')},32:function(e,n,a){e.exports=a(44)},43:function(e,n,a){},44:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(24),o=a.n(r),c=(a(23),a(14)),i=a(15),u=a(7),m=a(17),d=a(16),s=a(1),E=a(31),p=a(9),h=a(10),g=a(6);function v(){var e=Object(p.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  .button {\n    font-size: .8rem;\n    font-weight: bold;\n    text-decoration: none;\n    color: #45b34a;\n    border-radius: 0.3rem;\n    border: 1px solid #45b34a;\n    padding: .9rem;\n    cursor: pointer;\n    transition: background-color 250ms;\n    background-color: #fff;\n  }\n\n  .button:hover {\n    background-color: #62bd07;\n    color: #fff;\n    border: .1rem solid #7be115;\n    border-radius: 0.3rem;\n  }\n\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: #315126;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n\n  }\n"]);return v=function(){return e},e}var b=h.a.ul(v(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),f=function(e){return e.logged?l.a.createElement(b,{open:e.open},l.a.createElement("li",null,l.a.createElement(g.b,{to:"/minhaconta",className:"button",onClick:function(){return e.setOpen(!1)}},"MINHA CONTA")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/cartaodecredito",className:"button"},"CART\xc3O DE CR\xc9DITO")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/gestaodecobrancas",className:"button"},"GEST\xc3O DE COBRAN\xc7AS")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/",className:"button",onClick:e.logout},"LOGOUT"))):null};function C(){var e=Object(p.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return C=function(){return e},e}var A=h.a.div(C(),(function(e){return e.open?"#ccc":"#45b34a"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),O=function(e){var n=Object(t.useState)(!1),a=Object(E.a)(n,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{open:r,onClick:function(){return o(!r)}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement(f,{open:r,logged:e.logged,logout:e.logout,setOpen:o}))},k=a(28),F=a.n(k),R=(a(43),function(e){return l.a.createElement("nav",null,l.a.createElement(g.b,{to:"/",className:"button"},l.a.createElement("img",{src:F.a,alt:"Logo Conta Simples"})),l.a.createElement(O,{logged:e.logged,logout:e.logout}))}),x=a(29),S=function(e){Object(m.a)(a,e);var n=Object(d.a)(a);function a(e){var t;return Object(c.a)(this,a),(t=n.call(this,e)).state={email:"",senha:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(i.a)(a,[{key:"handleChange",value:function(e){var n=e.target,a=n.value,t=n.name;this.setState(Object(x.a)({},t,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.checkLogin(this.state)}},{key:"render",value:function(){var e=this.state,n=e.email,a=e.senha;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"E-mail:",l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Senha:",l.a.createElement("input",{type:"password",name:"senha",value:a,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"},"Login"))}}]),a}(l.a.Component),w=function(e){var n=e.logged,a=e.usuario,t=e.checkLogin;return l.a.createElement("div",null,n?l.a.createElement("div",null,l.a.createElement("h1",null,"Bem vindo ",a.nome)):l.a.createElement(S,{checkLogin:t}))};var N=function(e){var n=e.usuario.minhaconta;return console.log(n),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"R$ 31.276,49"),l.a.createElement("h4",null,"\xdaltimo rendimento ",l.a.createElement("strong",null,"+R$ 12.02")," (6 de Agosto)"),l.a.createElement("button",null,"DEPOSITAR")),l.a.createElement("div",null,l.a.createElement("h5",null,"\xdaLTIMAS MOVIMENTA\xc7\xd5ES"),l.a.createElement("hr",null)))};var T=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"R$ 31.276,49"),l.a.createElement("h4",null,"\xdaltimo rendimento ",l.a.createElement("strong",null,"+R$ 12.02")," (6 de Agosto)"),l.a.createElement("button",null,"DEPOSITAR")),l.a.createElement("div",null,l.a.createElement("h5",null,"\xdaLTIMAS MOVIMENTA\xc7\xd5ES"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV")),l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV")),l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV")),l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV")),l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV")),l.a.createElement("li",null,l.a.createElement("hr",null),l.a.createElement("h6",null,"Compra no Cr\xe9dito"),l.a.createElement("p",null,"Adobe Creative Collection"),l.a.createElement("p",null,"R$ 2.032,00"),l.a.createElement("p",null,"18 FEV"))))))};var V=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"\xdaLTIMAS MOVIMENTA\xc7\xd5ES"),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("strong",null,"Pagos"),l.a.createElement("h1",null,"R$5.878,50")),l.a.createElement("div",null,l.a.createElement("strong",null,"Atrasados"),l.a.createElement("h1",null,"R$2.878,22"))),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")),l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")),l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")),l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")),l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")),l.a.createElement("li",null,l.a.createElement("p",null,"FN"),l.a.createElement("h4",null,"Cliente: Fernando Nogueira"),l.a.createElement("p",null,"Vencimento 15 de Mar\xe7o de 2019"),l.a.createElement("p",null,"R$ 3.245,99"),l.a.createElement("br",null),l.a.createElement("p",null,"PAGO")))))};function M(){var e=Object(p.a)(["\n    margin: 0 auto;\n    margin-top: 2rem;\n    width: 100%;\n    border: .1rem solid black;\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n    }\n"]);return M=function(){return e},e}var L=h.a.footer(M()),j=function(){return l.a.createElement(L,null,"Footer")},$=a(30),y=function(e){Object(m.a)(a,e);var n=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=n.call(this)).state={logged:!1,usuario:{}},e.checkLogin=e.checkLogin.bind(Object(u.a)(e)),e.logout=e.logout.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"checkLogin",value:function(e){var n=e.email,a=e.senha,t=$.filter((function(e){return e.email===n&&e.senha===a}));t.length>0?this.setState({logged:!0,usuario:t[0]}):this.setState({logged:!1,usuario:{}})}},{key:"logout",value:function(){this.setState({logged:!1,usuario:{}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(R,{logged:this.state.logged,logout:this.logout}),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",render:function(){return l.a.createElement(w,{usuario:e.state.usuario,logged:e.state.logged,checkLogin:e.checkLogin})}}),l.a.createElement(s.a,{exact:!0,path:"/minhaconta",render:function(){return l.a.createElement(N,{usuario:e.state.usuario,logged:e.state.logged,checkLogin:e.checkLogin})}}),l.a.createElement(s.a,{exact:!0,path:"/cartaodecredito",render:function(){return l.a.createElement(T,{usuario:e.state.usuario,logged:e.state.logged,checkLogin:e.checkLogin})}}),l.a.createElement(s.a,{exact:!0,path:"/gestaodecobrancas",render:function(){return l.a.createElement(V,{usuario:e.state.usuario,logged:e.state.logged,checkLogin:e.checkLogin})}})),l.a.createElement(j,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g.a,null,l.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e97681d5.chunk.js.map