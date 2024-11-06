import{R as e,r as I}from"./index-B-o1Wr-g.js";import{d as z}from"./styled-components.browser.esm-Vvv69Wxn.js";import{B as t}from"./index-DPdNn-4I.js";import"./index-CXLFXW4F.js";import{M as R}from"./Modal-j7a7So6v.js";import"./index-CXkFtScX.js";import{t as D}from"./theme-CvrCV7IQ.js";import{T as c}from"./Tooltip-CyR3O4QS.js";import{B as L}from"./Button-UjV23m_2.js";import{T as r}from"./Text-B0zro78U.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-B-76eNGj.js";import"./index-DolzVqEf.js";import"./index-BEXsyDua.js";import"./IconStrict-BoeyVJcU.js";import"./polished.esm-CaZDTQnh.js";import"./index-B6O9-T1h.js";import"./Icon-CwOQ1y1c.js";import"./focusOutline-CQKvJmRE.js";import"./index-BO4fWUQ2.js";import"./index-D-YdXaSP.js";import"./index-DCq2zS9s.js";import"./Loader-Hvgm0Zyp.js";function O(){var o="/home/runner/work/smores-react/smores-react/src/Modal/index.ts",m="5dd105f524b1de1725409bd24a1a0f4d635a6d64",d=window,a="__coverage__",q={path:"/home/runner/work/smores-react/smores-react/src/Modal/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/Modal/index.ts"],names:[],mappings:"AAAA,SAAS,aAAa;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5dd105f524b1de1725409bd24a1a0f4d635a6d64"},u=d[a]||(d[a]={});(!u[o]||u[o].hash!==m)&&(u[o]=q);var f=u[o];return O=function(){return f},f}O();const ue={title:"Tooltip",component:c},x=o=>e.createElement(t,{px:{custom:250},py:{custom:150},flex:!0},e.createElement(c,{...o},e.createElement(t,null,"Harry Hill"))),P=o=>e.createElement(N,{my:"64px",tabIndex:0},e.createElement(c,{...o},e.createElement(t,null,"Harry Hill")),e.createElement($,{mt:"12px"},"I am some super long text, that should be clipped"),e.createElement(t,{my:"64px"},e.createElement(c,{...o},e.createElement(t,null,"Harry Hill")))),N=z(t)`
  height: 100px;
  width: 200px;
  overflow: scroll;
  background: ${D.colors.coconut};
`,$=z(r)`
  white-space: nowrap;
`,l=x.bind({});l.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",size:"small",underline:!0,fallbackStyle:!1};const n=x.bind({}),j=e.createElement(r,{typo:"desc-light",color:"liquorice"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");n.args={title:"Long text example",content:j,size:"large",underline:!0,shadow:!1};const s=x.bind({}),h=e.createElement(t,null,e.createElement(r,{typo:"desc-light",color:"liquorice"},"20 Cherry Blossom Lane,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"Aintree,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"Manchester,"),e.createElement(r,{typo:"desc-light",color:"liquorice"},"T: 07123456789"));s.args={title:"React node example",content:h,size:"large",underline:!0,shadow:!1};const p=P.bind({});p.args={title:"React node example",content:h,size:"large",underline:!0};const F=o=>{const[m,d]=I.useState(!1),a=()=>{d(!m)};return e.createElement(t,{height:"900px"},e.createElement(R,{handleClick:a,showModal:m},e.createElement(c,{...o,zIndex:1e3},e.createElement(t,null,"Harry Hill"))),e.createElement(L,{primary:!0,handleClick:a},"Show Modal with Mobile Drawer"))},i=F.bind({});i.args={title:"Modal example",content:h,size:"large",underline:!0};var g,T,B;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,w,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var M,H,b;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(b=(H=s.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var v,S,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox my="64px" tabIndex={0}>
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
  </OverflowHiddenBox>`,...(k=(S=p.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,A,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(props: TooltipProps) => {
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
}`,...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const xe=["Default","LongTextExample","ReactNodeExample","OverflowExample","ModalExample"];export{l as Default,n as LongTextExample,i as ModalExample,p as OverflowExample,s as ReactNodeExample,xe as __namedExportsOrder,ue as default};
//# sourceMappingURL=Tooltip.stories-sGyL8hKf.js.map
