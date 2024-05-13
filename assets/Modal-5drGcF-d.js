import{r as l,R as t}from"./index-BBkUAzwr.js";import{r as b}from"./index-PqR-_bA4.js";import{u as a,a as n}from"./styled-components.browser.esm-uaFiJyE8.js";import{t as d}from"./theme-D50qMPxU.js";import{B as r}from"./Box-BsRHaABa.js";import{I as y}from"./IconStrict-Bj45gLDG.js";import{T as E}from"./Text-rlZvdK6n.js";import{c as w,e as $,d as v}from"./bodyScrollLock.esm-DhkVtT7o.js";const B=e=>{v(e,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}),document.body.style.top=`-${window.scrollY}px`};function S({node:e,showModal:o}){l.useEffect(()=>()=>w(),[]),l.useEffect(()=>{e!==null&&(o?B(e):$(e))},[e,o])}const G=({title:e="",children:o,rightPanel:p,showModal:i=!1,handleClick:c,drawer:u=!0,cross:f=!0,width:x,containerClass:h,portalContainer:g=document.body,closeOnOverlayClick:s=!0})=>{const m=l.useRef(null);return S({node:m.current,showModal:i}),b.createPortal(t.createElement(k,{$showModal:i,ref:m},t.createElement(I,{onClick:()=>s&&c(),closeOnOverlayClick:s}),t.createElement(R,{$drawer:u,$width:x||"460px",className:h},t.createElement(r,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px"},t.createElement(T,{flex:!0,direction:"column"},t.createElement(E,{tag:"h2",typo:"heading-small",align:"left"},e)),t.createElement(r,{flex:!0,alignItems:"center",gap:"8px"},p,f&&t.createElement(y,{render:"cross",backgroundColor:"oatmeal",handleClick:c,size:36}))),t.createElement(r,{flex:!0,direction:"column"},o))),g)},k=a(r)(({$showModal:e})=>n`
    display: ${e?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),I=a.div`
  position: fixed;
  background: ${d.colors.liquorice};
  cursor: ${e=>e.closeOnOverlayClick?"pointer":"default"};
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,R=a.div(({$drawer:e,$width:o})=>n`
    background: ${d.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${o};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;
    transition: all 0.3s ease-in-out;

    ${e===!0&&n`
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
  `),T=a(r)`
  align-self: center;
`;export{G as M};
