import{a as k,j as x,s as q,A as r}from"./styled-components.browser.esm-CskBwHif.js";import{r as a}from"./index-BBkUAzwr.js";import{r as W}from"./index-PqR-_bA4.js";import{B as Y}from"./Box-Ck8x80mg.js";import{T as P}from"./Text-NcQevszc.js";import{t as m}from"./theme-D50qMPxU.js";import{v as X}from"./v4-D8aEg3BZ.js";const R=({eventName:e,callback:s,ref:o,capture:i=!1})=>{a.useEffect(()=>{const c=o&&o.current;if(!c)return;const h={capture:i};return c.addEventListener(e,s,h),()=>{c.removeEventListener(e,s,h)}},[e,o,s,i])},I=(e,s)=>{let o;return(...i)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...i),o=void 0},s)}},j=({children:e,title:s,content:o,position:i="top",maxWidth:c=500,underline:h=!1,fallbackStyle:y=!1,zIndex:L=10,portalContainer:N=document.body})=>{const _=a.useRef(document),u=a.useRef(null),[S,T]=a.useState(!1),[w,d]=a.useState(i),[n,z]=a.useState(null),[C,D]=a.useState({top:0,left:0}),E=X(),H=t=>t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth,v=a.useCallback(()=>{var l;const t=(l=u.current)==null?void 0:l.getBoundingClientRect();if(t&&!H(t)){if(t.top>=0&&w!=="top"){d("top");return}if(t.top<0){d("bottom");return}if(t.right>window.innerWidth){d("left");return}if(t.left<0){d("right");return}if(t.bottom>window.innerHeight){d("top");return}}},[u,w]);a.useEffect(()=>{v(),z(document.getElementById(E))},[]),a.useEffect(()=>{d(i)},[i]);const g=18,M=()=>{if(!n)return{top:0,left:0};if(!u.current)return{top:0,left:0};const t=n.getBoundingClientRect(),l=u.current.getBoundingClientRect();let p=0,f=0;switch(w){case"top":p=t.top+window.scrollY-l.height-g,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"bottom":p=t.bottom+window.scrollY+g,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"left":f=t.left+window.scrollX-l.width-g,p=t.top+window.scrollY+t.height/2-l.height/2;break;case"right":f=t.right+window.scrollX+g,p=t.top+window.scrollY+t.height/2-l.height/2;break}return{top:p,left:f}};return a.useEffect(()=>{n&&D(M())},[i,window.scrollY,u.current,n,n==null?void 0:n.getBoundingClientRect().top,n==null?void 0:n.getBoundingClientRect().left]),R({eventName:"resize",callback:I(v,100),ref:_}),R({eventName:"scroll",callback:I(v,100),ref:_}),k($,{children:[x(O,{id:E,underline:h,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:e}),n&&W.createPortal(k(V,{className:"tooltip",showTip:S,position:i,arrowPosition:w,ref:u,maxWidth:c,fallbackStyle:y,zIndex:L,style:{position:"absolute",top:`${C.top}px`,left:`${C.left}px`},children:[s&&x(P,{tag:"h5",typo:"desc-medium",color:y?"cream":"liquorice",children:s}),typeof o=="string"&&x(P,{typo:"desc-light",color:y?"cream":"liquorice",children:o})||o]}),N)]})},$=q.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,O=q(Y)`
  cursor: pointer;
  ${({underline:e})=>e&&r`
      border-bottom: 1px dashed ${m.colors.marshmallowPink};
    `}
`,b=26,F="calc(50% - 6px)",U="calc(50% - 12px)",A=e=>{switch(e){case"left":return r`
        left: ${b}px;
      `;case"right":return r`
        right: ${b}px;
      `;default:return r`
        left: ${F};
      `}},B=e=>{switch(e){case"top":return r`
        top: ${b}px;
      `;case"bottom":return r`
        bottom: ${b}px;
      `;default:return r`
        top: ${U};
      `}},G=r`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>A(e)}
  }
`,J=r`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>A(e)}
  }
`,K=r`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>B(e)}
  }
`,Q=r`
  &:before {
    left: -11px;
    ${({arrowPosition:e})=>B(e)}
  }
`,V=q.div`
  position: absolute;
  margin: auto;
  background: ${m.colors.custard};
  padding: 16px 12px 20px;
  border-radius: 16px;
  max-width: 450px;
  opacity: ${({showTip:e})=>e?"1":"0"};
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  cursor: default;
  z-index: ${({zIndex:e})=>e||"10"};

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({maxWidth:e})=>e&&e+"px"};

  ${({arrowPosition:e})=>e==="top"&&G}
  ${({arrowPosition:e})=>e==="bottom"&&J}
	${({arrowPosition:e})=>e==="left"&&K}
	${({arrowPosition:e})=>e==="right"&&Q}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${m.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({fallbackStyle:e})=>e&&r`
      background: ${m.colors.feijoa};
      &:before {
        border-color: transparent ${m.colors.feijoa} transparent transparent;
      }
    `};
`;try{j.displayName="Tooltip",j.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}try{$.displayName="Container",$.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{V.displayName="Tip",V.__docgenInfo={description:"",displayName:"Tip",props:{fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{j as T};
