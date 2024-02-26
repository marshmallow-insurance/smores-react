import{j as m,s as q,A as r}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as a}from"./index-BBkUAzwr.js";import{r as M}from"./index-PqR-_bA4.js";import{B as W}from"./Box-Dm5zCsW8.js";import{T as k}from"./Text-m-KhGIht.js";import{t as h}from"./theme-D50qMPxU.js";import{v as Y}from"./v4-D8aEg3BZ.js";const j=({eventName:e,callback:s,ref:o,capture:i=!1})=>{a.useEffect(()=>{const p=o&&o.current;if(!p)return;const w={capture:i};return p.addEventListener(e,s,w),()=>{p.removeEventListener(e,s,w)}},[e,o,s,i])},P=(e,s)=>{let o;return(...i)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...i),o=void 0},s)}},R=({children:e,title:s,content:o,position:i="top",maxWidth:p=500,underline:w=!1,fallbackStyle:x=!1,zIndex:B=10,portalContainer:L=document.body})=>{const _=a.useRef(document),u=a.useRef(null),[N,T]=a.useState(!1),[g,d]=a.useState(i),[n,S]=a.useState(null),[C,z]=a.useState({top:0,left:0}),E=Y(),D=t=>t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth,v=a.useCallback(()=>{var l;const t=(l=u.current)==null?void 0:l.getBoundingClientRect();if(t&&!D(t)){if(t.top>=0&&g!=="top"){d("top");return}if(t.top<0){d("bottom");return}if(t.right>window.innerWidth){d("left");return}if(t.left<0){d("right");return}if(t.bottom>window.innerHeight){d("top");return}}},[u,g]);a.useEffect(()=>{v(),S(document.getElementById(E))},[]),a.useEffect(()=>{d(i)},[i]);const b=18,H=()=>{if(!n)return{top:0,left:0};if(!u.current)return{top:0,left:0};const t=n.getBoundingClientRect(),l=u.current.getBoundingClientRect();let c=0,f=0;switch(g){case"top":c=t.top+window.scrollY-l.height-b,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"bottom":c=t.bottom+window.scrollY+b,f=t.left+window.scrollX+t.width/2-l.width/2;break;case"left":f=t.left+window.scrollX-l.width-b,c=t.top+window.scrollY+t.height/2-l.height/2;break;case"right":f=t.right+window.scrollX+b,c=t.top+window.scrollY+t.height/2-l.height/2;break}return{top:c,left:f}};return a.useEffect(()=>{n&&z(H())},[i,window.scrollY,u.current,n,n==null?void 0:n.getBoundingClientRect().top,n==null?void 0:n.getBoundingClientRect().left]),j({eventName:"resize",callback:P(v,100),ref:_}),j({eventName:"scroll",callback:P(v,100),ref:_}),m.jsxs($,{children:[m.jsx(X,{id:E,underline:w,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:e}),n&&M.createPortal(m.jsxs(V,{className:"tooltip",showTip:N,position:i,arrowPosition:g,ref:u,maxWidth:p,fallbackStyle:x,zIndex:B,style:{position:"absolute",top:`${C.top}px`,left:`${C.left}px`},children:[s&&m.jsx(k,{tag:"h5",typo:"desc-medium",color:x?"cream":"liquorice",children:s}),typeof o=="string"&&m.jsx(k,{typo:"desc-light",color:x?"cream":"liquorice",children:o})||o]}),L)]})},$=q.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,X=q(W)`
  cursor: pointer;
  ${({underline:e})=>e&&r`
      border-bottom: 1px dashed ${h.colors.marshmallowPink};
    `}
`,y=26,O="calc(50% - 6px)",F="calc(50% - 12px)",I=e=>{switch(e){case"left":return r`
        left: ${y}px;
      `;case"right":return r`
        right: ${y}px;
      `;default:return r`
        left: ${O};
      `}},A=e=>{switch(e){case"top":return r`
        top: ${y}px;
      `;case"bottom":return r`
        bottom: ${y}px;
      `;default:return r`
        top: ${F};
      `}},U=r`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({arrowPosition:e})=>I(e)}
  }
`,G=r`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({arrowPosition:e})=>I(e)}
  }
`,J=r`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({arrowPosition:e})=>A(e)}
  }
`,K=r`
  &:before {
    left: -11px;
    ${({arrowPosition:e})=>A(e)}
  }
`,V=q.div`
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
  z-index: ${({zIndex:e})=>e||"10"};

  // this is the trick that will make sure the content can go up to maxWidth
  margin-right: ${({maxWidth:e})=>e&&-e/2+"px"};
  max-width: ${({maxWidth:e})=>e&&e+"px"};

  ${({arrowPosition:e})=>e==="top"&&U}
  ${({arrowPosition:e})=>e==="bottom"&&G}
	${({arrowPosition:e})=>e==="left"&&J}
	${({arrowPosition:e})=>e==="right"&&K}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${h.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({fallbackStyle:e})=>e&&r`
      background: ${h.colors.feijoa};
      &:before {
        border-color: transparent ${h.colors.feijoa} transparent transparent;
      }
    `};
`;try{R.displayName="Tooltip",R.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"",name:"underline",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}try{$.displayName="Container",$.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{V.displayName="Tip",V.__docgenInfo={description:"",displayName:"Tip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},maxWidth:{defaultValue:{value:"500"},description:"",name:"maxWidth",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},zIndex:{defaultValue:{value:"10"},description:"",name:"zIndex",required:!1,type:{name:"number"}},showTip:{defaultValue:null,description:"",name:"showTip",required:!0,type:{name:"boolean"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!0,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{R as T};
