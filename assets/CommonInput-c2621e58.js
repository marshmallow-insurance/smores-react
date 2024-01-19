import{I as u}from"./Icon-d84521c2.js";import{s as l,A as i}from"./styled-components.browser.esm-eb1c464b.js";import{t as a}from"./theme-9a9bdd1b.js";const r=l.input`
  border: none;
  color: ${({error:e})=>a.colors[`${e?"strawberry":"liquorice"}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"initial"};
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  padding: 18px 14px;
  background-color: ${({fallbackStyle:e})=>e?a.colors.custard:a.colors.cream};
  border: 2px solid
    ${({error:e})=>e?a.colors.strawberry:a.colors.oatmeal};

  ${({disabled:e,error:o})=>!e&&!o&&i`
      &:hover,
      &:focus-within {
        border-color: ${a.colors.marzipan};
      }
    `}

  border-radius: 12px;
  height: auto;

  ${({frontIcon:e})=>e&&e!=""&&`
      padding-left: 42px;
    `}

  ${({trailingIcon:e})=>e&&e!=""&&`
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
    color: ${a.colors.sesame};
  }
`,n=l(u)`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  color: ${a.colors.liquorice};
`,t=l(u)`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  color: ${a.colors.liquorice};
`;try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{n.displayName="StyledFrontIcon",n.__docgenInfo={description:"",displayName:"StyledFrontIcon",props:{m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},className:{defaultValue:null,description:"className attribute to apply classes from props",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"specify what Icon to render",name:"render",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"set color of the Icon",name:"color",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"hometree"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"set size of the Icon",name:"size",required:!1,type:{name:"number"}},rotate:{defaultValue:null,description:"rotation degrees",name:"rotate",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{t.displayName="StyledTrailingIcon",t.__docgenInfo={description:"",displayName:"StyledTrailingIcon",props:{m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},className:{defaultValue:null,description:"className attribute to apply classes from props",name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"specify what Icon to render",name:"render",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"set color of the Icon",name:"color",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"hometree"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"set size of the Icon",name:"size",required:!1,type:{name:"number"}},rotate:{defaultValue:null,description:"rotation degrees",name:"rotate",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{r as I,n as S,t as a};
