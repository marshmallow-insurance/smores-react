import{r as i,R as t}from"./index-BBkUAzwr.js";import{r as b}from"./index-PqR-_bA4.js";import{u as a,a as l}from"./styled-components.browser.esm-uaFiJyE8.js";import{t as u}from"./theme-D50qMPxU.js";import{B as o}from"./Box-BsRHaABa.js";import{I as E}from"./IconStrict-aKmz_en-.js";import{T as y}from"./Text-DW1uYbgU.js";import{c as v,d as w,e as $}from"./bodyScrollLock.esm-DhkVtT7o.js";function B({node:e,showModal:r}){i.useEffect(()=>()=>v(),[]),i.useEffect(()=>{e!==null&&(r?w(e,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):$(e))},[e,r])}const D=({title:e="",children:r,rightPanel:p,showModal:n=!1,handleClick:c,drawer:d=!0,cross:f=!0,width:x,containerClass:g,portalContainer:h=document.body,closeOnOverlayClick:s=!0})=>{const m=i.useRef(null);return B({node:m.current,showModal:n}),b.createPortal(t.createElement(S,{$showModal:n,ref:m},t.createElement(k,{onClick:()=>s&&c(),closeOnOverlayClick:s}),t.createElement(I,{$drawer:d,$width:x||"460px",className:g},t.createElement(o,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px"},t.createElement(R,{flex:!0,direction:"column"},t.createElement(y,{tag:"h2",typo:"heading-small",align:"left"},e)),t.createElement(o,{flex:!0,alignItems:"center",gap:"8px"},p,f&&t.createElement(E,{render:"cross",backgroundColor:"oatmeal",handleClick:c,size:36}))),t.createElement(o,{flex:!0,direction:"column"},r))),h)},S=a(o)(({$showModal:e})=>l`
    display: ${e?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),k=a.div`
  position: fixed;
  background: ${u.colors.liquorice};
  cursor: ${e=>e.closeOnOverlayClick?"pointer":"default"};
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,I=a.div(({$drawer:e,$width:r})=>l`
    background: ${u.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${r};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;
    transition: all 0.3s ease-in-out;

    ${e===!0&&l`
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
  `),R=a(o)`
  align-self: center;
`;export{D as M};
