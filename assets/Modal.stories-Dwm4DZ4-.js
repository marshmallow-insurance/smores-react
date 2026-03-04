import{j as t,r as d,c as h}from"./iframe-CAoV3ZDX.js";import{B as s}from"./index-CvjMnRHU.js";import"./index-F7_gF-WD.js";import{M as l}from"./Modal-1hVJ8k62.js";import{F as p}from"./index-BQjfk5dt.js";import{k as w}from"./regular-Cz8EdWGq.js";import{B as x}from"./Button-CwRJ3Sua.js";import"./preload-helper-PPVm8Dsz.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./index-BySbrXwa.js";import"./index-DzIkhey4.js";import"./index-C-NuabkT.js";import"./Text-BAOAKnWU.js";import"./polished.esm-CYsXSD1d.js";import"./index-Bazn0Oa1.js";import"./colourMap-Cc45iG9J.js";import"./focusOutline-B3ll9wVE.js";import"./shared.styles-BG7Yiv8-.js";import"./index-CDxdnV47.js";import"./index-Qv6ahtfm.js";import"./Loader-Cw9PDtfH.js";const u=h(s)`
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
//# sourceMappingURL=Modal.stories-Dwm4DZ4-.js.map
