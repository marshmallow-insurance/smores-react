import{j as o,s as i}from"./styled-components.browser.esm-CJMx1vp9.js";import{B as g}from"./Box-Dm5zCsW8.js";import{t}from"./theme-D50qMPxU.js";import{f}from"./focusOutline-D9_3RTEn.js";import{r as h}from"./index-BBkUAzwr.js";const a=({id:e,checked:s,onToggle:l,...u})=>o.jsxs(b,{as:"label",id:e,...u,children:[o.jsx(x,{type:"checkbox",checked:s,onChange:l,onKeyDown:m=>{m.key==="Enter"&&l()}}),o.jsx(n,{})]}),b=i(g)`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`,n=i.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${t.colors.oatmeal};
  border: none;
  border-radius: 28px;
  transition: 0.2s background-color;
  outline: none;

  &:hover {
    background-color: ${t.colors.marzipan};
  }

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: ${t.colors.mascarpone};
    transition: 0.2s transform;
    border-radius: 50%;
  }
`,x=i.input`
  ${f({selector:`&:focus-visible + ${n}`})}

  &:checked + ${n} {
    background-color: ${t.colors.pistachio};
    border: none;
  }

  &:checked + ${n}:before {
    transform: translateX(24px);
  }
`;try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{id:{defaultValue:null,description:"unique ID",name:"id",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"checked flag",name:"checked",required:!0,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"onToggle listener",name:"onToggle",required:!0,type:{name:"() => void"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const y=()=>{const[e,s]=h.useState(!1);return o.jsx(a,{id:"toggleId",checked:e,onToggle:()=>s(!e)})},V={title:"Toggle",component:a},k=()=>o.jsx(y,{}),r=k.bind({});var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"() => <Container />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,V as default};
