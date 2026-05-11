import{n as e}from"./chunk-DnJy8xQt.js";import{l as t,o as n,s as r,t as i}from"./iframe-BW5DCdD4.js";import{n as a,t as o}from"./Box-kbFKuNHP.js";import{a as s,r as c}from"./colourMap-DueyOdYm.js";import{t as l}from"./Text-Lnf19rpN.js";import{t as u}from"./Text-Bi4mbATJ.js";import{n as d,t as f}from"./colourOptions-BAiv2n1t.js";import{t as p}from"./Divider-DHMMDt34.js";import{t as m}from"./Divider-DSZKbxT6.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{r(),d(),o(),m(),u(),c(),h=i(),g=()=>{let e=[],t=e=>e.startsWith(`color`)?e.split(`.`).slice(0,2).join(`.`):e.split(`.`).slice(0,1).join(`.`);return new Set(f.map(e=>t(e))).forEach(t=>{let n=t.split(`.`).slice(0).join(` `).replace(/\b\w/g,e=>e.toUpperCase()),r=f.filter(e=>e.startsWith(t));e.push({title:n,colors:r})}),e},_=({colorName:e})=>{let t=s(e,n());return(0,h.jsxs)(T,{width:`260px`,children:[(0,h.jsx)(E,{$colorName:e,width:`100%`,pt:{custom:`50%`}}),(0,h.jsx)(p,{}),(0,h.jsxs)(a,{px:`space.200`,py:`space.050`,flex:!0,direction:`column`,children:[(0,h.jsx)(l,{tag:`span`,typo:`body-regular`,children:e}),(0,h.jsx)(l,{tag:`span`,typo:`caption`,color:`sesame`,children:t.toUpperCase()})]})]})},v=({title:e,colors:t})=>(0,h.jsxs)(a,{width:`100%`,children:[(0,h.jsx)(a,{mb:`space.200`,children:(0,h.jsx)(l,{tag:`span`,typo:`headline-small`,children:e})}),(0,h.jsx)(C,{children:t.map(e=>(0,h.jsx)(_,{colorName:e},e))})]}),y=()=>(0,h.jsx)(w,{children:g().map(e=>(0,h.jsx)(v,{title:e.title,colors:e.colors},e.title))}),b={title:`Foundation/Design System Colors`,components:y},x=()=>(0,h.jsx)(y,{}),S=x.bind({}),C=t(a)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({theme:e})=>e.space[200]};
`,w=t(a)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,T=t(a)`
  background-color: ${({theme:e})=>e.color.surface.base[`000`]};
  border: 1px solid ${({theme:e})=>e.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,E=t(a)`
  background-color: ${({$colorName:e,theme:t})=>s(e,t)};
`,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <ColorsPage />`,...S.parameters?.docs?.source}}},D=[`List`]}))();export{S as List,D as __namedExportsOrder,b as default};
//# sourceMappingURL=designSystemColors.stories-CyXcKPbq.js.map