import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,l as r,s as i}from"./iframe-BxKzTu0s.js";import{n as a,t as o}from"./Box-DjWgY_1i.js";import{a as s,r as c}from"./colourMap-BjRICJ1p.js";import{n as l,t as u}from"./Text-Bl6zCyOw.js";import{n as d,t as f}from"./colourOptions-BW3bBc09.js";import{n as p,t as m}from"./Divider-OUPyS_uY.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),d(),a(),p(),l(),c(),h=t(),g=()=>{let e=[],t=e=>e.startsWith(`color`)?e.split(`.`).slice(0,2).join(`.`):e.split(`.`).slice(0,1).join(`.`);return new Set(f.map(e=>t(e))).forEach(t=>{let n=t.split(`.`).slice(0).join(` `).replace(/\b\w/g,e=>e.toUpperCase()),r=f.filter(e=>e.startsWith(t));e.push({title:n,colors:r})}),e},_=({colorName:e})=>{let t=r(),n=s(e,t);return(0,h.jsxs)(T,{width:`260px`,children:[(0,h.jsx)(E,{$colorName:e,width:`100%`,pt:{custom:`50%`}}),(0,h.jsx)(m,{}),(0,h.jsxs)(o,{px:`space.200`,py:`space.050`,flex:!0,direction:`column`,children:[(0,h.jsx)(u,{tag:`span`,typo:`body-regular`,children:e}),(0,h.jsx)(u,{tag:`span`,typo:`caption`,color:`sesame`,children:n.toUpperCase()})]})]})},v=({title:e,colors:t})=>(0,h.jsxs)(o,{width:`100%`,children:[(0,h.jsx)(o,{mb:`space.200`,children:(0,h.jsx)(u,{tag:`span`,typo:`headline-small`,children:e})}),(0,h.jsx)(C,{children:t.map(e=>(0,h.jsx)(_,{colorName:e},e))})]}),y=()=>(0,h.jsx)(w,{children:g().map(e=>(0,h.jsx)(v,{title:e.title,colors:e.colors},e.title))}),b={title:`Foundation/Design System Colors`,components:y},x=()=>(0,h.jsx)(y,{}),S=x.bind({}),C=i(o)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({theme:e})=>e.space[200]};
`,w=i(o)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,T=i(o)`
  background-color: ${({theme:e})=>e.color.surface.base[`000`]};
  border: 1px solid ${({theme:e})=>e.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,E=i(o)`
  background-color: ${({$colorName:e,theme:t})=>s(e,t)};
`,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <ColorsPage />`,...S.parameters?.docs?.source}}},D=[`List`]})))()}O();export{S as List,D as __namedExportsOrder,b as default};
//# sourceMappingURL=designSystemColors.stories-h2YLmuRS.js.map