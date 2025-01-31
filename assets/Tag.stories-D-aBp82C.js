import{R as r}from"./index-CO7zwj5_.js";import{B as f}from"./index-BmqobpQ-.js";import{t as g}from"./theme-pdmEyuPW.js";import{T as s}from"./Tag-DMeJvTgA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-B-76eNGj.js";import"./index-D53tEmhk.js";import"./Text-D_0DKx3I.js";import"./polished.esm-CaZDTQnh.js";import"./index-CjJ02WNu.js";import"./focusOutline-CPyS9WD5.js";const v={title:"Tag",component:s,decorators:[e=>r.createElement("div",{style:{margin:"64px"}},r.createElement(e,null))]},a={args:{bgColor:"feijoa",color:"cream",label:"Example"},render:e=>r.createElement(s,{...e})},t={render:e=>{const d=["boba","liquorice","sesame","spearmint","feijoa","strawberry","apple","compareTheMarket","confused","onfido","x","meta","ravelin","hometree"],u=["pistachio","caramel","stripe"],b=Object.keys(g.colors).map(o=>r.createElement(s,{...e,label:o,bgColor:o,color:u.includes(o)?"boba":d.includes(o)?"cream":"liquorice"}));return r.createElement(f,{flex:!0,direction:"column",gap:{custom:"4px"},width:"200px"},b)},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    bgColor: 'feijoa',
    color: 'cream',
    label: 'Example'
  },
  render: args => <Tag {...args} />
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const O=["Default","Colors"];export{t as Colors,a as Default,O as __namedExportsOrder,v as default};
//# sourceMappingURL=Tag.stories-D-aBp82C.js.map
