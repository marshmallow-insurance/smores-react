import{R as r}from"./index-DbOFzPHX.js";import{B as C}from"./index-Cxnk3SxV.js";import{T as s}from"./Tag-0TkfKQZI.js";import{c as l}from"./colourOptions-CbOJdSSM.js";import{l as P}from"./colourMap-BqneUWMU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-Cttt-Tea.js";import"./space-BLajQSvN.js";import"./index-L5AcRSsk.js";import"./Text-DbgpC2ZR.js";import"./polished.esm-CYsXSD1d.js";import"./index-BWfv7pzw.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";import"./variables-DcGMWv_V.js";const W={title:"Tag",component:s,argTypes:{color:{control:"select",options:l},bgColor:{control:"select",options:l},borderColor:{control:"select",options:l}},decorators:[o=>r.createElement("div",{style:{margin:"64px"}},r.createElement(o,null))]},t={args:{bgColor:"color.illustration.accent1.100",color:"color.surface.base.000",label:"Example"},render:o=>r.createElement(s,{...o})},a={render:o=>{const h=["color.text.contrast","color.text.base","color.text.subtle","color.illustration.accent1.200","color.illustration.accent1.100","color.feedback.negative.200","color.feedback.positive.200","thirdParty.compareTheMarket","thirdParty.confusedCom","thirdParty.onfido","thirdParty.twitter","thirdParty.facebook","thirdParty.ravelin","thirdParty.hometree"],x=["color.illustration.accent3.200","color.illustration.accent4.200","thirdParty.stripe"],y=Object.values(P).map(e=>r.createElement(s,{...o,label:e,bgColor:e,color:x.includes(e)?"color.text.contrast":h.includes(e)?"color.surface.base.000":"color.text.base"}));return r.createElement(C,{flex:!0,direction:"column",gap:{custom:"4px"},width:"200px"},y)},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},c={args:{bgColor:"feijoa",color:"cream",label:"I have an icon",icon:"flagFilled",iconColor:"strawberry"}};var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'strawberry'
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const _=["Default","Colors","WithIcon"];export{a as Colors,t as Default,c as WithIcon,_ as __namedExportsOrder,W as default};
//# sourceMappingURL=Tag.stories-DV9rgX1m.js.map
