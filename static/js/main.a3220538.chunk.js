(this["webpackJsonpreact-red"]=this["webpackJsonpreact-red"]||[]).push([[0],{143:function(e,t,n){},222:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(31),i=n.n(s),o=(n(143),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))}),j=n(8),l=n(119),u=n(42),d=n.n(u),b=n(60),p=n(27),h=n(83),m=h.create({withCredentials:!0,baseURL:"https://jsonplaceholder.typicode.com/",headers:{}}),g=function(e){return m.post("posts",{packedData:e},{headers:{"Content-type":"application/json; charset=UTF-8"}})},O=function(e,t){return h.get("https://www.anapioficeandfire.com/api/characters?page=".concat(e,"&pageSize=").concat(t))},x="COMMENT/SET_COMMENT",f={Comment:{},isFetching:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(p.a)(Object(p.a)({},e),{},{Comment:t.comment});default:return e}},v="USERS/TOGGLE_IS_FETCHING",C="USERS/SET_USERS",N="USERS/SET_CURRNET_PAGE",P={characters:[],pageSize:10,totalItemsCount:2136,currentPage:27,isFetching:!1},S=function(e){return{type:C,characters:e}},y=function(e){return{type:N,page:e}},T=function(e){return{type:v,isFetching:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case C:return Object(p.a)(Object(p.a)({},e),{},{characters:t.characters});case N:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.page});default:return e}},E=n(291),w=Object(j.c)({form:E.a,comments:_,GT:F}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,k=Object(j.e)(w,G(Object(j.a)(l.a)));window.__store__=k;var z=k,I=(n(222),n(25)),M=n(290),R=n(288),U=n(283),D=Object(R.a)({form:"Comment"})((function(e){Object(U.a)((function(e){return{button:{margin:e.spacing(1)}}}))();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:"comForm",onSubmit:e.handleSubmit,children:[Object(a.jsx)(M.a,{component:"input",type:"text",className:"inputCome",name:"title",placeholder:"title"}),Object(a.jsx)(M.a,{component:"input",type:"text",className:"inputCome",name:"userId",placeholder:"name"}),Object(a.jsx)(M.a,{component:"textarea",type:"text",className:"inputCome",name:"body",placeholder:"letter"}),Object(a.jsx)("button",{className:"inputCome",children:" send"}),Object(a.jsx)("div",{children:0===Object.entries(e.resp).length?"":Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("b",{children:"Sent data :"})}),Object(a.jsxs)("div",{children:[" title: ",e.resp.title]}),Object(a.jsxs)("div",{children:[" name: ",e.resp.userId]}),Object(a.jsxs)("div",{children:[" letter : ",e.resp.body]})]})})]})})})),L=Object(j.d)(Object(I.b)((function(e){return{resp:e.comments.Comment}}),{sendComments:function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:a=t.sent,n((c=a.data.packedData,{type:x,comment:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return Object(c.useEffect)((function(){}),[e.resp]),Object(a.jsx)("div",{children:Object(a.jsx)(D,{resp:e.resp,onSubmit:function(t){e.sendComments(t)}})})})),Y=n(40),A=n(125),B=n(126),J=n(130),V=n(128),W=n.p+"static/media/45.6cf37826.svg";var X=function(e){return Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("img",{src:W,alt:""})})},q=n(285),Q=n(289),Z=n(35),H=n.n(Z),K=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:H.a.GTContainer,children:e.characters.map((function(e){return Object(a.jsx)("div",{className:H.a.container,children:Object(a.jsxs)("div",{className:H.a.card,children:[Object(a.jsx)("div",{className:H.a.border}),Object(a.jsx)("div",{className:H.a.avatar,children:Object(a.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/199526/jonsnow.jpg",alt:""})}),Object(a.jsxs)("div",{className:H.a.stats,children:[Object(a.jsxs)("h2",{children:[" ",e.name?e.name:e.aliases[0]]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"gender:"}),e.gender]}),Object(a.jsx)("p",{children:e.culture?Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"culture:"})," ",e.culture]}):null}),e.born?Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"born:"})," ",e.born]}):null,e.died?Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"died:"})," ",e.died]}):null,Object(a.jsx)(q.a,{href:e.url,variant:"body2",children:"More info"})]})]})]})},e.gender+e.culture+e.name+e.aliases[0])}))}),Object(a.jsx)(Q.a,{variant:"contained",color:"primary",onClick:function(){e.GetCharacters(e.currentPage+1,e.pageSize),console.log(e.characters)},children:"Next page"})]})},$=n(61),ee=n(129),te=n(29),ne=n.n(te),ae=n(127),ce=n.n(ae),re=function(e,t){for(var n=e.totalItemsCount,r=e.pageSize,s=e.currentPage,i=e.onPageChanged,o=e.portionSize,j=void 0===o?5:o,l=e.buttonPage,u=void 0===l?1:l,d=Math.ceil(n/r),b=[],p=1;p<=d;p++)b.push(p);var h=Math.ceil(d/j),m=Object(c.useState)(u||1),g=Object(ee.a)(m,2),O=g[0],x=g[1],f=(O-1)*j+1,_=O*j;return Object(a.jsx)("div",{className:ne.a.inner,children:Object(a.jsxs)("div",{className:ne.a.pagin,children:[Object(a.jsx)("div",{className:ne.a.btn,children:O>1&&Object(a.jsx)("button",{className:ne.a.btn__prev,onClick:function(){x(O-1)},children:"PREV"})}),b.filter((function(e){return e>=f&&e<=_})).map((function(e){return Object(a.jsx)("span",{onClick:function(){i(e)},className:ce()(Object($.a)({},ne.a.selectedPage,s===e),ne.a.pageNumber),children:e},e)})),Object(a.jsx)("div",{className:ne.a.btn,children:h>O&&Object(a.jsx)("button",{className:ne.a.btn__next,onClick:function(){x(O+1)},children:"NEXT"})})]})})},se=function(e){Object(J.a)(n,e);var t=Object(V.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){0===this.props.characters.length&&this.props.GetCharacters(this.props.currentPage,this.props.pageSize)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:this.props.isFetching?"noPg":"isPg",children:Object(a.jsx)(re,{currentPage:this.props.currentPage,onPageChanged:this.props.GetCharacters,totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,buttonPage:6})}),this.props.isFetching?Object(a.jsx)(X,{}):Object(a.jsx)(K,{characters:this.props.characters,currentPage:this.props.currentPage,pageSize:this.props.pageSize,GetCharacters:this.props.GetCharacters,isFetching:this.props.isFetching})]})}}]),n}(r.a.PureComponent),ie=Object(j.d)(Object(I.b)((function(e){return{characters:e.GT.characters,currentPage:e.GT.currentPage,isFetching:e.GT.isFetching,pageSize:e.GT.pageSize,totalItemsCount:e.GT.totalItemsCount}}),{GetCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return function(){var n=Object(b.a)(d.a.mark((function n(a){var c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(T(!0)),n.next=3,O(e,t);case 3:c=n.sent,a(S(c.data)),a(T(!1)),a(y(e));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:y}))(se),oe=n(9),je=n.p+"static/media/logo.103b5fa1.svg",le=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("img",{src:je,className:"App-logo",alt:"logo"}),Object(a.jsxs)("div",{className:"header__container",children:[Object(a.jsx)(Y.b,{className:"btn btn-info",to:"/Comment",activeClassName:"ln_active",children:"form"}),Object(a.jsx)(Y.b,{className:"btn btn-info",to:"/Characters",activeClassName:"ln_active",children:"Game Of Thrones"})]})]})},ue=n(286),de=n(265),be=n(287);function pe(){return Object(a.jsxs)(de.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(a.jsx)(q.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var he=Object(U.a)((function(e){return{root:{display:"flex",flexDirection:"column"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function me(){var e=he();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(ue.a,{}),Object(a.jsx)("footer",{className:e.footer,children:Object(a.jsxs)(be.a,{maxWidth:"sm",children:[Object(a.jsx)(de.a,{variant:"body1",children:"My sticky footer can be found here."}),Object(a.jsx)(pe,{})]})})]})}function ge(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)(le,{})}),Object(a.jsx)("div",{className:"app__main",children:Object(a.jsxs)(oe.d,{children:[Object(a.jsx)(oe.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(oe.a,{to:"/Characters"})}}),Object(a.jsx)(oe.b,{path:"/Comment",render:function(){return Object(a.jsx)(L,{})}}),Object(a.jsx)(oe.b,{path:"/Characters",render:function(){return Object(a.jsx)(ie,{})}})]})}),Object(a.jsx)("footer",{children:Object(a.jsx)(me,{})})]})}var Oe=function(e){return Object(a.jsx)(Y.a,{children:Object(a.jsx)(I.a,{store:z,children:Object(a.jsx)(ge,{})})})};z.getState(),i.a.render(Object(a.jsx)(Oe,{}),document.getElementById("root")),o()},29:function(e,t,n){e.exports={selected_page:"Paginator_selected_page__27pnF",selected_pages:"Paginator_selected_pages__2KgpP",inner:"Paginator_inner__2e8Cy",pagin:"Paginator_pagin__3UazR",paginator:"Paginator_paginator__3Ab8O",pageNumber:"Paginator_pageNumber__2wLZi",selectedPage:"Paginator_selectedPage__3FYbv",btn__prev:"Paginator_btn__prev__Zefjq",btn__next:"Paginator_btn__next__22QQq",btn:"Paginator_btn__Wor6G"}},35:function(e,t,n){e.exports={container:"users_container__1F_9M",card:"users_card__3-44Y",avatar:"users_avatar__e_abV",stats:"users_stats__3YlpJ",GTContainer:"users_GTContainer__3UFRT"}}},[[264,1,2]]]);
//# sourceMappingURL=main.a3220538.chunk.js.map