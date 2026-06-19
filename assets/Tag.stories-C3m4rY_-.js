import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-nwXXrvm4.js";import{n,t as r}from"./Box-RPvJzDZ4.js";import{i,r as a}from"./colourMap-DpAwc6Bu.js";import{n as o,t as s}from"./colourOptions-B8zM781I.js";import{n as c,t as l}from"./Tag-DeKZYa1E.js";var u,d,f,p,m,h;e((()=>{r(),a(),o(),c(),u=t(),d={title:`Tag`,component:l,argTypes:{color:{control:`select`,options:s},bgColor:{control:`select`,options:s},borderColor:{control:`select`,options:s}},decorators:[e=>(0,u.jsx)(`div`,{style:{margin:`64px`},children:(0,u.jsx)(e,{})})]},f={args:{bgColor:`color.illustration.accent1.100`,color:`color.surface.base.000`,label:`Example`},render:e=>(0,u.jsx)(l,{...e})},p={render:e=>{let t=[`color.text.contrast`,`color.text.base`,`color.text.subtle`,`color.illustration.accent1.200`,`color.illustration.accent1.100`,`color.feedback.negative.200`,`color.feedback.positive.200`,`thirdParty.compareTheMarket`,`thirdParty.confusedCom`,`thirdParty.onfido`,`thirdParty.twitter`,`thirdParty.facebook`,`thirdParty.ravelin`,`thirdParty.hometree`],r=[`color.illustration.accent3.200`,`color.illustration.accent4.200`,`thirdParty.stripe`];return(0,u.jsx)(n,{flex:!0,direction:`column`,gap:`space.050`,width:`200px`,children:Object.values(i).map(n=>(0,u.jsx)(l,{...e,label:n,bgColor:n,color:r.includes(n)?`color.text.contrast`:t.includes(n)?`color.surface.base.000`:`color.text.base`}))})},parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},m={args:{bgColor:`color.illustration.accent1.100`,color:`color.surface.base.000`,label:`I have an icon`,icon:`flagFilled`,iconColor:`color.feedback.negative.200`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const darkCol: NewColor[] = ['color.text.contrast', 'color.text.base', 'color.text.subtle', 'color.illustration.accent1.200', 'color.illustration.accent1.100', 'color.feedback.negative.200', 'color.feedback.positive.200', 'thirdParty.compareTheMarket', 'thirdParty.confusedCom', 'thirdParty.onfido', 'thirdParty.twitter', 'thirdParty.facebook', 'thirdParty.ravelin', 'thirdParty.hometree'];
    const otherCol: NewColor[] = ['color.illustration.accent3.200', 'color.illustration.accent4.200', 'thirdParty.stripe'];
    const map = Object.values(legacyColorMap).map(col => {
      return <Tag {...args} label={col} bgColor={col} color={otherCol.includes(col) ? 'color.text.contrast' : darkCol.includes(col) ? 'color.surface.base.000' : 'color.text.base'} />;
    });
    return <Box flex direction="column" gap="space.050" width="200px">
        {map}
      </Box>;
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'color.feedback.negative.200'
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Colors`,`WithIcon`]}))();export{p as Colors,f as Default,m as WithIcon,h as __namedExportsOrder,d as default};
//# sourceMappingURL=Tag.stories-C3m4rY_-.js.map