import{s as k,j as o}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as z}from"./index-BBkUAzwr.js";import{B as e}from"./Box-DB724hnb.js";import{B as O}from"./Button-BgNmwUrS.js";import{M as q}from"./Modal-JfLwbleT.js";import{T as t}from"./Text-DnLt-YfN.js";import{t as L}from"./theme-D50qMPxU.js";import{T as p}from"./Tooltip-CnqGbsdk.js";import"./Icon-CtANFpqu.js";import"./Loader-DblCbV5R.js";import"./focusOutline-D9_3RTEn.js";import"./index-PqR-_bA4.js";import"./IconStrict-CA4PACgP.js";import"./polished.esm-D0h1-lPB.js";import"./v4-D8aEg3BZ.js";const eo={title:"Tooltip",component:p},c=r=>o.jsx(e,{px:{custom:250},py:{custom:150},flex:!0,children:o.jsx(p,{...r,children:o.jsx(e,{children:"Harry Hill"})})}),P=r=>o.jsxs(R,{my:"64px",children:[o.jsx(p,{...r,children:o.jsx(e,{children:"Harry Hill"})}),o.jsx(D,{mt:"12px",children:"I am some super long text, that should be clipped"}),o.jsx(e,{my:"64px",children:o.jsx(p,{...r,children:o.jsx(e,{children:"Harry Hill"})})})]}),R=k(e)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${L.colors.blueberry};
`,D=k(t)`
  white-space: nowrap;
`,l=c.bind({});l.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",size:"small",underline:!0,fallbackStyle:!1};const s=c.bind({}),I=o.jsx(t,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});s.args={title:"Long text example",content:I,size:"large",underline:!0,shadow:!1};const n=c.bind({}),d=o.jsxs(e,{children:[o.jsx(t,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o.jsx(t,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o.jsx(t,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o.jsx(t,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});n.args={title:"React node example",content:d,size:"large",underline:!0,shadow:!1};const i=P.bind({});i.args={title:"React node example",content:d,size:"large",underline:!0};const _=r=>{const[x,v]=z.useState(!1),m=()=>{v(!x)};return o.jsxs(e,{height:"900px",children:[o.jsx(q,{handleClick:m,showModal:x,children:o.jsx(p,{...r,zIndex:1e3,children:o.jsx(e,{children:"Harry Hill"})})}),o.jsx(O,{primary:!0,handleClick:m,children:"Show Modal with Mobile Drawer"})]})},a=_.bind({});a.args={title:"Modal example",content:d,size:"large",underline:!0};var u,h,T;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,B,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(g=(B=s.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var f,w,H;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(H=(w=n.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var j,M,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox my="64px">
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
  </OverflowHiddenBox>`,...(b=(M=i.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var S,E,C;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(props: TooltipProps) => {
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
}`,...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const ro=["Default","LongTextExample","ReactNodeExample","OverflowExample","ModalExample"];export{l as Default,s as LongTextExample,a as ModalExample,i as OverflowExample,n as ReactNodeExample,ro as __namedExportsOrder,eo as default};
