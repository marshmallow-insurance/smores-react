import{j as e,a as w,u as j}from"./styled-components.browser.esm-NpdVBoMN.js";import{n as d}from"./noop-BjFrJKj1.js";import{r as x}from"./index-BBkUAzwr.js";import{B as p}from"./Box-B1chrFTP.js";import{F as X}from"./Field-CaUvv-Mz.js";import{S as Y,I as G}from"./CommonInput-BXRvpj4u.js";import{u as K}from"./id-CqcUMuGv.js";import{S as Q}from"./SupportMessage-CkC13gCD.js";import{T as $}from"./Text-DL1uEabl.js";import"./InternalField-DlInvkfj.js";import"./Icon-CZCH2Uzd.js";import"./theme-D50qMPxU.js";import"./polished.esm-D0h1-lPB.js";import"./isReactElement-DALlT1kK.js";import"./focusOutline-Ba1vYvXH.js";const r=x.forwardRef(function({id:u,placeholder:n,name:o,value:t,decimalNumber:D=!0,onChange:m,onInputChange:k,onBlur:L,min:h,max:g,disabled:q=!1,error:C=!1,fallbackStyle:W,...M},H){const I=K(u),V="pound-regular",z=l=>{const v=l.indexOf(".");if(!D)return Math.trunc(Number(l)).toString();if(v>=0&&l.length>v+1){const b=l.substring(v+1).substring(0,2);return`${l.substring(0,v)}.${b}`}else return l},U=l=>{const v=Number(l);return h&&v<h?h.toString():g&&v>g?g.toString():l},J=l=>{if(m===void 0)return;if(l==="")m(l);else{const b=z(l),O=U(b);m(O)}};return e(X,{...M,htmlFor:I,error:C,children:w(p,{flex:!0,alignItems:"center",justifyContent:"flex-start",children:[e(Y,{$disabled:q,render:V,color:"sesame"}),e(G,{ref:H,$error:C,disabled:q,type:"number",id:I,name:o,placeholder:n,value:t,$frontIcon:V,$fallbackStyle:W,onChange:l=>{m&&J(l.currentTarget.value),k&&k(l)},onWheel:l=>l.currentTarget.blur(),onBlur:L})]})})});try{r.displayName="CurrencyInput",r.__docgenInfo={description:"",displayName:"CurrencyInput",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},decimalNumber:{defaultValue:{value:"true"},description:"",name:"decimalNumber",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"property"'},{value:'"security"'},{value:'"key"'},{value:'"alert"'},{value:'"link"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"filter"'},{value:'"download"'},{value:'"at"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"checkout"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"confused"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"facebook"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"onfido"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"premfina"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"stripe"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"twitter"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"property"'},{value:'"security"'},{value:'"key"'},{value:'"alert"'},{value:'"link"'},{value:'"search"'},{value:'"location"'},{value:'"copy"'},{value:'"other"'},{value:'"filter"'},{value:'"download"'},{value:'"at"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"amex"'},{value:'"arrow"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"checkout"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"confused"'},{value:'"crop"'},{value:'"cross"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"facebook"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"onfido"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"premfina"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"stripe"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"twitter"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onChange:{defaultValue:null,description:`on change is required and on input optional
on input is required and on change optional`,name:"onChange",required:!1,type:{name:"((e: string) => void) | ((e: string) => void)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLInputElement>) => void) | ((e: FormEvent<HTMLInputElement>) => void)"}}}}}catch{}const Z=[{id:"days",placeholder:"200",errorMsg:"This field is required",label:"Amount",onChange:d,onInputChange:d,onBlur:d,value:""}],y=()=>{const[,a]=x.useState("");return e(p,{flex:!0,direction:"column",children:Z.map(({id:u,placeholder:n,errorMsg:o,label:t})=>w(p,{flex:!0,direction:"column",mb:"32px",children:[e(le,{tag:"span",typo:"header-medium",children:"CurrencyInput variations"}),e(i,{label:"Generic",children:e(r,{id:u,label:t,value:"",placeholder:n,error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Fallback",children:e(r,{id:u,label:t,value:"",placeholder:n,fallbackStyle:!0,error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Disabled",children:e(r,{id:u,label:t,value:"",placeholder:n,disabled:!0,error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Required",children:e(r,{id:u,label:t,value:"",required:!0,placeholder:n,error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Assistive text",children:e(r,{id:u,label:t,value:"",placeholder:n,assistiveText:"Some assistive text",error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Completed",children:e(r,{id:u,label:t,value:"",placeholder:n,error:!1,completed:!0,errorMsg:o,onChange:a})}),e(i,{label:"As title",children:e(r,{id:u,label:t,value:"",renderAsTitle:!0,placeholder:n,error:!1,errorMsg:o,onChange:a})}),e(i,{label:"Error",children:e(r,{id:u,label:t,value:"",required:!0,placeholder:n,assistiveText:"Some assistive text",error:!0,errorMsg:o,onChange:a})}),e(i,{label:"React element error",children:e(r,{id:u,label:t,required:!0,value:"",placeholder:n,error:!0,errorMsg:e(Q,{type:"warning",description:"error!!"}),onChange:a})}),e(i,{label:"Fallback Error",children:e(r,{id:u,label:t,required:!0,value:"",placeholder:n,fallbackStyle:!0,error:!0,errorMsg:o,onChange:a})})]},u))})},i=({label:a,children:u})=>w(ee,{mt:"32px",children:[e(p,{width:"140px",children:e($,{tag:"span",typo:"label-large",children:a})}),u]}),ee=j(p)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,ae="140px",le=j($)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${ae};
`;try{y.displayName="CollectionPage",y.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const ue=()=>{const[a,u]=x.useState("");return e("form",{children:e(r,{id:"numberInput",label:"Amount paid",name:"numberInput",onChange:n=>u(n),placeholder:"100.00",value:a,min:-200,max:200,required:!0})})},we={title:"Currency Input",component:r,argTypes:{onChange:{action:"changed"}}},B=a=>e(r,{...a}),c=B.bind({});c.args={id:"total_amount",label:"Total Amount",name:"totalAmount",placeholder:"0",onChange:d};const s=B.bind({});s.args={id:"amount",label:"Amount",name:"amount",placeholder:"200",required:!0,onChange:d,fallbackStyle:!0};const xe=y.bind({}),re=()=>e(ue,{}),f=re.bind({});var S,T,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"(props: CurrencyInputProps) => <CurrencyInput {...props} />",...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,_,R;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:"(props: CurrencyInputProps) => <CurrencyInput {...props} />",...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var N,A,F;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:"() => <Example />",...(F=(A=f.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ke=["Default","DefaultFallback","Collection","WorkingExample"];export{xe as Collection,c as Default,s as DefaultFallback,f as WorkingExample,ke as __namedExportsOrder,we as default};
