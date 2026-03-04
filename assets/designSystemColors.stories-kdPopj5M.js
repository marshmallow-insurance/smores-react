import{j as r,c as a,K as f}from"./iframe-CZZhQoZz.js";import{c as l}from"./colourOptions-UbrpuBup.js";import{B as t}from"./index-SJT6VA2_.js";import"./index-BKed5IOF.js";import"./index-CfkTbLwk.js";import{r as d}from"./colourMap-BwBTZqvR.js";import{D as h}from"./Divider-CLwalAXZ.js";import{T as n}from"./Text-8pqWeZ9q.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./polished.esm-CYsXSD1d.js";import"./index-VZxFFMLE.js";import"./focusOutline-Ci5Q9f0x.js";import"./shared.styles-BiyvvJ0m.js";const j=()=>{const o=[],e=s=>s.startsWith("color")?s.split(".").slice(0,2).join("."):s.split(".").slice(0,1).join(".");return new Set(l.map(s=>e(s))).forEach(s=>{const x=s.split(".").slice(0).join(" ").replace(/\b\w/g,p=>p.toUpperCase()),u=l.filter(p=>p.startsWith(s));o.push({title:x,colors:u})}),o},g=({colorName:o})=>{const e=f(),i=d(o,e);return r.jsxs(S,{width:"260px",children:[r.jsx(v,{$colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(h,{}),r.jsxs(t,{px:"space.200",py:"space.050",flex:!0,direction:"column",children:[r.jsx(n,{tag:"span",typo:"body-regular",children:o}),r.jsx(n,{tag:"span",typo:"caption",color:"sesame",children:i.toUpperCase()})]})]})},C=({title:o,colors:e})=>r.jsxs(t,{width:"100%",children:[r.jsx(t,{mb:"space.200",children:r.jsx(n,{tag:"span",typo:"headline-small",children:o})}),r.jsx(w,{children:e.map(i=>r.jsx(g,{colorName:i},i))})]}),m=()=>r.jsx(y,{children:j().map(o=>r.jsx(C,{title:o.title,colors:o.colors},o.title))}),q={title:"Foundation/Design System Colors",components:m},b=()=>r.jsx(m,{}),c=b.bind({}),w=a(t)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({theme:o})=>o.space[200]};
`,y=a(t)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,S=a(t)`
  background-color: ${({theme:o})=>o.color.surface.base["000"]};
  border: 1px solid ${({theme:o})=>o.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,v=a(t)`
  background-color: ${({$colorName:o,theme:e})=>d(o,e)};
`;c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => <ColorsPage />",...c.parameters?.docs?.source}}};const z=["List"];export{c as List,z as __namedExportsOrder,q as default};
//# sourceMappingURL=designSystemColors.stories-kdPopj5M.js.map
