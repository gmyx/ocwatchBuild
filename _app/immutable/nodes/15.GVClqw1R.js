import{s as U,a as L,e as R,b,c as G,h as V,d as M,f as _,i as T,j as Q,k as q,l as D,m as z,o as K,p as P,q as H,n as w}from"../chunks/scheduler.D4_7AI4m.js";import{S as X,i as Y,t as E,a as C,c as B,b as J,d as W,m as Z,e as $,g as ee}from"../chunks/index.DeqhCWiI.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.VCOE_R-_.js";import{w as te}from"../chunks/entry.CBSipulH.js";import{s as re,Q as h,p as se,r as N,C as ae,t as O}from"../chunks/inferColumnTypes.DOzp9NDw.js";import{h as j}from"../chunks/setTrackProxy.Cyfckp0w.js";import{e as ie,p as oe}from"../chunks/inputs.BXb6Hm7i.js";import{p as ne}from"../chunks/stores.C548N2Ne.js";import{Q as le}from"../chunks/QueryViewer.BpTfvmih.js";function ue(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:w,p:w,d:w}}function x(n){let a,s;return a=new le({props:{queryID:"trips",queryResult:n[0]}}),{c(){J(a.$$.fragment)},l(t){W(a.$$.fragment,t)},m(t,l){Z(a,t,l),s=!0},p(t,l){const u={};l&1&&(u.queryResult=t[0]),a.$set(u)},i(t){s||(E(a.$$.fragment,t),s=!0)},o(t){C(a.$$.fragment,t),s=!1},d(t){$(a,t)}}}function ce(n){let a,s,t,l,u,o,m;function g(e,i){return ue}let p=g()(n),r=n[0]&&x(n);return{c(){a=L(),p.c(),s=R("meta"),t=R("meta"),l=b(),u=L(),r&&r.c(),o=b(),this.h()},l(e){a=G(e);const i=V("svelte-1j2izld",document.head);p.l(i),s=M(i,"META",{name:!0,content:!0}),t=M(i,"META",{name:!0,content:!0}),l=b(),i.forEach(_),u=G(e),r&&r.l(e),o=b(),this.h()},h(){T(s,"name","twitter:card"),T(s,"content","summary"),T(t,"name","twitter:site"),T(t,"content","@evidence_dev")},m(e,i){Q(e,a,i),p.m(document.head,null),q(document.head,s),q(document.head,t),q(document.head,l),Q(e,u,i),r&&r.m(e,i),Q(e,o,i),m=!0},p(e,[i]){p.p(e,i),e[0]?r?(r.p(e,i),i&1&&E(r,1)):(r=x(e),r.c(),E(r,1),r.m(o.parentNode,o)):r&&(ee(),C(r,1,1,()=>{r=null}),B())},i(e){m||(E(r),m=!0)},o(e){C(r),m=!1},d(e){e&&(_(a),_(u),_(o)),p.d(e),_(s),_(t),_(l),r&&r.d(e)}}}function me(n,a,s){let t,l;D(n,ne,c=>s(7,t=c)),D(n,N,c=>s(14,l=c));let{data:u}=a,{data:o={},customFormattingSettings:m,__db:g,inputs:F}=u;z(N,l="de34e29b055bd9f53da1937860ce0e42",l);let p=ie(te(F));K(p.subscribe(c=>F=c)),P(ae,{getCustomFormats:()=>m.customFormats||[]});const r=(c,A)=>oe(g.query,c,{query_name:A});re(r);let e;const i=()=>{e||(e=setTimeout(()=>{O.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},I=()=>{e?(clearTimeout(e),e=null):O.dismiss("LoadingToast")};H(()=>(h.addEventListener("inFlightQueryStart",i),h.addEventListener("inFlightQueryEnd",I),h.QueriesLoading&&i(),()=>{h.removeEventListener("inFlightQueryStart",i),h.removeEventListener("inFlightQueryEnd",I)})),t.params,H(()=>!0);let d={initialData:void 0,initialError:void 0},f=j`select * from GTFS.trips`,y="select * from GTFS.trips";o.trips_data&&(o.trips_data instanceof Error?d.initialError=o.trips_data:d.initialData=o.trips_data,o.trips_columns&&(d.knownColumns=o.trips_columns));let v,S=!1;const k=h.createReactive({callback:c=>{s(0,v=c)},execFn:r},{id:"trips",...d});return k(y,{noResolve:f,...d}),globalThis[Symbol.for("trips")]={get value(){return v}},n.$$set=c=>{"data"in c&&s(1,u=c.data)},n.$$.update=()=>{n.$$.dirty&2&&s(2,{data:o={},customFormattingSettings:m,__db:g}=u,o),n.$$.dirty&4&&se.set(Object.keys(o).length>0),n.$$.dirty&128&&t.params,n.$$.dirty&120&&(f||!S?f||(k(y,{noResolve:f,...d}),s(6,S=!0)):k(y,{noResolve:f}))},s(4,f=j`select * from GTFS.trips`),s(5,y="select * from GTFS.trips"),[v,u,o,d,f,y,S,t]}class Ee extends X{constructor(a){super(),Y(this,a,me,ce,U,{data:1})}}export{Ee as component};