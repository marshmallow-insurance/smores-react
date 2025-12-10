import{j as r,d as p,n as f}from"./iframe-Tq4CW5SL.js";import{c as l}from"./colourOptions-D3y5ZKUk.js";import{B as e}from"./index-053O4yLd.js";import"./index-BNwXYv85.js";import"./index-Bbi-ubS2.js";import{r as d}from"./colourMap-CaC6eNqM.js";import{D as h}from"./Divider-Dpvp220D.js";import{T as c}from"./Text-CWYQIa-N.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./polished.esm-CYsXSD1d.js";import"./index-JUege_2G.js";import"./focusOutline-BmnauLPx.js";const j=()=>{const o=[],t=s=>s.startsWith("color")?s.split(".").slice(0,2).join("."):s.split(".").slice(0,1).join(".");return new Set(l.map(s=>t(s))).forEach(s=>{const x=s.split(".").slice(0).join(" ").replace(/\b\w/g,a=>a.toUpperCase()),u=l.filter(a=>a.startsWith(s));o.push({title:x,colors:u})}),o},g=({colorName:o})=>{const t=f(),i=d(o,t);return r.jsxs(S,{width:"260px",children:[r.jsx(v,{$colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(h,{}),r.jsxs(e,{px:"16px",py:{custom:4},flex:!0,direction:"column",children:[r.jsx(c,{tag:"span",typo:"body-regular",children:o}),r.jsx(c,{tag:"span",typo:"caption",color:"sesame",children:i.toUpperCase()})]})]})},C=({title:o,colors:t})=>r.jsxs(e,{width:"100%",children:[r.jsx(e,{mb:"16px",children:r.jsx(c,{tag:"span",typo:"headline-small",children:o})}),r.jsx(w,{children:t.map(i=>r.jsx(g,{colorName:i},i))})]}),m=()=>r.jsx(y,{children:j().map(o=>r.jsx(C,{title:o.title,colors:o.colors},o.title))}),R={title:"Foundation/Design System Colors",components:m},b=()=>r.jsx(m,{}),n=b.bind({}),w=p(e)`
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
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <ColorsPage />",...n.parameters?.docs?.source}}};const q=["List"];export{n as List,q as __namedExportsOrder,R as default};
//# sourceMappingURL=designSystemColors.stories-DV98O9z8.js.map
