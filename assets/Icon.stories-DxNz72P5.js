import{j as r,d as p}from"./iframe-D3fUkcDU.js";import{B as t}from"./index-5g8Vs21W.js";import"./index-DUd1Ptp0.js";import{c as i}from"./colourOptions-DWQU8Urn.js";import{I as s,i as m}from"./index-B659QIn8.js";import{T as l}from"./Text-CkmO_cF3.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-CcAq1rhX.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-Btv1hanm.js";const C={title:"Icon",component:s},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:a=>{const c=Object.keys(m).map(n=>r.jsxs(t,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(s,{...a,render:n}),r.jsx(l,{typo:"label",mt:"12px",children:n})]},n));return r.jsx(d,{children:c})}},d=p(t)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    render: 'info',
    size: 32
  },
  argTypes: {
    color: {
      control: 'select',
      options: colourOptions
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const map = Object.keys(iconList).map(icon => {
      return <Box key={icon} flex direction="column" alignItems="center" justifyContent="center">
          <Icon {...args} render={icon as Icons} />
          <Text typo="label" mt="12px">
            {icon}
          </Text>
        </Box>;
    });
    return <Wrapper>{map}</Wrapper>;
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","Colors"];export{o as Colors,e as Default,h as __namedExportsOrder,C as default};
//# sourceMappingURL=Icon.stories-DxNz72P5.js.map
