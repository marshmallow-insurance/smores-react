import{j as r,d as p}from"./iframe-swDOQ4tF.js";import{B as n}from"./index-BvfSxwGA.js";import"./index-JbOhu_2r.js";import{c as i}from"./colourOptions-BpHAB59q.js";import{I as s,i as m}from"./index-BhqPdVXw.js";import{T as l}from"./Text-Bq2x_f0N.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-CCvJBel0.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-dbaKYmRM.js";import"./shared.styles-CQn47nmy.js";const h={title:"Icon",component:s},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:a=>{const c=Object.keys(m).map(t=>r.jsxs(n,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(s,{...a,render:t}),r.jsx(l,{typo:"label",mt:"12px",children:t})]},t));return r.jsx(d,{children:c})}},d=p(n)`
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
}`,...o.parameters?.docs?.source}}};const k=["Default","Colors"];export{o as Colors,e as Default,k as __namedExportsOrder,h as default};
//# sourceMappingURL=Icon.stories-C1WMvUw2.js.map
