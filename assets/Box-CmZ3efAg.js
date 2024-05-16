import{r as S,R as U}from"./index-DVXBtNgz.js";import{u as q}from"./styled-components.browser.esm-DtukEPFB.js";const h={small:0,medium:768,large:1024},z=Object.keys(h),A=$=>typeof $=="object"&&$!==null&&z.includes(Object.keys($)[0]),n=($,e)=>{if(!A($))return`
      @media (min-width: ${h.small}px) {
        ${e($)}
      }
    `;const m=Object.keys($);let o="";return m.forEach(r=>{o+=`
        @media (min-width: ${h[r]}px) {
          ${e($[r])}
        }
      `}),o},i=$=>typeof $=="string"?$:typeof $.custom=="string"?$.custom:`${$.custom}px`,D=$=>{const{$m:e,$mx:m,$my:o,$ml:r,$mr:a,$mt:g,$mb:s}=$;return`
    ${e?n(e,t=>`margin: ${i(t)};`):""}
    ${m?n(m,t=>`
        margin-left: ${i(t)};
        margin-right: ${i(t)};
      `):""}
    ${o?n(o,t=>`
        margin-top: ${i(t)};
        margin-bottom: ${i(t)};
      `):""}
    ${r?n(r,t=>`margin-left: ${i(t)};`):""}
    ${a?n(a,t=>`margin-right: ${i(t)};`):""}
    ${g?n(g,t=>`margin-top: ${i(t)};`):""}
    ${s?n(s,t=>`margin-bottom: ${i(t)};`):""}
  `},F=$=>{const{$p:e,$px:m,$py:o,$pl:r,$pr:a,$pt:g,$pb:s}=$;return`
    ${e?n(e,t=>`padding: ${i(t)};`):""}
    ${m?n(m,t=>`
        padding-left: ${i(t)};
        padding-right: ${i(t)};
      `):""}
    ${o?n(o,t=>`
        padding-top: ${i(t)};
        padding-bottom: ${i(t)};
      `):""}
    ${r?n(r,t=>`padding-left: ${i(t)};`):""}
    ${a?n(a,t=>`padding-right: ${i(t)};`):""}
    ${g?n(g,t=>`padding-top: ${i(t)};`):""}
    ${s?n(s,t=>`padding-bottom: ${i(t)};`):""}
  `},J=$=>{const{$flex:e,$direction:m,$wrap:o,$flow:r,$justifyContent:a,$alignItems:g,$alignContent:s,$gap:t,$columnGap:d,$rowGap:c}=$;return`
    ${e?"display: flex;":""}
    ${m?n(m,p=>`flex-direction: ${p};`):""}
    ${o?`flex-wrap: ${o};`:""}
    ${r?`flex-flow: ${r};`:""}
    ${a?n(a,p=>`justify-content: ${p};`):""}
    ${g?n(g,p=>`align-items: ${p};`):""}
    ${s?n(s,p=>`align-content: ${p};`):""}
    ${t?n(t,p=>`gap: ${i(p)};`):""}
    ${d?n(d,p=>`column-gap: ${i(p)};`):""}
    ${c?n(c,p=>`row-gap: ${i(p)};`):""}
  `},K=$=>{const{$width:e,$height:m,$maxWidth:o,$minWidth:r,$minHeight:a,$maxHeight:g}=$;return`
    ${e?`width: ${e};`:""}
    ${o?`max-width: ${o};`:""}
    ${r?`min-width: ${r};`:""}
    ${m?`height: ${m};`:""}
    ${a?`min-height: ${a};`:""}
    ${g?`max-height: ${g};`:""}
  `},l=S.forwardRef(({children:$,...e},m)=>{const{m:o,mx:r,my:a,ml:g,mr:s,mt:t,mb:d,p:c,px:p,py:f,pl:x,pr:w,pt:y,pb:b,direction:u,wrap:j,flex:B,flow:C,justifyContent:k,alignItems:G,alignContent:H,gap:W,rowGap:I,columnGap:P,width:R,maxWidth:E,minWidth:O,height:M,maxHeight:N,minHeight:_,...L}=e;return U.createElement(Q,{ref:m,$m:o,$mx:r,$my:a,$ml:g,$mr:s,$mt:t,$mb:d,$p:c,$px:p,$py:f,$pl:x,$pr:w,$pt:y,$pb:b,$direction:u,$wrap:j,$flex:B,$flow:C,$justifyContent:k,$alignItems:G,$alignContent:H,$gap:W,$rowGap:I,$columnGap:P,$width:R,$maxWidth:E,$minWidth:O,$height:M,$maxHeight:N,$minHeight:_,...L},$)});l.displayName="Box";const Q=q.div`
  ${D};
  ${F};
  ${J};
  ${K};
`;l.__docgenInfo={description:"",methods:[],displayName:"Box"};export{l as B};
