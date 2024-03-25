import{u as z,j as o,a as c}from"./styled-components.browser.esm-NpdVBoMN.js";import{r as q}from"./index-BBkUAzwr.js";import{B as e}from"./Box-B1chrFTP.js";import{B as L}from"./Button-DYDpbbBw.js";import{M as P}from"./Modal-gHABlos_.js";import{T as t}from"./Text-BBB4nIzt.js";import{t as D}from"./theme-D50qMPxU.js";import{T as p}from"./Tooltip-CM4tB0DI.js";import"./Icon-Dr4YNh1B.js";import"./Loader-CBVk_E1h.js";import"./focusOutline-Ba1vYvXH.js";import"./index-PqR-_bA4.js";import"./IconStrict-D2xLaKny.js";import"./polished.esm-D0h1-lPB.js";import"./v4-D8aEg3BZ.js";const ro={title:"Tooltip",component:p},d=r=>o(e,{px:{custom:250},py:{custom:150},flex:!0,children:o(p,{...r,children:o(e,{children:"Harry Hill"})})}),I=r=>c(R,{my:"64px",children:[o(p,{...r,children:o(e,{children:"Harry Hill"})}),o(j,{mt:"12px",children:"I am some super long text, that should be clipped"}),o(e,{my:"64px",children:o(p,{...r,children:o(e,{children:"Harry Hill"})})})]}),R=z(e)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${D.colors.blueberry};
`,j=z(t)`
  white-space: nowrap;
`,l=d.bind({});l.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",size:"small",underline:!0,fallbackStyle:!1};const n=d.bind({}),_=o(t,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});n.args={title:"Long text example",content:_,size:"large",underline:!0,shadow:!1};const i=d.bind({}),m=c(e,{children:[o(t,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o(t,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o(t,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o(t,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});i.args={title:"React node example",content:m,size:"large",underline:!0,shadow:!1};const a=I.bind({});a.args={title:"React node example",content:m,size:"large",underline:!0};const N=r=>{const[x,O]=q.useState(!1),u=()=>{O(!x)};return c(e,{height:"900px",children:[o(P,{handleClick:u,showModal:x,children:o(p,{...r,zIndex:1e3,children:o(e,{children:"Harry Hill"})})}),o(L,{primary:!0,handleClick:u,children:"Show Modal with Mobile Drawer"})]})},s=N.bind({});s.args={title:"Modal example",content:m,size:"large",underline:!0};var h,T,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,H,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(M=(H=i.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var b,S,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox my="64px">
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
  </OverflowHiddenBox>`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,k,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`(props: TooltipProps) => {
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
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const to=["Default","LongTextExample","ReactNodeExample","OverflowExample","ModalExample"];export{l as Default,n as LongTextExample,s as ModalExample,a as OverflowExample,i as ReactNodeExample,to as __namedExportsOrder,ro as default};
