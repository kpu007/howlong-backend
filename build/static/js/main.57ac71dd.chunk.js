(this["webpackJsonphowlong-frontend"]=this["webpackJsonphowlong-frontend"]||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),s=a.n(c),d=(a(74),a(32)),i=a(7),o=a(162),j=a(20),l=a(24),u=a.n(l),b="/dates",h=function(){return u.a.get(b)},O=function(e){var t=e.valueOf();return u.a.get("/dates/archive/"+t)},x=a(4),f=function(){return Object(x.jsxs)("div",{children:["In the table column labeled X, the value Y (+Z) represents the following:",Object(x.jsx)("br",{}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Y represents the progress (in days) made ever since X days ago"}),Object(x.jsx)("li",{children:"Z represents the progress (in days) made specifically on the day X days ago"})]})]})},v=a(29),g=a.n(v),p=(a(38),a(39),a(40),function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],c="#EBF5FF";Object(r.useEffect)((function(){h().then((function(e){console.log(e.data),n(e.data)}))}),[]);var s=function(e,t){var a=Math.abs(t-e);return Math.ceil(a/864e5)},d=function(e,t){if(!e.dateArray)return"No date array found!";if(e.dateArray.length<=t)return"N/A";var a=new Date(e.dateArray[t].archivedDateValue);return s(new Date(e.currentDate),a)+" (+"+function(e,t){if(e.dateArray.length<=t)return 0;var a=new Date(e.dateArray[t].archivedDateValue),r=new Date(e.dateArray[t-1].archivedDateValue);return s(a,r)}(e,t)+")"},i=function(e){var t=e.getFullYear(),a=e.getDate();return e.getMonth()+1+"/"+a+"/"+t},o=[{dataField:"dateName",text:"Date Name",sort:!0,headerStyle:{backgroundColor:c,width:"20%"}},{dataField:"currentDate",text:"Current Date",sort:!0,formatter:function(e,t){var a=new Date(t.currentDate),r=i(a);return Object(x.jsx)("div",{children:r})},headerStyle:{backgroundColor:c,width:"15%"}}],l=[1,2,3,4,5,6,7,15,30].map((function(e){return function(e){return{dataField:e+"DayDifference",text:e,isDummyField:"true",formatter:(t=e,function(e,a){return d(a,t)}),headerStyle:{backgroundColor:c}};var t}(e)})),u=o.concat(l);return Object(x.jsxs)("div",{className:"App",alignItems:"center",children:["Last updated: ",a[0]?i(new Date(a[0].lastUpdated)):"",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{class:"center",style:{width:"80%"},children:Object(x.jsx)(g.a,{bootstrap4:!0,keyField:"dateName",data:a,columns:u})}),Object(x.jsx)(f,{}),Object(x.jsx)("br",{})]})]})}),m=function(){return u.a.get("/meta")},D=a(64),y=a.n(D),w=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(new Date),s=Object(j.a)(c,2),d=s[0],i=s[1],o=Object(r.useState)(new Date),l=Object(j.a)(o,2),u=l[0],b=l[1],h="#EBF5FF";Object(r.useEffect)((function(){m().then((function(e){b(new Date(e.data.firstArchivedDate))})),O(d).then((function(e){n(e.data)}))}),[d]);var f=function(e){var t=e.getFullYear(),a=e.getDate();return e.getMonth()+1+"/"+a+"/"+t},v=[{dataField:"dateName",text:"Date Name",sort:!0,headerStyle:{backgroundColor:h,width:"30%"}},{dataField:"dateValue",text:"Date Value",sort:!0,formatter:function(e,t){if(a=t.dateValue,!/\d/.test(a))return Object(x.jsx)("div",{children:"No data found!"});var a,r=new Date(t.dateValue),n=f(r);return Object(x.jsx)("div",{children:n})},headerStyle:{backgroundColor:h,width:"25%"}}];return Object(x.jsx)("div",{className:"App",alignItems:"center",children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"center",style:{width:"80%"},children:[Object(x.jsx)(y.a,{onChange:i,value:d,minDate:u}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(g.a,{bootstrap4:!0,keyField:"dateName",data:a,columns:v})]})})})},F=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"Page Not Found"}),"Use the buttons above to get to the available pages."]})};var N=function(){return Object(x.jsxs)("div",{className:"App",alignItems:"center",children:[Object(x.jsx)("h1",{children:"Date Tracker"}),Object(x.jsxs)(d.a,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(o.a,{color:"primary",component:d.b,to:"/progress",children:"Progress Table"}),Object(x.jsx)(o.a,{color:"primary",component:d.b,to:"/archive",children:"Archive Viewer"})]}),Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/",children:Object(x.jsx)(i.a,{to:"/progress"})}),Object(x.jsx)(i.b,{path:"/progress",children:Object(x.jsx)(p,{})}),Object(x.jsx)(i.b,{path:"/archive",children:Object(x.jsx)(w,{})}),Object(x.jsx)(i.b,{children:Object(x.jsx)(F,{})})]})]})]})};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))},38:function(e,t,a){},74:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.57ac71dd.chunk.js.map