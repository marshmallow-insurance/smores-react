import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./styled-components.browser.esm-DYHaixBN.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Box-BxGN2orT.js";import{a as o,n as s,o as c,t as l}from"./Icon-C_MDjMbg.js";import{n as u,t as d}from"./Text-CIGRsFzu.js";import{n as f,t as p}from"./colourOptions-BomJ38fk.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{t(),i(),u(),f(),s(),c(),m=r(),h={title:`Icon`,component:l},g={args:{render:`info`,size:32},argTypes:{color:{control:`select`,options:p}}},_={render:e=>{let t=Object.keys(o).map(t=>(0,m.jsxs)(a,{flex:!0,direction:`column`,alignItems:`center`,justifyContent:`center`,children:[(0,m.jsx)(l,{...e,render:t}),(0,m.jsx)(d,{typo:`label`,mt:`space.150`,children:t})]},t));return(0,m.jsx)(v,{children:t})}},v=n(a)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({theme:e})=>e.space[400]};
`,y=[`Default`,`Colors`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}b();export{_ as Colors,g as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Icon.stories-Cq_CPxhG.js.map