(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{8794:(e,a,t)=>{Promise.resolve().then(t.bind(t,1301))},1301:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var s=t(5155),n=t(2115),r=t(7531),l=t.n(r);function i(){let[e,a]=(0,n.useState)(""),[t,r]=(0,n.useState)([]),[i,c]=(0,n.useState)(-1),[o,_]=(0,n.useState)(""),u=()=>{if(""===e.trim()){alert("Digite uma tarefa v\xe1lida");return}r([...t,e]),a("")},m=e=>{r(t.filter((a,t)=>t!==e))},h=e=>{c(e),_(t[e])},f=e=>{if(""===o.trim()){alert("Digite uma tarefa v\xe1lida");return}let a=[...t];a[e]=o,r(a),c(-1),_("")},p=e=>{let a=t[e];{let e=JSON.parse(localStorage.getItem("tarefasParaFazer")||"[]");e.push(a),localStorage.setItem("tarefasParaFazer",JSON.stringify(e))}r(t.filter((a,t)=>t!==e))};return(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsx)("h1",{className:l().home,children:"Adicione novas tarefas"}),(0,s.jsx)("input",{className:l().input,type:"text",value:e,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(-1!==i?f(i):u())},placeholder:"Digite aqui sua tarefa"}),(0,s.jsx)("button",{onClick:u,className:l().button,children:"Adicionar"}),(0,s.jsx)("h2",{children:"Tarefas:"}),(0,s.jsx)("ul",{className:l().listaTarefas,children:t.map((e,a)=>(0,s.jsx)("li",{className:l().itemTarefa,children:i===a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",value:o,onChange:e=>_(e.target.value),onKeyDown:e=>{"Enter"===e.key&&f(a)},className:l().input}),(0,s.jsx)("button",{onClick:()=>c(-1),className:l().cancelar,children:"Cancelar"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{onClick:()=>h(a),className:l().tarefaSpan,children:e}),(0,s.jsx)("button",{onClick:()=>m(a),className:"".concat(l().button," ").concat(l().remove),children:"Remover"}),(0,s.jsx)("button",{onClick:()=>p(a),className:"".concat(l().button," ").concat(l().enviar),children:"Enviar para Tarefas para Fazer"})]})},a))})]})}},7531:e=>{e.exports={container:"styles_container__aBGky",home:"styles_home__J0KL4",h2:"styles_h2__2JSdp","input-container":"styles_input-container__n9OH2",input:"styles_input__ojNYo",button:"styles_button__Ayic_",listaTarefas:"styles_listaTarefas__RtUK8",itemTarefa:"styles_itemTarefa__Ya1Nd",tarefaSpan:"styles_tarefaSpan__LeAOF",remove:"styles_remove__ciIXZ",enviar:"styles_enviar__1ncPh",cancelar:"styles_cancelar__V0rap"}}},e=>{var a=a=>e(e.s=a);e.O(0,[436,441,517,358],()=>a(8794)),_N_E=e.O()}]);