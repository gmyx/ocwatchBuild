import{s as z,a as Q,e as L,b as R,c as k,h as K,d as M,f as h,i as F,j as G,k as q,l as D,m as X,o as Y,p as B,q as H,n as C}from"../chunks/scheduler.CwZefb0o.js";import{S as J,i as W,b as A,d as U,m as V,t as T,a as S,c as Z,e as $,g as tt}from"../chunks/index.RfiDZozx.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.D5SiE8nu.js";import{w as et}from"../chunks/entry.CLsv0ICV.js";import{s as at,Q as g,p as st,r as N,C as ot,t as O}from"../chunks/inferColumnTypes.CZSR8CUR.js";import{h as P}from"../chunks/setTrackProxy.Cyfckp0w.js";import{e as nt,p as it}from"../chunks/inputs.uqKFdAxO.js";import{p as rt}from"../chunks/stores.DybgH1qU.js";import{Q as lt}from"../chunks/QueryViewer.DbhmcTXQ.js";import{P as ut}from"../chunks/PointMap.lO9i8YSx.js";function pt(i){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:C,p:C,d:C}}function j(i){let n,s;return n=new lt({props:{queryID:"uniondata",queryResult:i[0]}}),{c(){A(n.$$.fragment)},l(a){U(n.$$.fragment,a)},m(a,l){V(n,a,l),s=!0},p(a,l){const u={};l&1&&(u.queryResult=a[0]),n.$set(u)},i(a){s||(T(n.$$.fragment,a),s=!0)},o(a){S(n.$$.fragment,a),s=!1},d(a){$(n,a)}}}function ct(i){let n,s,a,l,u,r,c,d;function b(t,o){return pt}let _=b()(i),e=i[0]&&j(i);return c=new ut({props:{data:i[0],lat:"lat",long:"lon",height:"600",value:"color",colorPalette:["red","blue"]}}),{c(){n=Q(),_.c(),s=L("meta"),a=L("meta"),l=R(),u=Q(),e&&e.c(),r=Q(),A(c.$$.fragment),this.h()},l(t){n=k(t);const o=K("svelte-1j2izld",document.head);_.l(o),s=M(o,"META",{name:!0,content:!0}),a=M(o,"META",{name:!0,content:!0}),l=R(),o.forEach(h),u=k(t),e&&e.l(t),r=k(t),U(c.$$.fragment,t),this.h()},h(){F(s,"name","twitter:card"),F(s,"content","summary"),F(a,"name","twitter:site"),F(a,"content","@evidence_dev")},m(t,o){G(t,n,o),_.m(document.head,null),q(document.head,s),q(document.head,a),q(document.head,l),G(t,u,o),e&&e.m(t,o),G(t,r,o),V(c,t,o),d=!0},p(t,[o]){_.p(t,o),t[0]?e?(e.p(t,o),o&1&&T(e,1)):(e=j(t),e.c(),T(e,1),e.m(r.parentNode,r)):e&&(tt(),S(e,1,1,()=>{e=null}),Z());const m={};o&1&&(m.data=t[0]),c.$set(m)},i(t){d||(T(e),T(c.$$.fragment,t),d=!0)},o(t){S(e),S(c.$$.fragment,t),d=!1},d(t){t&&(h(n),h(u),h(r)),_.d(t),h(s),h(a),h(l),e&&e.d(t),$(c,t)}}}function mt(i,n,s){let a,l;D(i,rt,p=>s(7,a=p)),D(i,N,p=>s(14,l=p));let{data:u}=n,{data:r={},customFormattingSettings:c,__db:d,inputs:b}=u;X(N,l="00b967a2409e80df94e9868d627b2534",l);let I=nt(et(b));Y(I.subscribe(p=>b=p)),B(ot,{getCustomFormats:()=>c.customFormats||[]});const _=(p,x)=>it(d.query,p,{query_name:x});at(_);let e;const t=()=>{e||(e=setTimeout(()=>{O.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},o=()=>{e?(clearTimeout(e),e=null):O.dismiss("LoadingToast")};H(()=>(g.addEventListener("inFlightQueryStart",t),g.addEventListener("inFlightQueryEnd",o),g.QueriesLoading&&t(),()=>{g.removeEventListener("inFlightQueryStart",t),g.removeEventListener("inFlightQueryEnd",o)})),a.params,H(()=>!0);let m={initialData:void 0,initialError:void 0},f=P`select stop_id as id, stop_lat as lat, stop_lon as lon, 1 as color from GTFS.stops
union
select shape_id as id, shape_pt_lat as lat, shape_pt_lon as lon, 2 as color from GTFS.shapes where shape_id in ('shp-10-54')`,y=`select stop_id as id, stop_lat as lat, stop_lon as lon, 1 as color from GTFS.stops
union
select shape_id as id, shape_pt_lat as lat, shape_pt_lon as lon, 2 as color from GTFS.shapes where shape_id in ('shp-10-54')`;r.uniondata_data&&(r.uniondata_data instanceof Error?m.initialError=r.uniondata_data:m.initialData=r.uniondata_data,r.uniondata_columns&&(m.knownColumns=r.uniondata_columns));let E,v=!1;const w=g.createReactive({callback:p=>{s(0,E=p)},execFn:_},{id:"uniondata",...m});return w(y,{noResolve:f,...m}),globalThis[Symbol.for("uniondata")]={get value(){return E}},i.$$set=p=>{"data"in p&&s(1,u=p.data)},i.$$.update=()=>{i.$$.dirty&2&&s(2,{data:r={},customFormattingSettings:c,__db:d}=u,r),i.$$.dirty&4&&st.set(Object.keys(r).length>0),i.$$.dirty&128&&a.params,i.$$.dirty&120&&(f||!v?f||(w(y,{noResolve:f,...m}),s(6,v=!0)):w(y,{noResolve:f}))},s(4,f=P`select stop_id as id, stop_lat as lat, stop_lon as lon, 1 as color from GTFS.stops
union
select shape_id as id, shape_pt_lat as lat, shape_pt_lon as lon, 2 as color from GTFS.shapes where shape_id in ('shp-10-54')`),s(5,y=`select stop_id as id, stop_lat as lat, stop_lon as lon, 1 as color from GTFS.stops
union
select shape_id as id, shape_pt_lat as lat, shape_pt_lon as lon, 2 as color from GTFS.shapes where shape_id in ('shp-10-54')`),[E,u,r,m,f,y,v,a]}class Et extends J{constructor(n){super(),W(this,n,mt,ct,z,{data:1})}}export{Et as component};