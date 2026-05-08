import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{K as n,l as r,s as i,t as a}from"./iframe-CQpRN2iB.js";import{n as o,t as s}from"./Box-CZ-53cZO.js";import{n as c,t as l}from"./dist--Nf7nF2j.js";import{i as u,y as d}from"./regular-CYHBa_Ng.js";import{t as f}from"./Button-hkUTPwFW.js";import{t as p}from"./Button-837tt2oc.js";import{n as m,t as h}from"./Modal-aKJJdxvw.js";var g,_,v,y,b,x,S,C;t((()=>{g=e(n(),1),i(),s(),p(),m(),c(),d(),_=a(),v=r(o)`
  width: ${e=>e.width||`100%`};
  height: ${e=>e.height};
  transition: height 0.3s ease-in-out;
`,y=e=>{let[t,n]=(0,g.useState)(!1),r=()=>{n(!t)};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h,{...e,showModal:t,handleClick:r,children:e.children}),(0,_.jsx)(f,{primary:!0,onClick:r,children:`Show modal`})]})},b={title:`Modal`,component:h,argTypes:{rightPanel:{description:`Pass react nodes to display on the right side of the modal before the close button`}},decorators:[e=>(0,_.jsx)(`div`,{style:{padding:`20px`},children:(0,_.jsx)(e,{})})]},x={args:{title:`Generic modal`,showModal:!1},render:e=>(0,_.jsx)(y,{...e,children:(0,_.jsx)(o,{children:`[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.`})})},S={args:{icon:`calendar`,title:`Hello world i'm a beautiful modal`,showModal:!1,drawer:!0,cross:!0,closeOnOverlayClick:!1},render:e=>{let[t,n]=(0,g.useState)(!1);return(0,_.jsx)(y,{rightPanel:(0,_.jsx)(o,{onClick:()=>n(e=>!e),children:(0,_.jsx)(l,{icon:u})}),width:t?`500px`:`300px`,...e,children:(0,_.jsx)(v,{height:t?`500px`:`200px`,children:`[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.`})})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Interactive`]}))();export{x as Default,S as Interactive,C as __namedExportsOrder,b as default};
//# sourceMappingURL=Modal.stories-B_utVkFK.js.map