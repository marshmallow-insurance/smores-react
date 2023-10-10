import{j as H,a as o,s as m,A as t,F as ae}from"./styled-components.browser.esm-1fe49baf.js";import{B as P}from"./Box-6da10d89.js";import{T as r}from"./Text-42cc3ded.js";import{t as u}from"./theme-9a9bdd1b.js";import{r as n}from"./index-1b03fe98.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";import"./Icon-e553a677.js";const z=({eventName:e,callback:p,ref:i,capture:$=!1})=>{n.useEffect(()=>{const f=i&&i.current;if(!f)return;const c={capture:$};return f.addEventListener(e,p,c),()=>{f.removeEventListener(e,p,c)}},[e,i,p,$])},w=({children:e,title:p,content:i,maxWidth:$=500,underline:f=!1,fallbackStyle:c=!1,defaultArrowPosition:S="center"})=>{const E=n.useRef(null),R=n.useRef(document),[ne,N]=n.useState(!1),[a,h]=n.useState("top"),[d,x]=n.useState(S),ie=l=>l.top>=0&&l.left>=0&&l.bottom<=window.innerHeight&&l.right<=window.innerWidth,A=n.useCallback(()=>{var j;const l=a==="left"||a==="right",O=a==="top"||a==="bottom",q=()=>{d==="left"&&x("top"),d==="right"&&x("bottom"),d==="top"&&x("left"),d==="bottom"&&x("right")},s=(j=E.current)==null?void 0:j.getBoundingClientRect();if(s&&!ie(s)){if(s.top>=0&&a!=="top"){x(S),h("top");return}if(s.top<0){l&&q(),h("bottom");return}if(s.right>window.innerWidth){O&&q(),h("left");return}if(s.left<0){O&&q(),h("right");return}if(s.bottom>window.innerHeight){l&&q(),h("top");return}}},[E,a,d]);return n.useEffect(()=>{A()},[]),z({eventName:"resize",callback:A,ref:R}),z({eventName:"scroll",callback:A,ref:R}),H(C,{children:[o(le,{underline:f,cursor:"pointer",onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),children:e}),o(ue,{children:H(L,{className:"tooltip",showTip:ne,position:a,arrowPosition:d,ref:E,maxWidth:$,fallbackStyle:c,children:[p&&o(r,{tag:"h5",typo:"desc-medium",color:c?"cream":"liquorice",children:p}),typeof i=="string"&&o(r,{typo:"desc-light",color:c?"cream":"liquorice",children:i})||i]})})]})},C=m.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,le=m(r)`
  ${({underline:e})=>e&&t`
      border-bottom: 1px dashed ${u.colors.marshmallowPink};
    `}
`,Z=18,T=26,ee="calc(50% - 12px)",V=`calc(100% + ${Z}px);`,_=`calc(50% - ${Z/2+T}px);`,B=e=>{switch(e){case"left":return t`
        left: ${_};
      `;case"right":return t`
        right: ${_};
      `;case"top":return t`
        top: ${_};
      `;case"bottom":return t`
        bottom: ${_};
      `;default:return"calc(100% + 18px)"}},te=e=>{switch(e){case"left":return t`
        left: ${T}px;
      `;case"right":return t`
        right: ${T}px;
      `;default:return t`
        left: ${ee};
      `}},oe=e=>{switch(e){case"top":return t`
        top: ${T}px;
      `;case"bottom":return t`
        bottom: ${T}px;
      `;default:return t`
        top: ${ee};
      `}},se=t`
  bottom: ${V};
  ${({arrowPosition:e})=>B(e)};

  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>te(e)}
  }
`,pe=t`
  top: ${V};
  ${({arrowPosition:e})=>B(e)};

  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>te(e)}
  }
`,ce=t`
  right: ${V};

  ${({arrowPosition:e})=>B(e)};
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>oe(e)}
  }
`,de=t`
  left: ${V};

  ${({arrowPosition:e})=>B(e)};
  &:before {
    ${({arrowPosition:e})=>oe(e)}
    left: -11px;
  }
`,ue=m.div`
  position: fixed;
  pointer-events: none;
`,L=m.div`
  position: absolute;
  margin: auto;
  background: ${u.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({showTip:e})=>e?"1":"0"};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: 10;

  left: 50%;
  transform: translateX(-50%);

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({maxWidth:e})=>e&&e+"px"};

  ${({position:e})=>e==="top"&&se}
  ${({position:e})=>e==="bottom"&&pe}
	${({position:e})=>e==="left"&&ce}
	${({position:e})=>e==="right"&&de}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${u.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({fallbackStyle:e})=>e&&t`
      background: ${u.colors.feijoa};
      &:before {
        border-color: transparent ${u.colors.feijoa} transparent transparent;
      }
    `};
`;try{w.displayName="Tooltip",w.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},defaultArrowPosition:{defaultValue:{value:"center"},description:"",name:"defaultArrowPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{C.displayName="Container",C.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{L.displayName="Tip",L.__docgenInfo={description:"",displayName:"Tip",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const _e={title:"Tooltip",component:w},k=e=>o(P,{px:{custom:250},py:{custom:150},flex:!0,children:o(w,{...e,children:o(P,{children:"Harry Hill"})})}),me=e=>H(fe,{children:[o(w,{...e,children:o(P,{children:"Harry Hill"})}),o(he,{mt:"12px",children:"I am some super long text, that should be clipped"})]}),fe=m(P)`
  height: 200px;
  width: 200px;
  margin-top: 200px;
  overflow: hidden;
  background: ${u.colors.blueberry};
`,he=m(r)`
  white-space: nowrap;
`,g=k.bind({});g.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",position:"top",size:"small",underline:!0,arrowPosition:"left",fallbackStyle:!1};const y=k.bind({}),xe=o(r,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});y.args={title:"Long text example",position:"top",content:xe,size:"large",underline:!0,arrowPosition:"left",shadow:!1};const b=k.bind({}),re=H(ae,{children:[o(r,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o(r,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o(r,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o(r,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});b.args={title:"React node example",position:"top",content:re,size:"large",underline:!0,arrowPosition:"left",shadow:!1};const v=me.bind({});v.args={title:"React node example",position:"top",content:re,size:"large",arrowPosition:"left",underline:!0};var I,M,D;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(D=(M=g.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var W,F,X;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(X=(F=y.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var U,Y,G;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`(props: TooltipProps) => <OverflowHiddenBox>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
    <ClippedText mt="12px">
      I am some super long text, that should be clipped
    </ClippedText>
  </OverflowHiddenBox>`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const He=["Default","LongTextExample","ReactNodeExample","OverflowExample"];export{g as Default,y as LongTextExample,v as OverflowExample,b as ReactNodeExample,He as __namedExportsOrder,_e as default};
//# sourceMappingURL=Tooltip.stories-3a86ed76.js.map
