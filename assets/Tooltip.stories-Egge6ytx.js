import{j as e,d,r as y}from"./iframe-DkEiTTr5.js";import{B as r}from"./index-CeRVePXl.js";import"./index-6ScjVudV.js";import"./index-CeRDeQ8M.js";import"./index-xb11CZ3H.js";import{T as n}from"./Tooltip-DYvS1Jo_.js";import{M as g}from"./Modal-1AmufdAN.js";import{B as f}from"./Button-BQh-BaVy.js";import{T as o}from"./Text-FM78xEyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./index-E6CzWMFa.js";import"./index-h2jSMgV3.js";import"./colourMap-BvHrzyVu.js";import"./index-BUKivi19.js";import"./IconStrict-ykcyc_mz.js";import"./polished.esm-CYsXSD1d.js";import"./index-D24641W5.js";import"./focusOutline-H2Nz3fyS.js";import"./index-lDA1cZdR.js";import"./index-DDSU3Yg_.js";import"./Loader-BQMdx52b.js";const J={title:"Tooltip",component:n,args:{title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",underline:!0},argTypes:{variant:{options:["primary","fallback","bubblegum"],control:{type:"select",options:["primary","fallback","bubblegum"]}}},render:t=>e.jsx(r,{px:{custom:250},py:{custom:150},flex:!0,children:e.jsx(n,{...t,children:e.jsx(r,{children:"Harry Hill"})})})},b=e.jsxs(r,{children:[e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"20 Cherry Blossom Lane,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"Aintree,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"Manchester,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"T: 07123456789"})]}),i={args:{title:"Long text example",children:e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),underline:!0}},s={args:{children:e.jsxs(r,{children:[e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"20 Cherry Blossom Lane,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"Aintree,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"Manchester,"}),e.jsx(o,{typo:"body-regular",color:"color.text.base",children:"T: 07123456789"})]}),underline:!0}},l={render:t=>e.jsx(j,{tabIndex:0,children:e.jsxs(r,{flex:!0,direction:"column",gap:"32px",justifyContent:"center",alignItems:"center",children:[e.jsx(n,{...t,position:"left",children:e.jsx(o,{children:"Harry Hill (left)"})}),e.jsx(n,{...t,position:"right",children:e.jsx(o,{children:"Harry Hill (right)"})}),e.jsx(n,{...t,position:"bottom",children:e.jsx(o,{children:"Harry Hill (bottom)"})}),e.jsx(n,{...t,position:"top",children:e.jsx(o,{children:"Harry Hill (top)"})})]})}),args:{children:b,underline:!0},parameters:{layout:"fullscreen"}},j=d(r)`
  padding: 200px 0;
  height: 150vh;
  width: 200%;
  overflow: scroll;
  background: ${({theme:t})=>t.color.surface.base[100]};
`,a={args:{children:b,underline:!0},render:t=>e.jsx(w,{...t})},w=t=>{const[x,T]=y.useState(!1),m=()=>{T(!x)};return e.jsxs(r,{height:"900px",children:[e.jsx(g,{handleClick:m,showModal:x,children:e.jsx(n,{...t,children:e.jsx(r,{children:"Harry Hill"})})}),e.jsx(f,{primary:!0,handleClick:m,children:"Show Modal with Mobile Drawer"})]})},c={render:t=>e.jsxs(r,{width:"200px",children:[e.jsxs(o,{children:["Marshmallow car insurance, the best insurance in town."," ",e.jsx(n,{...t,children:"Hover here"})," to learn more as the Policy Holder."]}),e.jsxs(o,{my:"12px",children:["Nunc cursus fermentum libero vel iaculis. Praesent vel dignissim purus, a iaculis mauris."," ",e.jsx(n,{...t,position:"right",children:"In tempor nibh ut elit sollicitudin, vel ultricies elit volutpat. Etiam accumsan tristique ante, at mollis neque laoreet eget."})," ","Duis rhoncus molestie felis a cursus."]})]}),args:{inline:!0}},p={render:()=>e.jsxs(v,{children:[e.jsx(r,{children:e.jsx(u,{children:e.jsxs(n,{variant:"fallback",underline:!0,content:e.jsxs(h,{typo:"caption",color:"color.surface.base.000",children:["An adjustment changes the ",e.jsx("b",{children:"cost"})," of the policy. This field should ",e.jsx("b",{children:"not"})," be used to adjust for invoices created after a failed up front payment.",e.jsx("br",{}),e.jsx("br",{}),"For annual and Premfina policies, use the `MTA only` transaction option when issuing an invoice.",e.jsx("br",{}),e.jsx("br",{}),"For instalment policies, use `spread entire amount` transaction option when issuing an invoice."]}),position:"top",children:[e.jsx(o,{typo:"body-regular",children:"Adjustment amount"}),e.jsx(o,{typo:"caption",children:"(Adjusts the policy cost)"})]})})}),e.jsx(u,{children:e.jsx(o,{typo:"body-regular",children:"MTA admin fee"})}),e.jsxs(u,{children:[e.jsx(n,{underline:!0,variant:"fallback",content:e.jsx(h,{typo:"caption",color:"color.surface.base.000",children:"This is the policies total new retained refund after this MTA is complete."}),position:"top",children:e.jsx(o,{children:"Predicted retained refund"})}),e.jsx(o,{children:"£1,345"})]})]})},v=d(r)`
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background: ${({theme:t})=>t.color.surface.base[300]};
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`,h=d(o)`
  white-space: normal;
  width: 200px;
`,u=d(r)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Long text example',
    children: <Text typo="body-regular" color="color.text.base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>,
    underline: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Box>
        <Text typo="body-regular" color="color.text.base">
          20 Cherry Blossom Lane,
        </Text>
        <Text typo="body-regular" color="color.text.base">
          Aintree,
        </Text>
        <Text typo="body-regular" color="color.text.base">
          Manchester,
        </Text>
        <Text typo="body-regular" color="color.text.base">
          T: 07123456789
        </Text>
      </Box>,
    underline: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: tooltipContent,
    underline: true
  },
  render: (props: TooltipProps) => <ModalExampleWrapper {...props} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InnerSection>
      <Box>
        <Row>
          <Tooltip variant="fallback" underline content={<TooltipText typo="caption" color="color.surface.base.000">
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
        <Tooltip underline variant="fallback" content={<TooltipText typo="caption" color="color.surface.base.000">
              This is the policies total new retained refund after this MTA is
              complete.
            </TooltipText>} position="top">
          <Text>Predicted retained refund</Text>
        </Tooltip>
        <Text>£1,345</Text>
      </Row>
    </InnerSection>
}`,...p.parameters?.docs?.source}}};const K=["LongTextExample","ReactNodeExample","OverflowExample","ModalExample","InlineText","MTAExample"];export{c as InlineText,i as LongTextExample,p as MTAExample,a as ModalExample,l as OverflowExample,s as ReactNodeExample,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Tooltip.stories-Egge6ytx.js.map
