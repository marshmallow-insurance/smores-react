import{j as u,s as t,A as o}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as V}from"./index-BBkUAzwr.js";import{B as P}from"./Box-Dm5zCsW8.js";import{I as B}from"./Icon-DVP8Tpw-.js";import{L as C}from"./Loader-DoSrqr7j.js";import{t as a}from"./theme-D50qMPxU.js";import{a as j}from"./focusOutline-D9_3RTEn.js";const f=V.forwardRef((e,l)=>{const{children:v,id:s,className:c="",disabled:d=!1,handleClick:p,loading:n=!1,primary:y=!1,secondary:x=!1,fallbackStyle:k=!1,textBtn:g=!1,smallButton:m=!1,icon:r,trailingIcon:i=!1,forcedWidth:w="",form:h,type:q,...$}=e;return u.jsxs(S,{as:"button",id:s,className:c,disabled:d||n,onClick:p,$loading:n,primary:y,secondary:x,fallbackStyle:k,textBtn:g,smallButton:m,icon:r,trailingIcon:i,forcedWidth:w,...h?{form:h}:{},type:q,...$,ref:l,children:[n&&u.jsx(R,{children:u.jsx(C,{color:"liquorice",height:"16"})}),u.jsxs(N,{icon:r,$loading:n,children:[!i&&r&&u.jsx(b,{trailingIcon:i,render:r,size:m?16:24,color:"liquorice"}),u.jsx(_,{className:"childrenContainer",children:v}),i&&r&&g&&u.jsx(b,{trailingIcon:i,render:r,size:m?16:24,color:"liquorice",className:"iconContainer"})]})]})});f.displayName="Button";const S=t(P)(({disabled:e,$loading:l,primary:v,secondary:s,forcedWidth:c,fallbackStyle:d,textBtn:p,smallButton:n})=>o`
    position: relative;
    background-color: ${a.colors.marshmallowPink};
    box-shadow: none;
    color: ${a.colors.liquorice};
    padding: 0 20px;
    outline: none;
    border-radius: 10000px;
    font-weight: ${a.font.weight.medium};
    cursor: ${e||l?"not-allowed":"pointer"};
    line-height: 100%;
    font-size: 16px;
    opacity: ${e?"0.5":"1"};
    width: ${c||"auto"};

    ${j}

    ${v&&o`
      color: ${a.colors.liquorice};

      &:hover {
        background-color: ${!(e||l)&&a.colors.bubblegum};
      }
      &:active {
        background-color: ${a.colors.lollipop};
      }
    `}
    ${s&&o`
      background-color: ${a.colors.oatmeal};

      &:hover {
        background-color: ${!(e||l)&&a.colors.mascarpone};
      }
      &:active {
        background-color: ${a.colors.custard};
      }
    `}
  ${d&&o`
      background-color: ${a.colors.cream};

      &:hover {
        background-color: ${!(e||l)&&a.colors.coconut};
      }
      &:active {
        background-color: ${a.colors.mascarpone};
      }
    `}
  ${n&&o`
      padding: 0 10px;
      min-width: 54px;
      font-size: 14px;

      .childrenContainer {
        padding: 9px 0;
      }

      span {
        margin: 0 5px 0 0;
      }
    `}
  ${p&&o`
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      text-decoration: underline;

      &:hover {
        background-color: ${!(e||l)&&a.colors.fairyFloss};
      }
      &:active {
        background-color: transparent;
        color: ${a.colors.sesame};
      }
    `}
  `),R=t.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,N=t.div`
  display: flex;
  align-items: center;
  justify-content: ${({icon:e})=>e?"space-evenly":"center"};
  opacity: ${({$loading:e})=>e?"0":"1"};
`,b=t(B)(({trailingIcon:e})=>o`
    margin: ${e?"0 0 0 10px":"0 10px 0 0"};
  `),_=t.div`
  padding: 16px 0;
  flex-grow: 1;
`;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((e: FormEvent<HTMLButtonElement>) => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},textBtn:{defaultValue:null,description:"",name:"textBtn",required:!1,type:{name:"boolean"}},smallButton:{defaultValue:null,description:"",name:"smallButton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"key"'},{value:'"property"'},{value:'"security"'},{value:'"alert"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"checkout"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"confused"'},{value:'"crop"'},{value:'"cross"'},{value:'"download"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"facebook"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"onfido"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"premfina"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"stripe"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"twitter"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"boolean"}},forcedWidth:{defaultValue:null,description:"",name:"forcedWidth",required:!1,type:{name:"string"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{f as B};
