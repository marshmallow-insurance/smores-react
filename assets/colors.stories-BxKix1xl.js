import{j as r,c,t as a}from"./iframe-ByKebmUz.js";import{B as e}from"./index-DYu6EHJk.js";import"./index-D6i9a8S0.js";import"./index-BqbiszIm.js";import{D as m}from"./Divider-Xlqo2RSv.js";import{T as n}from"./Text-SzuZYTg9.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./colourMap-Cu7Eftdi.js";import"./polished.esm-CYsXSD1d.js";import"./index-OtOh3E85.js";import"./focusOutline-DyfplWfm.js";import"./shared.styles-njA0natf.js";const d=["lollipop","marshmallowPink","bubblegum","fairyFloss"],x=["boba","liquorice","sesame","chia"],h=["custard","mascarpone","coconut","cream"],u=["spearmint","feijoa","blueberry","macaroon","pistachio","matcha","caramel","peanut","marzipan","oatmeal","satsuma"],j=["strawberry","watermelon","apple","mint","lemon","sherbert","tangerine"],f=["compareTheMarket","confused","onfido","x","premfina","checkout","meta","stripe","intercom","ravelin","rac","hometree"],y=({colorName:o})=>{const i=a.colors[o];return r.jsxs(w,{width:"224px",children:[r.jsx(T,{$colorName:o,width:"100%",pt:{custom:"50%"}}),r.jsx(m,{}),r.jsxs(e,{px:"space.200",py:"space.050",children:[r.jsx(n,{tag:"span",typo:"body-regular",children:o}),r.jsx(n,{tag:"span",typo:"caption",color:"sesame",children:i})]})]})},t=({title:o,colors:i})=>r.jsxs(e,{width:"100%",children:[r.jsx(e,{mb:"space.200",children:r.jsx(n,{tag:"span",typo:"headline-small",children:o})}),r.jsx(g,{children:i.map(l=>r.jsx(y,{colorName:l},l))})]}),p=()=>r.jsxs(C,{children:[r.jsx(t,{title:"Core primary",colors:d}),r.jsx(t,{title:"Core secondary",colors:x}),r.jsx(t,{title:"Core tertiary",colors:h}),r.jsx(t,{title:"Brand secondary",colors:u}),r.jsx(t,{title:"Traffic light",colors:j}),r.jsx(t,{title:"Third party brand",colors:f})]}),M={title:"Foundation/Colors (Deprecated)",components:p},b=()=>r.jsx(p,{}),s=b.bind({}),g=c(e)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({theme:o})=>o.space[200]};
`,C=c(e)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,w=c(e)`
  background-color: ${a.colors.cream};
  border: 1px solid ${a.colors.chia};
  border-radius: 8px;
  overflow: hidden;
`,T=c(e)`
  background-color: ${({$colorName:o})=>a.colors[o]};
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => <ColorsPage />",...s.parameters?.docs?.source}}};const O=["List"];export{s as List,O as __namedExportsOrder,M as default};
//# sourceMappingURL=colors.stories-BxKix1xl.js.map
