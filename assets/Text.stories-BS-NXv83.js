import{j as e,d as p}from"./iframe-DkEiTTr5.js";import{B as i}from"./index-CeRVePXl.js";import{c as d}from"./colourOptions-BM4MowdY.js";import{T as r,f as m}from"./Text-FM78xEyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-BvHrzyVu.js";import"./polished.esm-CYsXSD1d.js";import"./index-D24641W5.js";import"./focusOutline-H2Nz3fyS.js";const c=p(i)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`,g=({typos:o})=>e.jsxs(i,{children:[e.jsxs(c,{children:[e.jsx(r,{tag:"p",typo:"body-regular",children:"Name"}),e.jsx(r,{tag:"p",typo:"body-regular",children:"Single Line"}),e.jsx(r,{tag:"p",typo:"body-regular",children:"Paragraph"})]}),o.map(t=>e.jsxs(c,{children:[e.jsx(r,{tag:"p",typo:"body-regular",color:"color.text.subtle",children:t}),e.jsx(r,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time."}),!["hero-alternate","hero","heading-alternate","label"].includes(t)&&e.jsx(r,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time. They waited patiently for what seemed a very long time."})]},t))]}),q={title:"Text",component:r,argTypes:{color:{control:"select",options:d}},decorators:[o=>e.jsx("div",{style:{margin:"64px"},children:e.jsx(o,{})})]},x=Object.keys(m),a={args:{tag:"p"},render:o=>e.jsx(r,{...o,children:"The quick brown fox jumps over the lazy dog"})},s={args:{tag:"label",typo:"label",color:"color.text.base"},render:o=>e.jsx(r,{...o,children:"The quick brown fox jumps over the lazy dog"})},l={args:{tag:"p",title:"a11y title tooltip"},render:o=>e.jsx(r,{...o,children:"The quick brown fox jumps over the lazy dog"})},n={render:()=>e.jsx(g,{typos:x})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const z=["Default","Label","WithTitle","Collection"];export{n as Collection,a as Default,s as Label,l as WithTitle,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Text.stories-BS-NXv83.js.map
