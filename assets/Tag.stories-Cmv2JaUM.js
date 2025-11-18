import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as y}from"./index-BX4QO5EF.js";import{T as s}from"./Tag-DgTzhCcZ.js";import{c as l}from"./colourOptions-CbOJdSSM.js";import{l as P}from"./colourMap-BqneUWMU.js";import"./index-DbOFzPHX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-Cttt-Tea.js";import"./space-BLajQSvN.js";import"./index-rlYdeEZ-.js";import"./Text-DegufsO8.js";import"./polished.esm-CYsXSD1d.js";import"./index-L8F7x2IQ.js";import"./theme-D-5TnJVB.js";import"./focusOutline-tjk0UCOR.js";import"./variables-DcGMWv_V.js";const R={title:"Tag",component:s,argTypes:{color:{control:"select",options:l},bgColor:{control:"select",options:l},borderColor:{control:"select",options:l}},decorators:[o=>r.jsx("div",{style:{margin:"64px"},children:r.jsx(o,{})})]},e={args:{bgColor:"color.illustration.accent1.100",color:"color.surface.base.000",label:"Example"},render:o=>r.jsx(s,{...o})},a={render:o=>{const h=["color.text.contrast","color.text.base","color.text.subtle","color.illustration.accent1.200","color.illustration.accent1.100","color.feedback.negative.200","color.feedback.positive.200","thirdParty.compareTheMarket","thirdParty.confusedCom","thirdParty.onfido","thirdParty.twitter","thirdParty.facebook","thirdParty.ravelin","thirdParty.hometree"],x=["color.illustration.accent3.200","color.illustration.accent4.200","thirdParty.stripe"],C=Object.values(P).map(t=>r.jsx(s,{...o,label:t,bgColor:t,color:x.includes(t)?"color.text.contrast":h.includes(t)?"color.surface.base.000":"color.text.base"}));return r.jsx(y,{flex:!0,direction:"column",gap:{custom:"4px"},width:"200px",children:C})},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},c={args:{bgColor:"color.illustration.accent1.100",color:"color.surface.base.000",label:"I have an icon",icon:"flagFilled",iconColor:"color.feedback.negative.200"}};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,g,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bgColor: 'color.illustration.accent1.100',
    color: 'color.surface.base.000',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'color.feedback.negative.200'
  }
}`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Default","Colors","WithIcon"];export{a as Colors,e as Default,c as WithIcon,q as __namedExportsOrder,R as default};
//# sourceMappingURL=Tag.stories-Cmv2JaUM.js.map
