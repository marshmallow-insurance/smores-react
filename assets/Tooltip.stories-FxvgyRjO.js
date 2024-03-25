import{R as e,r as O}from"./index-BBkUAzwr.js";import{u as v}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as o}from"./Box-BsRHaABa.js";import{B as q}from"./Button-LLXO4Zm_.js";import{M as R}from"./Modal-BI14A2AY.js";import{T as r}from"./Text-Cn6wBAm-.js";import{t as L}from"./theme-D50qMPxU.js";import{T as i}from"./Tooltip-hkwZ4Lkg.js";import"./Icon-CHY01GOX.js";import"./Loader-CkjOWXSV.js";import"./focusOutline-DynQQMjx.js";import"./index-PqR-_bA4.js";import"./IconStrict-CDgIuAjm.js";import"./polished.esm-DlUGb9xG.js";import"./v4-D8aEg3BZ.js";const oe={title:"Tooltip",component:i},c=t=>e.createElement(o,{px:{custom:250},py:{custom:150},flex:!0},e.createElement(i,{...t},e.createElement(o,null,"Harry Hill"))),P=t=>e.createElement(D,{my:"64px"},e.createElement(i,{...t},e.createElement(o,null,"Harry Hill")),e.createElement(I,{mt:"12px"},"I am some super long text, that should be clipped"),e.createElement(o,{my:"64px"},e.createElement(i,{...t},e.createElement(o,null,"Harry Hill")))),D=v(o)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${L.colors.blueberry};
`,I=v(r)`
  white-space: nowrap;
`,l=c.bind({});l.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",size:"small",underline:!0,fallbackStyle:!1};const a=c.bind({}),_=e.createElement(r,{typo:"desc-light",color:"liquorice"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");a.args={title:"Long text example",content:_,size:"large",underline:!0,shadow:!1};const n=c.bind({}),m=e.createElement(o,null,e.createElement(r,{typo:"desc-light",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"Aintree,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"Manchester,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"T: 07123456789"));n.args={title:"React node example",content:m,size:"large",underline:!0,shadow:!1};const s=P.bind({});s.args={title:"React node example",content:m,size:"large",underline:!0};const N=t=>{const[d,z]=O.useState(!1),x=()=>{z(!d)};return e.createElement(o,{height:"900px"},e.createElement(R,{handleClick:x,showModal:d},e.createElement(i,{...t,zIndex:1e3},e.createElement(o,null,"Harry Hill"))),e.createElement(q,{primary:!0,handleClick:x},"Show Modal with Mobile Drawer"))},p=N.bind({});p.args={title:"Modal example",content:m,size:"large",underline:!0};var u,h,T;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var B,E,g;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(g=(E=a.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var y,f,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var H,M,b;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox my="64px">
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
  </OverflowHiddenBox>`,...(b=(M=s.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var S,C,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`(props: TooltipProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return <Box height="900px">
      <Modal handleClick={handleClick} showModal={showModal}>
        <Tooltip {...props} zIndex={1000}>
          <Box>Harry Hill</Box>
        </Tooltip>
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </Box>;
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const te=["Default","LongTextExample","ReactNodeExample","OverflowExample","ModalExample"];export{l as Default,a as LongTextExample,p as ModalExample,s as OverflowExample,n as ReactNodeExample,te as __namedExportsOrder,oe as default};
