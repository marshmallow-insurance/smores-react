import{j as e,c as g}from"./iframe-Dk3GIFmO.js";import{B as s}from"./index-CeC_J_bb.js";import"./index-BmrsKwr-.js";import"./index-Dio_6Lxi.js";import{S as t}from"./SupportMessage-BhEQ8-ze.js";import{L as m,T as u}from"./Text-Dg9Y0eOm.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./polished.esm-CYsXSD1d.js";import"./isReactElement-DTECGPnO.js";import"./colourMap-DUmt6WeN.js";import"./regular-Cz8EdWGq.js";import"./shared.styles-2mpOHOQy.js";import"./index-RH9okX_I.js";import"./solid-BA6igMXM.js";import"./index-DbHStjyE.js";import"./focusOutline-DGPQ4b96.js";const R={title:"SupportMessage",component:t,decorators:[r=>e.jsx("div",{style:{margin:"64px"},children:e.jsx(r,{})})]},a={args:{type:"info",description:"Some description text"},render:r=>e.jsx(t,{...r})},i={args:{type:"info",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},c={args:{type:"fallbackStyle",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},d={args:{type:"alert",title:"Potential issue",description:"The user should be aware and possibly exercise caution."},render:r=>e.jsx(n,{...r})},p={args:{type:"warning",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},l={args:{type:"success",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},o=g(u)`
  margin-bottom: ${({theme:r})=>r.space["050"]};
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`,n=r=>e.jsxs(s,{flex:!0,direction:"column",mb:"space.400",gap:"space.100",children:[e.jsxs(s,{flex:!0,children:[e.jsx(o,{tag:"span",typo:"heading-small",children:"Default"}),e.jsx(t,{...r,title:void 0})]}),e.jsxs(s,{flex:!0,children:[e.jsx(o,{tag:"span",typo:"heading-small",children:"Title"}),e.jsx(t,{...r})]}),e.jsxs(s,{flex:!0,children:[e.jsx(o,{tag:"span",typo:"heading-small",children:"onClick"}),e.jsx(t,{...r,onClick:()=>alert("Clicked!")})]}),e.jsxs(s,{flex:!0,children:[e.jsx(o,{tag:"span",typo:"heading-small",children:"Right side component"}),e.jsx(t,{...r,rightSideComponent:e.jsx(s,{ml:{custom:"auto"},children:e.jsx(m,{href:"#",children:"Link"})})})]}),e.jsxs(s,{flex:!0,children:[e.jsx(o,{tag:"span",typo:"heading-small",children:"ReactNode description"}),e.jsx(t,{...r,description:e.jsxs(u,{children:["Custom react element, with a ",e.jsx(m,{href:"",children:"Link"})]})})]})]});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    description: 'Some description text'
  },
  render: args => <SupportMessage {...args} />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'fallbackStyle',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.'
  },
  render: args => <Group {...args} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...l.parameters?.docs?.source}}};const v=["Default","Info","FallbackStyle","Alert","Warning","Success"];export{d as Alert,a as Default,c as FallbackStyle,i as Info,l as Success,p as Warning,v as __namedExportsOrder,R as default};
//# sourceMappingURL=SupportMessage.stories-CwNKPF_m.js.map
