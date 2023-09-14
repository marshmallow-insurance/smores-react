import{j as V,a as o,s as Y,A as t,F as ee}from"./styled-components.browser.esm-1fe49baf.js";import{B as S}from"./Box-d9c24c93.js";import{T as n}from"./Text-9e06f39a.js";import{r}from"./index-1b03fe98.js";import{t as E}from"./theme-9a9bdd1b.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-65f7e9f7.js";import"./Icon-a31d4b43.js";const k=({eventName:e,callback:p,ref:i,capture:b=!1})=>{r.useEffect(()=>{const c=i&&i.current;if(!c)return;const d={capture:b};return c.addEventListener(e,p,d),()=>{c.removeEventListener(e,p,d)}},[e,i,p,b])},T=({children:e,title:p,content:i,maxWidth:b=500,underline:c=!1,defaultArrowPosition:d="center"})=>{const _=r.useRef(null),L=r.useRef(document),[U,C]=r.useState(!1),[a,m]=r.useState("top"),[u,f]=r.useState(d),Z=l=>l.top>=0&&l.left>=0&&l.bottom<=window.innerHeight&&l.right<=window.innerWidth,P=r.useCallback(()=>{var R;const l=a==="left"||a==="right",N=a==="top"||a==="bottom",v=()=>{u==="left"&&f("top"),u==="right"&&f("bottom"),u==="top"&&f("left"),u==="bottom"&&f("right")},s=(R=_.current)==null?void 0:R.getBoundingClientRect();if(s&&!Z(s)){if(s.top>=0&&a!=="top"){f(d),m("top");return}if(s.top<0){l&&v(),m("bottom");return}if(s.right>window.innerWidth){N&&v(),m("left");return}if(s.left<0){N&&v(),m("right");return}if(s.bottom>window.innerHeight){l&&v(),m("top");return}}},[_,a,u]);return r.useEffect(()=>{P()},[]),k({eventName:"resize",callback:P,ref:L}),k({eventName:"scroll",callback:P,ref:L}),V(H,{underline:c,children:[o(n,{cursor:"pointer",onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),children:e}),V(B,{className:"tooltip",showTip:U,position:a,arrowPosition:u,ref:_,maxWidth:b,children:[p&&o(n,{tag:"h5",typo:"desc-medium",color:"liquorice",children:p}),typeof i=="string"&&o(n,{typo:"desc-light",color:"liquorice",children:i})||i]})]})},H=Y.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({underline:e})=>e&&t`
      border-bottom: 1px dashed ${E.colors.marshmallowPink};
    `}

  > span:hover + .tooltip {
    opacity: 1;
  }
`,G=18,y=26,J="calc(50% - 12px)",$=`calc(100% + ${G}px);`,w=`calc(50% - ${G/2+y}px);`,q=e=>{switch(e){case"left":return t`
        left: ${w};
      `;case"right":return t`
        right: ${w};
      `;case"top":return t`
        top: ${w};
      `;case"bottom":return t`
        bottom: ${w};
      `;default:return"calc(100% + 18px)"}},K=e=>{switch(e){case"left":return t`
        left: ${y}px;
      `;case"right":return t`
        right: ${y}px;
      `;default:return t`
        left: ${J};
      `}},Q=e=>{switch(e){case"top":return t`
        top: ${y}px;
      `;case"bottom":return t`
        bottom: ${y}px;
      `;default:return t`
        top: ${J};
      `}},te=t`
  bottom: ${$};
  ${({arrowPosition:e})=>q(e)};

  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>K(e)}
  }
`,oe=t`
  top: ${$};
  ${({arrowPosition:e})=>q(e)};

  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>K(e)}
  }
`,re=t`
  right: ${$};

  ${({arrowPosition:e})=>q(e)};
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>Q(e)}
  }
`,ne=t`
  left: ${$};

  ${({arrowPosition:e})=>q(e)};
  &:before {
    ${({arrowPosition:e})=>Q(e)}
    left: -11px;
  }
`,B=Y.div`
  position: absolute;
  margin: auto;
  background: ${E.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({showTip:e})=>e?"1":"0"};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;

  left: 50%;
  transform: translateX(-50%);

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({maxWidth:e})=>e&&e+"px"};

  ${({position:e})=>e==="top"&&te}
  ${({position:e})=>e==="bottom"&&oe}
	${({position:e})=>e==="left"&&re}
	${({position:e})=>e==="right"&&ne}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${E.colors.custard} transparent transparent;
    position: absolute;
  }
`;try{T.displayName="Tooltip",T.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},defaultArrowPosition:{defaultValue:{value:"center"},description:"",name:"defaultArrowPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}try{H.displayName="Container",H.__docgenInfo={description:"",displayName:"Container",props:{underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{B.displayName="Tip",B.__docgenInfo={description:"",displayName:"Tip",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const he={title:"Tooltip",component:T},A=e=>o(S,{px:{custom:250},py:{custom:150},flex:!0,children:o(T,{...e,children:o(S,{children:"Harry Hill"})})}),h=A.bind({});h.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",position:"top",size:"small",underline:!0,arrowPosition:"left",shadow:!0};const x=A.bind({}),ie=o(n,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});x.args={title:"Long text example",position:"top",content:ie,size:"large",underline:!0,arrowPosition:"left",shadow:!1};const g=A.bind({}),ae=V(ee,{children:[o(n,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o(n,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o(n,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o(n,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});g.args={title:"React node example",position:"top",content:ae,size:"large",underline:!0,arrowPosition:"left",shadow:!1};var M,j,z;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(z=(j=h.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var D,I,W;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(W=(I=x.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var O,F,X;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(X=(F=g.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};const xe=["Default","LongTextExample","ReactNodeExample"];export{h as Default,x as LongTextExample,g as ReactNodeExample,xe as __namedExportsOrder,he as default};
//# sourceMappingURL=Tooltip.stories-0c1c52ba.js.map
