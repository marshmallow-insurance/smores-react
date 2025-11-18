import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as u}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as m}from"./index-BX4QO5EF.js";import"./index-rlYdeEZ-.js";import{I as l,i as x}from"./index-L8F7x2IQ.js";import{c as g}from"./colourOptions-CbOJdSSM.js";import{T as j}from"./Text-DegufsO8.js";import"./index-DbOFzPHX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./polished.esm-CYsXSD1d.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";const w={title:"Icon",component:l},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:g}}},o={render:d=>{const f=Object.keys(x).map(t=>r.jsxs(m,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(l,{...d,render:t}),r.jsx(j,{typo:"label",mt:"12px",children:t})]},t));return r.jsx(y,{children:f})}},y=u(m)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
`;var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,c,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const R=["Default","Colors"];export{o as Colors,e as Default,R as __namedExportsOrder,w as default};
//# sourceMappingURL=Icon.stories-DkKibPRC.js.map
