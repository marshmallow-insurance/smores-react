import{R as e,r as C}from"./index-BBkUAzwr.js";import{B as a}from"./Button-LLXO4Zm_.js";import{u as m}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as l}from"./Box-BsRHaABa.js";import{T as B}from"./Text-Cn6wBAm-.js";import"./Icon-CHY01GOX.js";import"./theme-D50qMPxU.js";import"./Loader-CkjOWXSV.js";import"./focusOutline-DynQQMjx.js";import"./polished.esm-DlUGb9xG.js";const n=[{primary:!0,children:"Save"},{secondary:!0,children:"Edit"},{fallbackStyle:!0,children:"Cancel"},{textBtn:!0,children:"View"},{smallButton:!0,children:"Small"}],P=()=>e.createElement(v,null,e.createElement(p,{label:"Default"},e.createElement(o,{label:"Default"},n.map((t,r)=>e.createElement(a,{key:r,...t}))),e.createElement(o,{label:"Loading"},n.map((t,r)=>e.createElement(a,{key:r,...t,loading:!0}))),e.createElement(o,{label:"Disabled"},n.map((t,r)=>e.createElement(a,{key:r,...t,disabled:!0})))),e.createElement(p,{label:"With icon"},e.createElement(o,{label:"Default"},n.map((t,r)=>e.createElement(a,{key:r,...t,icon:"info"}))),e.createElement(o,{label:"Loading"},n.map((t,r)=>e.createElement(a,{key:r,...t,loading:!0,icon:"info"}))),e.createElement(o,{label:"Disabled"},n.map((t,r)=>e.createElement(a,{key:r,...t,disabled:!0,icon:"info"}))))),v=m(l)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`,p=({label:t,children:r})=>e.createElement(l,null,e.createElement(l,{mb:"16px"},e.createElement(B,{tag:"span",typo:"header-small"},t)),e.createElement(w,null,r)),w=m(l)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,o=({label:t,children:r})=>e.createElement(_,null,e.createElement(l,{width:"80px"},e.createElement(B,{tag:"span",typo:"label-large"},t)),r),_=m(l)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;P.__docgenInfo={description:"",methods:[],displayName:"CollectionPage"};function T(t){return new Promise(function(r){setTimeout(r,t)})}const k=()=>{const[t,r]=C.useState(!1),S=async()=>{r(!0),await T(1e3),r(!1)};return e.createElement(a,{primary:!0,icon:"info",handleClick:S,loading:t},"Get started")};k.__docgenInfo={description:"",methods:[],displayName:"InteractivePlayground"};const z={title:"Button",component:a,argTypes:{handleClick:{action:"clicked"}}},I=t=>e.createElement(a,{...t},"Get started"),W=t=>e.createElement(k,{...t}),c=I.bind({});c.args={primary:!0,secondary:!1,fallbackStyle:!1,disabled:!1,loading:!1,icon:""};const i=W.bind({}),A=P.bind({}),s=I.bind({});s.args={primary:!0,forcedWidth:"300px"};var d,u,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:"(props: ButtonProps) => <Button {...props}>Get started</Button>",...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,y,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"(props: ButtonProps) => <InteractivePlayground {...props} />",...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var b,x,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"(props: ButtonProps) => <Button {...props}>Get started</Button>",...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const H=["Playground","Interactive","Collection","ForcedWidth"];export{A as Collection,s as ForcedWidth,i as Interactive,c as Playground,H as __namedExportsOrder,z as default};
