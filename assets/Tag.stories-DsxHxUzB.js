import{R as r}from"./index-DbOFzPHX.js";import{B as x}from"./index-DskQjIgy.js";import{t as y}from"./theme-D-5TnJVB.js";import{T as l}from"./Tag-DQlaCcE6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-BbZQrDuP.js";import"./space-BLajQSvN.js";import"./index-1HMgA0yP.js";import"./Text-DZaqNtjR.js";import"./polished.esm-CYsXSD1d.js";import"./index-CHrSHfjR.js";import"./focusOutline-Cfflnwlf.js";const F={title:"Tag",component:l,decorators:[e=>r.createElement("div",{style:{margin:"64px"}},r.createElement(e,null))]},a={args:{bgColor:"feijoa",color:"cream",label:"Example"},render:e=>r.createElement(l,{...e})},t={render:e=>{const f=["boba","liquorice","sesame","spearmint","feijoa","strawberry","apple","compareTheMarket","confused","onfido","x","meta","ravelin","hometree"],C=["pistachio","caramel","stripe"],h=Object.keys(y.colors).map(o=>r.createElement(l,{...e,label:o,bgColor:o,color:C.includes(o)?"boba":f.includes(o)?"cream":"liquorice"}));return r.createElement(x,{flex:!0,direction:"column",gap:{custom:"4px"},width:"200px"},h)},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},s={args:{bgColor:"feijoa",color:"cream",label:"I have an icon",icon:"flagFilled",iconColor:"strawberry"}};var c,n,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const darkCol: Color[] = ['boba', 'liquorice', 'sesame', 'spearmint', 'feijoa', 'strawberry', 'apple', 'compareTheMarket', 'confused', 'onfido', 'x', 'meta', 'ravelin', 'hometree'];
    const otherCol: Color[] = ['pistachio', 'caramel', 'stripe'];
    const map = Object.keys(theme.colors).map(col => {
      return <Tag {...args} label={col} bgColor={col as Color} color={otherCol.includes(col as Color) ? 'boba' : darkCol.includes(col as Color) ? 'cream' : 'liquorice'} />;
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'I have an icon',
    icon: 'flagFilled',
    iconColor: 'strawberry'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["Default","Colors","WithIcon"];export{t as Colors,a as Default,s as WithIcon,M as __namedExportsOrder,F as default};
//# sourceMappingURL=Tag.stories-DsxHxUzB.js.map
