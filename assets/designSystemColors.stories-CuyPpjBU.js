import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as p,n as g}from"./styled-components.browser.esm-Cttt-Tea.js";import{c as l}from"./colourOptions-CbOJdSSM.js";import{B as e}from"./index-BX4QO5EF.js";import"./index-B8XWrku7.js";import"./index-rlYdeEZ-.js";import{r as u}from"./colourMap-BqneUWMU.js";import{D as C}from"./Divider-B342EdOW.js";import{T as c}from"./Text-DegufsO8.js";import"./index-DbOFzPHX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./variables-DcGMWv_V.js";import"./polished.esm-CYsXSD1d.js";import"./index-L8F7x2IQ.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";const b=()=>{const o=[],s=t=>t.startsWith("color")?t.split(".").slice(0,2).join("."):t.split(".").slice(0,1).join(".");return new Set(l.map(t=>s(t))).forEach(t=>{const h=t.split(".").slice(0).join(" ").replace(/\b\w/g,a=>a.toUpperCase()),j=l.filter(a=>a.startsWith(t));o.push({title:h,colors:j})}),o},w=({colorName:o})=>{const s=g(),i=u(o,s);return r.jsxs(P,{width:"260px",children:[r.jsx(W,{$colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(C,{}),r.jsxs(e,{px:"16px",py:{custom:4},flex:!0,direction:"column",children:[r.jsx(c,{tag:"span",typo:"body-regular",children:o}),r.jsx(c,{tag:"span",typo:"caption",color:"sesame",children:i.toUpperCase()})]})]})},y=({title:o,colors:s})=>r.jsxs(e,{width:"100%",children:[r.jsx(e,{mb:"16px",children:r.jsx(c,{tag:"span",typo:"headline-small",children:o})}),r.jsx(v,{children:s.map(i=>r.jsx(w,{colorName:i},i))})]}),f=()=>r.jsx(T,{children:b().map(o=>r.jsx(y,{title:o.title,colors:o.colors},o.title))}),J={title:"Foundation/Design System Colors",components:f},S=()=>r.jsx(f,{}),n=S.bind({}),v=p(e)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,T=p(e)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,P=p(e)`
  background-color: ${({theme:o})=>o.color.surface.base["000"]};
  border: 1px solid ${({theme:o})=>o.color.feedback.inactive[100]};
  border-radius: 8px;
  overflow: hidden;
`,W=p(e)`
  background-color: ${({$colorName:o,theme:s})=>u(o,s)};
`;var m,d,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"() => <ColorsPage />",...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const K=["List"];export{n as List,K as __namedExportsOrder,J as default};
//# sourceMappingURL=designSystemColors.stories-CuyPpjBU.js.map
