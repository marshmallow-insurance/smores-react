import{s as V}from"./styled-components.browser.esm-1fe49baf.js";const m={small:0,medium:768,large:1024},h=Object.keys(m),x=n=>typeof n=="object"&&n!==null&&h.includes(Object.keys(n)[0]),r=(n,p)=>{if(!x(n))return`
      @media (min-width: ${m.small}px) {
        ${p(n)}
      }
    `;const l=Object.keys(n);let i="";return l.forEach(t=>{i+=`
        @media (min-width: ${m[t]}px) {
          ${p(n[t])}
        }
      `}),i},a=n=>typeof n=="string"?n:typeof n.custom=="string"?n.custom:`${n.custom}px`,c=n=>{const{m:p,mx:l,my:i,ml:t,mr:o,mt:d,mb:u}=n;return`
    ${p?r(p,e=>`margin: ${a(e)};`):""}
    ${l?r(l,e=>`
        margin-left: ${a(e)};
        margin-right: ${a(e)};
      `):""}
    ${i?r(i,e=>`
        margin-top: ${a(e)};
        margin-bottom: ${a(e)};
      `):""}
    ${t?r(t,e=>`margin-left: ${a(e)};`):""}
    ${o?r(o,e=>`margin-right: ${a(e)};`):""}
    ${d?r(d,e=>`margin-top: ${a(e)};`):""}
    ${u?r(u,e=>`margin-bottom: ${a(e)};`):""}
  `},f=n=>{const{p,px:l,py:i,pl:t,pr:o,pt:d,pb:u}=n;return`
    ${p?r(p,e=>`padding: ${a(e)};`):""}
    ${l?r(l,e=>`
        padding-left: ${a(e)};
        padding-right: ${a(e)};
      `):""}
    ${i?r(i,e=>`
        padding-top: ${a(e)};
        padding-bottom: ${a(e)};
      `):""}
    ${t?r(t,e=>`padding-left: ${a(e)};`):""}
    ${o?r(o,e=>`padding-right: ${a(e)};`):""}
    ${d?r(d,e=>`padding-top: ${a(e)};`):""}
    ${u?r(u,e=>`padding-bottom: ${a(e)};`):""}
  `};try{a.displayName="resolveSpacing",a.__docgenInfo={description:"",displayName:"resolveSpacing",props:{custom:{defaultValue:null,description:"",name:"custom",required:!0,type:{name:"string | number"}}}}}catch{}try{c.displayName="margin",c.__docgenInfo={description:"",displayName:"margin",props:{m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}try{f.displayName="padding",f.__docgenInfo={description:"",displayName:"padding",props:{p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const g=n=>{const{flex:p,direction:l,wrap:i,flow:t,justifyContent:o,alignItems:d,alignContent:u,gap:e,columnGap:P,rowGap:$}=n;return`
    ${p?"display: flex;":""}
    ${l?r(l,s=>`flex-direction: ${s};`):""}
    ${i?`flex-wrap: ${i};`:""}
    ${t?`flex-flow: ${t};`:""}
    ${o?r(o,s=>`justify-content: ${s};`):""}
    ${d?r(d,s=>`align-items: ${s};`):""}
    ${u?r(u,s=>`align-content: ${s};`):""}
    ${e?r(e,s=>`gap: ${a(s)};`):""}
    ${P?r(P,s=>`column-gap: ${a(s)};`):""}
    ${$?r($,s=>`row-gap: ${a(s)};`):""}
  `};try{g.displayName="flex",g.__docgenInfo={description:"",displayName:"flex",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "column-reverse" | "row-reverse">'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},flow:{defaultValue:null,description:"",name:"flow",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "baseline" | "stretch">'}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const y=n=>{const{width:p,height:l,maxWidth:i,minWidth:t,minHeight:o,maxHeight:d}=n;return`
    ${p?`width: ${p};`:""}
    ${i?`max-width: ${i};`:""}
    ${t?`min-width: ${t};`:""}
    ${l?`height: ${l};`:""}
    ${o?`min-height: ${o};`:""}
    ${d?`max-height: ${d};`:""}
  `};try{y.displayName="measure",y.__docgenInfo={description:"",displayName:"measure",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}}}}}catch{}const q=V.div`
  ${c};
  ${f};
  ${g};
  ${y};
`;try{q.displayName="Box",q.__docgenInfo={description:"",displayName:"Box",props:{maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "column-reverse" | "row-reverse">'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},flow:{defaultValue:null,description:"",name:"flow",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "baseline" | "stretch">'}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{q as B};
//# sourceMappingURL=Box-0e300cd1.js.map
