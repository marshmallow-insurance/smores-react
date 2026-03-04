import{j as r,c as p}from"./iframe-j2NuUBea.js";import{B as n}from"./index-DOoSdLa_.js";import"./index-BOCSdzfe.js";import{c as i}from"./colourOptions-BRLhr2rP.js";import{I as s,i as m}from"./index-CX-khhxh.js";import{T as l}from"./Text-dufiir-H.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./colourMap-BR9d_85j.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-DDG0cI_a.js";import"./shared.styles-Cd9i7atI.js";const k={title:"Icon",component:s},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:a=>{const c=Object.keys(m).map(t=>r.jsxs(n,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(s,{...a,render:t}),r.jsx(l,{typo:"label",mt:"12px",children:t})]},t));return r.jsx(d,{children:c})}},d=p(n)`
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
}`,...o.parameters?.docs?.source}}};const W=["Default","Colors"];export{o as Colors,e as Default,W as __namedExportsOrder,k as default};
//# sourceMappingURL=Icon.stories-DJYcsMhL.js.map
