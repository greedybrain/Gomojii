(this["webpackJsonpgomojii-client"]=this["webpackJsonpgomojii-client"]||[]).push([[0],{45:function(e,a,t){e.exports=t(79)},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),s=t.n(l),i=t(37),c=t(38),o=t(44),m=t(42),u=t(2),d=t(5),E=t(6),p=t.n(E),g=t(12),j={baseEndpoint:"https://emoji-api.com/emojis?",categoriesUrl:"https://emoji-api.com/categories?"},v={baseUrl:"https://gomojii.herokuapp.com/",loggedIn:"logged_in",sessions:"sessions",registrations:"registrations",logout:"logout",users_path:"users",emojis_path:"emojis"},f={accessKey:"access_key=d03843fe82d5fde7ef6ac67d80fa41b12aae4321"},b={innyMinnyMineyMo:function(e){return e[Math.floor(Math.random()*e.length)]}},h=t(13),N=t.n(h),O=t(43),y=t(1),S={emojis:[],emojisCategories:[],emojisFilteredState:[],emojiSearchResults:[],currentUsersSavedEmojis:[],emojisLoading:!1,categoriesLoading:!1,responseMessage:""};var _="START_LOAD_EMOJIS_REQUEST",w="ADD_EMOJIS",D="USER_SAVES_EMOJI",C="ADD_EMOJI_SAVE_RESPONSE_MESSAGE",R="ADD_USERS_SAVED_EMOJIS",k="START_LOAD_CATEGORIES_REQUEST",I="ADD_CATEGORIES",M="QUERY_EMOJIS",L="FILTER_EMOJIS",U="CLEAR_EMOJIS_ON_LOGOUT",G=function(e){return{type:w,payload:{emojis:e}}},A=function(e){return{type:C,payload:{responseMessage:e}}},F=function(e){return{type:R,payload:{currentUsersSavedEmojis:e}}},T=function(e,a){return{type:L,payload:{emojisFilteredState:a.filter((function(a){return a.group===e}))}}},x=function(e){return void 0!==e.user},J=function(e){var a=e.user.data,t=a.id,n=a.attributes,r=n.email,l=n.username,s=n.emojis;return{id:t,email:r,username:l=l.slice(0,1).toUpperCase()+l.slice(1),emojis:s}},P=j,q=P.baseEndpoint,W=P.categoriesUrl,X=v,Y=X.baseUrl,H=X.users_path,V=X.emojis_path,B=f.accessKey,Q=J,K={userData:{},loggedInStatus:"NOT_LOGGED_IN"};var z="PROCEED_IF_LOGGED_IN",$="SIGNUP_USER",Z="LOGIN_USER",ee="LOGOUT_USER",ae=function(e,a){return{type:z,payload:{userData:e,loggedInStatus:a}}},te=v,ne=te.baseUrl,re=te.loggedIn,le=te.registrations,se=te.sessions,ie=te.logout,ce=J,oe=t(16),me=t(17),ue=t(4),de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"logo-name"},r.a.createElement("a",{href:"/emojis"},"G",r.a.createElement("span",{role:"img","aria-label":"funny face tongue out emoji",className:"logo-emoji-letter"},"\ud83e\udd2a"),"m",r.a.createElement("span",{role:"img","aria-label":"robot emoji",className:"logo-emoji-letter"},"\ud83e\udd16"),"jii")))},Ee=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(me.a)(a,2),l=t[0],s=t[1],i=Object(u.d)((function(e){return{userData:e.authRed.userData}})),c=Object(u.c)(),o=i.userData,m=x,d=function(e){s(Object(y.a)(Object(y.a)({},l),{},Object(oe.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"login-form",onSubmit:function(a){return a.preventDefault(),c(function(e){return function(){var a=Object(g.a)(p.a.mark((function a(t){var n,r,l,s;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=ne+se,a.next=3,N.a.post(n,e,{withCredentials:!0});case 3:r=a.sent,"created"===(l=r.data).status?(s=l.user.data.attributes.emojis,t({type:Z,payload:{userData:l}}),t(F(s))):alert(l.message);case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(l)),s({email:"",password:""}),m(o)?e.history.replace("/"):e.history.push("/login")}},r.a.createElement("div",{className:"logo-on-form"},r.a.createElement(de,null)),r.a.createElement("div",{className:"login-email login-field"},r.a.createElement("input",{type:"email",name:"email",value:l.email,onChange:d,placeholder:"Email",required:!0})),r.a.createElement("div",{className:"login-password login-field"},r.a.createElement("input",{type:"password",name:"password",value:l.password,onChange:d,placeholder:"Password",required:!0})),r.a.createElement("div",{className:"login-btn-cont"},r.a.createElement("button",{className:"login-btn",type:"submit"},"Login")),r.a.createElement("p",{className:"not-user-yet"},"Don''t have an account? ",r.a.createElement(ue.b,{to:"/signup"},"Signup")),r.a.createElement("div",{className:"form-footer"},r.a.createElement("span",{role:"img","aria-label":"copyright emoji"},"\xa9\ufe0f")," 2020 Gomojii | ",r.a.createElement(ue.b,{to:"/emojis"},"Home")))},pe=function(e){var a=Object(n.useState)({email:"",username:"",password:""}),t=Object(me.a)(a,2),l=t[0],s=t[1],i=Object(u.d)((function(e){return e.authRed.userData})),c=Object(u.c)(),o=x,m=function(e){s(Object(y.a)(Object(y.a)({},l),{},Object(oe.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"signup-form",onSubmit:function(a){return a.preventDefault(),c(function(e){return function(){var a=Object(g.a)(p.a.mark((function a(t){var n,r,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=ne+le,a.next=3,N.a.post(n,e,{withCredentials:!0});case 3:r=a.sent,l=r.data,t({type:$,payload:{userData:l}});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(l)),o(i)?e.history.replace("/"):e.history.push("/signup")}},r.a.createElement("div",{className:"logo-on-form"},r.a.createElement(de,null)),r.a.createElement("div",{className:"signup-email signup-field"},r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:l.email,onChange:m,required:!0})),r.a.createElement("div",{className:"signup-username signup-field"},r.a.createElement("input",{type:"username",name:"username",placeholder:"Username",value:l.username,onChange:m,required:!0})),r.a.createElement("div",{className:"signup-password signup-field"},r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:l.password,onChange:m,required:!0})),r.a.createElement("div",{className:"signup-btn-cont"},r.a.createElement("button",{className:"signup-btn",type:"submit"},"Signup")),r.a.createElement("p",{className:"already-user"},"Already a user? ",r.a.createElement(ue.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"form-footer"},r.a.createElement("span",{role:"img","aria-label":"copyright emoji"},"\xa9\ufe0f")," 2020 Gomojii | ",r.a.createElement(ue.b,{to:"/emojis"},"Home")))},ge=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"NOT FOUND MY FRIEND"))},je=function(){var e=Object(u.c)();return r.a.createElement("a",{href:"/login",onClick:function(){e(function(){var e=Object(g.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ne+ie,e.next=3,N.a.delete(t,{withCredentials:!0});case 3:a({type:U}),a({type:ee});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}},"Logout")},ve=function(){var e=Object(u.d)((function(e){return{userData:e.authRed.userData,currentUsersSavedEmojis:e.emojisRed.currentUsersSavedEmojis}})),a=J,t=e.userData,n=e.currentUsersSavedEmojis;return r.a.createElement("header",{className:"header-logged-in"},r.a.createElement("div",{className:"logo-area-header"},r.a.createElement(de,null)),r.a.createElement("ul",{className:"nav-btns"},r.a.createElement("li",{className:"home-link"},r.a.createElement(ue.c,{activeClassName:"active",to:"/emojis"},r.a.createElement("span",{className:"home-btn nav-icon",role:"img","aria-label":"home emojis"},"\ud83c\udfe0")," Home")),r.a.createElement("li",{className:"dashboard"},r.a.createElement(ue.c,{activeClassName:"active",to:"/"},r.a.createElement("span",{className:"controller-btn nav-icon",role:"img","aria-label":"controller emoji"},"\ud83c\udfae")," Dashboard")),r.a.createElement("li",{className:"favmojis nav-link"},r.a.createElement(ue.b,{to:"#"},r.a.createElement("div",{className:"loading-indicator-in-header"},r.a.createElement("span",{className:"heart-moji",role:"img","aria-label":"heart emoji"},"\u2764\ufe0f"),r.a.createElement("span",{className:"save-count"},n.length)))),r.a.createElement("li",{className:"username nav-link"},r.a.createElement("i",{className:"fas fa-user user-icon"}),a(t).username),r.a.createElement("li",{className:"logout-btn nav-link"},r.a.createElement("span",{role:"img","aria-label":"peace sign emoji"},"\u270c"),r.a.createElement(je,null))))},fe=function(){return r.a.createElement("header",{className:"header-logged-out"},r.a.createElement("div",{className:"logo-area-header"},r.a.createElement(de,null)),r.a.createElement("ul",{className:"nav-btns"},r.a.createElement("li",{className:"home-link"},r.a.createElement(ue.c,{activeClassName:"active",to:"/emojis"},r.a.createElement("span",{className:"home-btn nav-icon",role:"img","aria-label":"home emojis"},"\ud83c\udfe0")," Home")),r.a.createElement("li",{className:"login-btn nav-link"},r.a.createElement(ue.c,{activeClassName:"active",to:"/login"},r.a.createElement("span",{role:"img","aria-label":"woman on computer emoji",className:"nav-icon"},"\ud83d\udc69\u200d\ud83d\udcbb")," Login")),r.a.createElement("li",{className:"signup-btn nav-link"},r.a.createElement(ue.c,{activeClassName:"active",to:"/signup"},r.a.createElement("span",{role:"img","aria-label":"woman raising hand",className:"nav-icon"},"\ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f")," Signup"))))},be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{role:"img","aria-label":"copyright emoji"},"\xa9\ufe0f")," 2020 GoMojii")},he=function(){var e=Object(u.d)((function(e){return e.authRed.userData})),a=J,t=x;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"dash-welcome"},r.a.createElement("span",{role:"img","aria-label":"wave emoji"},"\ud83d\udc4b\ud83c\udffd")," ",t(e)?a(e).username:null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"dash-sidenav-icon"},r.a.createElement("span",{role:"img","aria-label":"glance emoji"},"\ud83e\uddd0")),r.a.createElement("div",null,r.a.createElement(ue.c,{to:"#",activeClassName:"dash-sidebar-item-active"},"At A Glance"))),r.a.createElement("li",null,r.a.createElement("div",{className:"dash-sidenav-icon"},r.a.createElement("span",{role:"img","aria-label":"info emoji"},"\u2139\ufe0f")),r.a.createElement("div",null,r.a.createElement(ue.c,{to:"#",activeClassName:"dash-sidebar-item-active"},"About"))),r.a.createElement("li",null,r.a.createElement("div",{className:"dash-sidenav-icon"},r.a.createElement("span",{role:"img","aria-label":"email emoji"},"\ud83d\udce9")),r.a.createElement("div",null,r.a.createElement(ue.c,{to:"#",activeClassName:"dash-sidebar-item-active"},"Contact"))),r.a.createElement("li",null,r.a.createElement("div",{className:"dash-sidenav-icon"},r.a.createElement("span",{role:"img","aria-label":"gear emoji"},"\u2699\ufe0f")),r.a.createElement("div",null,r.a.createElement(ue.c,{to:"#",activeClassName:"dash-sidebar-item-active"},"Settings")))),r.a.createElement("div",{className:"dash-sidebar-footer"},r.a.createElement(be,null)))},Ne=function(){return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"widget-search-cont"},r.a.createElement("input",{type:"search",placeholder:"Search widgets"}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":"magnifying glass emoji"},"\ud83d\udd0d"))))},Oe=[{icon:"\ud83d\udd0d",name:"Emoji Search",path:"/emojis"},{icon:"\ud83c\udf24\ufe0f",name:"Emoji Weather",path:"#"}],ye=function(e){var a=e.widget;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay"}),r.a.createElement(ue.b,{to:a.path},r.a.createElement("li",{className:"widget-cont"},r.a.createElement("div",{className:"widget-icon"},r.a.createElement("span",null,a.icon)),r.a.createElement("div",{className:"widget-name"},r.a.createElement("span",null,a.name)))))},Se=function(){var e=Oe.map((function(e,a){return r.a.createElement(ye,{key:a,widget:e})}));return r.a.createElement("ul",null,e,r.a.createElement("li",{className:"coming-soon"},"More coming soon..."))},_e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Widgets"),r.a.createElement("div",{className:"widget-search-form"},r.a.createElement(Ne,null)),r.a.createElement("div",{className:"widgets"},r.a.createElement(Se,null)))},we=function(){var e=Object(u.d)((function(e){return e.emojisRed.currentUsersSavedEmojis})),a=e.length>0&&e.map((function(e,a){return r.a.createElement("li",{key:a},e.character)}));return r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"dash-sidebar-nav"},r.a.createElement(he,null)),r.a.createElement("div",{className:"dash-mid-section"},r.a.createElement("h3",null,"At a Glance"),r.a.createElement("ul",null,a)),r.a.createElement("div",{className:"widget-section"},r.a.createElement(_e,null)))},De=function(){var e=Object(n.useState)(""),a=Object(me.a)(e,2),t=a[0],l=a[1],s=Object(u.d)((function(e){return e.emojisRed.emojis})),i=Object(u.c)();return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"search-cont"},r.a.createElement("input",{onChange:function(e){l(e.target.value),setTimeout((function(){return i(function(e,a){return{type:M,payload:{emojiSearchResults:a.filter((function(a){return a.unicodeName.startsWith(e)||a.unicodeName.includes(e)}))}}}(t,s))}),500)},type:"search",placeholder:"\u270d  Describe emoji in a few words"}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":"magnifying glass emoji"},"\ud83d\udd0d"))))},Ce=t(40),Re=function(e){var a=e.emoji,t=Object(u.c)(),l=Object(n.useRef)(null);return r.a.createElement("li",{onMouseEnter:function(e){e.nativeEvent.offsetX,e.nativeEvent.offsetY;l.current.firstElementChild.style.display="grid",l.current.style.zIndex="1000",console.log("X - ".concat(e.nativeEvent.offsetX)),console.log("Y - ".concat(e.nativeEvent.offsetY)),console.log("=============================")},onMouseLeave:function(){l.current.firstElementChild.style.display="none"},ref:l,className:"emoji animate__animated animate__fadeIn animate__fast",title:a.unicodeName||a.slug},a.character,r.a.createElement("div",{className:"emoji-overlay"},r.a.createElement("div",{className:"modal-heading"},a.unicodeName||a.slug),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"emoji-char"},r.a.createElement("span",{role:"img","aria-label":a.unicodeName||a.slug},a.character)),r.a.createElement("div",{className:"save-copy-btns"},r.a.createElement("div",{className:"save"},r.a.createElement("button",{onClick:function(){return t((e=a.slug,n=a.character,function(){var a=Object(g.a)(p.a.mark((function a(t,r){var l,s;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=r().authRed.userData,a.next=3,N.a.post("".concat(Y).concat(H,"/").concat(Q(l).id).concat(V),{slug:e,character:n},{withCredentials:!0});case 3:(s=a.sent).data.emoji?(t((i=s.data.emoji,{type:D,payload:{emoji:i}})),t(A(s.data.success))):t(A(s.data.error));case 5:case"end":return a.stop()}var i}),a)})));return function(e,t){return a.apply(this,arguments)}}()));var e,n}},r.a.createElement("span",{role:"img","aria-label":"floppy disk emoji"},"\ud83d\udcbe")," Save")),r.a.createElement("div",{className:"copy"},r.a.createElement(Ce.CopyToClipboard,{text:a.character},r.a.createElement("button",{onClick:function(){alert("Copied!")}},r.a.createElement("span",{role:"img","aria-label":"clipboard emoji"},"\ud83d\udccb")," Copy")))))))},ke=function(){var e=Object(u.d)((function(e){return{emojis:e.emojisRed.emojis,emojiSearchResults:e.emojisRed.emojiSearchResults,emojisFilteredState:e.emojisRed.emojisFilteredState,emojisLoading:e.emojisRed.emojisLoading,categoriesLoading:e.emojisRed.loading}})),a=e.emojis,t=e.emojiSearchResults,n=e.emojisFilteredState,l=e.emojisLoading,s=b.innyMinnyMineyMo,i=[];(function(){var e=null!==t&&void 0!==t&&t.length>0,r=null!==n&&void 0!==n&&n.length>0;if(e)a=t||[];else{if(!r)return a;a=n||[]}return a})().forEach((function(e){Object.keys(e).includes("variants")?e.variants.forEach((function(e){i.push(e)})):i.push(e)}));var c=i.map((function(e,a){return r.a.createElement(Re,{key:a,emoji:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"directions-and-results"},r.a.createElement("div",{className:"directions"},"Click to bookmark ",r.a.createElement("span",{role:"img","aria-label":"bookmark emoji"},"\ud83d\udd16"),r.a.createElement("span",{role:"img","aria-label":"winking emoji"}," emoji \ud83d\ude09")),r.a.createElement("div",{className:"results"},null===i?0:i.length," emojis found")),l?r.a.createElement("div",{className:"load-wrapper"},r.a.createElement("div",{className:"loading-indicator animate__animated animate__bounce animate__repeat-3"},r.a.createElement("div",{className:"load-heading"},"Summoning Emojis..."),r.a.createElement("span",{role:"img","aria-label":"heart emoji"},s(["\ud83d\udc7f","\ud83e\udd20","\ud83e\udd2a","\ud83e\udd21","\ud83e\udd16","\ud83d\udca9","\ud83d\udc7b","\ud83e\udd29","\ud83e\udd76"])))):null,r.a.createElement("ul",null,c))},Ie=function(){var e=Object(u.d)((function(e){return{emojis:e.emojisRed.emojis,emojisCategories:e.emojisRed.emojisCategories}})),a=Object(u.c)(),t=["\ud83d\ude03","\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd","\ud83d\udc36","\ud83c\udf5f","\ud83c\udfd4\ufe0f","\ud83c\udfb3","\u231a","\u267f","\ud83c\udfc1"],n=["Smileys","People & Body","Animal & Nature","Food & Drink","Travel","Activities","Items","Symbols","Flags"],l=e.emojis,s=e.emojisCategories,i=function(e){var t=e.target.dataset.name;a(T(t,l))},c=s.map((function(e,a){return r.a.createElement("li",{onClick:i,key:a,"data-name":e.slug},r.a.createElement("div",{className:"acc-emoji","data-name":e.slug},t[a]),r.a.createElement("div",{className:"category","data-name":e.slug},n[a]))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"magnifying-glass emoji"},"\ud83d\udd0e")," Emojis ",r.a.createElement("span",{role:"img","aria-label":"looking emoji"},"\ud83d\udc40")),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(e){"All Emojis"===e.target.textContent&&a(T(e.target.textContent,l))},"data-name":"all-emojis"},r.a.createElement("div",{className:"acc-emoji","data-name":"all-emojis"},r.a.createElement("span",{role:"img","aria-label":"present emoji"},"\ud83d\udc81\ud83c\udffd")),r.a.createElement("div",{className:"category","data-name":"all-emojis"},"All Emojis")),c),r.a.createElement("div",{className:"side-footer"},r.a.createElement(be,null)))},Me=function(){var e=Object(u.d)((function(e){return{responseMessage:e.emojisRed.responseMessage}}));return r.a.createElement("div",{className:"emoji-save-response"},r.a.createElement("h1",null,e.responseMessage))},Le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"sidebar-nav"},r.a.createElement(Ie,null)),r.a.createElement("div",{className:"form-and-list-cont"},r.a.createElement("div",{className:"form"},r.a.createElement(De,null)),r.a.createElement("div",{className:"emoji-list"},r.a.createElement(ke,null)))))},Ue=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.loadEmojis,t=e.loadCategories,n=e.loggedInStatus;(0,e.validateSession)(n),a(),t()}},{key:"render",value:function(){var e=this.props.userData,a=x;return r.a.createElement("div",{className:"App"},a(e)?r.a.createElement(ve,null):r.a.createElement(fe,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/login",render:function(t){return a(e)?r.a.createElement(d.a,{to:"/"}):r.a.createElement(Ee,t)}}),r.a.createElement(d.b,{path:"/signup",render:function(t){return a(e)?r.a.createElement(d.a,{to:"/"}):r.a.createElement(pe,t)}}),r.a.createElement(d.b,{path:"/emojis",render:function(e){return r.a.createElement(Le,e)}}),r.a.createElement(d.b,{path:"/not_found",component:ge}),r.a.createElement(d.b,{exact:!0,path:"/",render:function(t){return a(e)?r.a.createElement(we,t):r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.a,{to:"/not_found"})))}}]),t}(n.Component),Ge=Object(u.b)((function(e){return{loggedInStatus:e.authRed.loggedInStatus,userData:e.authRed.userData,loading:e.emojisRed.loading}}),(function(e){return{loadEmojis:function(){return e(function(){var e=Object(g.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:_}),e.next=3,N()({url:q+B});case 3:t=e.sent,n=t.data,a(G(n));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},loadCategories:function(){return e(function(){var e=Object(g.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:k}),e.next=3,N()({url:W+B});case 3:t=e.sent,n=t.data,a({type:I,payload:{emojisCategories:n.filter((function(e){return"component"!==e.slug}))}});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},validateSession:function(a){return e((t=a,function(){var e=Object(g.a)(p.a.mark((function e(a){var n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ne+re,e.next=3,N.a.get(n,{withCredentials:!0});case 3:r=e.sent,(l=r.data).logged_in&&"NOT_LOGGED_IN"===t?(a(ae(l,t="LOGGED_IN")),a(F(ce(l).emojis))):l.logged_in||"LOGGED_IN"!==t||(t="NOT_LOGGED_IN");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));var t}}}))(Ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=t(41),Fe=t(14),Te=Object(Fe.c)({emojisRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case _:return Object(y.a)(Object(y.a)({},e),{},{emojisLoading:!0});case w:return Object(y.a)(Object(y.a)({},e),{},{emojis:a.payload.emojis,emojisLoading:!1});case k:return Object(y.a)(Object(y.a)({},e),{},{categoriesLoading:!0});case I:return Object(y.a)(Object(y.a)({},e),{},{emojisCategories:a.payload.emojisCategories,categoriesLoading:!1});case M:return Object(y.a)(Object(y.a)({},e),{},{emojiSearchResults:a.payload.emojiSearchResults,emojisFilteredState:[]});case L:return Object(y.a)(Object(y.a)({},e),{},{emojisFilteredState:a.payload.emojisFilteredState,emojiSearchResults:[]});case D:return Object(y.a)(Object(y.a)({},e),{},{responseMessage:"",currentUsersSavedEmojis:[].concat(Object(O.a)(e.currentUsersSavedEmojis),[a.payload.emoji])});case C:return Object(y.a)(Object(y.a)({},e),{},{responseMessage:a.payload.responseMessage});case R:return Object(y.a)(Object(y.a)({},e),{},{currentUsersSavedEmojis:a.payload.currentUsersSavedEmojis});case U:return Object(y.a)(Object(y.a)({},e),{},{currentUsersSavedEmojis:[]});default:return e}},authRed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case z:case $:case Z:return Object(y.a)(Object(y.a)({},e),{},{userData:a.payload.userData,loggedInStatus:"LOGGED_IN"});case ee:return Object(y.a)(Object(y.a)({},e),{},{userData:{},loggedInStatus:"NOT_LOGGED_IN"});default:return e}}}),xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Fe.d,Je=Object(Fe.e)(Te,xe(Object(Fe.a)(Ae.a)));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:Je},r.a.createElement(ue.a,{basename:"/"},r.a.createElement(Ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.34bcf16b.chunk.js.map