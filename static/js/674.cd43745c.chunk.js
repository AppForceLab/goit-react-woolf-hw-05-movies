"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{482:function(t,e,n){n.d(e,{O:function(){return i}});n(791);var r=n(689),a=n(87),c=n(184),u=function(t){var e=t.to,n=t.state,r=t.text;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:e,state:n,children:r})})},i=function(t){var e=t.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title,a=t.name,i=t.original_name;return(0,c.jsx)(u,{to:"/movies/".concat(e),text:r||a||i,state:n},e)}))})}},524:function(t,e,n){n.d(e,{FI:function(){return c},ax:function(){return r},f_:function(){return a}});var r="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",a="https://image.tmdb.org/t/p",c="Something went wrong!"},674:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),o=n(482),s=n(800),f=n(524),p="HomePage_main__OiWfi",l="HomePage_title__UFLA3",h="HomePage_loading__ZeHsb",m=n(184),d=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,i.useState)(!0),v=(0,a.Z)(d,2),g=v[0],x=v[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Df)();case 3:e=t.sent,n=e.data.results,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message||f.FI);case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,m.jsxs)("main",{className:p,children:[(0,m.jsx)("h1",{className:l,children:"Trending Today"}),g?(0,m.jsx)("p",{className:h,children:"Loading..."}):(0,m.jsx)(o.O,{movies:n})]})}},800:function(t,e,n){n.d(e,{$G:function(){return p},Df:function(){return i},HI:function(){return o},tx:function(){return f},zv:function(){return s}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGMxYjY5YjQzZjY2YmE5OTE3OWU2YzA1OGU2OGQ0MCIsInN1YiI6IjY1ZTM1OTQ1Mjc4ZDhhMDE4NWJlYzZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNLEvHlE8zFUYYpcIuliwcHUdjkBu0SAyc-dd-ApbiA",u.Z.defaults.headers.common.accept="application/json";var i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"day",t.next=3,u.Z.get("/trending/all/".concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=674.cd43745c.chunk.js.map