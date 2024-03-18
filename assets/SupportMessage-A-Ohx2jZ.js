import{a as p,j as o,s as i,A as g}from"./styled-components.browser.esm-CskBwHif.js";import{c as l}from"./polished.esm-D0h1-lPB.js";import{B as a}from"./Box-Bu5TpoBq.js";import{I as d}from"./Icon-IPhWZbNd.js";import{T as h}from"./Text-DUtfyTOP.js";import{t as e}from"./theme-D50qMPxU.js";import{i as y}from"./isReactElement-DALlT1kK.js";const t={info:{iconColor:"liquorice",backgroundColor:e.colors.custard,hoverBackgroundColor:l(.1,e.colors.custard),icon:"info"},fallbackStyle:{iconColor:"liquorice",backgroundColor:e.colors.coconut,hoverBackgroundColor:l(.1,e.colors.coconut),icon:"info"},alert:{iconColor:"tangerine",backgroundColor:e.colors.sherbert,hoverBackgroundColor:l(.1,e.colors.sherbert),icon:"alert"},warning:{iconColor:"strawberry",backgroundColor:e.colors.watermelon,hoverBackgroundColor:l(.1,e.colors.watermelon),icon:"warning"},success:{iconColor:"apple",backgroundColor:e.colors.mint,hoverBackgroundColor:l(.1,e.colors.mint),icon:"included"}},m=({className:n,description:r,onClick:s,type:c="info",title:u,...f})=>p(x,{className:n,type:c,onClick:s,...f,children:[o(v,{children:o(d,{size:20,render:t[c].icon,color:t[c].iconColor})}),p(a,{flex:!0,direction:"column",mx:"8px",children:[u&&o(C,{children:u}),y(r)?o(b,{children:r}):o(k,{tag:"p",children:r})]}),s&&o(a,{ml:{custom:"auto"},children:o(d,{size:16,render:"caret",color:"marzipan",rotate:270})})]}),v=i(a)`
  align-self: flex-start;
`,x=i(a)(({type:n,onClick:r})=>g`
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
  `),C=i.p`
  font-size: 16px;
  font-weight: ${e.font.weight.medium};
  color: ${e.colors.liquorice};
  line-height: 20.8px;
  margin-bottom: 4px;
`,b=i(a)`
  color: ${e.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`,k=i(h)`
  color: ${e.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`;try{m.displayName="SupportMessage",m.__docgenInfo={description:"",displayName:"SupportMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"info"'},{value:'"warning"'},{value:'"fallbackStyle"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{m as S};
