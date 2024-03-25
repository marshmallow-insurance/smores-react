import{a as E,j as $,u as _,b as r}from"./styled-components.browser.esm-NpdVBoMN.js";import{r as i}from"./index-BBkUAzwr.js";import{r as X}from"./index-PqR-_bA4.js";import{B as H}from"./Box-BLBwDpxh.js";import{T as P}from"./Text-BYsPHR4J.js";import{t as m}from"./theme-D50qMPxU.js";import{v as M}from"./v4-D8aEg3BZ.js";const I=({eventName:e,callback:l,ref:o,capture:a=!1})=>{i.useEffect(()=>{const p=o&&o.current;if(!p)return;const h={capture:a};return p.addEventListener(e,l,h),()=>{p.removeEventListener(e,l,h)}},[e,o,l,a])},R=(e,l)=>{let o;return(...a)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...a),o=void 0},l)}},B=({children:e,title:l,content:o,position:a="top",maxWidth:p=500,underline:h=!1,fallbackStyle:y=!1,zIndex:S=10,portalContainer:j=document.body})=>{const C=i.useRef(document),d=i.useRef(null),[z,V]=i.useState(!1),[g,c]=i.useState(a),[n,A]=i.useState(null),[q,D]=i.useState({top:0,left:0}),k=M(),Y=t=>t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth,x=i.useCallback(()=>{var s;const t=(s=d.current)==null?void 0:s.getBoundingClientRect();if(t&&!Y(t)){if(t.top>=0&&g!=="top"){c("top");return}if(t.top<0){c("bottom");return}if(t.right>window.innerWidth){c("left");return}if(t.left<0){c("right");return}if(t.bottom>window.innerHeight){c("top");return}}},[d,g]);i.useEffect(()=>{x(),A(document.getElementById(k))},[]),i.useEffect(()=>{c(a)},[a]);const w=18,L=()=>{if(!n)return{top:0,left:0};if(!d.current)return{top:0,left:0};const t=n.getBoundingClientRect(),s=d.current.getBoundingClientRect();let u=0,f=0;switch(g){case"top":u=t.top+window.scrollY-s.height-w,f=t.left+window.scrollX+t.width/2-s.width/2;break;case"bottom":u=t.bottom+window.scrollY+w,f=t.left+window.scrollX+t.width/2-s.width/2;break;case"left":f=t.left+window.scrollX-s.width-w,u=t.top+window.scrollY+t.height/2-s.height/2;break;case"right":f=t.right+window.scrollX+w,u=t.top+window.scrollY+t.height/2-s.height/2;break}return{top:u,left:f}};return i.useEffect(()=>{n&&D(L())},[a,window.scrollY,d.current,n,n==null?void 0:n.getBoundingClientRect().top,n==null?void 0:n.getBoundingClientRect().left]),I({eventName:"resize",callback:R(x,100),ref:C}),I({eventName:"scroll",callback:R(x,100),ref:C}),E(v,{children:[$(F,{id:k,$underline:h,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:e}),n&&X.createPortal(E(T,{className:"tooltip",$showTip:z,$position:a,$arrowPosition:g,ref:d,$maxWidth:p,$fallbackStyle:y,$zIndex:S,style:{position:"absolute",top:`${q.top}px`,left:`${q.left}px`},children:[l&&$(P,{tag:"h5",typo:"desc-medium",color:y?"cream":"liquorice",children:l}),typeof o=="string"&&$(P,{typo:"desc-light",color:y?"cream":"liquorice",children:o})||o]}),j)]})},v=_.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,F=_(H)`
  cursor: pointer;
  ${({$underline:e})=>e&&r`
      border-bottom: 1px dashed ${m.colors.marshmallowPink};
    `}
`,b=26,O="calc(50% - 6px)",U="calc(50% - 12px)",N=e=>{switch(e){case"left":return r`
        left: ${b}px;
      `;case"right":return r`
        right: ${b}px;
      `;default:return r`
        left: ${O};
      `}},W=e=>{switch(e){case"top":return r`
        top: ${b}px;
      `;case"bottom":return r`
        bottom: ${b}px;
      `;default:return r`
        top: ${U};
      `}},G=r`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({$arrowPosition:e})=>N(e)}
  }
`,J=r`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({$arrowPosition:e})=>N(e)}
  }
`,K=r`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({$arrowPosition:e})=>W(e)}
  }
`,Q=r`
  &:before {
    left: -11px;
    ${({$arrowPosition:e})=>W(e)}
  }
`,T=_.div`
  position: absolute;
  margin: auto;
  background: ${m.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({$showTip:e})=>e?"1":"0"};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: ${({$zIndex:e})=>e||"10"};

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({$maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({$maxWidth:e})=>e&&e+"px"};

  ${({$arrowPosition:e})=>e==="top"&&G}
  ${({$arrowPosition:e})=>e==="bottom"&&J}
	${({$arrowPosition:e})=>e==="left"&&K}
	${({$arrowPosition:e})=>e==="right"&&Q}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${m.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({$fallbackStyle:e})=>e&&r`
      background: ${m.colors.feijoa};
      &:before {
        border-color: transparent ${m.colors.feijoa} transparent transparent;
      }
    `};
`;try{B.displayName="Tooltip",B.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}try{v.displayName="Container",v.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="Tip",T.__docgenInfo={description:"",displayName:"Tip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{B as T};
