import{r as c,R as t}from"./index-BBkUAzwr.js";import{B as m}from"./Box-BsRHaABa.js";import{B as h}from"./Button-Cj4U-uxT.js";import{M as n}from"./Modal-CAxcGxbJ.js";import"./styled-components.browser.esm-uaFiJyE8.js";import"./Icon-pvgJCDYX.js";import"./theme-D50qMPxU.js";import"./Loader-CkjOWXSV.js";import"./focusOutline-DynQQMjx.js";import"./index-PqR-_bA4.js";import"./IconStrict-aKmz_en-.js";import"./polished.esm-DlUGb9xG.js";import"./Text-DW1uYbgU.js";const y={title:"Modal",component:n,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},w=s=>{const[e,d]=c.useState(!1),a=()=>{d(!e)};return t.createElement(m,{height:"900px"},t.createElement(n,{...s,handleClick:a,showModal:e},"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."),t.createElement(h,{primary:!0,handleClick:a},"Show Modal with Mobile Drawer"))},o=w.bind({});o.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(props: ModalProps) => {
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const _=["Interactive"];export{o as Interactive,_ as __namedExportsOrder,y as default};
