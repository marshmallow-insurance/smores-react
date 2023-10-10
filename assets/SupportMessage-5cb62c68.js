import{j as p,a as o,s as t,A as g}from"./styled-components.browser.esm-1fe49baf.js";import{c as n}from"./polished.esm-b6220ab2.js";import{B as l}from"./Box-6da10d89.js";import{I as d}from"./Icon-e553a677.js";import{T as y}from"./Text-42cc3ded.js";import{t as e}from"./theme-9a9bdd1b.js";const i={info:{iconColor:"liquorice",backgroundColor:e.colors.custard,hoverBackgroundColor:n(.1,e.colors.custard),icon:"info"},fallbackStyle:{iconColor:"liquorice",backgroundColor:e.colors.coconut,hoverBackgroundColor:n(.1,e.colors.coconut),icon:"info"},alert:{iconColor:"tangerine",backgroundColor:e.colors.sherbert,hoverBackgroundColor:n(.1,e.colors.sherbert),icon:"alert"},warning:{iconColor:"strawberry",backgroundColor:e.colors.watermelon,hoverBackgroundColor:n(.1,e.colors.watermelon),icon:"warning"},success:{iconColor:"apple",backgroundColor:e.colors.mint,hoverBackgroundColor:n(.1,e.colors.mint),icon:"included"}},m=({className:r,description:a,onClick:c,type:s="info",title:u,...f})=>p(v,{className:r,type:s,onClick:c,...f,children:[o(h,{children:o(d,{size:20,render:i[s].icon,color:i[s].iconColor})}),p(l,{flex:!0,direction:"column",mx:"8px",children:[u&&o(x,{children:u}),o(C,{tag:"p",children:a})]}),c&&o(l,{ml:{custom:"auto"},children:o(d,{size:16,render:"caret",color:"marzipan",rotate:270})})]}),h=t(l)`
  align-self: flex-start;
`,v=t(l)(({type:r,onClick:a})=>g`
    align-items: center;
    background-color: ${i[r].backgroundColor};
    border-radius: 16px;
    ${a&&"cursor: pointer"};
    padding: 12px;
    display: flex;
    width: 100%;

    &:hover,
    &:active {
      ${a&&`background-color: ${i[r].hoverBackgroundColor};`};
    }
  `),x=t.p`
  font-size: 16px;
  font-weight: ${e.font.weight.medium};
  color: ${e.colors.liquorice};
  line-height: 20.8px;
  margin-bottom: 4px;
`,C=t(y)`
  color: ${e.colors.liquorice};
  font-size: 14px;
  line-height: 20px;
`;try{m.displayName="SupportMessage",m.__docgenInfo={description:"",displayName:"SupportMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"fallbackStyle"'},{value:'"alert"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{m as S};
//# sourceMappingURL=SupportMessage-5cb62c68.js.map
