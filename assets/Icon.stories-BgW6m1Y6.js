import{R as e}from"./index-DbOFzPHX.js";import{d as f}from"./theme-CcyyLEOT.js";import{B as p}from"./index-BK7mErT7.js";import"./index-BogUR2py.js";import{I as l,i as x}from"./index-5fvmSDw8.js";import{T as g}from"./Text-CJkxs00V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-C0zyj_Xg.js";const q={title:"Icon",component:l},r={args:{render:"info",size:32,color:"liquorice"}},t={render:d=>{const u=Object.keys(x).map(o=>e.createElement(p,{key:o,flex:!0,direction:"column",alignItems:"center",justifyContent:"center"},e.createElement(l,{...d,render:o}),e.createElement(g,{typo:"label",mt:"12px"},o)));return e.createElement(y,null,u)}},y=f(p)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
`;var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    render: 'info',
    size: 32,
    color: 'liquorice'
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,m,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const z=["Default","Colors"];export{t as Colors,r as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Icon.stories-BgW6m1Y6.js.map
