import{j as r,s as c}from"./styled-components.browser.esm-CJMx1vp9.js";import{B as e}from"./Box-Dm5zCsW8.js";import{D as h}from"./Divider-AH07Z0Tb.js";import{T as n}from"./Text-mBiiJ9lg.js";import{t as a}from"./theme-D50qMPxU.js";import"./index-BBkUAzwr.js";import"./polished.esm-D0h1-lPB.js";import"./Icon-B-eQ_DO6.js";import"./focusOutline-D9_3RTEn.js";const u=["lollipop","marshmallowPink","bubblegum","fairyFloss"],f=["boba","liquorice","sesame","chia"],j=["custard","mascarpone","coconut","cream"],b=["spearmint","feijoa","blueberry","macaroon","pistachio","matcha","caramel","peanut","marzipan","oatmeal"],y=["strawberry","watermelon","apple","mint","lemon","sherbert","tangerine"],g=["compareTheMarket","confused","onfido","twitter","premfina","checkout","facebook","stripe","intercom","ravelin","rac","hometree"],C=({colorName:o})=>{const i=a.colors[o];return r.jsxs(P,{width:"224px",children:[r.jsx(B,{colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(h,{}),r.jsxs(e,{px:"16px",py:{custom:4},children:[r.jsx(n,{tag:"span",typo:"base",children:o}),r.jsx(n,{tag:"span",typo:"base-xsmall",color:"sesame",children:i})]})]})},s=({title:o,colors:i})=>r.jsxs(e,{width:"100%",children:[r.jsx(e,{mb:"16px",children:r.jsx(n,{tag:"span",typo:"header-small",children:o})}),r.jsx(T,{children:i.map(l=>r.jsx(C,{colorName:l},l))})]}),x=()=>r.jsxs(k,{children:[r.jsx(s,{title:"Core primary",colors:u}),r.jsx(s,{title:"Core secondary",colors:f}),r.jsx(s,{title:"Core tertiary",colors:j}),r.jsx(s,{title:"Brand secondary",colors:b}),r.jsx(s,{title:"Traffic light",colors:y}),r.jsx(s,{title:"Third party brand",colors:g})]}),q={title:"Foundation/Colors",components:x},w=()=>r.jsx(x,{}),t=w.bind({}),T=c(e)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,k=c(e)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,P=c(e)`
  background-color: ${a.colors.cream};
  border: 1px solid ${a.colors.chia};
  border-radius: 8px;
  overflow: hidden;
`,B=c(e)`
  background-color: ${({colorName:o})=>a.colors[o]};
`;var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"() => <ColorsPage />",...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["List"];export{t as List,z as __namedExportsOrder,q as default};
