import{R as t,r as w}from"./index-Dxs5m6lS.js";import{d as g}from"./theme-BXEoD8b-.js";import{B as s}from"./index-C1oJge18.js";import"./index-CuAXw0x2.js";import{I as b}from"./index-BTZCzcOv.js";import{M as u}from"./Modal-CVnIv0Vd.js";import{B as E}from"./Button-BHBe_CQN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-B-76eNGj.js";import"./index-gMDb9Zpm.js";import"./index-DrFkskS4.js";import"./index-BiC7OxrZ.js";import"./IconStrict-BGgN4-lY.js";import"./polished.esm-loEtNAQt.js";import"./focusOutline-C3BFCsJi.js";import"./index-DoT6b7c8.js";import"./Text-Bbj5LYJq.js";import"./index-BKbNL5rK.js";import"./index-Crcw-Fnt.js";import"./Loader-DdI28pyK.js";const k=g(s)`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,f=e=>{const[a,i]=w.useState(!1),o=()=>{i(!a)};return t.createElement(t.Fragment,null,t.createElement(u,{...e,showModal:a,handleClick:o},e.children),t.createElement(E,{primary:!0,onClick:o},"Show modal"))},z={title:"Modal",component:u,argTypes:{rightPanel:{description:"Pass react nodes to display on the right side of the modal before the close button"}},decorators:[e=>t.createElement("div",{style:{padding:"20px"}},t.createElement(e,null))]},r={args:{title:"Generic modal",showModal:!1},render:e=>t.createElement(f,{...e},t.createElement(s,null,"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."))},n={args:{icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{const[a,i]=w.useState(!1),o=t.createElement(s,{onClick:()=>i(x=>!x)},t.createElement(b,{render:a?"collpase":"expand"}));return t.createElement(f,{rightPanel:o,width:a?"500px":"300px",...e},t.createElement(k,{height:a?"500px":"200px"},"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."))}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const J=["Default","Interactive"];export{r as Default,n as Interactive,J as __namedExportsOrder,z as default};
//# sourceMappingURL=Modal.stories-BCekPcgu.js.map
