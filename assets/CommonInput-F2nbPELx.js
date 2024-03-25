import{u as a,b as d}from"./styled-components.browser.esm-NpdVBoMN.js";import{I as n}from"./Icon-DLXA4yL5.js";import{t as r}from"./theme-D50qMPxU.js";const o=a.input`
  border: none;
  color: ${({$error:e})=>r.colors[`${e?"strawberry":"liquorice"}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"initial"};
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  padding: 18px 14px;
  background-color: ${({$fallbackStyle:e})=>e?r.colors.custard:r.colors.cream};
  border: 2px solid
    ${({$error:e})=>e?r.colors.strawberry:r.colors.oatmeal};

  ${({disabled:e,$error:l})=>!e&&!l&&d`
      &:hover,
      &:focus-within {
        border-color: ${r.colors.marzipan};
      }
    `}

  border-radius: 12px;
  height: auto;

  ${({$frontIcon:e})=>e&&`
      padding-left: 42px;
    `}

  ${({$trailingIcon:e})=>e&&`
      padding-right: 42px;
    `}

  /* Remove the spinner on Firefox and Webkit browsers */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${r.colors.sesame};
  }
`,t=a(n)`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({$disabled:e})=>e?"0.5":"1"};
  color: ${r.colors.liquorice};
`,i=a(n)`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({$disabled:e})=>e?"0.5":"1"};
  color: ${r.colors.liquorice};
`;try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="StyledFrontIcon",t.__docgenInfo={description:"",displayName:"StyledFrontIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledTrailingIcon",i.__docgenInfo={description:"",displayName:"StyledTrailingIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{o as I,t as S,i as a};
