import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,s as r}from"./iframe-R4i_VQIw.js";import{n as i,t as a}from"./Box-lpplDdTL.js";import{a as o,n as s,o as c,t as l}from"./Icon-Qs8E9OqI.js";import{n as u,t as d}from"./Text-DGPE7WO3.js";import{n as f,t as p}from"./colourOptions-DufNqGuw.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),u(),f(),s(),c(),m=t(),h={title:`Icon`,component:l},g={args:{render:`info`,size:32},argTypes:{color:{control:`select`,options:p}}},_={render:e=>{let t=Object.keys(o).map(t=>(0,m.jsxs)(a,{flex:!0,direction:`column`,alignItems:`center`,justifyContent:`center`,children:[(0,m.jsx)(l,{...e,render:t}),(0,m.jsx)(d,{typo:`label`,mt:`space.150`,children:t})]},t));return(0,m.jsx)(v,{children:t})}},v=r(a)`
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
}`,..._.parameters?.docs?.source}}},y=[`Default`,`Colors`]})))()}b();export{_ as Colors,g as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Icon.stories-G5rabyEg.js.map