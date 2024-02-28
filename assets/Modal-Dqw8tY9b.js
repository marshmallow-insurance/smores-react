import{a as h,j as s,s as v,A as g}from"./styled-components.browser.esm-CskBwHif.js";import{r as w}from"./index-BBkUAzwr.js";import{t as B}from"./theme-D50qMPxU.js";import{r as M}from"./index-PqR-_bA4.js";import{B as p}from"./Box-D44oa7Uk.js";import{T as V}from"./Text-DAv8b-SE.js";import{I as L}from"./IconStrict-guXcuuJY.js";function k(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var y=!1;if(typeof window<"u"){var S={get passive(){y=!0}};window.addEventListener("testPassive",null,S),window.removeEventListener("testPassive",null,S)}var a=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),i=[],d=!1,b=-1,u=void 0,l=void 0,c=void 0,P=function(e){return i.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},f=function(e){var t=e||window.event;return P(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},D=function(e){if(c===void 0){var t=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(t&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);c=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}u===void 0&&(u=document.body.style.overflow,document.body.style.overflow="hidden")},q=function(){c!==void 0&&(document.body.style.paddingRight=c,c=void 0),u!==void 0&&(document.body.style.overflow=u,u=void 0)},O=function(){return window.requestAnimationFrame(function(){if(l===void 0){l={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,r=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var m=n-window.innerHeight;m&&t>=n&&(document.body.style.top=-(t+m))})},300)}})},A=function(){if(l!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=l.position,document.body.style.top=l.top,document.body.style.left=l.left,window.scrollTo(t,e),l=void 0}},_=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},H=function(e,t){var r=e.targetTouches[0].clientY-b;return P(e.target)?!1:t&&t.scrollTop===0&&r>0||_(t)&&r<0?f(e):(e.stopPropagation(),!0)},R=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!i.some(function(n){return n.targetElement===e})){var r={targetElement:e,options:t||{}};i=[].concat(k(i),[r]),a?O():D(t),a&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(b=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&H(n,e)},d||(document.addEventListener("touchmove",f,y?{passive:!1}:void 0),d=!0))}},j=function(){a&&(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),d&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),d=!1),b=-1),a?A():q(),i=[]},F=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}i=i.filter(function(t){return t.targetElement!==e}),a&&(e.ontouchstart=null,e.ontouchmove=null,d&&i.length===0&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),d=!1)),a?A():q()};function $({node:o,showModal:e}){w.useEffect(()=>()=>j(),[]),w.useEffect(()=>{o!==null&&(e?R(o,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):F(o))},[o,e])}const T=({title:o="",children:e,showModal:t=!1,handleClick:r,drawer:n=!0,cross:m=!0,width:C,containerClass:I,portalContainer:E=document.body})=>{const x=w.useRef(null);return $({node:x.current,showModal:t}),M.createPortal(h(z,{showModal:t,ref:x,children:[s(N,{onClick:r}),h(W,{drawer:n,width:C||"460px",className:I,children:[h(p,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px",children:[s(Y,{flex:!0,direction:"column",children:s(V,{tag:"h2",typo:"heading-small",align:"left",children:o})}),m&&s(L,{render:"cross",backgroundColor:"oatmeal",handleClick:r,size:36})]}),s(p,{flex:!0,direction:"column",children:e})]})]}),E)},z=v(p)(({showModal:o})=>g`
    display: ${o?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),N=v.div`
  position: fixed;
  background: ${B.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,W=v.div(({drawer:o,width:e})=>g`
    background: ${B.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${e};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;

    ${o===!0&&g`
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
  `),Y=v(p)`
  align-self: center;
`;try{T.displayName="Modal",T.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},showModal:{defaultValue:{value:"false"},description:"",name:"showModal",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => void"}},drawer:{defaultValue:{value:"true"},description:"",name:"drawer",required:!1,type:{name:"boolean"}},cross:{defaultValue:{value:"true"},description:"",name:"cross",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},containerClass:{defaultValue:null,description:"",name:"containerClass",required:!1,type:{name:"string"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}export{T as M};
