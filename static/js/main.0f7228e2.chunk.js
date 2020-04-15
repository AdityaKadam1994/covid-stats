(this["webpackJsonpcovid-stats"]=this["webpackJsonpcovid-stats"]||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=(a(42),a(43),a(44),a(16)),u=a(7),s=a(9),i=a.n(s),m=function(e){var t=Object(n.useMemo)((function(){return e.stateData}),[e.stateData]).filter((function(e,t){return"Total"!==e.state}));return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"State"),l.a.createElement("td",null,"Active"),l.a.createElement("td",null,"Confirmed"),l.a.createElement("td",null,"Deaths"),l.a.createElement("td",null,"Recovered"),l.a.createElement("td",null,"Total Tests"))),l.a.createElement("tbody",null,t?t.map((function(e){return l.a.createElement("tr",{key:e.state},l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.deaths),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.totaltested?e.totaltested:"-"))})):null)))},d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(u.a)(c,2),d=s[0],E=s[1];return Object(n.useEffect)((function(){var e;i.a.get("https://api.covid19india.org/state_test_data.json").then((function(t){var a=t.data.states_tested_data.map((function(e){var t=e.updatedon.split("/"),a=[t[1],t[0]];t[0]=a[0],t[1]=a[1];var n=t.join("/");return Object(o.a)({},e,{updatedon:n})})).reverse().filter((function(e,t,a){return t===a.findIndex((function(t){return t.state===e.state&&""!==t.totaltested}))})),n=a.map((function(e){return parseInt(""!==e.totaltested?e.totaltested:0)})).reduce((function(e,t){return e+t}),0);E(n),i.a.get("https://api.covid19india.org/data.json").then((function(t){e=t.data.statewise;for(var n=0;n<e.length;n++)for(var l=0;l<a.length;l++)e[n].state===a[l].state&&(e[n].totaltested=a[l].totaltested);r(e)}))}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"India COVID-19 Stats"),l.a.createElement("div",{className:"stats-wrapper"},l.a.createElement("div",null,l.a.createElement("h2",null,"Active"),l.a.createElement("h3",null,a[0]?a[0].active:"-"," ")),l.a.createElement("div",null,l.a.createElement("h2",null,"Confirmed"),l.a.createElement("h3",null,a[0]?a[0].confirmed:"-"," ")),l.a.createElement("div",null,l.a.createElement("h2",null,"Deaths"),l.a.createElement("h3",null,a[0]?a[0].deaths:"-")),l.a.createElement("div",null,l.a.createElement("h2",null,"Recovered"),l.a.createElement("h3",null,a[0]?a[0].recovered:"-")),l.a.createElement("div",null,l.a.createElement("h2",null,"Total Tests"),l.a.createElement("h3",null,d))),l.a.createElement(m,{stateData:a}))},E=a(11),v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar"},l.a.createElement("ul",{className:"navlist"},l.a.createElement("li",{className:"navlinks"},l.a.createElement(E.b,{to:"/",active:!0,exact:!0},"Home")),l.a.createElement("li",{className:"navlinks"},l.a.createElement(E.b,{to:"/world_stats",exact:!0},"World Stats")))))},f=a(15),h={"X-RapidAPI-Host":"coronavirus-monitor.p.rapidapi.com","X-RapidAPI-Key":"68781a08bcmsh8884703f7285062p1d71e1jsnf3468378e101"},p=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),s=o[0],m=o[1],d=Object(f.c)((function(e){return e.allstats})),E=Object(n.useState)(null),v=Object(u.a)(E,2),p=v[0],b=v[1],g=Object(n.useState)(),y=Object(u.a)(g,2),O=y[0],j=y[1],w=Object(n.useState)(!0),_=Object(u.a)(w,2),C=_[0],N=_[1],S=Object(f.b)(),T=Object(n.useRef)(),I=d,R=Object(n.useRef)(null),k={headers:h};Object(n.useEffect)((function(){var e,t;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(a){e=a.coords.latitude.toString(),t=a.coords.longitude.toString(),i.a.get("https://geocode.xyz/".concat(e,",").concat(t,"?json=1")).then((function(e){R.current=e.data.country,A("",R.current)}))})):console.log("Geolocation is not supported by this browser."),A(""),i.a.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",k).then((function(e){r(e.data)}))}),[]);var A=function(e,t){var a=0==e.length?null:e,n=t;i.a.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",k).then((function(e){b(e.data),S(a?function(e,t){return{type:"SEARCHCOUNTRY",payload:e,query:t}}(e.data,a):function(e,t){return{type:"INITIALLOAD",payload:e,countryName:t}}(e.data,n))}))};return l.a.createElement("div",null,l.a.createElement("h1",null,"World Stats"),l.a.createElement("div",{className:"stats-wrapper world-stats"},l.a.createElement("div",null,l.a.createElement("h2",null,"Total Cases"),l.a.createElement("h3",null,a?a.total_cases:"-"," ")),l.a.createElement("div",null,l.a.createElement("h2",null,"Total Deaths"),l.a.createElement("h3",null,a?a.total_deaths:"-"," ")),l.a.createElement("div",null,l.a.createElement("h2",null,"Total Recovered"),l.a.createElement("h3",null,a?a.total_recovered:"-"," "))),l.a.createElement("div",{className:"searchbar"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A(s)}},l.a.createElement("input",{type:"text",placeholder:"Enter your country...",value:s,onChange:function(e){return function(e){m(e.target.value),N(!0);var t=new RegExp(s?s.toLowerCase():"","g"),a=p?p.countries_stat.map((function(e){return e.country_name.toLowerCase().match(t)?e.country_name:null})).filter((function(e){return null!==e})):null;0===a.length&&N(!1),console.log(a),j(a)}(e)},onClick:function(){return m(null)},ref:T,required:!0}),l.a.createElement("button",null,"Search"))),l.a.createElement("div",{className:"autosuggest-wrapper"},l.a.createElement("div",{className:"auto-suggest-box"},l.a.createElement("ul",{className:"country-list ".concat(s?"displayOn":"displayOff"," ").concat(C?"displayOn":"displayOff")},O&&O.length>0?O.map((function(e){return l.a.createElement("li",{onClick:function(){m(e.toLowerCase()),N(!1),T.current.focus()},key:e},e)})):null))),l.a.createElement("div",{className:"search-results"},I&&I.allstats.length>0?I.allstats.map((function(e){return l.a.createElement("div",{className:"country-stats",key:e.country_name},l.a.createElement("h2",null,e.country_name),l.a.createElement("h3",null,"Total Cases: ",e.cases),l.a.createElement("h3",null,"Active Cases: ",e.active_cases),l.a.createElement("h3",null,"Total Deaths: ",e.deaths),l.a.createElement("h3",null,"Recovered: ",e.total_recovered))})):l.a.createElement("h2",{className:"country-center"},"Country not found or check the spelling")))},b=a(8);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"App"},l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/",component:d,exact:!0}),l.a.createElement(b.a,{path:"/world_stats",component:p,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(14),O=a(24),j=Object(y.b)({allstats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALLOAD":var a=t.payload.countries_stat.filter((function(e,t){if(t>0&&t<3)return e})),n=t.payload.countries_stat.filter((function(e,a){if(e.country_name==t.countryName)return e}));return Object(o.a)({},e,{allstats:[].concat(Object(O.a)(n),Object(O.a)(a))});case"SEARCHCOUNTRY":var l=t.payload.countries_stat?t.payload.countries_stat.filter((function(e){return e.country_name.toLowerCase().trim()==t.query.toLowerCase().trim()})):null;return Object(o.a)({},e,{allstats:l});default:return e}}}),w=Object(y.c)((function(e,t){return j(e,t)}),{});c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,{store:w},l.a.createElement(E.a,null,l.a.createElement(g,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.0f7228e2.chunk.js.map