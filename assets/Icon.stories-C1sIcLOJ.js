import{j as r,c as p}from"./iframe-CgR2Zs8T.js";import{B as s}from"./index-thz0XAR7.js";import"./index-SbHuVJth.js";import{c as i}from"./colourOptions-Ba2rmk44.js";import{I as a,i as m}from"./index-Bbcxr-qu.js";import{T as l}from"./Text-DjzlQfHd.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./colourMap-Ba93Y-1S.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-B0GWACrD.js";import"./shared.styles-DPCO9mNe.js";const k={title:"Icon",component:a},e={args:{render:"info",size:32},argTypes:{color:{control:"select",options:i}}},o={render:t=>{const c=Object.keys(m).map(n=>r.jsxs(s,{flex:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[r.jsx(a,{...t,render:n}),r.jsx(l,{typo:"label",mt:"space.150",children:n})]},n));return r.jsx(d,{children:c})}},d=p(s)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({theme:t})=>t.space[400]};
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
          <Text typo="label" mt="space.150">
            {icon}
          </Text>
        </Box>;
    });
    return <Wrapper>{map}</Wrapper>;
  }
}`,...o.parameters?.docs?.source}}};const W=["Default","Colors"];export{o as Colors,e as Default,W as __namedExportsOrder,k as default};
//# sourceMappingURL=Icon.stories-C1sIcLOJ.js.map
