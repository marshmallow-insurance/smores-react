import{s as u,A as y,a as s,j as e,F as V}from"./styled-components.browser.esm-eb1c464b.js";import{T as a}from"./Text-39468910.js";import{B as n}from"./Box-f9b8808b.js";import{I as v}from"./Icon-641c05f5.js";const g=({children:l,fieldType:o,renderAsTitle:m,htmlFor:c,className:h,label:d,assistiveText:t,error:i,errorMsg:r,required:b,completed:f,...q})=>{const p=o==="field"?"label":"legend";return s(S,{as:o==="field"?"div":"fieldset",className:h,...q,children:[d&&e(V,{children:m?s(n,{mb:"16px",children:[e(a,{tag:p,typo:"heading-small",htmlFor:c,children:d}),t&&e(a,{tag:"p",color:"sesame",mt:{custom:4},children:t})]}):s(a,{tag:p,typo:"label",color:i?"strawberry":"sesame",htmlFor:c,mb:{custom:4},children:[d,b&&e(a,{tag:"span",typo:"body-small",color:"strawberry",children:"*"})]})}),e(n,{children:l}),o==="field"&&t&&!m&&e(a,{tag:p,typo:"caption",color:i?"strawberry":"sesame",mt:{custom:4},children:t}),i&&r&&(typeof r=="string"?e(a,{tag:"span",typo:"caption",color:"strawberry",mt:"8px",children:r}):e(n,{mt:"8px",children:r})),f!==void 0&&e(x,{displayStatus:f,isError:!!(i&&r),children:s(P,{mt:"8px",children:[e(v,{render:"included",size:16,color:"apple"}),e(a,{typo:"caption",color:"apple",children:"Complete"})]})})]})},x=u(n)`
  width: 0;
  overflow: hidden;

  ${({displayStatus:l})=>l&&y`
      transition: width 0.6s ease-in;
      width: 100%;
    `}

  /* This enables animation to appear when previous state is error */
  ${({isError:l})=>l&&y`
      height: 0;
    `}
`,P=u(n)`
  display: flex;
  align-items: center;
  gap: 4px;
`,S=u(n)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`;try{g.displayName="InternalField",g.__docgenInfo={description:"",displayName:"InternalField",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},fieldType:{defaultValue:null,description:"",name:"fieldType",required:!0,type:{name:"enum",value:[{value:'"fieldset"'},{value:'"field"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{g as I};
