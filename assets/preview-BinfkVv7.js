const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-5tgfmAFV.js","./_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./iframe-v41lndLm.js";import{e as h}from"./index-CpGOSz0a.js";const{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,{global:N}=__STORYBOOK_MODULE_GLOBAL__;var m="storybook/a11y",x=`${m}/result`,A=`${m}/error`,S=`${m}/manual`,f={RESULT:x,ERROR:A,MANUAL:S},{document:R}=N,c=L.getChannel(),v={config:{},options:{}},V=["region"],_=[],p=!1,w=async()=>{if(_.length===0){p=!1;return}p=!0;let a=_.shift();a&&await a(),w()},g=async(a=v)=>{let{default:n}=await O(async()=>{const{default:t}=await import("./axe-5tgfmAFV.js").then(s=>s.a);return{default:t}},__vite__mapDeps([0,1]),import.meta.url),{element:r="body",config:e={},options:o={}}=a,l=R.querySelector(r)??R.body;if(!l)return;n.reset();let u={...e,rules:[...V.map(t=>({id:t,enabled:!1})),...(e==null?void 0:e.rules)??[]]};return n.configure(u),new Promise((t,s)=>{let d=async()=>{try{let i=await n.run(l,o);t(i)}catch(i){s(i)}};_.push(d),p||w()})};c.on(f.MANUAL,async(a,n=v)=>{try{let r=await g(n),e=JSON.parse(JSON.stringify(r));c.emit(f.RESULT,e,a)}catch(r){c.emit(f.ERROR,r)}});function E(){try{return!1}catch{return!1}}var y=!1,I=async({reporting:a,parameters:n,globals:r})=>{let e=n.a11y,o=r.a11y,l=(e==null?void 0:e.manual)!==!0&&(e==null?void 0:e.disable)!==!0&&(e==null?void 0:e.test)!=="off"&&(o==null?void 0:o.manual)!==!0,u=()=>{switch(e==null?void 0:e.test){case"todo":return"warning";case"error":default:return"failed"}};if(l)try{let t=await g(e);if(t){let s=((t==null?void 0:t.violations.length)??0)>0;if(a.addReport({type:"a11y",version:1,result:t,status:s?u():"passed"}),E()&&s&&u()==="failed"){if(!y){let{toHaveNoViolations:d}=await O(async()=>{const{toHaveNoViolations:i}=await import("./matchers-57EZJSQE-CmYbU8gA.js");return{toHaveNoViolations:i}},[],import.meta.url);h.extend({toHaveNoViolations:d}),y=!0}h(t).toHaveNoViolations()}}}catch(t){if(a.addReport({type:"a11y",version:1,result:{error:t},status:"failed"}),E())throw t}},T={a11y:{manual:!1}},M={a11y:{test:"todo"}};export{I as experimental_afterEach,T as initialGlobals,M as parameters};
//# sourceMappingURL=preview-BinfkVv7.js.map
