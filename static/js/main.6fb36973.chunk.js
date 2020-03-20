(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),s=(t(27),t(8)),m=t(9),i=t(12),o=t(10),u=t(13),h=t(11),d=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleButton=function(){t.state.active?t.setState({active:!1}):t.setState({active:!0})},t.state={active:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"handleLink",value:function(e){this.props.onClick(e),this.setState({active:!1})}},{key:"render",value:function(){var e=this,a=this.props,t=a.pages,n=a.current,c=this.state.active?" show":"";return r.a.createElement("header",{className:"noselect"},r.a.createElement("div",{className:"menu-btn"+c,onClick:this.handleButton},r.a.createElement("div",{className:"btn-line"}),r.a.createElement("div",{className:"btn-line"}),r.a.createElement("div",{className:"btn-line"})),r.a.createElement("nav",{className:"menu"+c},r.a.createElement("div",{className:"menu-branding"+c},r.a.createElement("div",{className:"portrait"})),r.a.createElement("div",{className:"menu-branding-background"+c}),r.a.createElement("ul",{className:"menu-nav"+c},t.map((function(a){var t="nav-item"+(a.url===n?" current":"");return(r.a.createElement("li",{className:t+c,key:a.url},r.a.createElement(h.b,{to:"/"+a.url,className:"nav-link",onClick:function(){return e.handleLink(a.url)}},a.name)))})))))}}]),a}(n.Component);function p(){return r.a.createElement("main",{id:"home"},r.a.createElement("h1",{className:"lg-heading"},"Baptiste",r.a.createElement("br",null),r.a.createElement("span",{className:"text-secondary"},"de Montangon")),r.a.createElement("h2",{className:"sm-heading"},"Web Developer & Programmer"),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://twitter.com/baptistemontan"},r.a.createElement("i",{className:"fab fa-twitter fa-2x"})),r.a.createElement("a",{href:"https://www.facebook.com/baptiste.montan"},r.a.createElement("i",{className:"fab fa-facebook fa-2x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/baptiste-d-15a0b0130"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("a",{href:"https://github.com/Baptistemontan"},r.a.createElement("i",{className:"fab fa-github fa-2x"}))))}var E=[{name:"MineSweeper",imageName:"minesweeper.png",link:"",github:"",description:""},{name:"PathFinder",imageName:"pathfinder.png",link:"https://baptistemontan.github.io/pathfinder-react/",github:"https://github.com/Baptistemontan/pathfinder-react",description:""}];var b=[["Email","baptiste@demontangon.fr"],["Phone","(+33)0678568958"],["Address","16 Avenue du colonel Bonnet, 75016 Paris"]];var f=t(5),g=[{name:"Home",url:"",component:p},{name:"About Me",url:"about",component:function(){return r.a.createElement("main",{id:"about"},r.a.createElement("h1",{className:"lg-heading"},"About",r.a.createElement("span",{className:"text-secondary"}," Me")),r.a.createElement("h2",{className:"sm-heading"},"Let me tell you a few things about myself :"),r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"bio-image"},r.a.createElement("div",{className:"portrait"})),r.a.createElement("div",{className:"bio"},r.a.createElement("h3",{className:"text-secondary"},"BIO"),r.a.createElement("p",null,"My name is Baptiste de Montangon, I am a first year engineering student at ",r.a.createElement("a",{href:"https://en.esiea.fr/"},"ESIEA")," in Paris. Web developpement is one of my greatest passion and I want to be a full stack web developper in the future.")),r.a.createElement("div",{className:"job job-1"},r.a.createElement("h3",null,"Web developpement :"),r.a.createElement("p",null,"I am interested in programming since I'm 15 years old, I have been looking into all sorts of programming languages but since I have learned the basic of web developpement I want to become a Full Stack Web developper.")),r.a.createElement("div",{className:"job job-2"},r.a.createElement("h3",null,"Here is My CV :"),r.a.createElement("p",{className:"center"},"Click ",r.a.createElement("a",{href:"./MonCV.pdf"},"here")," to see my french CV")),r.a.createElement("div",{className:"job job-3"},r.a.createElement("h3",null,"Programming Languages :"),r.a.createElement("h5",null,"here are all the languages I know and am confortable with :"),r.a.createElement("p",null,"HTML/CSS/SCSS/JS",r.a.createElement("br",null),"React/React-native/nodeJS",r.a.createElement("br",null),"Python"))))}},{name:"My Work",url:"work",component:function(){return r.a.createElement("main",{id:"work"},r.a.createElement("h1",{className:"lg-heading"},"My",r.a.createElement("span",{class:"text-secondary"}," Work")),r.a.createElement("h2",{className:"sm-heading"},"here is some of my projects :"),r.a.createElement("div",{className:"projects"},E.map((function(e){return r.a.createElement("div",{className:"item",key:e.name},r.a.createElement("a",{className:"square",href:e.link},r.a.createElement("img",{src:"./images/"+e.imageName,alt:"project"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,e.description)))),r.a.createElement("a",{href:e.link,className:"btn-light"},r.a.createElement("i",{className:"fas fa-eye"}),e.name),r.a.createElement("a",{href:e.github,className:"btn-dark"},r.a.createElement("i",{className:"fab fa-github"}),"GitHub"))}))))}},{name:"Contacts",url:"contacts",component:function(){return r.a.createElement("main",{id:"contact"},r.a.createElement("h1",{class:"lg-heading"},"Contact",r.a.createElement("span",{class:"text-secondary"}," Me")),r.a.createElement("h2",{class:"sm-heading"},"Here is how you can reach me :"),r.a.createElement("div",{class:"boxes"},b.map((function(e){return r.a.createElement("div",null,r.a.createElement("span",{class:"text-secondary"},e[0]," :")," ",e[1])}))))}}],v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).handleMenuClick=function(e){t.setState({currentPage:e})},t.state={currentPage:g[0].url},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(d,{pages:g,current:this.state.currentPage,onClick:this.handleMenuClick}),r.a.createElement(f.c,null,g.map((function(e){return r.a.createElement(f.a,{exact:!0,path:"/"+e.url,component:e.component,key:e.url})})),r.a.createElement(f.a,{component:p})),r.a.createElement("footer",{id:"main-footer"},"Copyright \xa9 2020"))}}]),a}(n.Component);t(33);var N=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.6fb36973.chunk.js.map