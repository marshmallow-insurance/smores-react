import{j as r}from"./iframe-Cqp6oSul.js";import{B as p}from"./index-BqrVJh6M.js";import{l as m}from"./colourMap-D9bY40O0.js";import{c as l}from"./colourOptions-jjtM9FOY.js";import{T as s}from"./Tag-Cg3fNH7s.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./index-BKQ4Zz35.js";import"./Text-CuRVajKM.js";import"./polished.esm-CYsXSD1d.js";import"./index-BSdddFjE.js";import"./focusOutline-DgFhqWyx.js";import"./shared.styles-DqaJbK5E.js";const B={title:"Tag",component:s,argTypes:{color:{control:"select",options:l},bgColor:{control:"select",options:l},borderColor:{control:"select",options:l}},decorators:[o=>r.jsx("div",{style:{margin:"64px"},children:r.jsx(o,{})})]},e={args:{bgColor:"color.illustration.accent1.100",color:"color.surface.base.000",label:"Example"},render:o=>r.jsx(s,{...o})},a={render:o=>{const n=["color.text.contrast","color.text.base","color.text.subtle","color.illustration.accent1.200","color.illustration.accent1.100","color.feedback.negative.200","color.feedback.positive.200","thirdParty.compareTheMarket","thirdParty.confusedCom","thirdParty.onfido","thirdParty.twitter","thirdParty.facebook","thirdParty.ravelin","thirdParty.hometree"],i=["color.illustration.accent3.200","color.illustration.accent4.200","thirdParty.stripe"],d=Object.values(m).map(t=>r.jsx(s,{...o,label:t,bgColor:t,color:i.includes(t)?"color.text.contrast":n.includes(t)?"color.surface.base.000":"color.text.base"}));return r.jsx(p,{flex:!0,direction:"column",gap:{custom:"4px"},width:"200px",children:d})},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},c={args:{bgColor:"color.illustration.accent1.100",color:"color.surface.base.000",label:"I have an icon",icon:"flagFilled",iconColor:"color.feedback.negative.200"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const darkCol: NewColor[] = ['color.text.contrast', 'color.text.base', 'color.text.subtle', 'color.illustration.accent1.200', 'color.illustration.accent1.100', 'color.feedback.negative.200', 'color.feedback.positive.200', 'thirdParty.compareTheMarket', 'thirdParty.confusedCom', 'thirdParty.onfido', 'thirdParty.twitter', 'thirdParty.facebook', 'thirdParty.ravelin', 'thirdParty.hometree'];
    const otherCol: NewColor[] = ['color.illustration.accent3.200', 'color.illustration.accent4.200', 'thirdParty.stripe'];
    const map = Object.values(legacyColorMap).map(col => {
      return <Tag {...args} label={col} bgColor={col} color={otherCol.includes(col) ? 'color.text.contrast' : darkCol.includes(col) ? 'color.surface.base.000' : 'color.text.base'} />;
    });
    return <Box flex direction="column" gap={{
      custom: '4px'
    }} width="200px">
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'color.feedback.negative.200'
  }
}`,...c.parameters?.docs?.source}}};const E=["Default","Colors","WithIcon"];export{a as Colors,e as Default,c as WithIcon,E as __namedExportsOrder,B as default};
//# sourceMappingURL=Tag.stories-CPqNNftK.js.map
