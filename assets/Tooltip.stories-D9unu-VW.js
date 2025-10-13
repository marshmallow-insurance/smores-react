import{R as e,r as L}from"./index-DbOFzPHX.js";import{d as m}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as r}from"./index-Cxnk3SxV.js";import"./index-ZqqtKKMC.js";import"./index-c34uTy-h.js";import"./index-DTb3F2ul.js";import{T as n}from"./Tooltip-CFUq8p-S.js";import{M as O}from"./Modal-C_xl8Q6A.js";import{B as F}from"./Button-BUpUKb93.js";import{T as t}from"./Text-COXihRIt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DQTZIOkN.js";import"./index-BQeLGKNK.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./index-TLZeLsFC.js";import"./IconStrict-DGiZIh5p.js";import"./polished.esm-CYsXSD1d.js";import"./index-EED6E-3c.js";import"./focusOutline-tjk0UCOR.js";import"./index-CNfLl1e4.js";import"./index-B1qSEQfA.js";import"./Loader-CryEej5M.js";import"./theme-D-5TnJVB.js";const xe={title:"Tooltip",component:n,args:{title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",underline:!0},argTypes:{variant:{options:["primary","fallback","bubblegum"],control:{type:"select",options:["primary","fallback","bubblegum"]}}},render:o=>e.createElement(r,{px:{custom:250},py:{custom:150},flex:!0},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill")))},P=e.createElement(r,null,e.createElement(t,{typo:"body-regular",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"T: 07123456789")),l={args:{title:"Long text example",children:e.createElement(t,{typo:"body-regular",color:"liquorice"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),underline:!0}},i={args:{children:e.createElement(r,null,e.createElement(t,{typo:"body-regular",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"T: 07123456789")),underline:!0}},a={render:o=>e.createElement(N,{tabIndex:0},e.createElement(r,{flex:!0,direction:"column",gap:"32px",justifyContent:"center",alignItems:"center"},e.createElement(n,{...o,position:"left"},e.createElement(t,null,"Harry Hill (left)")),e.createElement(n,{...o,position:"right"},e.createElement(t,null,"Harry Hill (right)")),e.createElement(n,{...o,position:"bottom"},e.createElement(t,null,"Harry Hill (bottom)")),e.createElement(n,{...o,position:"top"},e.createElement(t,null,"Harry Hill (top)")))),args:{children:P,underline:!0},parameters:{layout:"fullscreen"}},N=m(r)`
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${({theme:o})=>o.color.surface.base[100]};
`,c={args:{children:P,underline:!0},render:o=>e.createElement(D,{...o})},D=o=>{const[d,C]=L.useState(!1),x=()=>{C(!d)};return e.createElement(r,{height:"900px"},e.createElement(O,{handleClick:x,showModal:d},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill"))),e.createElement(F,{primary:!0,handleClick:x},"Show Modal with Mobile Drawer"))},s={render:o=>e.createElement(r,{width:"200px"},e.createElement(t,null,"Marshmallow car insurance, the best insurance in town."," ",e.createElement(n,{...o},"Hover here")," to learn more as the Policy Holder."),e.createElement(t,{my:"12px"},"Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus, a iaculis mauris."," ",e.createElement(n,{...o,position:"right"},"In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat. Etiam accumsan tristique ante, at mollis neque laoreet eget.")," ","Duis rhoncus molestie felis a cursus.")),args:{inline:!0}},p={render:()=>e.createElement(W,null,e.createElement(r,null,e.createElement(u,null,e.createElement(n,{variant:"fallback",underline:!0,content:e.createElement(T,{typo:"caption",color:"cream"},"An adjustment changes the ",e.createElement("b",null,"cost")," of the policy. This field should ",e.createElement("b",null,"not")," be used to adjust for invoices created after a failed up front payment.",e.createElement("br",null),e.createElement("br",null),"For annual and Premfina policies, use the `MTA only` transaction option when issuing an invoice.",e.createElement("br",null),e.createElement("br",null),"For instalment policies, use `spread entire amount` transaction option when issuing an invoice."),position:"top"},e.createElement(t,{typo:"body-regular"},"Adjustment amount"),e.createElement(t,{typo:"caption"},"(Adjusts the policy cost)")))),e.createElement(u,null,e.createElement(t,{typo:"body-regular"},"MTA admin fee")),e.createElement(u,null,e.createElement(n,{underline:!0,variant:"fallback",content:e.createElement(T,{typo:"caption",color:"cream"},"This is the policies total new retained refund after this MTA is complete."),position:"top"},e.createElement(t,null,"Predicted retained refund")),e.createElement(t,null,"£1,345")))},W=m(r)`
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: ${({theme:o})=>o.color.surface.base[300]};
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`,T=m(t)`
  white-space: normal;
  width: 200px;
`,u=m(r)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;var y,h,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Long text example',
    children: <Text typo="body-regular" color="liquorice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>,
    underline: true
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var E,b,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <Box>
        <Text typo="body-regular" color="liquorice">
          20 Cherry Blossom Lane,
        </Text>
        <Text typo="body-regular" color="liquorice">
          Aintree,
        </Text>
        <Text typo="body-regular" color="liquorice">
          Manchester,
        </Text>
        <Text typo="body-regular" color="liquorice">
          T: 07123456789
        </Text>
      </Box>,
    underline: true
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,v,H;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <OverflowHiddenBox tabIndex={0}>
      <Box flex direction="column" gap="32px" justifyContent="center" alignItems="center">
        <Tooltip {...props} position="left">
          <Text>Harry Hill (left)</Text>
        </Tooltip>

        <Tooltip {...props} position="right">
          <Text>Harry Hill (right)</Text>
        </Tooltip>

        <Tooltip {...props} position="bottom">
          <Text>Harry Hill (bottom)</Text>
        </Tooltip>

        <Tooltip {...props} position="top">
          <Text>Harry Hill (top)</Text>
        </Tooltip>
      </Box>
    </OverflowHiddenBox>,
  args: {
    children: tooltipContent,
    underline: true
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(H=(v=a.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var M,q,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: tooltipContent,
    underline: true
  },
  render: (props: TooltipProps) => <ModalExampleWrapper {...props} />
}`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var A,S,j;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <Box width="200px">
      <Text>
        Marshmallow car insurance, the best insurance in town.{' '}
        <Tooltip {...props}>Hover here</Tooltip> to learn more as the Policy
        Holder.
      </Text>
      <Text my="12px">
        Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus,
        a iaculis mauris.{' '}
        <Tooltip {...props} position="right">
          In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat.
          Etiam accumsan tristique ante, at mollis neque laoreet eget.
        </Tooltip>{' '}
        Duis rhoncus molestie felis a cursus.
      </Text>
    </Box>,
  args: {
    inline: true
  }
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var I,R,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <InnerSection>
      <Box>
        <Row>
          <Tooltip variant="fallback" underline content={<TooltipText typo="caption" color="cream">
                An adjustment changes the <b>cost</b> of the policy. This field
                should <b>not</b> be used to adjust for invoices created after a
                failed up front payment.
                <br />
                <br />
                For annual and Premfina policies, use the \`MTA only\` transaction
                option when issuing an invoice.
                <br />
                <br />
                For instalment policies, use \`spread entire amount\` transaction
                option when issuing an invoice.
              </TooltipText>} position="top">
            <Text typo="body-regular">Adjustment amount</Text>
            <Text typo="caption">(Adjusts the policy cost)</Text>
          </Tooltip>
        </Row>
      </Box>
      <Row>
        <Text typo="body-regular">MTA admin fee</Text>
      </Row>
      <Row>
        <Tooltip underline variant="fallback" content={<TooltipText typo="caption" color="cream">
              This is the policies total new retained refund after this MTA is
              complete.
            </TooltipText>} position="top">
          <Text>Predicted retained refund</Text>
        </Tooltip>
        <Text>£1,345</Text>
      </Row>
    </InnerSection>
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const Te=["LongTextExample","ReactNodeExample","OverflowExample","ModalExample","InlineText","MTAExample"];export{s as InlineText,l as LongTextExample,p as MTAExample,c as ModalExample,a as OverflowExample,i as ReactNodeExample,Te as __namedExportsOrder,xe as default};
//# sourceMappingURL=Tooltip.stories-D9unu-VW.js.map
