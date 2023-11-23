import{j as P,a as x,s as V,A as r}from"./styled-components.browser.esm-1fe49baf.js";import{r as a}from"./index-1b03fe98.js";import{r as M}from"./index-6fd5a17b.js";import{T as $}from"./Text-33ea17e2.js";import{t as m}from"./theme-9a9bdd1b.js";import{v as W}from"./v4-4a60fe23.js";const R=({eventName:e,callback:s,ref:o,capture:i=!1})=>{a.useEffect(()=>{const c=o&&o.current;if(!c)return;const h={capture:i};return c.addEventListener(e,s,h),()=>{c.removeEventListener(e,s,h)}},[e,o,s,i])},j=(e,s)=>{let o;return(...i)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...i),o=void 0},s)}},A=({children:e,title:s,content:o,position:i="top",maxWidth:c=500,underline:h=!1,fallbackStyle:y=!1})=>{const q=a.useRef(document),u=a.useRef(null),[S,C]=a.useState(!1),[w,d]=a.useState(i),[n,H]=a.useState(null),[E,I]=a.useState({top:0,left:0}),k=W(),B=t=>t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth,v=a.useCallback(()=>{var l;const t=(l=u.current)==null?void 0:l.getBoundingClientRect();if(t&&!B(t)){if(t.top>=0&&w!=="top"){d("top");return}if(t.top<0){d("bottom");return}if(t.right>window.innerWidth){d("left");return}if(t.left<0){d("right");return}if(t.bottom>window.innerHeight){d("top");return}}},[u,w]);a.useEffect(()=>{v(),H(document.getElementById(k))},[]),a.useEffect(()=>{d(i)},[i]);const g=18,D=()=>{if(!n)return{top:0,left:0};if(!u.current)return{top:0,left:0};const t=n.getBoundingClientRect(),l=u.current.getBoundingClientRect();let p=0,f=0;switch(w){case"top":p=t.top+window.scrollY-l.height-g,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"bottom":p=t.bottom+window.scrollY+g,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"left":f=t.left+window.scrollX-l.width-g,p=t.top+window.scrollY+t.height/2-l.height/2;break;case"right":f=t.right+window.scrollX+g,p=t.top+window.scrollY+t.height/2-l.height/2;break}return{top:p,left:f}};return a.useEffect(()=>{n&&I(D())},[i,window.scrollY,u.current,n,n==null?void 0:n.getBoundingClientRect().top,n==null?void 0:n.getBoundingClientRect().left]),R({eventName:"resize",callback:j(v,100),ref:q}),R({eventName:"scroll",callback:j(v,100),ref:q}),P(T,{children:[x(Y,{id:k,underline:h,cursor:"pointer",onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),children:e}),n&&M.createPortal(P(_,{className:"tooltip",showTip:S,position:i,arrowPosition:w,ref:u,maxWidth:c,fallbackStyle:y,style:{position:"absolute",top:`${E.top}px`,left:`${E.left}px`},children:[s&&x($,{tag:"h5",typo:"desc-medium",color:y?"cream":"liquorice",children:s}),typeof o=="string"&&x($,{typo:"desc-light",color:y?"cream":"liquorice",children:o})||o]}),document.body)]})},T=V.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,Y=V($)`
  ${({underline:e})=>e&&r`
      border-bottom: 1px dashed ${m.colors.marshmallowPink};
    `}
`,b=26,z="calc(50% - 6px)",X="calc(50% - 12px)",L=e=>{switch(e){case"left":return r`
        left: ${b}px;
      `;case"right":return r`
        right: ${b}px;
      `;default:return r`
        left: ${z};
      `}},N=e=>{switch(e){case"top":return r`
        top: ${b}px;
      `;case"bottom":return r`
        bottom: ${b}px;
      `;default:return r`
        top: ${X};
      `}},O=r`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>L(e)}
  }
`,U=r`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>L(e)}
  }
`,F=r`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>N(e)}
  }
`,G=r`
  &:before {
    left: -11px;
    ${({arrowPosition:e})=>N(e)}
  }
`,_=V.div`
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
  z-index: 10;

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({maxWidth:e})=>e&&e+"px"};

  ${({arrowPosition:e})=>e==="top"&&O}
  ${({arrowPosition:e})=>e==="bottom"&&U}
	${({arrowPosition:e})=>e==="left"&&F}
	${({arrowPosition:e})=>e==="right"&&G}

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
`;try{A.displayName="Tooltip",A.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="Container",T.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{_.displayName="Tip",_.__docgenInfo={description:"",displayName:"Tip",props:{position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{A as T};
//# sourceMappingURL=Tooltip-0025b631.js.map
