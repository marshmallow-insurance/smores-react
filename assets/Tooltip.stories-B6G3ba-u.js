import{R as e,r as N}from"./index-CO7zwj5_.js";import{t as g,d as x}from"./theme-pdmEyuPW.js";import{B as r}from"./index-BmqobpQ-.js";import"./index-DmM31DcR.js";import{M as W}from"./Modal-CqjCR2BQ.js";import"./index-D53tEmhk.js";import{T as n}from"./Tooltip-xTUe1KQB.js";import{B as $}from"./Button-B4ia7QG0.js";import{T as t}from"./Text-D_0DKx3I.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-B-76eNGj.js";import"./index-CzYTO9EQ.js";import"./index-WNl228C0.js";import"./index-HwzKLIxr.js";import"./IconStrict-Dj9dmqKH.js";import"./polished.esm-CaZDTQnh.js";import"./index-CjJ02WNu.js";import"./focusOutline-CPyS9WD5.js";import"./index-42b5BPhF.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-zpuypR-g.js";import"./Loader-OzE0hTOR.js";function O(){var o="/home/runner/work/smores-react/smores-react/src/Modal/index.ts",l="5dd105f524b1de1725409bd24a1a0f4d635a6d64",i=window,a="__coverage__",F={path:"/home/runner/work/smores-react/smores-react/src/Modal/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/Modal/index.ts"],names:[],mappings:"AAAA,SAAS,aAAa;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5dd105f524b1de1725409bd24a1a0f4d635a6d64"},c=i[a]||(i[a]={});(!c[o]||c[o].hash!==l)&&(c[o]=F);var f=c[o];return O=function(){return f},f}O();const xe={title:"Tooltip",component:n,args:{title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",underline:!0},argTypes:{variant:{options:["primary","fallback","bubblegum"],control:{type:"select",options:["primary","fallback","bubblegum"]}}},render:o=>e.createElement(r,{px:{custom:250},py:{custom:150},flex:!0},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill")))},D=e.createElement(r,null,e.createElement(t,{typo:"desc-light",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"T: 07123456789")),s={args:{title:"Long text example",children:e.createElement(t,{typo:"desc-light",color:"liquorice"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),underline:!0}},p={args:{children:e.createElement(r,null,e.createElement(t,{typo:"desc-light",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"Aintree,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"Manchester,"),e.createElement(t,{typo:"desc-light",color:"liquorice"},"T: 07123456789")),underline:!0}},m={render:o=>e.createElement(z,{tabIndex:0},e.createElement(r,{flex:!0,direction:"column",gap:"32px",justifyContent:"center",alignItems:"center"},e.createElement(n,{...o,position:"left"},e.createElement(t,null,"Harry Hill (left)")),e.createElement(n,{...o,position:"right"},e.createElement(t,null,"Harry Hill (right)")),e.createElement(n,{...o,position:"bottom"},e.createElement(t,null,"Harry Hill (bottom)")),e.createElement(n,{...o,position:"top"},e.createElement(t,null,"Harry Hill (top)")))),args:{children:D,underline:!0},parameters:{backgrounds:{values:[{name:"Coconut",value:g.colors.coconut}],default:"Coconut"},layout:"fullscreen"}},z=x(r)`
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${g.colors.coconut};
`,u={args:{children:D,underline:!0},render:o=>e.createElement(G,{...o})},G=o=>{const[l,i]=N.useState(!1),a=()=>{i(!l)};return e.createElement(r,{height:"900px"},e.createElement(W,{handleClick:a,showModal:l},e.createElement(n,{...o},e.createElement(r,null,"Harry Hill"))),e.createElement($,{primary:!0,handleClick:a},"Show Modal with Mobile Drawer"))},d={render:o=>e.createElement(r,{width:"200px"},e.createElement(t,null,"Marshmallow car insurance, the best insurance in town."," ",e.createElement(n,{...o},"Hover here")," to learn more as the Policy Holder."),e.createElement(t,{my:"12px"},"Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus, a iaculis mauris."," ",e.createElement(n,{...o,position:"right"},"In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat. Etiam accumsan tristique ante, at mollis neque laoreet eget.")," ","Duis rhoncus molestie felis a cursus.")),args:{inline:!0}},h={render:()=>e.createElement(J,null,e.createElement(r,null,e.createElement(T,null,e.createElement(n,{variant:"fallback",underline:!0,content:e.createElement(E,{typo:"caption",color:"cream"},"An adjustment changes the ",e.createElement("b",null,"cost")," of the policy. This field should ",e.createElement("b",null,"not")," be used to adjust for invoices created after a failed up front payment.",e.createElement("br",null),e.createElement("br",null),"For annual and Premfina policies, use the `MTA only` transaction option when issuing an invoice.",e.createElement("br",null),e.createElement("br",null),"For instalment policies, use `spread entire amount` transaction option when issuing an invoice."),position:"top"},e.createElement(t,{typo:"body-regular"},"Adjustment amount"),e.createElement(t,{typo:"caption"},"(Adjusts the policy cost)")))),e.createElement(T,null,e.createElement(t,{typo:"body-regular"},"MTA admin fee")),e.createElement(T,null,e.createElement(n,{underline:!0,variant:"fallback",content:e.createElement(E,{typo:"caption",color:"cream"},"This is the policies total new retained refund after this MTA is complete."),position:"top"},e.createElement(t,null,"Predicted retained refund")),e.createElement(t,null,"£1,345")))},J=x(r)`
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: ${g.colors.custard};
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`,E=x(t)`
  white-space: normal;
  width: 200px;
`,T=x(r)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Long text example',
    children: <Text typo="desc-light" color="liquorice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>,
    underline: true
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,M,H;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <Box>
        <Text typo="desc-light" color="liquorice">
          20 Cherry Blossom Lane,
        </Text>
        <Text typo="desc-light" color="liquorice">
          Aintree,
        </Text>
        <Text typo="desc-light" color="liquorice">
          Manchester,
        </Text>
        <Text typo="desc-light" color="liquorice">
          T: 07123456789
        </Text>
      </Box>,
    underline: true
  }
}`,...(H=(M=p.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var A,q,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var S,k,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: tooltipContent,
    underline: true
  },
  render: (props: TooltipProps) => <ModalExampleWrapper {...props} />
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,I,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,L,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const Te=["LongTextExample","ReactNodeExample","OverflowExample","ModalExample","InlineText","MTAExample"];export{d as InlineText,s as LongTextExample,h as MTAExample,u as ModalExample,m as OverflowExample,p as ReactNodeExample,Te as __namedExportsOrder,xe as default};
//# sourceMappingURL=Tooltip.stories-B6G3ba-u.js.map
