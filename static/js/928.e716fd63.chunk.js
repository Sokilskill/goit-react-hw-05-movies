"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[928],{928:function(n,e,i){i.r(e),i.d(e,{default:function(){return k}});var r,t,a,c,o,s=i(439),l=i(791),d=i(689),h=i(87),u=i(168),x=i(867),p=x.ZP.div(r||(r=(0,u.Z)(["\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(\n      to right,\n      rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),\n      rgba(31.5, 31.5, 31.5, 0.84) 50%,\n      rgba(31.5, 31.5, 31.5, 0.84) 100%\n    ),\n    ",";\n"])),(function(n){return n.backgroundimage?"url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/".concat(n.backgroundimage,"')"):"none"})),g=x.ZP.div(t||(t=(0,u.Z)(["\n  display: flex;\n  gap: 40px;\n  max-width: var(--maxPrimaryPageWidth);\n  width: 100%;\n  padding: 30px 0;\n"]))),m=x.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 24px 0;\n  color: var(--textColor);\n"]))),j=x.ZP.h2(c||(c=(0,u.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n"]))),f=x.ZP.p(o||(o=(0,u.Z)(["\n  font-weight: 500;\n"]))),v=i(606),b=i(659),w=i(184),k=function(){var n,e,i=(0,l.useState)(null),r=(0,s.Z)(i,2),t=r[0],a=r[1],c=(0,d.UO)().movieId,o=null!==(n=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(c,"?language=en-US"),b.Y).then((function(n){return n.json()})).then((function(n){a(n)})).catch((function(n){return console.error(n)}))}),[c]);var u=t||{},x=u.poster_path,k=u.backdrop_path,Z=u.title,I=u.vote_average,W=u.overview,z=u.genres;return(0,w.jsxs)("main",{children:[(0,w.jsx)(v.W,{children:(0,w.jsx)(h.rU,{to:o,children:"Go back"})}),t&&(0,w.jsx)(p,{backgroundimage:k,children:(0,w.jsx)(v.W,{children:(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(x),alt:Z,width:"300",height:"450"}),(0,w.jsxs)(m,{children:[(0,w.jsx)(j,{children:Z}),(0,w.jsxs)("p",{children:["User Score: ",Math.round(10*I)," %"]}),(0,w.jsx)(f,{children:"Overview"}),(0,w.jsx)("p",{children:W}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("ul",{children:z.map((function(n){return(0,w.jsx)("li",{children:(0,w.jsx)("p",{children:n.name})},n.name)}))}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(h.rU,{to:"cast",state:{from:o},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(h.rU,{to:"reviews",state:{from:o},children:"Reviews"})})]})]})]})]})})}),(0,w.jsx)(v.W,{children:(0,w.jsx)(l.Suspense,{fallback:(0,w.jsx)("p",{children:"Loading..."}),children:(0,w.jsx)(d.j3,{})})})]})}},659:function(n,e,i){i.d(e,{Y:function(){return r}});var r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ3NmRmZDdiNmU5NzhhMTM5ZTViOGFkYzlhOGVlNiIsInN1YiI6IjY1MTNlMjI4NzlhMWMzMDEzYWE2ZGY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OLljB3dWM0vxoQXzuHqabIWo1lgTHgs-WsVPw4nkuQw"}}}}]);
//# sourceMappingURL=928.e716fd63.chunk.js.map