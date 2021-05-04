(this.webpackJsonpastronomuisapp=this.webpackJsonpastronomuisapp||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(22),s=a.n(n),r=a(4),i=a(2),l=a(10),o=a(7),j=a(8),d=a.n(j),b=a(11),u=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=DEMO_KEY",e.next=3,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=DEMO_KEY");case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,n=c.photos,s=n.map((function(e){return{id:e.id,camera:e.camera.full_name,img:e.img_src,rover:e.rover.name,date:e.earth_date,status:e.rover.status}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a(0),m=function(e){e.id;var t=e.camera,a=e.img,c=e.rover,n=e.date,s=e.status;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card-img-top",src:a,alt:t,style:{maxWidth:700}}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t}),Object(h.jsxs)("p",{className:"card-text",children:[" ",c," "]}),Object(h.jsxs)("p",{className:"card-text",children:[" ",s," "]}),Object(h.jsx)("p",{className:"card-text",children:Object(h.jsx)("small",{className:"text-muted",children:n})})]})]})},x=function(e){var t=e.history,a=function(){var e=Object(c.useState)({data:[],loading:!0}),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){u().then((function(e){n({data:e,loading:!1})}))}),[]),a}(),n=a.data,s=a.loading;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{id:"welcome",className:"grid",children:Object(h.jsxs)("div",{className:"welcome-text",children:[Object(h.jsxs)("h2",{children:["Web application ",Object(h.jsx)("br",{})," and Barichara Stone for all!"," "]}),Object(h.jsxs)("p",{className:"leading",children:["In this site you will can explore the universe with AstronomUIS, also you will find many interesting topics like ",Object(h.jsx)("b",{children:"Black Holes"}),","," ",Object(h.jsx)("b",{children:"Exoplanets"}),", ",Object(h.jsx)("b",{children:"Barichara Stone and more!"})," "]}),Object(h.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){t.replace("/")},children:"Return!"})]})}),s&&Object(h.jsx)("p",{className:"animate__animated animate__flash",children:" Loading... "}),Object(h.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:n.map((function(e){return Object(h.jsx)(m,Object(l.a)({},e),e.id)}))})]})},O=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c,n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://astronomuis.herokuapp.com/api/card/getCards/".concat(t),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,s=n.cards,r=s.map((function(e){return{id:e._id,bestViewed:e.bestViewed,brightestStar:e.brightestStar,cardImage:e.cardImage,clusterType:e.clusterType,constellationName:e.constellationName,largestConstellation:e.largestConstellation,neighboringConstellations:e.neighboringConstellations,zodiacConstellation:e.zodiacConstellation}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,a=e.brightestStar,c=e.cardImage,n=e.constellationName,s=e.zodiacConstellation;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{className:"card-img-top",src:c,alt:n}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:n}),Object(h.jsxs)("p",{className:"card-text",children:[" ",a," "]}),Object(h.jsx)("p",{className:"card-text",children:Object(h.jsx)("small",{className:"text-muted",children:s})}),Object(h.jsx)(r.b,{to:"/space/".concat(t),style:{color:"pink"},children:"More..."})]})]})},v=function(e){var t=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){O(e).then((function(e){s({data:e,loading:!1})}))}),[]),n}(e.element_type),a=t.data,n=t.loading;return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)("p",{className:"animate__animated animate__flash",children:" Loading... "}),Object(h.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:a.map((function(e){return Object(h.jsx)(p,Object(l.a)({},e),e.id)}))})]})},f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Constellation Screen!"}),Object(h.jsx)("hr",{}),Object(h.jsx)(v,{element_type:"Constellation"})]})},g=a(24),N=a.n(g),y=a(14),_=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,c,n,s,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=r.length>0&&void 0!==r[0]?r[0]:"")){e.next=3;break}return e.abrupt("return",[]);case 3:return a="https://astronomuis.herokuapp.com/api/card/getCardName/".concat(t),e.next=6,fetch(a);case 6:return c=e.sent,e.next=9,c.json();case 9:return n=e.sent,s=n.card,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=e.history,a=Object(i.g)(),n=N.a.parse(a.search).q,s=void 0===n?"":n,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],s=a[1];return[n,function(e){var t=e.target;s(Object(l.a)(Object(l.a)({},n),{},Object(y.a)({},t.name,t.value)))},function(){s(e)}]}({searchText:s}),j=Object(o.a)(r,2),d=j[0],b=j[1],u=d.searchText,m=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){_(e).then((function(e){s({data:e,loading:!1})}))}),[e]),n}(u).data;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Search Screen"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("h4",{children:"Search Form"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(u))},children:[Object(h.jsx)("input",{type:"text",placeholder:"Find your constellation",className:"form-control",name:"searchText",autoComplete:"off",value:u,onChange:b}),Object(h.jsxs)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary button",children:[" ","Search..."," "]})]})]}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h4",{children:"Results"}),Object(h.jsx)("hr",{}),""===s&&Object(h.jsx)("div",{className:"alert alert-info",children:"Search constellation!"}),""!==s&&0===m.length&&Object(h.jsxs)("div",{className:"alert alert-danger",children:["There isn't hero with the name '",s,"' :-("]}),m.map((function(e){return Object(h.jsx)(p,Object(l.a)({},e),e._id)}))]})]})]})},k=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://astronomuis.herokuapp.com/api/card/getCard/".concat(t),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,s=n.card,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.history,a=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){k(e).then((function(e){s({data:e,loading:!1})}))}),[]),n}(Object(i.h)().elementId).data;if(!a)return Object(h.jsx)(i.a,{to:"/"});var n=a.bestViewed,s=a.brightestStar,r=a.cardImage,l=a.clusterType,j=a.constellationName,d=a.largestConstellation,b=a.neighboringConstellations,u=a.zodiacConstellation;return Object(h.jsxs)("div",{className:"card mb-3 card animate__animated animate__fadeInLeft",children:[Object(h.jsx)("img",{className:"card-img-top img-thumbnail",src:r,alt:j}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:j}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("b",{children:"Neigboring Constellations:"})," ",b]}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("b",{children:"Brightest Star:"})," ",s]}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("b",{children:"Best viewed in:"})," ",n]}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("b",{children:"Zodiac Constellation?:"})," ",u]}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("b",{children:"Largest Constellation:"})," ",d]}),Object(h.jsx)("p",{className:"card-text",children:Object(h.jsxs)("small",{className:"text-muted",children:[Object(h.jsx)("b",{children:"Element type: "}),l]})}),Object(h.jsx)("button",{className:"button",onClick:function(){t.lenght<=2?t.push("/"):t.goBack()},children:"Return"})]})]})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Zodiac Screen!"}),Object(h.jsx)("hr",{}),Object(h.jsx)(v,{element_type:"Zodiac Constellation"})]})},I=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(h.jsx)(r.b,{className:"navbar-brand",to:"/",children:"AstronomUIS"}),Object(h.jsx)("div",{className:"navbar-collapse",children:Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/constellation",children:"Constellations"}),Object(h.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/zodiac",children:"Zodiac"})]})}),Object(h.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(h.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(h.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Soon!"})})}),Object(h.jsx)("div",{className:"navbar-collapse collapse order-3 dual-collapse2",children:Object(h.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(h.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})})})]})},E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/constellation",component:f}),Object(h.jsx)(i.b,{exact:!0,path:"/space/:elementId",component:S}),Object(h.jsx)(i.b,{exact:!0,path:"/zodiac",component:w}),Object(h.jsx)(i.b,{exact:!0,path:"/search",component:C}),Object(h.jsx)(i.a,{to:"/constellation"})]})})]})},B=function(){return Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/login",component:x}),Object(h.jsx)(i.b,{path:"/",component:E})]})})})},T=function(){return Object(h.jsx)(B,{})};a(49);s.a.render(Object(h.jsx)(T,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.35586429.chunk.js.map