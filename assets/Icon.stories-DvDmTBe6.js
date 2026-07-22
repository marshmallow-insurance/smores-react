import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{o as n,s as r}from"./iframe-I_lF-bjH.js";import{n as i,t as a}from"./Box-Btyz54ah.js";import{n as o,o as s,r as c,s as l}from"./Icon-CZgp9UNv.js";import{t as u}from"./Text-CJHXoyl-.js";import{t as d}from"./Text-Cf5tB-IO.js";import{n as f,t as p}from"./colourOptions-B1NjrYqL.js";var m,h,g,_,v,y;e((()=>{r(),a(),d(),f(),c(),l(),m=t(),h={title:`Icon`,component:o},g={args:{render:`info`,size:32},argTypes:{color:{control:`select`,options:p}}},_={render:e=>{let t=Object.keys(s).map(t=>(0,m.jsxs)(i,{flex:!0,direction:`column`,alignItems:`center`,justifyContent:`center`,children:[(0,m.jsx)(o,{...e,render:t}),(0,m.jsx)(u,{typo:`label`,mt:`space.150`,children:t})]},t));return(0,m.jsx)(v,{children:t})}},v=n(i)`
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
//# sourceMappingURL=Icon.stories-DvDmTBe6.js.map