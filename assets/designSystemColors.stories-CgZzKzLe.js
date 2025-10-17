import{R as t}from"./index-DbOFzPHX.js";import{d as n,n as E}from"./styled-components.browser.esm-Cttt-Tea.js";import{c as p}from"./colourOptions-CbOJdSSM.js";import{B as s}from"./index-Cxnk3SxV.js";import"./index-lINQURtS.js";import"./index-C2AVfQPl.js";import{r as f}from"./colourMap-BqneUWMU.js";import{D as h}from"./Divider-l0pB1V4f.js";import{T as i}from"./Text-C-7Pf0TR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./variables-DcGMWv_V.js";import"./polished.esm-CYsXSD1d.js";import"./index-EED6E-3c.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";const y=()=>{const e=[],r=o=>o.startsWith("color")?o.split(".").slice(0,2).join("."):o.split(".").slice(0,1).join(".");return new Set(p.map(o=>r(o))).forEach(o=>{const g=o.split(".").slice(0).join(" ").replace(/\b\w/g,c=>c.toUpperCase()),C=p.filter(c=>c.startsWith(o));e.push({title:g,colors:C})}),e},b=({colorName:e})=>{const r=E(),a=f(e,r);return t.createElement(T,{width:"260px"},t.createElement(P,{$colorName:e,width:"100%",pt:{custom:"50%"}}),t.createElement(h,null),t.createElement(s,{px:"16px",py:{custom:4},flex:!0,direction:"column"},t.createElement(i,{tag:"span",typo:"body-regular"},e),t.createElement(i,{tag:"span",typo:"caption",color:"sesame"},a.toUpperCase())))},w=({title:e,colors:r})=>t.createElement(s,{width:"100%"},t.createElement(s,{mb:"16px"},t.createElement(i,{tag:"span",typo:"headline-small"},e)),t.createElement(k,null,r.map(a=>t.createElement(b,{key:a,colorName:a})))),x=()=>t.createElement(v,null,y().map(e=>t.createElement(w,{key:e.title,title:e.title,colors:e.colors}))),I={title:"Foundation/Design System Colors",components:x},S=()=>t.createElement(x,null),l=S.bind({}),k=n(s)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,v=n(s)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,T=n(s)`
  background-color: ${({theme:e})=>e.color.surface.base["000"]};
  border: 1px solid ${({theme:e})=>e.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,P=n(s)`
  background-color: ${({$colorName:e,theme:r})=>f(e,r)};
`;var m,d,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"() => <ColorsPage />",...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const J=["List"];export{l as List,J as __namedExportsOrder,I as default};
//# sourceMappingURL=designSystemColors.stories-CgZzKzLe.js.map
