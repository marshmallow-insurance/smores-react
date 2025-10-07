import{R as e,r as O}from"./index-DbOFzPHX.js";import{d as u}from"./styled-components.browser.esm-BbZQrDuP.js";import{B as r}from"./index-DskQjIgy.js";import"./index-qDtCLj2-.js";import"./index-CX9NJSxM.js";import"./index-COZvmTcE.js";import{t as d}from"./theme-D-5TnJVB.js";import{T as n}from"./Tooltip-CzdZHj5a.js";import{M as F}from"./Modal-LVoSemvh.js";import{B as N}from"./Button-DyqqEkGw.js";import{T as t}from"./Text-BOGL1RzE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DQTZIOkN.js";import"./index-BQeLGKNK.js";import"./index-DOTlaHaJ.js";import"./IconStrict-lSUh57Q2.js";import"./polished.esm-CYsXSD1d.js";import"./index-CHrSHfjR.js";import"./focusOutline-Cfflnwlf.js";import"./index-CNfLl1e4.js";import"./index-D3CETfXj.js";import"./Loader-DqW9abCT.js";import"./variables-DcGMWv_V.js";const xe={title:"Tooltip",component:n,args:{title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",underline:!0},argTypes:{variant:{options:["primary","fallback","bubblegum"],control:{type:"select",options:["primary","fallback","bubblegum"]}}},render:o=>e.createElement(r,{px:{custom:250},py:{custom:150},flex:!0},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill")))},P=e.createElement(r,null,e.createElement(t,{typo:"body-regular",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"T: 07123456789")),l={args:{title:"Long text example",children:e.createElement(t,{typo:"body-regular",color:"liquorice"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),underline:!0}},i={args:{children:e.createElement(r,null,e.createElement(t,{typo:"body-regular",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"body-regular",color:"liquorice"},"T: 07123456789")),underline:!0}},a={render:o=>e.createElement(D,{tabIndex:0},e.createElement(r,{flex:!0,direction:"column",gap:"32px",justifyContent:"center",alignItems:"center"},e.createElement(n,{...o,position:"left"},e.createElement(t,null,"Harry Hill (left)")),e.createElement(n,{...o,position:"right"},e.createElement(t,null,"Harry Hill (right)")),e.createElement(n,{...o,position:"bottom"},e.createElement(t,null,"Harry Hill (bottom)")),e.createElement(n,{...o,position:"top"},e.createElement(t,null,"Harry Hill (top)")))),args:{children:P,underline:!0},parameters:{backgrounds:{values:[{name:"Coconut",value:d.colors.coconut}],default:"Coconut"},layout:"fullscreen"}},D=u(r)`
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${d.colors.coconut};
`,c={args:{children:P,underline:!0},render:o=>e.createElement(W,{...o})},W=o=>{const[x,L]=O.useState(!1),T=()=>{L(!x)};return e.createElement(r,{height:"900px"},e.createElement(F,{handleClick:T,showModal:x},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill"))),e.createElement(N,{primary:!0,handleClick:T},"Show Modal with Mobile Drawer"))},s={render:o=>e.createElement(r,{width:"200px"},e.createElement(t,null,"Marshmallow car insurance, the best insurance in town."," ",e.createElement(n,{...o},"Hover here")," to learn more as the Policy Holder."),e.createElement(t,{my:"12px"},"Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus, a iaculis mauris."," ",e.createElement(n,{...o,position:"right"},"In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat. Etiam accumsan tristique ante, at mollis neque laoreet eget.")," ","Duis rhoncus molestie felis a cursus.")),args:{inline:!0}},p={render:()=>e.createElement(_,null,e.createElement(r,null,e.createElement(m,null,e.createElement(n,{variant:"fallback",underline:!0,content:e.createElement(y,{typo:"caption",color:"cream"},"An adjustment changes the ",e.createElement("b",null,"cost")," of the policy. This field should ",e.createElement("b",null,"not")," be used to adjust for invoices created after a failed up front payment.",e.createElement("br",null),e.createElement("br",null),"For annual and Premfina policies, use the `MTA only` transaction option when issuing an invoice.",e.createElement("br",null),e.createElement("br",null),"For instalment policies, use `spread entire amount` transaction option when issuing an invoice."),position:"top"},e.createElement(t,{typo:"body-regular"},"Adjustment amount"),e.createElement(t,{typo:"caption"},"(Adjusts the policy cost)")))),e.createElement(m,null,e.createElement(t,{typo:"body-regular"},"MTA admin fee")),e.createElement(m,null,e.createElement(n,{underline:!0,variant:"fallback",content:e.createElement(y,{typo:"caption",color:"cream"},"This is the policies total new retained refund after this MTA is complete."),position:"top"},e.createElement(t,null,"Predicted retained refund")),e.createElement(t,null,"£1,345")))},_=u(r)`
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: ${d.colors.custard};
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`,y=u(t)`
  white-space: normal;
  width: 200px;
`,m=u(r)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;var h,g,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Long text example',
    children: <Text typo="body-regular" color="liquorice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>,
    underline: true
  }
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var b,f,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,H,M;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    backgrounds: {
      values: [{
        name: 'Coconut',
        value: theme.colors.coconut
      }],
      default: 'Coconut'
    },
    layout: 'fullscreen'
  }
}`,...(M=(H=a.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var q,B,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: tooltipContent,
    underline: true
  },
  render: (props: TooltipProps) => <ModalExampleWrapper {...props} />
}`,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var C,k,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,I,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const Te=["LongTextExample","ReactNodeExample","OverflowExample","ModalExample","InlineText","MTAExample"];export{s as InlineText,l as LongTextExample,p as MTAExample,c as ModalExample,a as OverflowExample,i as ReactNodeExample,Te as __namedExportsOrder,xe as default};
//# sourceMappingURL=Tooltip.stories-BYbnm0xX.js.map
