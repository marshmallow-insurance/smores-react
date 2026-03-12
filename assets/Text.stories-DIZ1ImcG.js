import{j as e,c as p}from"./iframe-Dk3GIFmO.js";import{B as i}from"./index-CeC_J_bb.js";import{c as d}from"./colourOptions-CXO2iitG.js";import{T as o,f as m}from"./Text-Dg9Y0eOm.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./colourMap-DUmt6WeN.js";import"./polished.esm-CYsXSD1d.js";import"./index-DbHStjyE.js";import"./focusOutline-DGPQ4b96.js";import"./shared.styles-2mpOHOQy.js";const c=p(i)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: ${({theme:r})=>r.space[300]};
  gap: 10px;
`,g=({typos:r})=>e.jsxs(i,{children:[e.jsxs(c,{children:[e.jsx(o,{tag:"p",typo:"body-regular",children:"Name"}),e.jsx(o,{tag:"p",typo:"body-regular",children:"Single Line"}),e.jsx(o,{tag:"p",typo:"body-regular",children:"Paragraph"})]}),r.map(t=>e.jsxs(c,{children:[e.jsx(o,{tag:"p",typo:"body-regular",color:"color.text.subtle",children:t}),e.jsx(o,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time."}),!["hero-alternate","hero","heading-alternate","label"].includes(t)&&e.jsx(o,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time. They waited patiently for what seemed a very long time."})]},t))]}),S={title:"Text",component:o,argTypes:{color:{control:"select",options:d}},decorators:[r=>e.jsx("div",{style:{margin:"64px"},children:e.jsx(r,{})})]},x=Object.keys(m),a={args:{tag:"p"},render:r=>e.jsx(o,{...r,children:"The quick brown fox jumps over the lazy dog"})},s={args:{tag:"label",typo:"label",color:"color.text.base"},render:r=>e.jsx(o,{...r,children:"The quick brown fox jumps over the lazy dog"})},l={args:{tag:"p",title:"a11y title tooltip"},render:r=>e.jsx(o,{...r,children:"The quick brown fox jumps over the lazy dog"})},n={render:()=>e.jsx(g,{typos:x})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'p'
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'label',
    typo: 'label',
    color: 'color.text.base'
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    title: 'a11y title tooltip'
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <TypoCollection typos={typos} />
}`,...n.parameters?.docs?.source}}};const C=["Default","Label","WithTitle","Collection"];export{n as Collection,a as Default,s as Label,l as WithTitle,C as __namedExportsOrder,S as default};
//# sourceMappingURL=Text.stories-DIZ1ImcG.js.map
