(this["webpackJsonppravegak-website"]=this["webpackJsonppravegak-website"]||[]).push([[0],{177:function(e,a,t){e.exports=t(388)},388:function(e,a,t){"use strict";t.r(a);var n=t(9),l=t(10),c=t(12),i=t(11),r=t(1),s=t.n(r),o=t(33),m=t.n(o),u=t(25),d=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).props=e,l.scrollTargetIds=l.props.scrollTargetIds,l.activeNavClass=l.props.activeNavClass,l.scrollDuration=Number(l.props.scrollDuration)||1e3,l.headerBackground="true"===l.props.headerBackground,l.props.router&&"HashRouter"===l.props.router?(l.homeDefaultLink="#/",l.hashIdentifier="#/#"):(l.homeDefaultLink="/",l.hashIdentifier="#"),l}return Object(l.a)(t,[{key:"easeInOutQuad",value:function(e,a,t,n){return(e/=n/2)<1?t/2*e*e+a:-t/2*(--e*(e-2)-1)+a}},{key:"scrollTo",value:function(e,a,t){var n=this,l=a-e,c=0;!function a(){c+=10;var i=n.easeInOutQuad(c,e,l,t);window.scrollTo(0,i),c<t&&setTimeout(a,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;console.log("this is intiation every time"),document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(a){a.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(a){a.addEventListener("click",(function(t){t.preventDefault();var n=e.getNavToSectionID(a.getAttribute("href"));if(n){var l=document.getElementById(n).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,l,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",(function(){var a;e.scrollTargetIds.forEach((function(t,n){a=document.getElementById(t).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=a&&window.pageYOffset<a+document.getElementById(t).scrollHeight?(e.getNavLinkElement(t).classList.add(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(t)):(e.getNavLinkElement(t).classList.remove(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.remove(e.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===e.scrollTargetIds.length-1&&(e.getNavLinkElement(t).classList.add(e.activeNavClass),e.getNavLinkElement(t).parentNode.classList.add(e.activeNavClass),e.clearOtherNavLinkActiveStyle(t))}))}))}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var a=this;this.scrollTargetIds.forEach((function(t){t!==e&&(a.getNavLinkElement(t).classList.remove(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass))}))}},{key:"render",value:function(){return s.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),t}(r.Component),v=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).setActiveTab=function(e,a){l.setState({Tab:e})},l.state={Tab:""},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{id:"main_navbar",className:"navbar navbar-expand-lg  fixed-top navbar-custom sticky sticky-light navbar-light bg-light"},s.a.createElement("div",{className:"container"},s.a.createElement(u.b,{className:"navbar-brand logo",to:"/"},s.a.createElement("img",{src:"images/logo.png",alt:"logo.png",style:{height:"60px"}})),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("i",{className:"mdi mdi-menu"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},s.a.createElement(d,{scrollTargetIds:["home","services","about","contact"],activeNavClass:"active",scrollDuration:"800",className:"ml-auto"},s.a.createElement("ul",{className:"navbar-nav ml-auto navbar-center",id:"mySidenav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{href:"#home",className:"nav-link"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#services",className:"nav-link"},"Services")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#about",className:"nav-link"},"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#contact",className:"nav-link"},"Contact Us"))))))))}}]),t}(s.a.Component),g=t(114),h=t(115),p=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("main_navbar").classList.add("navbar-light")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section home-8-bg",id:"home"},s.a.createElement("div",{className:"container"},s.a.createElement(g.a,{className:"align-items-center"},s.a.createElement(h.a,{lg:"6",className:"home-text"},s.a.createElement("div",null),s.a.createElement("div",{className:"title-heading mb-5"},s.a.createElement("h2",{className:"text-dark mb-4 font-weight-bold text-capitalise"},"Building fast, beautiful, scalable software"),s.a.createElement("p",null,"Automate your workflow and get insights from the data generated. Make your presence on internet secure. Get yourself armed with latest technologies and data trends."))),s.a.createElement(h.a,{lg:"6",className:" home-img"},s.a.createElement("img",{src:"images/software.jpg",alt:"",className:"img-fluid home-img"}))))))}}]),t}(s.a.Component),E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section bg-about bg-light-about bg-light",id:"about"},s.a.createElement("div",{className:"container"},s.a.createElement(g.a,null,s.a.createElement(h.a,{lg:"4"},s.a.createElement("div",{className:"title-heading mb-5"},s.a.createElement("h3",{className:"text-dark mb-1 font-weight-light text-uppercase"},"About Us"),s.a.createElement("div",{className:"title-border-simple position-relative"})))),s.a.createElement(g.a,{className:"align-items-center"},s.a.createElement(h.a,{lg:"6"},s.a.createElement("div",{className:"title-heading mb-5"},s.a.createElement("h3",{className:"text-dark mb-2 font-weight-light text-capitalise"},"Who we are"),s.a.createElement("p",null,"A team of motivated engineers and economist who are building next generation software using artificial intelligence, machine learning and large scale data analysis."))),s.a.createElement(h.a,{lg:"6",className:" about-img"},s.a.createElement("img",{src:"images/3081629.jpg",alt:"",className:"img-fluid"}))))))}}]),t}(s.a.Component),f=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={ServiceList:[{image:"images/dataanalysis.jpg",title:"Data Analysis",content:["Finding helpful and unbiased inferences which can then be used for further decision making."]},{image:"images/software.jpg",title:"Software Products",content:["Building scalable software products to accelerate your work."]},{image:"images/dataanalysis.jpg",title:"Security Analysis",content:["Finding security vulnerabilities in your existing software stack and fixing them."]},{image:"images/Training.jpg",title:"Training",content:["Training students and professionals on various software and security technologies."]},{image:"images/consulting.jpg",title:"Consulting",content:["Have a tech team already? Learn how to utilize that most to build best products."]},{image:"images/Events.jpg",title:"Events",content:["Organizing tech meetups, conferences and events."]}]},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section",id:"services"},s.a.createElement("div",{className:"container"},s.a.createElement(g.a,null,s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"title-heading mb-5"},s.a.createElement("h3",{className:"text-dark mb-1 font-weight-light text-uppercase"},"Our Services"),s.a.createElement("div",{className:"title-border-simple position-relative"})))),s.a.createElement(g.a,{className:"service-row"},this.state.ServiceList.map((function(e,a){return s.a.createElement(h.a,{lg:"6",key:a,className:"service-col1",style:{marginBottom:"5em"}},s.a.createElement("div",{className:"service-box rounded align-center service-col justify-content-center "},s.a.createElement("div",{className:"service-icon "},s.a.createElement("img",{style:{width:"100%",height:"100%",marginBottom:"10em"},src:e.image,alt:"".concat(e.image)})),s.a.createElement("div",{className:"services-desc"},s.a.createElement("div",{className:"service-title mb-2 position-relative",style:{top:"0.5em"}},s.a.createElement("h5",{className:"font-weight-normal mb-3"},s.a.createElement(u.b,{to:"#",className:"text-dark"},e.title))),s.a.createElement("ul",{className:"text-muted  f-14"},e.content.map((function(e){return s.a.createElement("li",{style:{listStyleType:"none"}},e)}))))))}))))))}}]),t}(s.a.Component),b=t(173),N=t(49),w=t(77),y=t.n(w),k=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_URL,j=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).changeHandler=function(a,t){e.setState(Object(b.a)({},t,a.target.value))},e.submitHandler=function(a){var t=e.state,n=t.name,l=t.email,c=t.subject,i=t.message;n&&l&&c&&i&&y.a.post("".concat(k,"/contact"),e.state,{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){window.alert("Succefully send")})).catch((function(e){console.log(e)}))},e.state={name:"",email:"",subject:"",message:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,l=a.subject,c=a.message;return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section bg-light",id:"contact"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"title-heading mb-5"},s.a.createElement("h3",{className:"text-dark mb-1 font-weight-light text-uppercase"},"Get in touch"),s.a.createElement("div",{className:"title-border-simple position-relative"})))),s.a.createElement(g.a,null,s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"contact-box p-5"},s.a.createElement(g.a,null,s.a.createElement(h.a,{lg:"8",md:"6"},s.a.createElement("div",{className:"custom-form p-3"},s.a.createElement("div",{id:"message"}),s.a.createElement(N.AvForm,{id:"contact-form",onSubmit:this.submitHandler},s.a.createElement(g.a,null,s.a.createElement(h.a,{lg:"6"},s.a.createElement("div",{className:"form-group app-label"},s.a.createElement(N.AvField,{name:"name",type:"text",validate:{required:{value:!0}},placeholder:"Name",value:t,onChange:function(a){return e.changeHandler(a,"name")}}))),s.a.createElement(h.a,{lg:"6"},s.a.createElement("div",{className:"form-group app-label"},s.a.createElement(N.AvField,{name:"email",type:"text",errorMessage:"Invalid Email",validate:{required:{value:!0},email:{value:!0}},placeholder:"Email",value:n,onChange:function(a){return e.changeHandler(a,"email")}}))),s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"form-group app-label"},s.a.createElement(N.AvField,{name:"subject",type:"text",validate:{required:{value:!0}},placeholder:"Subject",value:l,onChange:function(a){return e.changeHandler(a,"subject")}}))),s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"form-group app-label"},s.a.createElement(N.AvField,{name:"comments",type:"textarea",validate:{required:{value:!0}},rows:"5",placeholder:"Message",value:c,onChange:function(a){return e.changeHandler(a,"message")}}))),s.a.createElement(g.a,null,s.a.createElement(h.a,{sm:"12"},"\xa0 \xa0"," ",s.a.createElement("input",{type:"submit",className:"submitBnt btn btn-custom",value:"Send Message"}),s.a.createElement("div",{id:"simple-msg"}))))))),s.a.createElement("div",{className:"col-lg-4 col-md-6"},s.a.createElement("div",{className:"contact-cantent p-3"},s.a.createElement("div",{className:"contact-details"},s.a.createElement("div",{className:"float-left contact-icon mr-3 mt-2"},s.a.createElement("i",{className:"mdi mdi-headphones text-muted h5"})),s.a.createElement("div",{className:"app-contact-desc text-muted pt-1"},s.a.createElement("p",{className:"mb-0 info-title f-13"},"Call :"),s.a.createElement("div",{className:"mb-0 f-13"},s.a.createElement("p",null,"+91-9466400301")))),s.a.createElement("div",{className:"contact-details mt-2"},s.a.createElement("div",{className:"float-left contact-icon mr-3 mt-2"},s.a.createElement("i",{className:"mdi mdi-email-outline text-muted h5"})),s.a.createElement("div",{className:"app-contact-desc text-muted pt-1"},s.a.createElement("p",{className:"mb-0 info-title f-13"},"Email :"),s.a.createElement("p",{className:"mb-0 f-13"},s.a.createElement("a",{href:"mailto:pulkit@pravegak.in",target:"_top",className:"text-muted"},"pulkit@pravegak.in")))),s.a.createElement("div",{className:"contact-details mt-2"},s.a.createElement("div",{className:"float-left contact-icon mr-3 mt-2"},s.a.createElement("i",{className:"mdi mdi-map-marker text-muted h5"})),s.a.createElement("div",{className:"app-contact-desc text-muted pt-1"},s.a.createElement("p",{className:"mb-0 info-title f-13"},"Location :"),s.a.createElement("div",{className:"mb-0 f-13"},s.a.createElement("p",{className:"text-muted"},"Bhiwani, Haryana")))),s.a.createElement("div",{className:"follow mt-4"},s.a.createElement("h4",{className:"text-dark mb-3"},"Follow"),s.a.createElement("ul",{className:"follow-icon list-inline mt-32 mb-0"},s.a.createElement("li",{className:"list-inline-item f-15"},s.a.createElement(u.b,{to:"#",className:"social-icon text-muted"},s.a.createElement("i",{className:"mdi mdi-facebook"}))),"\xa0",s.a.createElement("li",{className:"list-inline-item f-15"},s.a.createElement(u.b,{to:"#",className:"social-icon text-muted"},s.a.createElement("i",{className:"mdi mdi-twitter"}))),"\xa0",s.a.createElement("li",{className:"list-inline-item f-15"},s.a.createElement(u.b,{to:"https://www.linkedin.com/company/pravegak",className:"social-icon text-muted"},s.a.createElement("i",{className:"mdi mdi-linkedin"}))),"\xa0",s.a.createElement("li",{className:"list-inline-item f-15"},s.a.createElement(u.b,{to:"#",className:"social-icon text-muted"},s.a.createElement("i",{className:"mdi mdi-whatsapp"}))),"\xa0")))))))))))}}]),t}(s.a.Component),O=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"footer-alt bg-dark pt-3 pb-3"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 text-center"},s.a.createElement("p",{className:"copyright text-white f-14 font-weight-light mb-0"}," ",(new Date).getFullYear()," \xa9 Pravegak Technologies LLP"))))))}}]),t}(s.a.Component),x=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("main_navbar").classList.add("navbar-light")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,null),s.a.createElement(p,null),s.a.createElement(f,null),s.a.createElement(E,null),s.a.createElement(j,null),s.a.createElement(O,null))}}]),t}(s.a.Component),C=t(150),L=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(n.a)(this,t),(e=a.call(this)).state={details:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(k,"/list"),{headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(a){e.setState({details:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"section bg-about bg-light-about bg-light",id:"about"},s.a.createElement("div",{className:"container"},s.a.createElement(C.a,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Subject"),s.a.createElement("th",null,"Message"))),s.a.createElement("tbody",null,this.state.details.length&&this.state.details.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("th",null,e.name),s.a.createElement("td",null,e.email),s.a.createElement("td",null,e.subject),s.a.createElement("td",null,e.message))})))))))}}]),t}(s.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=t(39),I=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(T.c,null,s.a.createElement(T.a,{exact:!0,path:"".concat("","/"),component:x}),s.a.createElement(T.a,{exact:!0,path:"".concat("","/list"),component:L})))}}]),t}(s.a.Component);!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");A?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(a,e)}))}}(),m.a.render(s.a.createElement(I,null),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.84d80985.chunk.js.map