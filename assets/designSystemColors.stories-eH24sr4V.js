import{j as r,d as p,n as f}from"./iframe-C4bc1pIh.js";import{c as l}from"./colourOptions-DMLQ2pos.js";import{B as e}from"./index-D-SQUE6-.js";import"./index-ikdD5gR4.js";import"./index-BUFGURrz.js";import{r as d}from"./colourMap-CwjyYvpm.js";import{D as h}from"./Divider-CmArKHQt.js";import{T as c}from"./Text-J3b12Rfm.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./polished.esm-CYsXSD1d.js";import"./index-BmhtbHTW.js";import"./focusOutline-DCch5ffw.js";import"./shared.styles-BMhk8FPx.js";const j=()=>{const o=[],t=s=>s.startsWith("color")?s.split(".").slice(0,2).join("."):s.split(".").slice(0,1).join(".");return new Set(l.map(s=>t(s))).forEach(s=>{const x=s.split(".").slice(0).join(" ").replace(/\b\w/g,a=>a.toUpperCase()),u=l.filter(a=>a.startsWith(s));o.push({title:x,colors:u})}),o},g=({colorName:o})=>{const t=f(),i=d(o,t);return r.jsxs(S,{width:"260px",children:[r.jsx(v,{$colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(h,{}),r.jsxs(e,{px:"16px",py:{custom:4},flex:!0,direction:"column",children:[r.jsx(c,{tag:"span",typo:"body-regular",children:o}),r.jsx(c,{tag:"span",typo:"caption",color:"sesame",children:i.toUpperCase()})]})]})},C=({title:o,colors:t})=>r.jsxs(e,{width:"100%",children:[r.jsx(e,{mb:"16px",children:r.jsx(c,{tag:"span",typo:"headline-small",children:o})}),r.jsx(w,{children:t.map(i=>r.jsx(g,{colorName:i},i))})]}),m=()=>r.jsx(y,{children:j().map(o=>r.jsx(C,{title:o.title,colors:o.colors},o.title))}),z={title:"Foundation/Design System Colors",components:m},b=()=>r.jsx(m,{}),n=b.bind({}),w=p(e)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,y=p(e)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,S=p(e)`
  background-color: ${({theme:o})=>o.color.surface.base["000"]};
  border: 1px solid ${({theme:o})=>o.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,v=p(e)`
  background-color: ${({$colorName:o,theme:t})=>d(o,t)};
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <ColorsPage />",...n.parameters?.docs?.source}}};const A=["List"];export{n as List,A as __namedExportsOrder,z as default};
//# sourceMappingURL=designSystemColors.stories-eH24sr4V.js.map
