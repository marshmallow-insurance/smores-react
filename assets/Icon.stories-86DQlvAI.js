import{n as e}from"./chunk-DnJy8xQt.js";import{l as t,s as n,t as r}from"./iframe-CkPB6Yu_.js";import{n as i,t as a}from"./Box-BBeCmK9w.js";import{n as o,o as s,r as c,s as l}from"./Icon-BaiG6eyn.js";import{t as u}from"./Text-Dq-n18MR.js";import{t as d}from"./Text-8-h8etFj.js";import{n as f,t as p}from"./colourOptions-QcVHVLs0.js";var m,h,g,_,v,y;e((()=>{n(),a(),d(),f(),c(),l(),m=r(),h={title:`Icon`,component:o},g={args:{render:`info`,size:32},argTypes:{color:{control:`select`,options:p}}},_={render:e=>(0,m.jsx)(v,{children:Object.keys(s).map(t=>(0,m.jsxs)(i,{flex:!0,direction:`column`,alignItems:`center`,justifyContent:`center`,children:[(0,m.jsx)(o,{...e,render:t}),(0,m.jsx)(u,{typo:`label`,mt:`space.150`,children:t})]},t))})},v=t(i)`
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
//# sourceMappingURL=Icon.stories-86DQlvAI.js.map