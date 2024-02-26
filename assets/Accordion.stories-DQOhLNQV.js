import{j as e,s as l,A as p}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as A}from"./index-BBkUAzwr.js";import{B as a}from"./Box-Dm5zCsW8.js";import{I as B}from"./Icon-B-eQ_DO6.js";import{t as s}from"./theme-D50qMPxU.js";import{T as b}from"./Text-mBiiJ9lg.js";import"./polished.esm-D0h1-lPB.js";import"./focusOutline-D9_3RTEn.js";const r=({title:o,children:t,onToggle:n,filledBackground:i,defaultIsOpen:u=!1,borderTop:y=!1,borderColor:V="oatmeal",backgroundColor:w="custard",subTitle:g,fullBorder:h=!1,...k})=>{const[d,C]=A.useState(u),v=h?"16px":"0",S=()=>{const j=!d;n==null||n(j),C(j)};return e.jsxs(T,{borderTop:y,fullBorder:h,filledBackground:i,borderColor:V,backgroundColor:w,...k,children:[e.jsxs($,{flex:!0,alignItems:"center",justifyContent:"space-between",onClick:S,py:"16px",pr:"16px",pl:v,children:[e.jsxs(I,{children:[e.jsx(b,{tag:"h2",typo:"headline-regular",color:"liquorice",children:o}),g&&e.jsx(b,{tag:"label",color:"liquorice",typo:"label",mt:{custom:4},children:g})]}),e.jsx(R,{render:"caret",size:24,color:"marzipan",isOpen:d,borderTop:y})]}),d&&e.jsx(a,{pt:"12px",pb:"16px",px:v,children:t})]})},T=l(a)(({borderTop:o,fullBorder:t,filledBackground:n,borderColor:i="oatmeal",backgroundColor:u="custard"})=>p`
    border-bottom: 1px solid ${s.colors[i]};
    ${o&&`border-top: 1px solid ${s.colors[i]};`}

    ${t&&p`
      border: 1px solid ${s.colors[i]};
      border-radius: 16px;
    `}

    ${n&&p`
      background-color: ${s.colors[u]};
    `}
  `),I=l.div`
  display: flex;
  flex-direction: column;
`,$=l(a)`
  cursor: pointer;
`,R=l(B)(({isOpen:o})=>p`
    transform: ${o?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.6s ease;
  `);try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},filledBackground:{defaultValue:null,description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:{value:"oatmeal"},description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},fullBorder:{defaultValue:{value:"false"},description:"",name:"fullBorder",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:{value:"custard"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultIsOpen:{defaultValue:{value:"false"},description:"",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const m=[{children:"Lots of brilliant information about this beautiful component",title:"How it works"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",filledBackground:!0},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle",filledBackground:!0}],x=()=>e.jsxs(L,{children:[e.jsx(f,{label:"Default",children:m.map((o,t)=>e.jsx(r,{...o},t))}),e.jsx(f,{label:"Border Top",children:m.map((o,t)=>e.jsx(r,{...o,borderTop:!0},t))}),e.jsx(f,{label:"Full Border",children:m.map((o,t)=>e.jsx(r,{...o,fullBorder:!0},t))})]}),L=l(a)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,f=({label:o,children:t})=>e.jsxs(a,{width:"100%",mb:"16px",children:[e.jsx(a,{mb:"16px",children:e.jsx(b,{tag:"span",typo:"header-small",children:o})}),e.jsx(O,{children:t})]}),O=l(a)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;try{x.displayName="CollectionPage",x.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const K={title:"Accordion",component:r},H=o=>e.jsx(r,{...o,title:"How it works",children:"Lots of brilliant information about this beautiful component"}),c=H.bind({}),M=x.bind({});var _,q,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`(props: AccordionProps) => <Accordion {...props} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const Q=["Default","Collection"];export{M as Collection,c as Default,Q as __namedExportsOrder,K as default};
