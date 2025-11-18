import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as t}from"./index-BX4QO5EF.js";import"./index-ZVOxZMkq.js";import"./index-rlYdeEZ-.js";import{S as o}from"./SupportMessage-Cib5t__t.js";import{L as m,T as D}from"./Text-DegufsO8.js";import"./index-DbOFzPHX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./polished.esm-CYsXSD1d.js";import"./index-L8F7x2IQ.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./theme-D-5TnJVB.js";import"./isReactElement-D8kjYBLS.js";import"./focusOutline-tjk0UCOR.js";const X={title:"SupportMessage",component:o,decorators:[r=>e.jsx("div",{style:{margin:"64px"},children:e.jsx(r,{})})]},a={args:{type:"info",description:"Some description text"},render:r=>e.jsx(o,{...r})},i={args:{type:"info",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},c={args:{type:"fallbackStyle",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.jsx(n,{...r})},d={args:{type:"alert",title:"Potential issue",description:"The user should be aware and possibly exercise caution."},render:r=>e.jsx(n,{...r})},p={args:{type:"warning",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},l={args:{type:"success",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.jsx(n,{...r})},s=M(D)`
  margin-bottom: 4px;
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`,n=r=>e.jsxs(t,{flex:!0,direction:"column",mb:"32px",gap:"8px",children:[e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Default"}),e.jsx(o,{...r,title:void 0})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Title"}),e.jsx(o,{...r})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"onClick"}),e.jsx(o,{...r,onClick:()=>alert("Clicked!")})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"Right side component"}),e.jsx(o,{...r,rightSideComponent:e.jsx(t,{ml:{custom:"auto"},children:e.jsx(m,{href:"#",children:"Link"})})})]}),e.jsxs(t,{flex:!0,children:[e.jsx(s,{tag:"span",typo:"heading-small",children:"ReactNode description"}),e.jsx(o,{...r,description:e.jsxs(D,{children:["Custom react element, with a ",e.jsx(m,{href:"",children:"Link"})]})})]})]});var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'info',
    description: 'Some description text'
  },
  render: args => <SupportMessage {...args} />
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,b,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'fallbackStyle',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,w,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.'
  },
  render: args => <Group {...args} />
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,G,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var C,L,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Y=["Default","Info","FallbackStyle","Alert","Warning","Success"];export{d as Alert,a as Default,c as FallbackStyle,i as Info,l as Success,p as Warning,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=SupportMessage.stories-Bsx_fO96.js.map
