import{r as i,R as m}from"./index-BBkUAzwr.js";import{r as X}from"./index-PqR-_bA4.js";import{u as y,a as r}from"./styled-components.browser.esm-uaFiJyE8.js";import{B as j}from"./Box-BsRHaABa.js";import{T as k}from"./Text-Cn6wBAm-.js";import{t as h}from"./theme-D50qMPxU.js";import{v as H}from"./v4-D8aEg3BZ.js";const q=({eventName:e,callback:l,ref:o,capture:s=!1})=>{i.useEffect(()=>{const p=o&&o.current;if(!p)return;const w={capture:s};return p.addEventListener(e,l,w),()=>{p.removeEventListener(e,l,w)}},[e,o,l,s])},P=(e,l)=>{let o;return(...s)=>{o&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=void 0},l)}},W=({children:e,title:l,content:o,position:s="top",maxWidth:p=500,underline:w=!1,fallbackStyle:$=!1,zIndex:I=10,portalContainer:S=document.body})=>{const v=i.useRef(document),c=i.useRef(null),[z,E]=i.useState(!1),[g,u]=i.useState(s),[n,N]=i.useState(null),[C,Y]=i.useState({top:0,left:0}),R=H(),D=t=>t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth,T=i.useCallback(()=>{var a;const t=(a=c.current)==null?void 0:a.getBoundingClientRect();if(t&&!D(t)){if(t.top>=0&&g!=="top"){u("top");return}if(t.top<0){u("bottom");return}if(t.right>window.innerWidth){u("left");return}if(t.left<0){u("right");return}if(t.bottom>window.innerHeight){u("top");return}}},[c,g]);i.useEffect(()=>{T(),N(document.getElementById(R))},[]),i.useEffect(()=>{u(s)},[s]);const b=18,L=()=>{if(!n)return{top:0,left:0};if(!c.current)return{top:0,left:0};const t=n.getBoundingClientRect(),a=c.current.getBoundingClientRect();let d=0,f=0;switch(g){case"top":d=t.top+window.scrollY-a.height-b,f=t.left+window.scrollX+t.width/2-a.width/2;break;case"bottom":d=t.bottom+window.scrollY+b,f=t.left+window.scrollX+t.width/2-a.width/2;break;case"left":f=t.left+window.scrollX-a.width-b,d=t.top+window.scrollY+t.height/2-a.height/2;break;case"right":f=t.right+window.scrollX+b,d=t.top+window.scrollY+t.height/2-a.height/2;break}return{top:d,left:f}};return i.useEffect(()=>{n&&Y(L())},[s,window.scrollY,c.current,n,n==null?void 0:n.getBoundingClientRect().top,n==null?void 0:n.getBoundingClientRect().left]),q({eventName:"resize",callback:P(T,100),ref:v}),q({eventName:"scroll",callback:P(T,100),ref:v}),m.createElement(A,null,m.createElement(F,{id:R,$underline:w,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},e),n&&X.createPortal(m.createElement(K,{className:"tooltip",$showTip:z,$position:s,$arrowPosition:g,ref:c,$maxWidth:p,$fallbackStyle:$,$zIndex:I,style:{position:"absolute",top:`${C.top}px`,left:`${C.left}px`}},l&&m.createElement(k,{tag:"h5",typo:"desc-medium",color:$?"cream":"liquorice"},l),typeof o=="string"&&m.createElement(k,{typo:"desc-light",color:$?"cream":"liquorice"},o)||o),S))},A=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span:hover + .tooltip {
    opacity: 1;
  }
`,F=y(j)`
  cursor: pointer;
  ${({$underline:e})=>e&&r`
      border-bottom: 1px dashed ${h.colors.marshmallowPink};
    `}
`,x=26,M="calc(50% - 6px)",_="calc(50% - 12px)",V=e=>{switch(e){case"left":return r`
        left: ${x}px;
      `;case"right":return r`
        right: ${x}px;
      `;default:return r`
        left: ${M};
      `}},B=e=>{switch(e){case"top":return r`
        top: ${x}px;
      `;case"bottom":return r`
        bottom: ${x}px;
      `;default:return r`
        top: ${_};
      `}},O=r`
  &:before {
    bottom: -15px;
    transform: rotate(-90deg);
    ${({$arrowPosition:e})=>V(e)}
  }
`,U=r`
  &:before {
    top: -15px;
    transform: rotate(90deg);
    ${({$arrowPosition:e})=>V(e)}
  }
`,G=r`
  &:before {
    right: -11px;
    transform: rotate(180deg);
    ${({$arrowPosition:e})=>B(e)}
  }
`,J=r`
  &:before {
    left: -11px;
    ${({$arrowPosition:e})=>B(e)}
  }
`,K=y.div`
  position: absolute;
  margin: auto;
  background: ${h.colors.custard};
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

  ${({$arrowPosition:e})=>e==="top"&&O}
  ${({$arrowPosition:e})=>e==="bottom"&&U}
	${({$arrowPosition:e})=>e==="left"&&G}
	${({$arrowPosition:e})=>e==="right"&&J}

  &:before {
    content: '';
    border-style: solid;
    border-width: 12px 12px 12px 0;
    border-color: transparent ${h.colors.custard} transparent transparent;
    position: absolute;
  }

  ${({$fallbackStyle:e})=>e&&r`
      background: ${h.colors.feijoa};
      &:before {
        border-color: transparent ${h.colors.feijoa} transparent transparent;
      }
    `};
`;W.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},underline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fallbackStyle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},portalContainer:{required:!1,tsType:{name:"union",raw:"Element | DocumentFragment",elements:[{name:"Element"},{name:"DocumentFragment"}]},description:"",defaultValue:{value:"document.body",computed:!0}}}};export{W as T};
