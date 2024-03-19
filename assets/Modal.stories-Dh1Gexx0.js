import{a as h,j as e}from"./styled-components.browser.esm-CskBwHif.js";import{r as c}from"./index-BBkUAzwr.js";import{B as m}from"./Box-C7hh6OC3.js";import{B as w}from"./Button-CjsM5XoJ.js";import{M as s}from"./Modal-I_WZBWio.js";import"./Icon-9S3c17xL.js";import"./theme-D50qMPxU.js";import"./Loader-C35yOkI2.js";import"./focusOutline-JAHtHrmh.js";import"./index-PqR-_bA4.js";import"./Text-C5uudnUr.js";import"./polished.esm-D0h1-lPB.js";import"./IconStrict-Cqrd7rwK.js";const _={title:"Modal",component:s,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},p=n=>{const[a,d]=c.useState(!1),t=()=>{d(!a)};return h(m,{height:"900px",children:[e(s,{...n,handleClick:t,showModal:a,children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."}),e(w,{primary:!0,handleClick:t,children:"Show Modal with Mobile Drawer"})]})},o=p.bind({});o.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(props: ModalProps) => {
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const A=["Interactive"];export{o as Interactive,A as __namedExportsOrder,_ as default};
