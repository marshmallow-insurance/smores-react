import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,s as i}from"./iframe-cYxMIrL1.js";import{n as a,t as o}from"./Box-ChCs2mOE.js";import{n as s,t as c}from"./dist-Du6vHXbm.js";import{i as l,y as u}from"./regular-HWNhjbsq.js";import{n as d,t as f}from"./Button-BdaT0nx9.js";import{n as p,t as m}from"./Modal-DtUiahzy.js";var h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{h=t(),r(),a(),d(),p(),s(),u(),g=n(),_=i(o)`
  width: ${e=>e.width||`100%`};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,v=e=>{let[t,n]=(0,h.useState)(!1),r=()=>{n(!t)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{...e,showModal:t,handleClick:r,children:e.children}),(0,g.jsx)(f,{primary:!0,onClick:r,children:`Show modal`})]})},y={title:`Modal`,component:m,argTypes:{rightPanel:{description:`Pass react nodes to display on the right side of the modal before the close button`}},decorators:[e=>(0,g.jsx)(`div`,{style:{padding:`20px`},children:(0,g.jsx)(e,{})})]},b={args:{title:`Generic modal`,showModal:!1},render:e=>(0,g.jsx)(v,{...e,children:(0,g.jsx)(o,{children:`[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.`})})},x={args:{icon:`calendar`,title:`Hello world i'm a beautiful modal`,showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(v,{rightPanel:(0,g.jsx)(o,{onClick:()=>n(e=>!e),children:(0,g.jsx)(c,{icon:l})}),width:t?`500px`:`300px`,...e,children:(0,g.jsx)(_,{height:t?`500px`:`200px`,children:`[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.`})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Interactive`]})))()}C();export{b as Default,x as Interactive,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Modal.stories-0K4B6kmO.js.map