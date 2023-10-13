import{j as g,a as n,s}from"./styled-components.browser.esm-1fe49baf.js";import{a as f}from"./focusOutline-fc5530b3.js";import{t as r}from"./theme-9a9bdd1b.js";import{B as b}from"./Box-5e3c22a9.js";import{r as h}from"./index-1b03fe98.js";const a=({id:e,checked:i,onToggle:l,...u})=>g(y,{as:"label",id:e,...u,children:[n(x,{type:"checkbox",checked:i,onChange:l,onKeyDown:m=>{m.key==="Enter"&&l()}}),n(t,{})]}),y=s(b)`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`,t=s.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${r.colors.oatmeal};
  border: none;
  border-radius: 28px;
  transition: 0.2s background-color;
  outline: none;

  &:hover {
    background-color: ${r.colors.marzipan};
  }

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: ${r.colors.mascarpone};
    transition: 0.2s transform;
    border-radius: 50%;
  }
`,x=s.input`
  ${f({selector:`&:focus-visible + ${t}`})}

  &:checked + ${t} {
    background-color: ${r.colors.liquorice};
    border: none;
  }

  &:checked + ${t}:before {
    transform: translateX(24px);
  }
`;try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{id:{defaultValue:null,description:"unique ID",name:"id",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"checked flag",name:"checked",required:!0,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"onToggle listener",name:"onToggle",required:!0,type:{name:"() => void"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const k=()=>{const[e,i]=h.useState(!1);return n(a,{id:"toggleId",checked:e,onToggle:()=>i(!e)})},T={title:"Toggle",component:a},P=()=>n(k,{}),o=P.bind({});var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"() => <Container />",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,T as default};
//# sourceMappingURL=Toggle.stories-b4f60759.js.map
