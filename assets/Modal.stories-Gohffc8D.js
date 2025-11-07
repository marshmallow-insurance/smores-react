import{R as t,r as w}from"./index-DbOFzPHX.js";import{d as g}from"./styled-components.browser.esm-Cttt-Tea.js";import{B as s}from"./index-Cxnk3SxV.js";import"./index-Bv3tsjdU.js";import{I as b}from"./index-BGpL0-6N.js";import{M as u}from"./Modal-DoHniFoc.js";import{B as E}from"./Button-qObZuZOs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./colourMap-BqneUWMU.js";import"./variables-DcGMWv_V.js";import"./index-DQTZIOkN.js";import"./index-BQeLGKNK.js";import"./index-LRgM1OTF.js";import"./IconStrict-pMYFPib_.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-tjk0UCOR.js";import"./index-CD5Esmzs.js";import"./Text-BbX1qfii.js";import"./theme-D-5TnJVB.js";import"./index-CNfLl1e4.js";import"./index-B1qSEQfA.js";import"./Loader-CryEej5M.js";const k=g(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,f=e=>{const[o,i]=w.useState(!1),a=()=>{i(!o)};return t.createElement(t.Fragment,null,t.createElement(u,{...e,showModal:o,handleClick:a},e.children),t.createElement(E,{primary:!0,onClick:a},"Show modal"))},L={title:"Modal",component:u,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.createElement("div",{style:{padding:"20px"}},t.createElement(e,null))]},r={args:{title:"Generic modal",showModal:!1},render:e=>t.createElement(f,{...e},t.createElement(s,null,"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."))},n={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[o,i]=w.useState(!1),a=t.createElement(s,{onClick:()=>i(x=>!x)},t.createElement(b,{render:o?"collpase":"expand"}));return t.createElement(f,{rightPanel:a,width:o?"500px":"300px",...e},t.createElement(k,{height:o?"500px":"200px"},"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."))}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const N=["Default","Interactive"];export{r as Default,n as Interactive,N as __namedExportsOrder,L as default};
//# sourceMappingURL=Modal.stories-Gohffc8D.js.map
