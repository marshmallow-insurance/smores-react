import{j as t,r as d,c as h}from"./iframe-CgDZcQWq.js";import{B as s}from"./index-Trpki5nT.js";import"./index-CZbBdWpa.js";import{M as l}from"./Modal-CZGvuvNz.js";import{F as p}from"./index-Bb2Cg_ma.js";import{k as w}from"./regular-Cz8EdWGq.js";import{B as x}from"./Button-B96payq2.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./index-BuWL29OB.js";import"./index-DNDJGArS.js";import"./index-COJDOirk.js";import"./Text-BV-n61Yk.js";import"./polished.esm-CYsXSD1d.js";import"./index-Djw12Bfl.js";import"./colourMap-DcgP4BDp.js";import"./focusOutline-BiU1Y74k.js";import"./shared.styles-CzQF3MJ7.js";import"./index-CsryJuk6.js";import"./index-BzhpUFNX.js";import"./Loader-D-cxhvEE.js";const u=h(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,c=e=>{const[o,n]=d.useState(!1),r=()=>{n(!o)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{...e,showModal:o,handleClick:r,children:e.children}),t.jsx(x,{primary:!0,onClick:r,children:"Show modal"})]})},$={title:"Modal",component:l,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(e,{})})]},a={args:{title:"Generic modal",showModal:!1},render:e=>t.jsx(c,{...e,children:t.jsx(s,{children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})},i={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[o,n]=d.useState(!1),r=t.jsx(s,{onClick:()=>n(m=>!m),children:t.jsx(p,{icon:w})});return t.jsx(c,{rightPanel:r,width:o?"500px":"300px",...e,children:t.jsx(u,{height:o?"500px":"200px",children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <FontAwesomeIcon icon={faArrowsMaximize} />
      </Box>;
    return <Container rightPanel={rightPanel} width={expanded ? '500px' : '300px'} {...args}>
        <StyledBox height={expanded ? '500px' : '200px'}>
          [A modal window] creates a mode that disables the main window, but
          keeps it visible with the modal window as a child window in front of
          it.
        </StyledBox>
      </Container>;
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","Interactive"];export{a as Default,i as Interactive,R as __namedExportsOrder,$ as default};
//# sourceMappingURL=Modal.stories-Cl87vws4.js.map
