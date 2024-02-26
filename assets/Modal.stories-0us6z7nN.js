import{j as t}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as h}from"./index-BBkUAzwr.js";import{B as c}from"./Box-Dm5zCsW8.js";import{B as m}from"./Button-DADOFzT3.js";import{M as l}from"./Modal-BeTXFKE7.js";import"./Icon-DVP8Tpw-.js";import"./theme-D50qMPxU.js";import"./Loader-DoSrqr7j.js";import"./focusOutline-D9_3RTEn.js";import"./index-PqR-_bA4.js";import"./Text-CBfeAhXx.js";import"./polished.esm-D0h1-lPB.js";import"./IconStrict-8K2dteli.js";const y={title:"Modal",component:l,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},p=n=>{const[a,d]=h.useState(!1),e=()=>{d(!a)};return t.jsxs(c,{height:"900px",children:[t.jsx(l,{...n,handleClick:e,showModal:a,children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."}),t.jsx(m,{primary:!0,handleClick:e,children:"Show Modal with Mobile Drawer"})]})},o=p.bind({});o.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(props: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return <Box height="900px">
      <Modal {...props} handleClick={handleClick} showModal={showModal}>
        [A modal window] creates a mode that disables the main window, but keeps
        it visible with the modal window as a child window in front of it.
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </Box>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const E=["Interactive"];export{o as Interactive,E as __namedExportsOrder,y as default};
