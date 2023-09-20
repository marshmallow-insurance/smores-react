import{j as E,a as o,s as G,A as t,F as te}from"./styled-components.browser.esm-1fe49baf.js";import{B as R}from"./Box-64a8d8ff.js";import{T as n}from"./Text-86e5f67c.js";import{r}from"./index-1b03fe98.js";import{t as h}from"./theme-9a9bdd1b.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";import"./Icon-17e04ef2.js";const j=({eventName:e,callback:p,ref:a,capture:v=!1})=>{r.useEffect(()=>{const d=a&&a.current;if(!d)return;const u={capture:v};return d.addEventListener(e,p,u),()=>{d.removeEventListener(e,p,u)}},[e,a,p,v])},T=({children:e,title:p,content:a,maxWidth:v=500,underline:d=!1,fallbackStyle:u=!1,defaultArrowPosition:L="center"})=>{const V=r.useRef(null),C=r.useRef(document),[Z,k]=r.useState(!1),[i,m]=r.useState("top"),[c,f]=r.useState(L),ee=l=>l.top>=0&&l.left>=0&&l.bottom<=window.innerHeight&&l.right<=window.innerWidth,P=r.useCallback(()=>{var N;const l=i==="left"||i==="right",S=i==="top"||i==="bottom",w=()=>{c==="left"&&f("top"),c==="right"&&f("bottom"),c==="top"&&f("left"),c==="bottom"&&f("right")},s=(N=V.current)==null?void 0:N.getBoundingClientRect();if(s&&!ee(s)){if(s.top>=0&&i!=="top"){f(L),m("top");return}if(s.top<0){l&&w(),m("bottom");return}if(s.right>window.innerWidth){S&&w(),m("left");return}if(s.left<0){S&&w(),m("right");return}if(s.bottom>window.innerHeight){l&&w(),m("top");return}}},[V,i,c]);return r.useEffect(()=>{P()},[]),j({eventName:"resize",callback:P,ref:C}),j({eventName:"scroll",callback:P,ref:C}),E(H,{underline:d,children:[o(n,{cursor:"pointer",onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:e}),E(B,{className:"tooltip",showTip:Z,position:i,arrowPosition:c,ref:V,maxWidth:v,fallbackStyle:u,children:[p&&o(n,{tag:"h5",typo:"desc-medium",color:u?"cream":"liquorice",children:p}),typeof a=="string"&&o(n,{typo:"desc-light",color:u?"cream":"liquorice",children:a})||a]})]})},H=G.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({underline:e})=>e&&t`
      border-bottom: 1px dashed ${h.colors.marshmallowPink};
    `}

  > span:hover + .tooltip {
    opacity: 1;
  }
`,J=18,b=26,K="calc(50% - 12px)",q=`calc(100% + ${J}px);`,$=`calc(50% - ${J/2+b}px);`,_=e=>{switch(e){case"left":return t`
        left: ${$};
      `;case"right":return t`
        right: ${$};
      `;case"top":return t`
        top: ${$};
      `;case"bottom":return t`
        bottom: ${$};
      `;default:return"calc(100% + 18px)"}},Q=e=>{switch(e){case"left":return t`
        left: ${b}px;
      `;case"right":return t`
        right: ${b}px;
      `;default:return t`
        left: ${K};
      `}},U=e=>{switch(e){case"top":return t`
        top: ${b}px;
      `;case"bottom":return t`
        bottom: ${b}px;
      `;default:return t`
        top: ${K};
      `}},oe=t`
  bottom: ${q};
  ${({arrowPosition:e})=>_(e)};

  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>Q(e)}
  }
`,re=t`
  top: ${q};
  ${({arrowPosition:e})=>_(e)};

  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>Q(e)}
  }
`,ne=t`
  right: ${q};

  ${({arrowPosition:e})=>_(e)};
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>U(e)}
  }
`,ae=t`
  left: ${q};

  ${({arrowPosition:e})=>_(e)};
  &:before {
    ${({arrowPosition:e})=>U(e)}
    left: -11px;
  }
`,B=G.div`
  position: absolute;
  margin: auto;
  background: ${h.colors.custard};
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

  ${({position:e})=>e==="top"&&oe}
  ${({position:e})=>e==="bottom"&&re}
	${({position:e})=>e==="left"&&ne}
	${({position:e})=>e==="right"&&ae}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${h.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({fallbackStyle:e})=>e&&t`
      background: ${h.colors.feijoa};
      &:before {
        border-color: transparent ${h.colors.feijoa} transparent transparent;
      }
    `};
`;try{T.displayName="Tooltip",T.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},defaultArrowPosition:{defaultValue:{value:"center"},description:"",name:"defaultArrowPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}try{H.displayName="Container",H.__docgenInfo={description:"",displayName:"Container",props:{underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{B.displayName="Tip",B.__docgenInfo={description:"",displayName:"Tip",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const xe={title:"Tooltip",component:T},A=e=>o(R,{px:{custom:250},py:{custom:150},flex:!0,children:o(T,{...e,children:o(R,{children:"Harry Hill"})})}),x=A.bind({});x.args={title:"Harry Hill",content:"Tooltip content, this is some text, maybe even more text if you feel like it.",position:"top",size:"small",underline:!0,arrowPosition:"left",fallbackStyle:!1};const g=A.bind({}),ie=o(n,{typo:"desc-light",color:"liquorice",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});g.args={title:"Long text example",position:"top",content:ie,size:"large",underline:!0,arrowPosition:"left",shadow:!1};const y=A.bind({}),le=E(te,{children:[o(n,{typo:"desc-light",color:"liquorice",children:"20 Cherry Blossom Lane,"}),o(n,{typo:"desc-light",color:"liquorice",children:"Aintree,"}),o(n,{typo:"desc-light",color:"liquorice",children:"Manchester,"}),o(n,{typo:"desc-light",color:"liquorice",children:"T: 07123456789"})]});y.args={title:"React node example",position:"top",content:le,size:"large",underline:!0,arrowPosition:"left",shadow:!1};var z,M,D;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(D=(M=x.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,W,O;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(O=(W=g.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var F,X,Y;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`(props: TooltipProps) => <Box px={{
  custom: 250
}} py={{
  custom: 150
}} flex>
    <Tooltip {...props}>
      <Box>Harry Hill</Box>
    </Tooltip>
  </Box>`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ge=["Default","LongTextExample","ReactNodeExample"];export{x as Default,g as LongTextExample,y as ReactNodeExample,ge as __namedExportsOrder,xe as default};
//# sourceMappingURL=Tooltip.stories-cd97e5c2.js.map
