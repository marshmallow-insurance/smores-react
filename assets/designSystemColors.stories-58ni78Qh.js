import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,o as n,r}from"./styled-components.browser.esm-DqVqIN2B.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Box-CF6AhRTo.js";import{a as s,r as c}from"./colourMap-DF1EzASY.js";import{n as l,t as u}from"./Text-DJuEbAWY.js";import{n as d,t as f}from"./colourOptions-BomJ38fk.js";import{n as p,t as m}from"./Divider-vO5xPvMY.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{t(),d(),a(),p(),l(),c(),h=i(),g=()=>{let e=[],t=e=>e.startsWith(`color`)?e.split(`.`).slice(0,2).join(`.`):e.split(`.`).slice(0,1).join(`.`);return new Set(f.map(e=>t(e))).forEach(t=>{let n=t.split(`.`).slice(0).join(` `).replace(/\b\w/g,e=>e.toUpperCase()),r=f.filter(e=>e.startsWith(t));e.push({title:n,colors:r})}),e},_=({colorName:e})=>{let t=n(),r=s(e,t);return(0,h.jsxs)(T,{width:`260px`,children:[(0,h.jsx)(E,{$colorName:e,width:`100%`,pt:{custom:`50%`}}),(0,h.jsx)(m,{}),(0,h.jsxs)(o,{px:`space.200`,py:`space.050`,flex:!0,direction:`column`,children:[(0,h.jsx)(u,{tag:`span`,typo:`body-regular`,children:e}),(0,h.jsx)(u,{tag:`span`,typo:`caption`,color:`sesame`,children:r.toUpperCase()})]})]})},v=({title:e,colors:t})=>(0,h.jsxs)(o,{width:`100%`,children:[(0,h.jsx)(o,{mb:`space.200`,children:(0,h.jsx)(u,{tag:`span`,typo:`headline-small`,children:e})}),(0,h.jsx)(C,{children:t.map(e=>(0,h.jsx)(_,{colorName:e},e))})]}),y=()=>(0,h.jsx)(w,{children:g().map(e=>(0,h.jsx)(v,{title:e.title,colors:e.colors},e.title))}),b={title:`Foundation/Design System Colors`,components:y},x=()=>(0,h.jsx)(y,{}),S=x.bind({}),C=r(o)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({theme:e})=>e.space[200]};
`,w=r(o)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,T=r(o)`
  background-color: ${({theme:e})=>e.color.surface.base[`000`]};
  border: 1px solid ${({theme:e})=>e.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,E=r(o)`
  background-color: ${({$colorName:e,theme:t})=>s(e,t)};
`,D=[`List`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <ColorsPage />`,...S.parameters?.docs?.source}}}})))()}O();export{S as List,D as __namedExportsOrder,b as default};
//# sourceMappingURL=designSystemColors.stories-58ni78Qh.js.map