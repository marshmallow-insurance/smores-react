import{j as r,d as p}from"./iframe-bFzoRjds.js";import{B as t}from"./index-COlCGgUh.js";import"./index-CJRisEPq.js";import{c as i}from"./colourOptions-DKNkqg83.js";import{I as s,i as m}from"./index-BHZeUoM6.js";import{T as l}from"./Text-mXxVdvNg.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-tu6BcQjb.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-CthCSg4M.js";const C={title:"Icon",component:s},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:a=>{const c=Object.keys(m).map(n=>r.jsxs(t,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(s,{...a,render:n}),r.jsx(l,{typo:"label",mt:"12px",children:n})]},n));return r.jsx(d,{children:c})}},d=p(t)`
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
//# sourceMappingURL=Icon.stories-DXjAvxUm.js.map
