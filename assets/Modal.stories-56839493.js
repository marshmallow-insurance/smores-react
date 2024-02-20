import{a as h,j as e}from"./styled-components.browser.esm-eb1c464b.js";import{r as c}from"./index-1b03fe98.js";import{B as m}from"./Button-75685587.js";import{B as w}from"./Box-f9b8808b.js";import{M as s}from"./Modal-0a8e67c8.js";import"./Icon-641c05f5.js";import"./theme-9a9bdd1b.js";import"./Loader-2c8ae49e.js";import"./focusOutline-54f19c39.js";import"./index-6fd5a17b.js";import"./Text-39468910.js";import"./polished.esm-bca90884.js";import"./IconStrict-c9375e00.js";const _={title:"Modal",component:s,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},p=n=>{const[a,d]=c.useState(!1),t=()=>{d(!a)};return h(w,{height:"900px",children:[e(s,{...n,handleClick:t,showModal:a,children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."}),e(m,{primary:!0,handleClick:t,children:"Show Modal with Mobile Drawer"})]})},o=p.bind({});o.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(props: ModalProps) => {
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
