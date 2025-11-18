import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DbOFzPHX.js";import{d as g}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as s}from"./index-BX4QO5EF.js";import"./index-B_pYlHxO.js";import{I as b}from"./index-L8F7x2IQ.js";import{M as x}from"./Modal-D2Yp6RQj.js";import{B as j}from"./Button-0Y3FmKWL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./index-DQTZIOkN.js";import"./index-BQeLGKNK.js";import"./index-CRsq04VH.js";import"./IconStrict-DG9vrRYL.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-tjk0UCOR.js";import"./index-rlYdeEZ-.js";import"./Text-DegufsO8.js";import"./theme-D-5TnJVB.js";import"./index-CNfLl1e4.js";import"./index-DQ7REKo0.js";import"./Loader-BX7mYt6_.js";const k=g(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,u=e=>{const[o,n]=w.useState(!1),r=()=>{n(!o)};return t.jsxs(t.Fragment,{children:[t.jsx(x,{...e,showModal:o,handleClick:r,children:e.children}),t.jsx(j,{primary:!0,onClick:r,children:"Show modal"})]})},N={title:"Modal",component:x,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.jsx("div",{style:{padding:"20px"},children:t.jsx(e,{})})]},a={args:{title:"Generic modal",showModal:!1},render:e=>t.jsx(u,{...e,children:t.jsx(s,{children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})},i={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[o,n]=w.useState(!1),r=t.jsx(s,{onClick:()=>n(f=>!f),children:t.jsx(b,{render:o?"collpase":"expand"})});return t.jsx(u,{rightPanel:r,width:o?"500px":"300px",...e,children:t.jsx(k,{height:o?"500px":"200px",children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."})})}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const Q=["Default","Interactive"];export{a as Default,i as Interactive,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories-DaTNL54U.js.map
