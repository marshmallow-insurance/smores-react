import{n as e}from"./chunk-DnJy8xQt.js";import{l as t,s as n,t as r}from"./iframe-CQpRN2iB.js";import{n as i,t as a}from"./Box-CZ-53cZO.js";import{n as o,o as s,r as c,s as l}from"./Icon-998159bA.js";import{t as u}from"./Text-CnBumn1W.js";import{t as d}from"./Text-B0_OiM_V.js";import{n as f,t as p}from"./colourOptions-B2toMxzR.js";var m,h,g,_,v,y;e((()=>{n(),a(),d(),f(),c(),l(),m=r(),h={title:`Icon`,component:o},g={args:{render:`info`,size:32},argTypes:{color:{control:`select`,options:p}}},_={render:e=>(0,m.jsx)(v,{children:Object.keys(s).map(t=>(0,m.jsxs)(i,{flex:!0,direction:`column`,alignItems:`center`,justifyContent:`center`,children:[(0,m.jsx)(o,{...e,render:t}),(0,m.jsx)(u,{typo:`label`,mt:`space.150`,children:t})]},t))})},v=t(i)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({theme:e})=>e.space[400]};
`,g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const map = Object.keys(iconList).map(icon => {
      return <Box key={icon} flex direction="column" alignItems="center" justifyContent="center">
          <Icon {...args} render={icon as Icons} />
          <Text typo="label" mt="space.150">
            {icon}
          </Text>
        </Box>;
    });
    return <Wrapper>{map}</Wrapper>;
  }
}`,..._.parameters?.docs?.source}}},y=[`Default`,`Colors`]}))();export{_ as Colors,g as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Icon.stories-5JDiBFUw.js.map