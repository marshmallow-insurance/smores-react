import{d as P}from"./index-ogSvIofg.js";const{useEffect:_,useMemo:h}=__STORYBOOK_MODULE_PREVIEW_API__,{global:j}=__STORYBOOK_MODULE_GLOBAL__,{logger:X}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",U={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:b,window:O}=j,D=()=>{var r;return!!((r=O==null?void 0:O.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},A=r=>{(Array.isArray(r)?r:[r]).forEach(N)},N=r=>{var o;let e=b.getElementById(r);e&&((o=e.parentElement)==null||o.removeChild(e))},F=(r,e)=>{let o=b.getElementById(r);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let d=b.createElement("style");d.setAttribute("id",r),d.innerHTML=e,b.head.appendChild(d)}},Y=(r,e,o)=>{var a;let d=b.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let n=b.createElement("style");n.setAttribute("id",r),n.innerHTML=e;let i=`addon-backgrounds-grid${o?`-docs-${o}`:""}`,t=b.getElementById(i);t?(a=t.parentElement)==null||a.insertBefore(n,t):b.head.appendChild(n)}},W={cellSize:100,cellAmount:10,opacity:.8},w="addon-backgrounds",R="addon-backgrounds-grid",q=D()?"":"transition: background-color 0.3s;",J=(r,e)=>{let{globals:o,parameters:d,viewMode:a,id:n}=e,{options:i=U,disable:t,grid:s=W}=d[p]||{},u=o[p]||{},c=u.value,l=c?i[c]:void 0,$=(l==null?void 0:l.value)||"transparent",m=u.grid||!1,y=!!l&&!t,f=a==="docs"?`#anchor--${n} .docs-story`:".sb-show-main",E=a==="docs"?`#anchor--${n} .docs-story`:".sb-show-main",H=d.layout===void 0||d.layout==="padded",L=a==="docs"?20:H?16:0,{cellAmount:k,cellSize:g,opacity:x,offsetX:S=L,offsetY:v=L}=s,B=a==="docs"?`${w}-docs-${n}`:`${w}-color`,G=a==="docs"?n:null;_(()=>{let M=`
    ${f} {
      background: ${$} !important;
      ${q}
      }`;if(!y){A(B);return}Y(B,M,G)},[f,B,G,y,$]);let T=a==="docs"?`${R}-docs-${n}`:`${R}`;return _(()=>{if(!m){A(T);return}let M=[`${g*k}px ${g*k}px`,`${g*k}px ${g*k}px`,`${g}px ${g}px`,`${g}px ${g}px`].join(", "),K=`
        ${E} {
          background-size: ${M} !important;
          background-position: ${S}px ${v}px, ${S}px ${v}px, ${S}px ${v}px, ${S}px ${v}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${x/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x/2}) 1px, transparent 1px) !important;
        }
      `;F(T,K)},[k,g,E,T,m,S,v,x]),r()},Q=(r,e=[],o)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r)||r)return r;let d=e.find(a=>a.name===o);if(d)return d.value;if(o){let a=e.map(n=>n.name).join(", ");X.warn(P`
        Backgrounds Addon: could not find the default color "${o}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},Z=(r,e)=>{var c;let{globals:o,parameters:d}=e,a=(c=o[p])==null?void 0:c.value,n=d[p],i=h(()=>n.disable?"transparent":Q(a,n.values,n.default),[n,a]),t=h(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=h(()=>`
      ${s} {
        background: ${i} !important;
        ${D()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return _(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){A(l);return}Y(l,u,e.viewMode==="docs"?e.id:null)},[t,u,e]),r()},V=(r,e)=>{var y;let{globals:o,parameters:d}=e,a=d[p].grid,n=((y=o[p])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:i,cellSize:t,opacity:s}=a,u=e.viewMode==="docs",c=d.layout===void 0||d.layout==="padded"?16:0,l=a.offsetX??(u?20:c),$=a.offsetY??(u?20:c),m=h(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${t*i}px ${t*i}px`,`${t*i}px ${t*i}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${f} {
        background-size: ${E} !important;
        background-position: ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px, ${l}px ${$}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return _(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!n){A(f);return}F(f,m)},[n,m,e]),r()},C,ae=(C=globalThis.FEATURES)!=null&&C.backgroundsStoryGlobals?[J]:[V,Z],I,de={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!((I=globalThis.FEATURES)!=null&&I.backgroundsStoryGlobals)&&{values:Object.values(U)}}},ee={[p]:{value:void 0,grid:!1}},z,ne=(z=globalThis.FEATURES)!=null&&z.backgroundsStoryGlobals?ee:{[p]:null};export{ae as decorators,ne as initialGlobals,de as parameters};
//# sourceMappingURL=preview-DhV18CwB.js.map
