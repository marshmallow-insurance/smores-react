import{j as r,d as p}from"./iframe-CunZy-Gd.js";import{B as n}from"./index-DMrVGGze.js";import"./index-BKrkp4YG.js";import{c as i}from"./colourOptions-kRt43iQ_.js";import{I as s,i as m}from"./index-D3H6HU-B.js";import{T as l}from"./Text-Bh1h7nNm.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-ClO9l5eb.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-DfroC02t.js";import"./shared.styles-DZZsMKwQ.js";const h={title:"Icon",component:s},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:a=>{const c=Object.keys(m).map(t=>r.jsxs(n,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(s,{...a,render:t}),r.jsx(l,{typo:"label",mt:"12px",children:t})]},t));return r.jsx(d,{children:c})}},d=p(n)`
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
//# sourceMappingURL=Icon.stories-CI7RAkVD.js.map
