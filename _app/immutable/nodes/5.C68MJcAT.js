import{s as A,a as D,e as I,b as T,c as L,h as U,d as W,f,i as b,j as k,k as Q,l as R,m as V,o as z,p as K,q as G,n as q}from"../chunks/scheduler.CwZefb0o.js";import{S as P,i as X,t as g,a as M,c as Y,b as B,d as J,m as Z,e as $,g as ee}from"../chunks/index.RfiDZozx.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.D5SiE8nu.js";import{w as te}from"../chunks/entry.CLsv0ICV.js";import{s as ae,Q as _,p as ne,r as H,C as re,t as N}from"../chunks/inferColumnTypes.CZSR8CUR.js";import{h as O}from"../chunks/setTrackProxy.Cyfckp0w.js";import{e as se,p as oe}from"../chunks/inputs.uqKFdAxO.js";import{p as de}from"../chunks/stores.DybgH1qU.js";import{Q as ue}from"../chunks/QueryViewer.DbhmcTXQ.js";function ie(d){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:q,p:q,d:q}}function j(d){let r,n;return r=new ue({props:{queryID:"calendar",queryResult:d[0]}}),{c(){B(r.$$.fragment)},l(t){J(r.$$.fragment,t)},m(t,u){Z(r,t,u),n=!0},p(t,u){const i={};u&1&&(i.queryResult=t[0]),r.$set(i)},i(t){n||(g(r.$$.fragment,t),n=!0)},o(t){M(r.$$.fragment,t),n=!1},d(t){$(r,t)}}}function ce(d){let r,n,t,u,i,o,l;function w(e,s){return ie}let h=w()(d),a=d[0]&&j(d);return{c(){r=D(),h.c(),n=I("meta"),t=I("meta"),u=T(),i=D(),a&&a.c(),o=T(),this.h()},l(e){r=L(e);const s=U("svelte-1j2izld",document.head);h.l(s),n=W(s,"META",{name:!0,content:!0}),t=W(s,"META",{name:!0,content:!0}),u=T(),s.forEach(f),i=L(e),a&&a.l(e),o=T(),this.h()},h(){b(n,"name","twitter:card"),b(n,"content","summary"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev")},m(e,s){k(e,r,s),h.m(document.head,null),Q(document.head,n),Q(document.head,t),Q(document.head,u),k(e,i,s),a&&a.m(e,s),k(e,o,s),l=!0},p(e,[s]){h.p(e,s),e[0]?a?(a.p(e,s),s&1&&g(a,1)):(a=j(e),a.c(),g(a,1),a.m(o.parentNode,o)):a&&(ee(),M(a,1,1,()=>{a=null}),Y())},i(e){l||(g(a),l=!0)},o(e){M(a),l=!1},d(e){e&&(f(r),f(i),f(o)),h.d(e),f(n),f(t),f(u),a&&a.d(e)}}}function le(d,r,n){let t,u;R(d,de,c=>n(7,t=c)),R(d,H,c=>n(14,u=c));let{data:i}=r,{data:o={},customFormattingSettings:l,__db:w,inputs:S}=i;V(H,u="db668c051ad2df6e48fcdbcb2d2b3ded",u);let h=se(te(S));z(h.subscribe(c=>S=c)),K(re,{getCustomFormats:()=>l.customFormats||[]});const a=(c,x)=>oe(w.query,c,{query_name:x});ae(a);let e;const s=()=>{e||(e=setTimeout(()=>{N.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},C=()=>{e?(clearTimeout(e),e=null):N.dismiss("LoadingToast")};G(()=>(_.addEventListener("inFlightQueryStart",s),_.addEventListener("inFlightQueryEnd",C),_.QueriesLoading&&s(),()=>{_.removeEventListener("inFlightQueryStart",s),_.removeEventListener("inFlightQueryEnd",C)})),t.params,G(()=>!0);let m={initialData:void 0,initialError:void 0},y=O`select service_id, 
case 
when monday = true then 'Monday'
when tuesday = true then 'Tuesday'
when wednesday = true then 'Wednesday'
when thursday = true then 'Thursday'
when friday = true then 'Friday'
when saturday = true then 'Saturday'
when sunday = true then 'Sunday'
end as DoW from GTFS.calendar`,p=`select service_id, 
case 
when monday = true then 'Monday'
when tuesday = true then 'Tuesday'
when wednesday = true then 'Wednesday'
when thursday = true then 'Thursday'
when friday = true then 'Friday'
when saturday = true then 'Saturday'
when sunday = true then 'Sunday'
end as DoW from GTFS.calendar`;o.calendar_data&&(o.calendar_data instanceof Error?m.initialError=o.calendar_data:m.initialData=o.calendar_data,o.calendar_columns&&(m.knownColumns=o.calendar_columns));let F,v=!1;const E=_.createReactive({callback:c=>{n(0,F=c)},execFn:a},{id:"calendar",...m});return E(p,{noResolve:y,...m}),globalThis[Symbol.for("calendar")]={get value(){return F}},d.$$set=c=>{"data"in c&&n(1,i=c.data)},d.$$.update=()=>{d.$$.dirty&2&&n(2,{data:o={},customFormattingSettings:l,__db:w}=i,o),d.$$.dirty&4&&ne.set(Object.keys(o).length>0),d.$$.dirty&128&&t.params,d.$$.dirty&120&&(y||!v?y||(E(p,{noResolve:y,...m}),n(6,v=!0)):E(p,{noResolve:y}))},n(4,y=O`select service_id, 
case 
when monday = true then 'Monday'
when tuesday = true then 'Tuesday'
when wednesday = true then 'Wednesday'
when thursday = true then 'Thursday'
when friday = true then 'Friday'
when saturday = true then 'Saturday'
when sunday = true then 'Sunday'
end as DoW from GTFS.calendar`),n(5,p=`select service_id, 
case 
when monday = true then 'Monday'
when tuesday = true then 'Tuesday'
when wednesday = true then 'Wednesday'
when thursday = true then 'Thursday'
when friday = true then 'Friday'
when saturday = true then 'Saturday'
when sunday = true then 'Sunday'
end as DoW from GTFS.calendar`),[F,i,o,m,y,p,v,t]}class ge extends P{constructor(r){super(),X(this,r,le,ce,A,{data:1})}}export{ge as component};
