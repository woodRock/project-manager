(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"264b":function(t,e,i){},"400b":function(t,e,i){"use strict";var a=i("ab90"),n=i.n(a);n.a},"47d5":function(t,e,i){"use strict";var a=i("a6b7"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav-bar"),i("div",{staticClass:"container"},[i("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("div",{staticClass:"nav-wrapper purple"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Portfolio-dev")])],1),i("li",[i("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),i("li",[i("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),i("li",{staticClass:"secondary-content"},[i("a",{on:{click:t.login}},[i("i",{staticClass:"material-icons"},[t._v("person")])])])])])])},s=[],l=(i("ea7b"),i("8aa5")),c=i.n(l),u=(i("e71f"),{apiKey:"AIzaSyA6w14wLmGD4M3zYhUsWc_IZMsAO6Cs7Ng",authDomain:"portfolio-7b51b.firebaseapp.com",databaseURL:"https://portfolio-7b51b.firebaseio.com",projectId:"portfolio-7b51b",storageBucket:"portfolio-7b51b.appspot.com",messagingSenderId:"888392851400",appId:"1:888392851400:web:c91412c8602e7f2e6f2afd",measurementId:"G-N4G5H32S57"}),d=c.a.initializeApp(u),p=d,m={login:function(){var t=new c.a.auth.GoogleAuthProvider;c.a.auth().signInWithPopup(t).then((function(t){console.log(t)})).catch((function(t){var e=t.code,i=t.message,a=t.email,n=t.credential;console.log(e,i,a,n)}))},logout:function(){p.auth().signOut().then((function(){})).catch((function(t){console.log(t)}))}},v={name:"nav-bar",props:{type:String},methods:{login:function(){m.login()}}},f=v,g=i("2877"),b=Object(g["a"])(f,r,s,!1,null,null,null),h=b.exports,_={name:"App",components:{NavBar:h}},w=_,C=Object(g["a"])(w,n,o,!1,null,null,null),j=C.exports,k=i("f9bc"),y=i("5f5b"),x=i("b1e0"),P=(i("f9e3"),i("2dd8"),i("8c4f")),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dashboard"}},[i("ul",{staticClass:"collection with-header"},[t._m(0),t._l(t.projects,(function(e){return i("li",{key:e.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[t._v(" "+t._s(e.title)+" ")]),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-project",params:{project_id:e.id}}}},[i("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])])],1)}))],2),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"projects/new"}},[i("i",{staticClass:"material-icons"},[t._v("add")])])],1)])},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"collection-header"},[i("h4",[t._v("Projects")])])}],N=(i("a4d3"),i("e01a"),i("4160"),i("159b"),p.firestore()),E={name:"project",data:function(){return{projects:[]}},created:function(){var t=this;N.collection("projects").orderBy("time").get().then((function(e){e.forEach((function(e){var i={id:e.id,project_id:e.id,title:e.data().title,description:e.data().description};t.projects.unshift(i)}))}))}},S=E,B=Object(g["a"])(S,O,$,!1,null,null,null),q=B.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"view-project"}},[i("h3",[t._v("View Project")]),i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[t._v(t._s(t.project.title))])]),i("li",{staticClass:"collection-item"},[i("img",{attrs:{src:t.project.image,alt:"project banner",height:"50",width:"50"}})]),i("li",{staticClass:"collection-item"},[t._v(t._s(t.project.description))]),i("li",{staticClass:"collection-item"},[i("a",{attrs:{href:t.project.link}}),t._v(t._s(t.project.link)+" ")]),i("li",{staticClass:"collection-item"},[t._v(t._s(t.project.time))])]),i("router-link",{staticClass:"btn grey",attrs:{to:"/projects"}},[t._v("Back")]),i("button",{staticClass:"btn red",on:{click:t.deleteProject}},[t._v("Delete")]),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-project",params:{project_id:t.project.id}}}},[i("i",{staticClass:"material-icons"},[t._v("edit")])])],1)],1)},T=[],J=(i("9911"),p.firestore()),A={name:"view-project",data:function(){return{project:null}},created:function(){var t=this;J.collection("projects").orderBy("title").get().then((function(e){e.forEach((function(e){var i={id:e.id,project_id:e.id,title:e.data().title,description:e.data().description,image:e.data().image,link:e.data().link,time:e.data().time};i.id===t.$route.params.project_id&&(t.project=i)}))}))},methods:{deleteProject:function(){confirm("Are you sure?")&&(J.collection("projects").doc(this.$route.params.project_id).delete(),this.$router.push("/"))}}},I=A,M=Object(g["a"])(I,D,T,!1,null,null,null),G=M.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"new-project"}},[i("div",{staticClass:"container"},[i("h3",[t._v("New Project")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveProject(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Title")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"project-description",attrs:{type:"textarea",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],attrs:{type:"text",required:""},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Image")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],attrs:{type:"text",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Link")])])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])])},L=[];function W(t){return JSON.parse(JSON.stringify(t))}var H=p.firestore(),R={name:"new-project",data:function(){return{title:null,description:null,image:null,link:null,time:new Date}},methods:{saveProject:function(){var t=this,e={title:this.title,description:this.description,image:this.image,link:this.link,time:this.time};H.collection("projects").add(W(e)).then((function(){return t.$router.push("/")})).catch((function(t){return console.log(t)}))}}},U=R,F=(i("a78a"),Object(g["a"])(U,z,L,!1,null,null,null)),K=F.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit-project"}},[i("div",{staticClass:"container"},[i("h3",[t._v("Edit Project")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateProject(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"project-description",attrs:{type:"textarea",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.image,expression:"image"}],attrs:{type:"text",required:""},domProps:{value:t.image},on:{input:function(e){e.target.composing||(t.image=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],attrs:{type:"text",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/projects"}},[t._v("Cancel")])],1)])])])},Y=[];function Z(t){return JSON.parse(JSON.stringify(t))}var Q=p.firestore(),X={name:"edit-project",data:function(){return{title:null,description:null,image:null,link:null,time:null}},created:function(){var t=this;Q.collection("projects").orderBy("title").get().then((function(e){e.forEach((function(e){var i=e.id;i===t.$route.params.project_id&&(t.project_id=e.id,t.title=e.data().title,t.description=e.data().description,t.image=e.data().image,t.link=e.data().link,t.time=e.data().time)}))}))},methods:{updateProject:function(){var t=this;Q.collection("projects").orderBy("title").get().then((function(e){e.forEach((function(e){var i=e.id,a={title:t.title,description:t.description,image:t.image,link:t.link,time:t.time};i===t.$route.params.project_id&&e.ref.update(Z(a)).then((function(){t.$router.push({name:"view-project",params:{project_id:i}})}))}))}))}}},tt=X,et=(i("400b"),Object(g["a"])(tt,V,Y,!1,null,null,null)),it=et.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"blog"}},[i("ul",{staticClass:"collection with-header"},[t._m(0),t._l(t.blogs,(function(e){return i("li",{key:e.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[t._v(" "+t._s(e.title)+" ")]),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-blog",params:{blog_id:e.id}}}},[i("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])])],1)}))],2),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/blog/new"}},[i("i",{staticClass:"material-icons"},[t._v("add")])])],1)])},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"collection-header"},[i("h4",[t._v("Blog")])])}],ot=p.firestore(),rt={name:"blog",data:function(){return{blogs:[]}},created:function(){var t=this;ot.collection("blog").orderBy("time").get().then((function(e){e.forEach((function(e){var i={id:e.id,title:e.data().title,markdown:e.data().markdown};t.blogs.unshift(i)}))}))}},st=rt,lt=Object(g["a"])(st,at,nt,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"view-blog"}},[i("h1",[t._v(t._s(t.blog.title))]),i("p",[t._v(t._s(t.blog.markdown))]),i("router-link",{staticClass:"btn grey",attrs:{to:"/blog"}},[t._v("Back")]),i("button",{staticClass:"btn red",on:{click:t.deleteBlog}},[t._v("Delete")]),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-blog",params:{blog_id:t.blog.id}}}},[i("i",{staticClass:"material-icons"},[t._v("edit")])])],1)],1)},dt=[],pt=p.firestore(),mt={name:"view-blog",data:function(){return{blog:null}},created:function(){var t=this;pt.collection("blog").orderBy("title").get().then((function(e){e.forEach((function(e){var i={id:e.id,title:e.data().title,markdown:e.data().markdown,time:e.data().time};i.id===t.$route.params.blog_id&&(t.blog=i)}))}))},methods:{deleteBlog:function(){confirm("Are you sure?")&&(pt.collection("blog").doc(this.$route.params.blog_id).delete(),this.$router.push("/blog"))}}},vt=mt,ft=Object(g["a"])(vt,ut,dt,!1,null,null,null),gt=ft.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"new-blog"}},[i("div",{staticClass:"container"},[i("h3",[t._v("New Blog")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveBlog(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Title")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],staticClass:"description blog-description",attrs:{placeholder:"Markdown here",required:""},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Description")])])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/blog"}},[t._v("Cancel")])],1)])])])},ht=[];function _t(t){return JSON.parse(JSON.stringify(t))}var wt=p.firestore(),Ct={name:"new-blog",data:function(){return{title:null,markdown:null,time:new Date}},methods:{saveBlog:function(){var t=this,e={title:this.title,markdown:this.markdown,time:this.time};wt.collection("blog").add(_t(e)).then((function(){return t.$router.push("/blog")})).catch((function(t){return console.log(t)}))}}},jt=Ct,kt=(i("a0cb"),Object(g["a"])(jt,bt,ht,!1,null,null,null)),yt=kt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"edit-blog"}},[i("div",{staticClass:"container"},[i("h3",[t._v("Edit blog")]),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateblog(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],staticClass:"blog-description",attrs:{type:"textarea",required:""},domProps:{value:t.markdown},on:{input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])]),i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),i("router-link",{staticClass:"btn grey",attrs:{to:"/blog"}},[t._v("Cancel")])],1)])])])},Pt=[];function Ot(t){return JSON.parse(JSON.stringify(t))}var $t=p.firestore(),Nt={name:"edit-blog",data:function(){return{title:null,markdown:null,time:null}},created:function(){var t=this;$t.collection("blog").orderBy("title").get().then((function(e){e.forEach((function(e){var i=e.id;i===t.$route.params.blog_id&&(t.blog_id=e.id,t.title=e.data().title,t.markdown=e.data().markdown,t.time=e.data().time)}))}))},methods:{updateblog:function(){var t=this;$t.collection("blog").orderBy("title").get().then((function(e){e.forEach((function(e){var i=e.id,a={title:t.title,markdown:t.markdown,time:t.time};i===t.$route.params.blog_id&&e.ref.update(Ot(a)).then((function(){t.$router.push({name:"view-blog",params:{blog_id:i}})}))}))}))}}},Et=Nt,St=(i("47d5"),Object(g["a"])(Et,xt,Pt,!1,null,null,null)),Bt=St.exports,qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("h1",[t._v("Portfolio Development Tool")]),i("p",[t._v(" This is a tool to edit and add projects and blogs to my portfolio website. "),i("br"),t._v(" We can find the website here: "),i("a",{attrs:{href:"https://woodrock.tk"}},[t._v("woodrock.tk")])]),i("p",[t._v(" The blogs and projects are dynamically loaded content. ")]),i("ul",[i("li",[t._v("They are stored on a Firebase database.")]),i("li",[t._v("The website uses Markdown as a format syntax.")]),i("li",[t._v("The website is written using React")])])])}],Tt={name:"Home"},Jt=Tt,At=Object(g["a"])(Jt,qt,Dt,!1,null,null,null),It=At.exports;a["default"].use(P["a"]);var Mt=new P["a"]({routes:[{path:"/",name:"home",component:It},{path:"/projects",name:"project",component:q},{path:"/project/view/:project_id",name:"view-project",component:G},{path:"/project/edit/:project_id",name:"edit-project",component:it},{path:"/projects/new",name:"new-project",component:K},{path:"/blog",name:"blog",component:ct},{path:"/blog/view/:blog_id",name:"view-blog",component:gt},{path:"/blog/new",name:"new-blog",component:yt},{path:"/blog/edit/:blog_id",name:"edit-blog",component:Bt}]});a["default"].use(P["a"]),a["default"].use(y["a"]),a["default"].use(x["a"]),a["default"].config.productionTip=!1,a["default"].use(k["a"]),new a["default"]({router:Mt,render:function(t){return t(j)}}).$mount("#app")},9054:function(t,e,i){},a0cb:function(t,e,i){"use strict";var a=i("9054"),n=i.n(a);n.a},a6b7:function(t,e,i){},a78a:function(t,e,i){"use strict";var a=i("264b"),n=i.n(a);n.a},ab90:function(t,e,i){}});
//# sourceMappingURL=app.7f8fc1f7.js.map