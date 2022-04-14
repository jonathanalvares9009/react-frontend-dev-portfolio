(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{29:function(e,a,t){},30:function(e,a,t){},35:function(e,a,t){e.exports=t(53)},40:function(e,a,t){},41:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(14),l=t.n(s),o=(t(40),t(6)),c=t(7),r=t(9),m=t(8),d=(t(41),t(18)),p=t(24),u=t(26),h=t.n(u),f=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).titles=[],e.name="",e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(d.a)(e)),e}return Object(c.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;this.props.sharedData&&(this.name=this.props.sharedData.name,this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat());var a=i.a.memo((function(){return i.a.createElement(p.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(p.a,{steps:[this.name],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(a,null)),i.a.createElement(h.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),t}(n.Component),v=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),g=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.resumeBasicInfo)var e=this.props.sharedProfile.profile_pic;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},t," :) "),i.a.createElement("br",null),i.a.createElement("br",null),n)))))))}}]),t}(n.Component),b=t(22),E=(t(49),t(27)),y=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies.map((function(e,a){return i.a.createElement(E.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)})),n=e.description.map((function(e,a){return i.a.createElement("li",{key:e,className:"vertical-timeline-element-subtitle"},e)}));return i.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-half mx-auto experience-icon"}),key:a},i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("ul",null,n),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},t))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(b.VerticalTimeline,null,a,i.a.createElement(b.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),N=t(56),k=t(28),w=t.n(k),j=t(29),S=t.n(j),x=t(30),I=t.n(x),O=(t(50),function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,s=this.props.data.url;if(this.props.data.technologies){var l=e.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var o=a.map((function(e,a){return i.a.createElement("div",{key:a,"data-src":e})}))}}return i.a.createElement(N.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement(w.a,{cssModule:[S.a,I.a],animation:"scaleOutAnimation",className:"slider-image"},o)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,s?i.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},l)))))}}]),t}(n.Component)),C=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},i.a.createElement("div",null,i.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},a.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},t)),i.a.createElement(O,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),A=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),B={basic_info:{name:"Jonathan Alvares",titles:["Software Developer","Software Engineer","Full Stack Developer","Frontend Developer","Loves Finance","Loves Technology","Loves Reading & Learning"],profile_pic:"images/myProfile.jpeg",social:[{name:"github",url:"https://github.com/jonathanalvares9009",class:"fab fa-github"},{name:"G-Mail",url:"mailto:alvaresjonathan599@gmail.com",class:"fab fa-google"},{name:"Y-Mail",url:"mailto:alvares.jonthan@yahoo.com",class:"fab fa-yahoo"},{name:"linkedin",url:"https://linkedin.com/in/jonathanalvares",class:"fab fa-linkedin"},{name:"phone",url:"tel:+918208912472",class:"fas fa-phone"}]},skills:{icons:[{name:"HTML 5",class:"devicon-html5-plain",level:"95"},{name:"CSS 3",class:"devicon-css3-plain",level:"95"},{name:"JavaScript",class:"devicon-javascript-plain",level:"70"},{name:"Bootstrap",class:"devicon-bootstrap-plain",level:"85"},{name:"React JS",class:"devicon-react-original",level:"80"},{name:"Vue JS",class:"devicon-vuejs-plain",level:"65"},{name:"Node JS",class:"devicon-nodejs-plain",level:"60"},{name:"SQL",class:"devicon-mysql-plain",level:"80"},{name:"Express JS",class:"devicon-express-original",level:"60"},{name:"Java",class:"devicon-java-plain",level:"60"},{name:"Data Structures & Algorithms",class:"devicon-java-plain",level:"60"},{name:"Problem Solving",class:"devicon-java-plain",level:"60"},{name:"Git",class:"devicon-git-plain",level:"60"},{name:"GitHub",class:"devicon-github-plain",level:"60"},{name:"Azure",class:"devicon-azure-plain",level:"60"},{name:"Python",class:"devicon-python-plain",level:"60"},{name:"Flask",class:"devicon-flask-plain",level:"60"},{name:"Ethereum",class:"fab fa-ethereum",level:"60"}]}},D={basic_info:{description_header:"Hi",description:"\ud83d\udc4b I'm Jonathan Alvares. I believe technology has the power to make the world a better place. I love reading books, helping people and learning new things. I'm interested in solving problems in the fintech industry and making finance available to everyone. Still figuring out more :)",section_name:{about:"About me",projects:"Projects",skills:"Skills",experience:"Experience"}},projects:[{title:"Quiz App",startDate:"2022",description:"A fun quiz app that tests your knowledge of the world. It's a quiz with multiple choice questions. I made it with React JS and CSS.",images:["images/portfolio/quiz-app/p1.png","images/portfolio/quiz-app/p2.png","images/portfolio/quiz-app/p3.png","images/portfolio/quiz-app/p4.png"],url:"https://jonathanalvares9009.github.io/quiz/",technologies:[{class:"devicon-react-plain",name:"React JS"},{class:"devicon-javascript-plain",name:"JavaScript"},{class:"devicon-css3-plain",name:"CSS"},{class:"devicon-git-plain",name:"Git"},{class:"devicon-github-plain",name:"GitHub"},{class:"devicon-tailwindcss-plain",name:"Tailwind CSS"}]},{title:"Payload to JSON",startDate:"2022",description:"I work as a backend engineer, I had to put the browser payload a lot of times in Postman but it took a lot of my time to format it to JSON. I started finding for converters but couldn't find one that worked for me. I decided to make my own and I'm proud of it. It's a simple tool that converts a payload to JSON.",images:["images/portfolio/payload-json/p1.png","images/portfolio/payload-json/p2.png"],url:"https://jonathanalvares9009.github.io/payload-json/",technologies:[{class:"devicon-react-plain",name:"React JS"},{class:"devicon-javascript-plain",name:"JavaScript"},{class:"devicon-css3-plain",name:"CSS"},{class:"devicon-git-plain",name:"Git"},{class:"devicon-github-plain",name:"GitHub"}]}],experience:[{company:"P360",title:"Software Engineer Intern",years:"04.2021 - Present",technologies:["HTML","CSS","JavaScript","Bootstrap","Vue.js","Node.js","Express.js","SQL","Git","GitHub","Swift","Xcode"],description:["Contributing to the Zing platform, which makes communication in the pharma industry as frictionless as possible","Worked on the web frontend, iOS project and the backend","Developed UI components for the web and iOS applications","Helped the team by debugging, modularising and writing test cases for the product","Helped the team reach the desired state of the product","Documented the API and the codebase","Created prototypes and then integrated into the product"]},{company:"Oppia Foundation",title:"Open Source Contributor",years:"03.2021 - 08.2021",technologies:["Kotlin","XML","Bazel","Git","GitHub","Android Studio"],description:["Created new UI and also corrected some UI regressions","Helped move the project use Bazel build system instead of Gradle"]},{company:"GirlScript Summer of Code",title:"Open Source Contributor",years:"03.2021 - 06.2021",technologies:["HTML","CSS","JavaScript","Java","Kotlin","Git","GitHub","Android Studio","VS Code"],description:["Contributed to android projects","Helped onboard new contributors"]}]},J=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this)).state={resumeData:{},sharedData:{}},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({sharedData:B}),this.setState({resumeData:D})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{sharedData:this.state.sharedData.basic_info}),i.a.createElement(g,{sharedProfile:this.state.sharedData.basic_info,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(C,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(A,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(y,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(v,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(52);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",l.a.render(i.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dev-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/dev-portfolio","/service-worker.js");z?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(a,e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.7a8b94a0.chunk.js.map