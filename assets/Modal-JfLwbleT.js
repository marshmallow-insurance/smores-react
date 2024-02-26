import{j as l,s as v,A as h}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as g}from"./index-BBkUAzwr.js";import{t as T}from"./theme-D50qMPxU.js";import{r as E}from"./index-PqR-_bA4.js";import{B as p}from"./Box-DB724hnb.js";import{T as I}from"./Text-DnLt-YfN.js";import{I as M}from"./IconStrict-CA4PACgP.js";function V(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var y=!1;if(typeof window<"u"){var x={get passive(){y=!0}};window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}var d=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),i=[],s=!1,w=-1,u=void 0,a=void 0,c=void 0,B=function(e){return i.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},f=function(e){var t=e||window.event;return B(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},L=function(e){if(c===void 0){var t=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(t&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);c=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}u===void 0&&(u=document.body.style.overflow,document.body.style.overflow="hidden")},P=function(){c!==void 0&&(document.body.style.paddingRight=c,c=void 0),u!==void 0&&(document.body.style.overflow=u,u=void 0)},k=function(){return window.requestAnimationFrame(function(){if(a===void 0){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,r=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var m=n-window.innerHeight;m&&t>=n&&(document.body.style.top=-(t+m))})},300)}})},j=function(){if(a!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}},D=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},O=function(e,t){var r=e.targetTouches[0].clientY-w;return B(e.target)?!1:t&&t.scrollTop===0&&r>0||D(t)&&r<0?f(e):(e.stopPropagation(),!0)},R=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!i.some(function(n){return n.targetElement===e})){var r={targetElement:e,options:t||{}};i=[].concat(V(i),[r]),d?k():L(t),d&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(w=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&O(n,e)},s||(document.addEventListener("touchmove",f,y?{passive:!1}:void 0),s=!0))}},_=function(){d&&(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),s&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),s=!1),w=-1),d?j():P(),i=[]},H=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}i=i.filter(function(t){return t.targetElement!==e}),d&&(e.ontouchstart=null,e.ontouchmove=null,s&&i.length===0&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),s=!1)),d?j():P()};function F({node:o,showModal:e}){g.useEffect(()=>()=>_(),[]),g.useEffect(()=>{o!==null&&(e?R(o,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):H(o))},[o,e])}const S=({title:o="",children:e,showModal:t=!1,handleClick:r,drawer:n=!0,cross:m=!0,width:q,containerClass:A,portalContainer:C=document.body})=>{const b=g.useRef(null);return F({node:b.current,showModal:t}),E.createPortal(l.jsxs($,{showModal:t,ref:b,children:[l.jsx(z,{onClick:r}),l.jsxs(N,{drawer:n,width:q||"460px",className:A,children:[l.jsxs(p,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px",children:[l.jsx(W,{flex:!0,direction:"column",children:l.jsx(I,{tag:"h2",typo:"heading-small",align:"left",children:o})}),m&&l.jsx(M,{render:"cross",backgroundColor:"oatmeal",handleClick:r,size:36})]}),l.jsx(p,{flex:!0,direction:"column",children:e})]})]}),C)},$=v(p)(({showModal:o})=>h`
    display: ${o?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),z=v.div`
  position: fixed;
  background: ${T.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,N=v.div(({drawer:o,width:e})=>h`
    background: ${T.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${e};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;

    ${o===!0&&h`
      @media (max-width: 768px) {
        max-width: none;
        border-radius: 16px 16px 0px 0px;
        padding: 10% 24px;
        max-height: 90vh;

        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `}
  `),W=v(p)`
  align-self: center;
`;try{S.displayName="Modal",S.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},showModal:{defaultValue:{value:"false"},description:"",name:"showModal",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => void"}},drawer:{defaultValue:{value:"true"},description:"",name:"drawer",required:!1,type:{name:"boolean"}},cross:{defaultValue:{value:"true"},description:"",name:"cross",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},containerClass:{defaultValue:null,description:"",name:"containerClass",required:!1,type:{name:"string"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}export{S as M};
