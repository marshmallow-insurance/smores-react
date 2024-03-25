import{a as s,j as o,u as l,b as u}from"./styled-components.browser.esm-NpdVBoMN.js";import{r as B}from"./index-BBkUAzwr.js";import{B as a}from"./Box-BLBwDpxh.js";import{I as S}from"./Icon-2S2VEaHH.js";import{T as g}from"./Text-BYsPHR4J.js";import{t as c}from"./theme-D50qMPxU.js";import"./polished.esm-D0h1-lPB.js";import"./focusOutline-Ba1vYvXH.js";const t=({title:e,children:r,onToggle:n,filledBackground:i,defaultIsOpen:d=!1,borderTop:h=!1,borderColor:w="oatmeal",backgroundColor:C="custard",subTitle:x,fullBorder:v=!1,...$})=>{const[m,T]=B.useState(d),_=v?"16px":"0";return s(I,{$borderTop:h,$fullBorder:v,$filledBackground:i,$borderColor:w,$backgroundColor:C,...$,children:[s(O,{flex:!0,alignItems:"center",justifyContent:"space-between",onClick:()=>{const q=!m;n==null||n(q),T(q)},py:"16px",pr:"16px",pl:_,children:[s(A,{children:[o(g,{tag:"h2",typo:"headline-regular",color:"liquorice",children:e}),x&&o(g,{tag:"label",color:"liquorice",typo:"label",mt:{custom:4},children:x})]}),o(L,{render:"caret",size:24,color:"marzipan",$isOpen:m,$borderTop:h})]}),m&&o(a,{pt:"12px",pb:"16px",px:_,children:r})]})},I=l(a)(({$borderTop:e,$fullBorder:r,$filledBackground:n,$borderColor:i="oatmeal",$backgroundColor:d="custard"})=>u`
    border-bottom: 1px solid ${c.colors[i]};
    ${e&&`border-top: 1px solid ${c.colors[i]};`}

    ${r&&u`
      border: 1px solid ${c.colors[i]};
      border-radius: 16px;
    `}

    ${n&&u`
      background-color: ${c.colors[d]};
    `}
  `),A=l.div`
  display: flex;
  flex-direction: column;
`,O=l(a)`
  cursor: pointer;
`,L=l(S)(({$isOpen:e})=>u`
    transform: ${e?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.6s ease;
  `);try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},filledBackground:{defaultValue:null,description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:{value:"oatmeal"},description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},fullBorder:{defaultValue:{value:"false"},description:"",name:"fullBorder",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:{value:"custard"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultIsOpen:{defaultValue:{value:"false"},description:"",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const f=[{children:"Lots of brilliant information about this beautiful component",title:"How it works"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",filledBackground:!0},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle",filledBackground:!0}],y=()=>s(R,{children:[o(b,{label:"Default",children:f.map((e,r)=>o(t,{...e},r))}),o(b,{label:"Border Top",children:f.map((e,r)=>o(t,{...e,borderTop:!0},r))}),o(b,{label:"Full Border",children:f.map((e,r)=>o(t,{...e,fullBorder:!0},r))})]}),R=l(a)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,b=({label:e,children:r})=>s(a,{width:"100%",mb:"16px",children:[o(a,{mb:"16px",children:o(g,{tag:"span",typo:"header-small",children:e})}),o(H,{children:r})]}),H=l(a)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;try{y.displayName="CollectionPage",y.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const M={title:"Accordion",component:t},j=e=>o(t,{...e,title:"How it works",children:"Lots of brilliant information about this beautiful component"}),p=j.bind({}),Q=y.bind({});var P,k,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(props: AccordionProps) => <Accordion {...props} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>`,...(V=(k=p.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const U=["Default","Collection"];export{Q as Collection,p as Default,U as __namedExportsOrder,M as default};
