import{j as o,s as i,A as f}from"./styled-components.browser.esm-CJMx1vp9.js";import{c as l}from"./polished.esm-D0h1-lPB.js";import{B as a}from"./Box-Dm5zCsW8.js";import{I as p}from"./Icon-BsCxozQo.js";import{T as g}from"./Text-m-KhGIht.js";import{t as e}from"./theme-D50qMPxU.js";import{i as x}from"./isReactElement-DALlT1kK.js";const t={info:{iconColor:"liquorice",backgroundColor:e.colors.custard,hoverBackgroundColor:l(.1,e.colors.custard),icon:"info"},fallbackStyle:{iconColor:"liquorice",backgroundColor:e.colors.coconut,hoverBackgroundColor:l(.1,e.colors.coconut),icon:"info"},alert:{iconColor:"tangerine",backgroundColor:e.colors.sherbert,hoverBackgroundColor:l(.1,e.colors.sherbert),icon:"alert"},warning:{iconColor:"strawberry",backgroundColor:e.colors.watermelon,hoverBackgroundColor:l(.1,e.colors.watermelon),icon:"warning"},success:{iconColor:"apple",backgroundColor:e.colors.mint,hoverBackgroundColor:l(.1,e.colors.mint),icon:"included"}},d=({className:n,description:r,onClick:c,type:s="info",title:u,...m})=>o.jsxs(y,{className:n,type:s,onClick:c,...m,children:[o.jsx(h,{children:o.jsx(p,{size:20,render:t[s].icon,color:t[s].iconColor})}),o.jsxs(a,{flex:!0,direction:"column",mx:"8px",children:[u&&o.jsx(v,{children:u}),x(r)?o.jsx(C,{children:r}):o.jsx(b,{tag:"p",children:r})]}),c&&o.jsx(a,{ml:{custom:"auto"},children:o.jsx(p,{size:16,render:"caret",color:"marzipan",rotate:270})})]}),h=i(a)`
  align-self: flex-start;
`,y=i(a)(({type:n,onClick:r})=>f`
    align-items: center;
    background-color: ${t[n].backgroundColor};
    border-radius: 16px;
    ${r&&"cursor: pointer"};
    padding: 12px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${r&&`background-color: ${t[n].hoverBackgroundColor};`};
    }
  `),v=i.p`
  font-size: 16px;
  font-weight: ${e.font.weight.medium};
  color: ${e.colors.liquorice};
  line-height: 20.8px;
  margin-bottom: 4px;
`,C=i(a)`
  color: ${e.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`,b=i(g)`
  color: ${e.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`;try{d.displayName="SupportMessage",d.__docgenInfo={description:"",displayName:"SupportMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"fallbackStyle"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{d as S};
