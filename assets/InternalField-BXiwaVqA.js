import{s as p,A as f,j as e}from"./styled-components.browser.esm-CJMx1vp9.js";import{T as a}from"./Text-DnLt-YfN.js";import{B as n}from"./Box-DB724hnb.js";import{I as b}from"./Icon-CtANFpqu.js";const y=({children:l,fieldType:s,renderAsTitle:u,htmlFor:m,className:g,label:o,assistiveText:t,error:i,errorMsg:r,required:x,completed:c,...h})=>{const d=s==="field"?"label":"legend";return e.jsxs(j,{as:s==="field"?"div":"fieldset",className:g,...h,children:[o&&e.jsx(e.Fragment,{children:u?e.jsxs(n,{mb:"16px",children:[e.jsx(a,{tag:d,typo:"heading-small",htmlFor:m,children:o}),t&&e.jsx(a,{tag:"p",color:"sesame",mt:{custom:4},children:t})]}):e.jsxs(a,{tag:d,typo:"label",color:i?"strawberry":"sesame",htmlFor:m,mb:{custom:4},children:[o,x&&e.jsx(a,{tag:"span",typo:"body-small",color:"strawberry",children:"*"})]})}),e.jsx(n,{children:l}),s==="field"&&t&&!u&&e.jsx(a,{tag:d,typo:"caption",color:i?"strawberry":"sesame",mt:{custom:4},children:t}),i&&r&&(typeof r=="string"?e.jsx(a,{tag:"span",typo:"caption",color:"strawberry",mt:"8px",children:r}):e.jsx(n,{mt:"8px",children:r})),c!==void 0&&e.jsx(q,{displayStatus:c,isError:!!(i&&r),children:e.jsxs(V,{mt:"8px",children:[e.jsx(b,{render:"included",size:16,color:"apple"}),e.jsx(a,{typo:"caption",color:"apple",children:"Complete"})]})})]})},q=p(n)`
  width: 0;
  overflow: hidden;

  ${({displayStatus:l})=>l&&f`
      transition: width 0.6s ease-in;
      width: 100%;
    `}

  /* This enables animation to appear when previous state is error */
  ${({isError:l})=>l&&f`
      height: 0;
    `}
`,V=p(n)`
  display: flex;
  align-items: center;
  gap: 4px;
`,j=p(n)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`;try{y.displayName="InternalField",y.__docgenInfo={description:"",displayName:"InternalField",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},fieldType:{defaultValue:null,description:"",name:"fieldType",required:!0,type:{name:"enum",value:[{value:'"fieldset"'},{value:'"field"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{y as I};
