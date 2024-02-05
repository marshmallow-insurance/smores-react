import{a as s,j as o,s as l,A as u}from"./styled-components.browser.esm-eb1c464b.js";import{r as A}from"./index-1b03fe98.js";import{B as a}from"./Box-f9b8808b.js";import{I as B}from"./Icon-641c05f5.js";import{t as c}from"./theme-9a9bdd1b.js";import{T as y}from"./Text-39468910.js";import"./polished.esm-bca90884.js";import"./focusOutline-54f19c39.js";const r=({title:e,children:t,onToggle:n,filledBackground:i,defaultIsOpen:d=!1,borderTop:h=!1,borderColor:k="oatmeal",backgroundColor:C="custard",subTitle:x,fullBorder:v=!1,...S})=>{const[m,T]=A.useState(d),_=v?"16px":"0";return s(I,{borderTop:h,fullBorder:v,filledBackground:i,borderColor:k,backgroundColor:C,...S,children:[s(L,{flex:!0,alignItems:"center",justifyContent:"space-between",onClick:()=>{const q=!m;n==null||n(q),T(q)},py:"16px",pr:"16px",pl:_,children:[s($,{children:[o(y,{tag:"h2",typo:"headline-regular",color:"liquorice",children:e}),x&&o(y,{tag:"label",color:"liquorice",typo:"label",mt:{custom:4},children:x})]}),o(O,{render:"caret",size:24,color:"marzipan",isOpen:m,borderTop:h})]}),m&&o(a,{pt:"12px",pb:"16px",px:_,children:t})]})},I=l(a)(({borderTop:e,fullBorder:t,filledBackground:n,borderColor:i="oatmeal",backgroundColor:d="custard"})=>u`
    border-bottom: 1px solid ${c.colors[i]};
    ${e&&`border-top: 1px solid ${c.colors[i]};`}

    ${t&&u`
      border: 1px solid ${c.colors[i]};
      border-radius: 16px;
    `}

    ${n&&u`
      background-color: ${c.colors[d]};
    `}
  `),$=l.div`
  display: flex;
  flex-direction: column;
`,L=l(a)`
  cursor: pointer;
`,O=l(B)(({isOpen:e})=>u`
    transform: ${e?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.6s ease;
  `);try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},filledBackground:{defaultValue:null,description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"",name:"borderTop",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:{value:"oatmeal"},description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},fullBorder:{defaultValue:{value:"false"},description:"",name:"fullBorder",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:{value:"custard"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'}]}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isOpen: boolean) => void)"}},defaultIsOpen:{defaultValue:{value:"false"},description:"",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const f=[{children:"Lots of brilliant information about this beautiful component",title:"How it works"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle"},{children:"Lots of brilliant information about this beautiful component",title:"How it works",filledBackground:!0},{children:"Lots of brilliant information about this beautiful component",title:"How it works",subTitle:"subtitle",filledBackground:!0}],g=()=>s(R,{children:[o(b,{label:"Default",children:f.map((e,t)=>o(r,{...e},t))}),o(b,{label:"Border Top",children:f.map((e,t)=>o(r,{...e,borderTop:!0},t))}),o(b,{label:"Full Border",children:f.map((e,t)=>o(r,{...e,fullBorder:!0},t))})]}),R=l(a)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,b=({label:e,children:t})=>s(a,{width:"100%",mb:"16px",children:[o(a,{mb:"16px",children:o(y,{tag:"span",typo:"header-small",children:e})}),o(H,{children:t})]}),H=l(a)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;try{g.displayName="CollectionPage",g.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const M={title:"Accordion",component:r},j=e=>o(r,{...e,title:"How it works",children:"Lots of brilliant information about this beautiful component"}),p=j.bind({}),Q=g.bind({});var P,V,w;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(props: AccordionProps) => <Accordion {...props} title="How it works">
    Lots of brilliant information about this beautiful component
  </Accordion>`,...(w=(V=p.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const U=["Default","Collection"];export{Q as Collection,p as Default,U as __namedExportsOrder,M as default};
