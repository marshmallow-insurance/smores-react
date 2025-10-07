import{R as e}from"./index-DbOFzPHX.js";import{d as M}from"./styled-components.browser.esm-BbZQrDuP.js";import{B as t}from"./index-DskQjIgy.js";import"./index-CU7eyPH9.js";import"./index-COZvmTcE.js";import{S as o}from"./SupportMessage-CRFklJWZ.js";import{L as d,T as D}from"./Text-BOGL1RzE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./polished.esm-CYsXSD1d.js";import"./index-CHrSHfjR.js";import"./theme-D-5TnJVB.js";import"./isReactElement-D8kjYBLS.js";import"./focusOutline-Cfflnwlf.js";import"./variables-DcGMWv_V.js";const U={title:"SupportMessage",component:o,decorators:[r=>e.createElement("div",{style:{margin:"64px"}},e.createElement(r,null))]},s={args:{type:"info",description:"Some description text"},render:r=>e.createElement(o,{...r})},c={args:{type:"info",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.createElement(n,{...r})},i={args:{type:"fallbackStyle",title:"Additional information",description:"Information needs to be communicated to the user."},render:r=>e.createElement(n,{...r})},m={args:{type:"alert",title:"Potential issue",description:"The user should be aware and possibly exercise caution."},render:r=>e.createElement(n,{...r})},l={args:{type:"warning",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.createElement(n,{...r})},p={args:{type:"success",title:"Error encountered",description:"An error has occurred, here's feedback on how to proceed."},render:r=>e.createElement(n,{...r})},a=M(D)`
  margin-bottom: 4px;
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`,n=r=>e.createElement(t,{flex:!0,direction:"column",mb:"32px",gap:"8px"},e.createElement(t,{flex:!0},e.createElement(a,{tag:"span",typo:"heading-small"},"Default"),e.createElement(o,{...r,title:void 0})),e.createElement(t,{flex:!0},e.createElement(a,{tag:"span",typo:"heading-small"},"Title"),e.createElement(o,{...r})),e.createElement(t,{flex:!0},e.createElement(a,{tag:"span",typo:"heading-small"},"onClick"),e.createElement(o,{...r,onClick:()=>alert("Clicked!")})),e.createElement(t,{flex:!0},e.createElement(a,{tag:"span",typo:"heading-small"},"Right side component"),e.createElement(o,{...r,rightSideComponent:e.createElement(t,{ml:{custom:"auto"}},e.createElement(d,{href:"#"},"Link"))})),e.createElement(t,{flex:!0},e.createElement(a,{tag:"span",typo:"heading-small"},"ReactNode description"),e.createElement(o,{...r,description:e.createElement(D,null,"Custom react element, with a ",e.createElement(d,{href:""},"Link"))})));var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'info',
    description: 'Some description text'
  },
  render: args => <SupportMessage {...args} />
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var E,h,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,b,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'fallbackStyle',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,w,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.'
  },
  render: args => <Group {...args} />
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var G,I,C;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var L,T,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const V=["Default","Info","FallbackStyle","Alert","Warning","Success"];export{m as Alert,s as Default,i as FallbackStyle,c as Info,p as Success,l as Warning,V as __namedExportsOrder,U as default};
//# sourceMappingURL=SupportMessage.stories-DtuEtzOU.js.map
