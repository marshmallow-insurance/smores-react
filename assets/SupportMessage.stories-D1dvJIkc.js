import{j as e,c as x}from"./iframe-CAoV3ZDX.js";import{B as t}from"./index-CvjMnRHU.js";import"./index-DfIvFi8f.js";import"./index-C-NuabkT.js";import{S as o}from"./SupportMessage-BsvYGsIU.js";import{L as m,T as u}from"./Text-BAOAKnWU.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./polished.esm-CYsXSD1d.js";import"./isReactElement-5ei-KUv7.js";import"./colourMap-Cc45iG9J.js";import"./regular-Cz8EdWGq.js";import"./shared.styles-BG7Yiv8-.js";import"./index-BQjfk5dt.js";import"./solid-BA6igMXM.js";import"./index-Bazn0Oa1.js";import"./focusOutline-B3ll9wVE.js";const R={title:"SupportMessage",component:o,decorators:[r=>e.jsx("div",{style:{margin:"64px"},children:e.jsx(r,{})})]},a={args:{type:"info",description:"Some description text"},render:r=>e.jsx(o,{...r})},i={args:{type:"info",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},c={args:{type:"fallbackStyle",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},d={args:{type:"alert",title:"Potential issue",description:"The user should be aware and possibly exercise caution."},render:r=>e.jsx(n,{...r})},p={args:{type:"warning",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},l={args:{type:"success",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},s=x(u)`
  margin-bottom: 4px;
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`,n=r=>e.jsxs(t,{flex:!0,direction:"column",mb:"32px",gap:"8px",children:[e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Default"}),e.jsx(o,{...r,title:void 0})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Title"}),e.jsx(o,{...r})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"onClick"}),e.jsx(o,{...r,onClick:()=>alert("Clicked!")})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Right side component"}),e.jsx(o,{...r,rightSideComponent:e.jsx(t,{ml:{custom:"auto"},children:e.jsx(m,{href:"#",children:"Link"})})})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"ReactNode description"}),e.jsx(o,{...r,description:e.jsxs(u,{children:["Custom react element, with a ",e.jsx(m,{href:"",children:"Link"})]})})]})]});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=SupportMessage.stories-D1dvJIkc.js.map
