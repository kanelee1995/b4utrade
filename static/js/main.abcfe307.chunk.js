(this.webpackJsonpb4utrade=this.webpackJsonpb4utrade||[]).push([[1],{248:function(e,t,a){},249:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(69),i=a.n(s),r=a(12),l=a(9),o=a(8),d=a(109),j=a(23),b=a.n(j),u=a(29),p=a(1),h=function(e){var t=e.userInput,a=Object(c.useState)([]),n=Object(l.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)([]),j=Object(l.a)(o,2),h=j[0],m=j[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),f=x[0],v=x[1],g=u.a.twelveData,y={labels:s.map((function(e){return e.slice(5)})),datasets:[{label:"Daily Close",data:h,fill:!0,backgroundColor:"rgb(6, 214, 160, 0.1)",borderColor:"#06d6a0",color:"#ced4da"}]};return Object(c.useEffect)((function(){var e={method:"GET",url:"https://twelve-data1.p.rapidapi.com/time_series",params:{symbol:"".concat(t),interval:"1day",outputsize:"7",format:"json"},headers:{"x-rapidapi-key":"52979a8a04msha30f088adf5a675p1868e1jsnc49e105d3bfc","x-rapidapi-host":"twelve-data1.p.rapidapi.com"}},a={method:"GET",url:"https://twelve-data1.p.rapidapi.com/time_series",params:{symbol:"".concat(t),interval:"1day",outputsize:"90",format:"json"},headers:{"x-rapidapi-key":"".concat(g),"x-rapidapi-host":"twelve-data1.p.rapidapi.com"}},c=window.innerWidth<=768?e:a;b.a.request(c).then((function(e){i(e.data.values.reverse().map((function(e){return e.datetime}))),m(e.data.values.map((function(e){return e.close})))})).catch((function(e){v(!0)}))}),[t]),Object(p.jsxs)("div",{className:"stockChart",children:[Object(p.jsx)(d.a,{data:y,options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},maintainAspectRatio:!1}}),f&&Object(p.jsxs)("div",{className:"errMsg","aria-live":"polite",children:["Invalid Symbol, please try again.",Object(p.jsx)(r.b,{to:"/",className:"redirectBtn",children:"Back to homepage"})]})]})},m=a(31),O=a.n(m),x=function(e){var t=e.userInput,a=Object(c.useState)([]),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),d=o[0],j=o[1],h=u.a.financialmodelingprep;Object(c.useEffect)((function(){b.a.get("https://financialmodelingprep.com/api/v3/profile/".concat(t,"?apikey=").concat(h)).then((function(e){i(e.data[0]),j(!1)})).catch((function(e){console.log(e)}))}),[t]);return d&&O.a,Object(p.jsx)("div",{className:"stockProfile",children:Object(p.jsxs)("div",{className:"companyInfo",children:[Object(p.jsx)("p",{className:"companyName",children:s.symbol}),Object(p.jsxs)("div",{className:"flex-row",children:[" ",Object(p.jsx)("p",{className:"companyDescription",id:"companyDescription",children:s.description})," ",Object(p.jsx)("button",{id:"readMore",className:"readMore",onClick:function(){var e=document.getElementById("readMore");"Read more"===e.value?(e.value="Collapse",e.innerHTML="Collapse"):(e.value="Read more",e.innerHTML="Read more"),document.getElementById("companyDescription").classList.toggle("companyDescriptionExpanded")},value:"Read more",children:"Read more"})]}),Object(p.jsxs)("p",{children:["Sector: ",s.sector]}),Object(p.jsx)("a",{href:s.website,children:"Company Website "})]})})},f=a(255),v=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,753))})),g=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,785))})),y=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,786))})),N=function(e){var t=e.userInput,a=Object(o.f)(),n=a.path,s=a.url,i=Object(p.jsx)(O.a,{type:"spinningBubbles",color:"#ffffff",height:"30px",width:"30px"});return Object(p.jsx)(r.a,{children:Object(p.jsxs)(f.a.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},className:"detailPage",children:[Object(p.jsx)(x,{userInput:t}),Object(p.jsx)(h,{userInput:t}),Object(p.jsxs)("div",{className:"Switcher",children:[Object(p.jsx)(r.b,{to:"".concat(s),className:"SwitcherTab",children:"Daily"}),Object(p.jsx)(r.b,{to:"".concat(s,"/earnings"),className:"SwitcherTab",children:"Earnings"}),Object(p.jsx)(r.b,{to:"".concat(s,"/news"),className:"SwitcherTab",children:"News"})]}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"".concat(n),children:Object(p.jsx)(c.Suspense,{fallback:i,children:Object(p.jsx)(y,{userInput:t})})}),Object(p.jsx)(o.a,{exact:!0,path:"".concat(n,"/earnings"),children:Object(p.jsx)(c.Suspense,{fallback:i,children:Object(p.jsx)(v,{userInput:t})})}),Object(p.jsx)(o.a,{exact:!0,path:"".concat(n,"/news"),children:Object(p.jsx)(c.Suspense,{fallback:i,children:Object(p.jsx)(g,{userInput:t})})})]})]})})},k=a.p+"static/media/MainPic2.6753ac7b.png",S=function(e){var t=e.children;return Object(p.jsxs)(f.a.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},className:"mainContent",children:[Object(p.jsxs)("div",{className:"leftContent",children:[Object(p.jsx)("h1",{className:"headline",children:"Beat the market."}),Object(p.jsx)("h2",{className:"subheadline",children:"Get the lastest historical & fundamental data of a stock."}),Object(p.jsx)("div",{className:"searchContainer",children:t})]}),Object(p.jsx)(f.a.div,{className:"rightContent",animate:{y:20},transition:{duration:.5},children:Object(p.jsx)("img",{src:k,alt:"",className:"MainPic"})})]})},w=a(47),I=a(48),C=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),i=Object(l.a)(s,2),r=i[0],o=i[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),h=j[0],m=j[1],x=u.a.financialmodelingprep;Object(c.useEffect)((function(){b.a.get("https://financialmodelingprep.com/api/v3/gainers?apikey=".concat(x)).then((function(e){o(!1),n(e.data)})).catch((function(e){o(!1),m(!0),console.log(e)}))}),[]);var f=a.slice(0,3);return r?Object(p.jsxs)("div",{className:"Loader","aria-busy":"true","aria-live":"polite","data-testid":"loader",children:[Object(p.jsx)(O.a,{type:"spinningBubbles",color:"#ffffff",height:"30px",width:"30px","aria-label":"Loading"}),";"]}):h?Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Error fetching data, please try again!"})}):Object(p.jsx)("header",{className:"indexBar",children:Object(p.jsx)("div",{className:"indexList",children:f.map((function(e){return Object(p.jsxs)("div",{className:"indexBarItem",children:[e.ticker,Object(p.jsxs)("span",{className:"whiteSpace","aria-hidden":"true",children:[Math.round(100*e.changesPercentage)/100,"%",Object(p.jsx)("span",{className:"whiteSpace",children:Object(p.jsx)(w.a,{icon:I.a})})]}),Object(p.jsx)("span",{className:"indexComspananyName",children:e.companyName})]},e.ticker)}))})})},B=function(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(r.b,{to:"/",className:"title",children:"B4UTrade"}),Object(p.jsx)(C,{})]})},E=(a(248),a(249),a(67)),D=a.n(E),M=a(108),T=(a(251),function(e){var t=e.userInput,a=e.inputHandle,n=Object(c.useState)(!1),s=Object(l.a)(n,2),i=s[0],r=s[1],o=Object(c.useState)(""),d=Object(l.a)(o,2),j=d[0],u=d[1],h=function(){var e=Object(M.a)(D.a.mark((function e(a){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t){e.next=5;break}return r(!0),u("Please enter a stock ticker"),e.abrupt("return");case 5:return e.prev=5,e.next=8,b.a.get("exmaple.com");case 8:c=e.sent,c.data[0].symbol===t&&(localStorage.setItem("userInput",t.toUpperCase()),document.getElementById("searchButton").click(),window.location.reload()),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),r(!0),u("Invalid stock ticker");case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:h,children:[Object(p.jsx)("input",{className:"searchBar",type:"text",value:t,placeholder:"Search by symbol",onChange:a}),Object(p.jsx)(w.a,{icon:I.b,className:"searchIcon","aria-hidden":"true"}),i&&Object(p.jsx)("div",{className:"errorTooltip",children:j})]})}),P=function(){return Object(p.jsx)(r.b,{to:"/stockdetail",id:"searchButton",className:"invisibleButton","aria-label":"Go to Stock Detail Page"})};var R=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=localStorage.getItem("userInput");return Object(p.jsx)(r.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(B,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsxs)(S,{children:[Object(p.jsx)(T,{userInput:a,inputHandle:function(e){n(e.target.value)}}),Object(p.jsx)(P,{})]})}),Object(p.jsx)(o.a,{path:"/stockdetail",children:Object(p.jsx)(N,{userInput:s})})]})]})})};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(r.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root"))},29:function(e,t,a){"use strict";t.a={financialmodelingprep:"d7f8484c1c8ac4235b39e22345b8dbbd",twelveData:"52979a8a04msha30f088adf5a675p1868e1jsnc49e105d3bfc",alphavantage:"QHHEJX1I72MCYTJR",polygon:"REGDCE9oeokuBTeCkEQpYRH81FU_a7if"}}},[[252,2,3]]]);
//# sourceMappingURL=main.abcfe307.chunk.js.map