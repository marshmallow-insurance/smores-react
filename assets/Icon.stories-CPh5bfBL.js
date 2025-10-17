import{R as r}from"./index-DbOFzPHX.js";import{d as u}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as i}from"./index-Cxnk3SxV.js";import"./index-C2AVfQPl.js";import{I as l,i as g}from"./index-EED6E-3c.js";import{c as x}from"./colourOptions-CbOJdSSM.js";import{T as y}from"./Text-C-7Pf0TR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./polished.esm-CYsXSD1d.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";const _={title:"Icon",component:l},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:x}}},o={render:d=>{const f=Object.keys(g).map(t=>r.createElement(i,{key:t,flex:!0,direction:"column",alignItems:"center",justifyContent:"center"},r.createElement(l,{...d,render:t}),r.createElement(y,{typo:"label",mt:"12px"},t)));return r.createElement(I,null,f)}},I=u(i)`
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Default","Colors"];export{o as Colors,e as Default,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=Icon.stories-CPh5bfBL.js.map
