(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),i=n.n(a),s=(n(14),n(15),n(1)),o=function(e){return Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h2",{children:e.text}),Object(s.jsx)("p",{children:"\u041a\u0438\u043d\u043e - \u043d\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u0441\u0442\u044c!"})]})},j=n(9),u=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(s.jsxs)("form",{className:"search",children:[Object(s.jsx)("input",{type:"text",value:r,onChange:function(e){a(e.target.value)}}),Object(s.jsx)("input",{onClick:function(t){t.preventDefault(),e.search(r),a("")},type:"submit",value:"SEARCH"})]})},l=function(e){var t="N/A"===e.movie.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":e.movie.Poster;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("h2",{children:e.movie.Title}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{width:"200",alt:"The movie titled: ".concat(e.movie.Title),src:t})}),Object(s.jsxs)("p",{children:["(",e.movie.Year,")"]})]})},b=n(3),p="SEARCH_MOVIES_REQUEST",h="SEARCH_MOVIES_SUCCESS",d="SEARCH_MOVIES_FAILURE",O=function(e){return{type:h,payload:e}},m={loading:!0,movies:[],errorMessage:null},f=n(2),v=function(){var e=Object(f.c)((function(e){return e.app.loading})),t=Object(f.c)((function(e){return e.app.errorMessage})),n=Object(f.c)((function(e){return e.app.movies})),r=Object(f.b)();Object(c.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){r(O(e.Search))}))}),[]);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(u,{search:function(e){r({type:p}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){var t;"True"===e.Response?r(O(e.Search)):r((t=e.Error,{type:d,error:t}))}))}}),Object(s.jsx)("p",{className:"App-intro",children:"Sharing a few of our favourite movies"}),Object(s.jsx)("div",{className:"movies",children:e&&!t?Object(s.jsx)("span",{children:"loading... "}):t?Object(s.jsx)("div",{className:"errorMessage",children:t}):n.map((function(e,t){return Object(s.jsx)(l,{movie:e},"".concat(t,"-").concat(e.Title))}))})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},x=(n(21),n(8)),S=Object(x.a)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{loading:!0,errorMessage:null});case h:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,movies:t.payload});case d:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,errorMessage:t.error});default:return e}}}),w=Object(x.b)(S),M=w;window.store=w,i.a.render(Object(s.jsxs)(r.a.StrictMode,{children:[Object(s.jsx)(f.a,{store:M,children:Object(s.jsx)(v,{})}),","]}),document.getElementById("root")),g()}},[[22,1,2]]]);
//# sourceMappingURL=main.234f66e1.chunk.js.map