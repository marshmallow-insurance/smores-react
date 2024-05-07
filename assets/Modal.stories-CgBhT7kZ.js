import{r as m,R as t}from"./index-BBkUAzwr.js";import{B as c}from"./Box-BsRHaABa.js";import{B as h}from"./Button-Cj4U-uxT.js";import{M as n}from"./Modal-C8dG0zyW.js";import"./styled-components.browser.esm-uaFiJyE8.js";import"./Icon-pvgJCDYX.js";import"./theme-D50qMPxU.js";import"./Loader-CkjOWXSV.js";import"./focusOutline-DynQQMjx.js";import"./index-PqR-_bA4.js";import"./IconStrict-aKmz_en-.js";import"./polished.esm-DlUGb9xG.js";import"./Text-DW1uYbgU.js";import"./bodyScrollLock.esm-DhkVtT7o.js";const _={title:"Modal",component:n,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},p=s=>{const[e,d]=m.useState(!1),a=()=>{d(!e)};return t.createElement(c,{height:"900px"},t.createElement(n,{...s,handleClick:a,showModal:e},"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."),t.createElement(h,{primary:!0,handleClick:a},"Show Modal with Mobile Drawer"))},o=p.bind({});o.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(props: ModalProps) => {
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
