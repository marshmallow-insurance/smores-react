import{j as t,r as d,d as h}from"./iframe-swDOQ4tF.js";import{B as s}from"./index-BvfSxwGA.js";import"./index-D70VLjfF.js";import{I as p}from"./index-BhqPdVXw.js";import{M as l}from"./Modal-Dha7bYwf.js";import{B as w}from"./Button-1QoIMCyw.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-CCvJBel0.js";import"./index-DqdY44Mm.js";import"./index-Cj4IpV3L.js";import"./index-l7wgl1zL.js";import"./IconStrict-CgwtV5bZ.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-dbaKYmRM.js";import"./index-JbOhu_2r.js";import"./Text-Bq2x_f0N.js";import"./shared.styles-CQn47nmy.js";import"./index-sfsVm1IV.js";import"./index-0QzxSPDm.js";import"./Loader-BmeGSHx4.js";const x=h(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,c=e=>{const[o,n]=d.useState(!1),r=()=>{n(!o)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{...e,showModal:o,handleClick:r,children:e.children}),t.jsx(w,{primary:!0,onClick:r,children:"Show modal"})]})},$={title:"Modal",component:l,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(e,{})})]},a={args:{title:"Generic modal",showModal:!1},render:e=>t.jsx(c,{...e,children:t.jsx(s,{children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})},i={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[o,n]=d.useState(!1),r=t.jsx(s,{onClick:()=>n(m=>!m),children:t.jsx(p,{render:o?"collpase":"expand"})});return t.jsx(c,{rightPanel:r,width:o?"500px":"300px",...e,children:t.jsx(x,{height:o?"500px":"200px",children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Generic modal',
    showModal: false
  },
  render: args => {
    return <Container {...args}>
        <Box>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </Box>
      </Container>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'calendar',
    title: "Hello world i'm a beautiful modal",
    showModal: false,
    drawer: true,
    cross: true,
    closeOnOverlayClick: false
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = useState(false);
    const rightPanel = <Box onClick={() => setExpanded(current => !current)}>
        <Icon render={expanded ? 'collpase' : 'expand'} />
      </Box>;
    return <Container rightPanel={rightPanel} width={expanded ? '500px' : '300px'} {...args}>
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Container>;
  }
}`,...i.parameters?.docs?.source}}};const F=["Default","Interactive"];export{a as Default,i as Interactive,F as __namedExportsOrder,$ as default};
//# sourceMappingURL=Modal.stories-CKJ2Hsh0.js.map
