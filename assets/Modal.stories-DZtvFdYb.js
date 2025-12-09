import{j as t,r as d,d as m}from"./iframe-D3fUkcDU.js";import{B as s}from"./index-5g8Vs21W.js";import"./index-CtLdtpdr.js";import{I as p}from"./index-B659QIn8.js";import{M as l}from"./Modal-BBkMKrtF.js";import{B as w}from"./Button-C8gAZA6-.js";import"./preload-helper-PPVm8Dsz.js";import"./space-BLajQSvN.js";import"./colourMap-CcAq1rhX.js";import"./index-BupIhTTM.js";import"./index-BqGofBd3.js";import"./index-CVU11JdJ.js";import"./IconStrict-WlIFXPKI.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-Btv1hanm.js";import"./index-DUd1Ptp0.js";import"./Text-CkmO_cF3.js";import"./index-BC7ymq5r.js";import"./index-CKebJ2IA.js";import"./Loader-gx6y4QGu.js";const x=m(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,c=e=>{const[o,n]=d.useState(!1),r=()=>{n(!o)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{...e,showModal:o,handleClick:r,children:e.children}),t.jsx(w,{primary:!0,onClick:r,children:"Show modal"})]})},_={title:"Modal",component:l,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(e,{})})]},a={args:{title:"Generic modal",showModal:!1},render:e=>t.jsx(c,{...e,children:t.jsx(s,{children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})},i={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[o,n]=d.useState(!1),r=t.jsx(s,{onClick:()=>n(h=>!h),children:t.jsx(p,{render:o?"collpase":"expand"})});return t.jsx(c,{rightPanel:r,width:o?"500px":"300px",...e,children:t.jsx(x,{height:o?"500px":"200px",children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $=["Default","Interactive"];export{a as Default,i as Interactive,$ as __namedExportsOrder,_ as default};
//# sourceMappingURL=Modal.stories-DZtvFdYb.js.map
