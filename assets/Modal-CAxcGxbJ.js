import{r as h,R as l}from"./index-BBkUAzwr.js";import{r as L}from"./index-PqR-_bA4.js";import{u as p,a as g}from"./styled-components.browser.esm-uaFiJyE8.js";import{t as S}from"./theme-D50qMPxU.js";import{B as v}from"./Box-BsRHaABa.js";import{I as R}from"./IconStrict-aKmz_en-.js";import{T as $}from"./Text-DW1uYbgU.js";function M(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var y=!1;if(typeof window<"u"){var x={get passive(){y=!0}};window.addEventListener("testPassive",null,x),window.removeEventListener("testPassive",null,x)}var a=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),i=[],s=!1,w=-1,u=void 0,d=void 0,c=void 0,T=function(e){return i.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},f=function(e){var t=e||window.event;return T(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},O=function(e){if(c===void 0){var t=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(t&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);c=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}u===void 0&&(u=document.body.style.overflow,document.body.style.overflow="hidden")},B=function(){c!==void 0&&(document.body.style.paddingRight=c,c=void 0),u!==void 0&&(document.body.style.overflow=u,u=void 0)},k=function(){return window.requestAnimationFrame(function(){if(d===void 0){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,r=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var m=n-window.innerHeight;m&&t>=n&&(document.body.style.top=-(t+m))})},300)}})},E=function(){if(d!==void 0){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(t,e),d=void 0}},C=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},D=function(e,t){var r=e.targetTouches[0].clientY-w;return T(e.target)?!1:t&&t.scrollTop===0&&r>0||C(t)&&r<0?f(e):(e.stopPropagation(),!0)},H=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!i.some(function(n){return n.targetElement===e})){var r={targetElement:e,options:t||{}};i=[].concat(M(i),[r]),a?k():O(t),a&&(e.ontouchstart=function(n){n.targetTouches.length===1&&(w=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&D(n,e)},s||(document.addEventListener("touchmove",f,y?{passive:!1}:void 0),s=!0))}},F=function(){a&&(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),s&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),s=!1),w=-1),a?E():B(),i=[]},q=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}i=i.filter(function(t){return t.targetElement!==e}),a&&(e.ontouchstart=null,e.ontouchmove=null,s&&i.length===0&&(document.removeEventListener("touchmove",f,y?{passive:!1}:void 0),s=!1)),a?E():B()};function z({node:o,showModal:e}){h.useEffect(()=>()=>F(),[]),h.useEffect(()=>{o!==null&&(e?H(o,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):q(o))},[o,e])}const Z=({title:o="",children:e,showModal:t=!1,handleClick:r,drawer:n=!0,cross:m=!0,width:P,containerClass:A,portalContainer:I=document.body})=>{const b=h.useRef(null);return z({node:b.current,showModal:t}),L.createPortal(l.createElement(W,{$showModal:t,ref:b},l.createElement(Y,{onClick:r}),l.createElement(j,{$drawer:n,$width:P||"460px",className:A},l.createElement(v,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px"},l.createElement(G,{flex:!0,direction:"column"},l.createElement($,{tag:"h2",typo:"heading-small",align:"left"},o)),m&&l.createElement(R,{render:"cross",backgroundColor:"oatmeal",handleClick:r,size:36})),l.createElement(v,{flex:!0,direction:"column"},e))),I)},W=p(v)(({$showModal:o})=>g`
    display: ${o?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),Y=p.div`
  position: fixed;
  background: ${S.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,j=p.div(({$drawer:o,$width:e})=>g`
    background: ${S.colors.coconut};
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
  `),G=p(v)`
  align-self: center;
`;export{Z as M};
