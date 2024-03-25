import{j as T,u as L}from"./styled-components.browser.esm-NpdVBoMN.js";import{r as U}from"./index-BBkUAzwr.js";const $={small:0,medium:768,large:1024},z=Object.keys($),D=n=>typeof n=="object"&&n!==null&&z.includes(Object.keys(n)[0]),r=(n,p)=>{if(!D(n))return`
      @media (min-width: ${$.small}px) {
        ${p(n)}
      }
    `;const l=Object.keys(n);let i="";return l.forEach(t=>{i+=`
        @media (min-width: ${$[t]}px) {
          ${p(n[t])}
        }
      `}),i},a=n=>typeof n=="string"?n:typeof n.custom=="string"?n.custom:`${n.custom}px`,f=n=>{const{$m:p,$mx:l,$my:i,$ml:t,$mr:s,$mt:d,$mb:u}=n;return`
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
    ${s?r(s,e=>`margin-right: ${a(e)};`):""}
    ${d?r(d,e=>`margin-top: ${a(e)};`):""}
    ${u?r(u,e=>`margin-bottom: ${a(e)};`):""}
  `},g=n=>{const{$p:p,$px:l,$py:i,$pl:t,$pr:s,$pt:d,$pb:u}=n;return`
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
    ${s?r(s,e=>`padding-right: ${a(e)};`):""}
    ${d?r(d,e=>`padding-top: ${a(e)};`):""}
    ${u?r(u,e=>`padding-bottom: ${a(e)};`):""}
  `};try{a.displayName="resolveSpacing",a.__docgenInfo={description:"",displayName:"resolveSpacing",props:{custom:{defaultValue:null,description:"",name:"custom",required:!0,type:{name:"string | number"}}}}}catch{}try{f.displayName="margin",f.__docgenInfo={description:"",displayName:"margin",props:{$m:{defaultValue:null,description:"",name:"$m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$mx:{defaultValue:null,description:"",name:"$mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},$my:{defaultValue:null,description:"",name:"$my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$ml:{defaultValue:null,description:"",name:"$ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$mr:{defaultValue:null,description:"",name:"$mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$mt:{defaultValue:null,description:"",name:"$mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$mb:{defaultValue:null,description:"",name:"$mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}try{g.displayName="padding",g.__docgenInfo={description:"",displayName:"padding",props:{$p:{defaultValue:null,description:"",name:"$p",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$px:{defaultValue:null,description:"",name:"$px",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$py:{defaultValue:null,description:"",name:"$py",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$pl:{defaultValue:null,description:"",name:"$pl",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$pr:{defaultValue:null,description:"",name:"$pr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$pt:{defaultValue:null,description:"",name:"$pt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$pb:{defaultValue:null,description:"",name:"$pb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const y=n=>{const{$flex:p,$direction:l,$wrap:i,$flow:t,$justifyContent:s,$alignItems:d,$alignContent:u,$gap:e,$columnGap:m,$rowGap:c}=n;return`
    ${p?"display: flex;":""}
    ${l?r(l,o=>`flex-direction: ${o};`):""}
    ${i?`flex-wrap: ${i};`:""}
    ${t?`flex-flow: ${t};`:""}
    ${s?r(s,o=>`justify-content: ${o};`):""}
    ${d?r(d,o=>`align-items: ${o};`):""}
    ${u?r(u,o=>`align-content: ${o};`):""}
    ${e?r(e,o=>`gap: ${a(o)};`):""}
    ${m?r(m,o=>`column-gap: ${a(o)};`):""}
    ${c?r(c,o=>`row-gap: ${a(o)};`):""}
  `};try{y.displayName="flex",y.__docgenInfo={description:"",displayName:"flex",props:{$direction:{defaultValue:null,description:"",name:"$direction",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "column-reverse" | "row-reverse">'}},$wrap:{defaultValue:null,description:"",name:"$wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},$flex:{defaultValue:null,description:"",name:"$flex",required:!1,type:{name:"boolean"}},$flow:{defaultValue:null,description:"",name:"$flow",required:!1,type:{name:"string"}},$justifyContent:{defaultValue:null,description:"",name:"$justifyContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly">'}},$alignItems:{defaultValue:null,description:"",name:"$alignItems",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "baseline" | "stretch">'}},$alignContent:{defaultValue:null,description:"",name:"$alignContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch">'}},$gap:{defaultValue:null,description:"",name:"$gap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$rowGap:{defaultValue:null,description:"",name:"$rowGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},$columnGap:{defaultValue:null,description:"",name:"$columnGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const P=n=>{const{$width:p,$height:l,$maxWidth:i,$minWidth:t,$minHeight:s,$maxHeight:d}=n;return`
    ${p?`width: ${p};`:""}
    ${i?`max-width: ${i};`:""}
    ${t?`min-width: ${t};`:""}
    ${l?`height: ${l};`:""}
    ${s?`min-height: ${s};`:""}
    ${d?`max-height: ${d};`:""}
  `};try{P.displayName="measure",P.__docgenInfo={description:"",displayName:"measure",props:{$width:{defaultValue:null,description:"",name:"$width",required:!1,type:{name:"string"}},$maxWidth:{defaultValue:null,description:"",name:"$maxWidth",required:!1,type:{name:"string"}},$minWidth:{defaultValue:null,description:"",name:"$minWidth",required:!1,type:{name:"string"}},$height:{defaultValue:null,description:"",name:"$height",required:!1,type:{name:"string"}},$maxHeight:{defaultValue:null,description:"",name:"$maxHeight",required:!1,type:{name:"string"}},$minHeight:{defaultValue:null,description:"",name:"$minHeight",required:!1,type:{name:"string"}}}}}catch{}const h=U.forwardRef(({children:n,...p},l)=>{const{m:i,mx:t,my:s,ml:d,mr:u,mt:e,mb:m,p:c,px:o,py:x,pl:q,pr:V,pt:w,pb:v,direction:_,wrap:R,flex:S,flow:b,justifyContent:C,alignItems:j,alignContent:G,gap:H,rowGap:W,columnGap:I,width:N,maxWidth:B,minWidth:k,height:E,maxHeight:O,minHeight:A,...M}=p;return T(F,{ref:l,$m:i,$mx:t,$my:s,$ml:d,$mr:u,$mt:e,$mb:m,$p:c,$px:o,$py:x,$pl:q,$pr:V,$pt:w,$pb:v,$direction:_,$wrap:R,$flex:S,$flow:b,$justifyContent:C,$alignItems:j,$alignContent:G,$gap:H,$rowGap:W,$columnGap:I,$width:N,$maxWidth:B,$minWidth:k,$height:E,$maxHeight:O,$minHeight:A,...M,children:n})});h.displayName="Box";const F=L.div`
  ${f};
  ${g};
  ${y};
  ${P};
`;try{h.displayName="Box",h.__docgenInfo={description:"",displayName:"Box",props:{m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:'ResponsiveProp<"row" | "column" | "column-reverse" | "row-reverse">'}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"boolean"}},flow:{defaultValue:null,description:"",name:"flow",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly">'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "baseline" | "stretch">'}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'ResponsiveProp<"center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch">'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"ElementType"}}}}}catch{}export{h as B};
