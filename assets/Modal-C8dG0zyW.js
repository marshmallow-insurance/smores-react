import{r as i,R as t}from"./index-BBkUAzwr.js";import{r as h}from"./index-PqR-_bA4.js";import{u as a,a as l}from"./styled-components.browser.esm-uaFiJyE8.js";import{t as m}from"./theme-D50qMPxU.js";import{B as o}from"./Box-BsRHaABa.js";import{I as g}from"./IconStrict-aKmz_en-.js";import{T as b}from"./Text-DW1uYbgU.js";import{c as E,d as y,e as v}from"./bodyScrollLock.esm-DhkVtT7o.js";function w({node:e,showModal:r}){i.useEffect(()=>()=>E(),[]),i.useEffect(()=>{e!==null&&(r?y(e,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):v(e))},[e,r])}const q=({title:e="",children:r,showModal:n=!1,handleClick:c,drawer:p=!0,cross:d=!0,width:u,containerClass:f,portalContainer:x=document.body})=>{const s=i.useRef(null);return w({node:s.current,showModal:n}),h.createPortal(t.createElement($,{$showModal:n,ref:s},t.createElement(B,{onClick:c}),t.createElement(S,{$drawer:p,$width:u||"460px",className:f},t.createElement(o,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px"},t.createElement(k,{flex:!0,direction:"column"},t.createElement(b,{tag:"h2",typo:"heading-small",align:"left"},e)),d&&t.createElement(g,{render:"cross",backgroundColor:"oatmeal",handleClick:c,size:36})),t.createElement(o,{flex:!0,direction:"column"},r))),x)},$=a(o)(({$showModal:e})=>l`
    display: ${e?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),B=a.div`
  position: fixed;
  background: ${m.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,S=a.div(({$drawer:e,$width:r})=>l`
    background: ${m.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${r};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;

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
  `),k=a(o)`
  align-self: center;
`;export{q as M};
