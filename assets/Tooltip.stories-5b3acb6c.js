import{s as b,a as o,j as w}from"./styled-components.browser.esm-1fe49baf.js";import{B as e}from"./Box-3f7820e1.js";import{T as r}from"./Text-33ea17e2.js";import{t as E}from"./theme-9a9bdd1b.js";import{T as p}from"./Tooltip-0025b631.js";import"./index-1b03fe98.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";import"./Icon-9ec719dc.js";import"./index-6fd5a17b.js";import"./v4-4a60fe23.js";const M={title:"Tooltip",component:p},a=n=>o(e,{px:{custom:250},py:{custom:150},flex:!0,children:o(p,{...n,children:o(e,{children:"Harry Hill"})})}),O=n=>w(q,{my:"64px",children:[o(p,{...n,children:o(e,{children:"Harry Hill"})}),o(C,{mt:"12px",children:"I am some super long text, that should be clipped"}),o(e,{my:"64px",children:o(p,{...n,children:o(e,{children:"Harry Hill"})})})]}),q=b(e)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${E.colors.blueberry};
`,C=b(r)`
  white-space: nowrap;
`,t=a.bind({});t.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",size:"small",underline:!0,fallbackStyle:!1};const l=a.bind({}),L=o(r,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});l.args={title:"Long text example",content:L,size:"large",underline:!0,shadow:!1};const i=a.bind({}),v=w(e,{children:[o(r,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o(r,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o(r,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o(r,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});i.args={title:"React node example",content:v,size:"large",underline:!0,shadow:!1};const s=O.bind({});s.args={title:"React node example",content:v,size:"large",underline:!0};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,u,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var T,y,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,B,H;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox my="64px">
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>

    <ClippedText mt="12px">
      I am some super long text, that should be clipped
    </ClippedText>

    <Box my="64px">
      <Tooltip {...props}>
        <Box>Harry Hill</Box>
      </Tooltip>
    </Box>
  </OverflowHiddenBox>`,...(H=(B=s.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const $=["Default","LongTextExample","ReactNodeExample","OverflowExample"];export{t as Default,l as LongTextExample,s as OverflowExample,i as ReactNodeExample,$ as __namedExportsOrder,M as default};
//# sourceMappingURL=Tooltip.stories-5b3acb6c.js.map
