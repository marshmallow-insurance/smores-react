import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,s as n,t as r}from"./iframe-nwXXrvm4.js";import{n as i,t as a}from"./Box-RPvJzDZ4.js";import{a as o,t as s}from"./Text-d1KaQlif.js";import{t as c}from"./Text-B6PFhIhN.js";import{t as l}from"./Link-ZR01pMk6.js";import{n as u,t as d}from"./SupportMessage-4vp_dTCZ.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),a(),l(),c(),u(),f=r(),p={title:`SupportMessage`,component:d,decorators:[e=>(0,f.jsx)(`div`,{style:{margin:`64px`},children:(0,f.jsx)(e,{})})]},m={args:{type:`info`,description:`Some description text`},render:e=>(0,f.jsx)(d,{...e})},h={args:{type:`info`,title:`Additional information`,description:`Information needs to be communicated to the user.`},render:e=>(0,f.jsx)(x,{...e})},g={args:{type:`fallbackStyle`,title:`Additional information`,description:`Information needs to be communicated to the user.`},render:e=>(0,f.jsx)(x,{...e})},_={args:{type:`alert`,title:`Potential issue`,description:`The user should be aware and possibly exercise caution.`},render:e=>(0,f.jsx)(x,{...e})},v={args:{type:`warning`,title:`Error encountered`,description:`An error has occurred, here's feedback on how to proceed.`},render:e=>(0,f.jsx)(x,{...e})},y={args:{type:`success`,title:`Error encountered`,description:`An error has occurred, here's feedback on how to proceed.`},render:e=>(0,f.jsx)(x,{...e})},b=n(s)`
  margin-bottom: ${({theme:e})=>e.space[`050`]};
  font-size: 14px;
  width: 140px;
  flex-shrink: 0;
`,x=e=>(0,f.jsxs)(i,{flex:!0,direction:`column`,mb:`space.400`,gap:`space.100`,children:[(0,f.jsxs)(i,{flex:!0,children:[(0,f.jsx)(b,{tag:`span`,typo:`heading-small`,children:`Default`}),(0,f.jsx)(d,{...e,title:void 0})]}),(0,f.jsxs)(i,{flex:!0,children:[(0,f.jsx)(b,{tag:`span`,typo:`heading-small`,children:`Title`}),(0,f.jsx)(d,{...e})]}),(0,f.jsxs)(i,{flex:!0,children:[(0,f.jsx)(b,{tag:`span`,typo:`heading-small`,children:`onClick`}),(0,f.jsx)(d,{...e,onClick:()=>alert(`Clicked!`)})]}),(0,f.jsxs)(i,{flex:!0,children:[(0,f.jsx)(b,{tag:`span`,typo:`heading-small`,children:`Right side component`}),(0,f.jsx)(d,{...e,rightSideComponent:(0,f.jsx)(i,{ml:{custom:`auto`},children:(0,f.jsx)(o,{href:`#`,children:`Link`})})})]}),(0,f.jsxs)(i,{flex:!0,children:[(0,f.jsx)(b,{tag:`span`,typo:`heading-small`,children:`ReactNode description`}),(0,f.jsx)(d,{...e,description:(0,f.jsxs)(s,{children:[`Custom react element, with a `,(0,f.jsx)(o,{href:``,children:`Link`})]})})]})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    description: 'Some description text'
  },
  render: args => <SupportMessage {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'fallbackStyle',
    title: 'Additional information',
    description: 'Information needs to be communicated to the user.'
  },
  render: args => <Group {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'alert',
    title: 'Potential issue',
    description: 'The user should be aware and possibly exercise caution.'
  },
  render: args => <Group {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Error encountered',
    description: "An error has occurred, here's feedback on how to proceed."
  },
  render: args => <Group {...args} />
}`,...y.parameters?.docs?.source}}},S=[`Default`,`Info`,`FallbackStyle`,`Alert`,`Warning`,`Success`]}))();export{_ as Alert,m as Default,g as FallbackStyle,h as Info,y as Success,v as Warning,S as __namedExportsOrder,p as default};
//# sourceMappingURL=SupportMessage.stories-DW5WGgc7.js.map