import{R as e}from"./index-BBkUAzwr.js";import{u as l}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as t}from"./Box-BsRHaABa.js";import{D as f}from"./Divider-CD9h66fD.js";import{T as s}from"./Text-DW1uYbgU.js";import{t as c}from"./theme-D50qMPxU.js";import"./polished.esm-DlUGb9xG.js";import"./Icon-pvgJCDYX.js";import"./focusOutline-DynQQMjx.js";const b=["lollipop","marshmallowPink","bubblegum","fairyFloss"],h=["boba","liquorice","sesame","chia"],x=["custard","mascarpone","coconut","cream"],y=["spearmint","feijoa","blueberry","macaroon","pistachio","matcha","caramel","peanut","marzipan","oatmeal"],E=["strawberry","watermelon","apple","mint","lemon","sherbert","tangerine"],g=["compareTheMarket","confused","onfido","twitter","premfina","checkout","facebook","stripe","intercom","ravelin","rac","hometree"],C=({colorName:r})=>{const n=c.colors[r];return e.createElement(P,{width:"224px"},e.createElement(B,{$colorName:r,width:"100%",pt:{custom:"50%"}}),e.createElement(f,null),e.createElement(t,{px:"16px",py:{custom:4}},e.createElement(s,{tag:"span",typo:"base"},r),e.createElement(s,{tag:"span",typo:"base-xsmall",color:"sesame"},n)))},o=({title:r,colors:n})=>e.createElement(t,{width:"100%"},e.createElement(t,{mb:"16px"},e.createElement(s,{tag:"span",typo:"header-small"},r)),e.createElement(k,null,n.map(m=>e.createElement(C,{key:m,colorName:m})))),u=()=>e.createElement(T,null,e.createElement(o,{title:"Core primary",colors:b}),e.createElement(o,{title:"Core secondary",colors:h}),e.createElement(o,{title:"Core tertiary",colors:x}),e.createElement(o,{title:"Brand secondary",colors:y}),e.createElement(o,{title:"Traffic light",colors:E}),e.createElement(o,{title:"Third party brand",colors:g})),j={title:"Foundation/Colors",components:u},w=()=>e.createElement(u,null),a=w.bind({}),k=l(t)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
`,T=l(t)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,P=l(t)`
  background-color: ${c.colors.cream};
  border: 1px solid ${c.colors.chia};
  border-radius: 8px;
  overflow: hidden;
`,B=l(t)`
  background-color: ${({$colorName:r})=>c.colors[r]};
`;var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"() => <ColorsPage />",...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const q=["List"];export{a as List,q as __namedExportsOrder,j as default};
