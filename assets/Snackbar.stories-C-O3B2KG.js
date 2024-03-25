import{u as v,a as m,j as e,F as y}from"./styled-components.browser.esm-NpdVBoMN.js";import{B as S}from"./Button-Bzy6iGtX.js";import{r as c}from"./index-BBkUAzwr.js";import{B as w}from"./Box-BLBwDpxh.js";import{I as h}from"./Icon-DLXA4yL5.js";import{t as _}from"./theme-D50qMPxU.js";import{T as x}from"./Text-BGEp9_7I.js";import{u as I}from"./index-Bq5HI2zZ.js";import"./Loader-CBVk_E1h.js";import"./focusOutline-Ba1vYvXH.js";import"./polished.esm-D0h1-lPB.js";const b=({autoCloseTime:a=4,id:u,message:n,leadingIcon:r,canManuallyClose:s,showCloseIcon:d,deleteSnack:o})=>(I(()=>o(u),a*1e3),m(q,{p:"16px",mt:"16px",flex:!0,justifyContent:"space-between",children:[m(w,{flex:!0,alignItems:"center",children:[r&&e(h,{mr:"12px",render:r,size:24,color:"mascarpone"}),e(x,{typo:"desc-small",color:"mascarpone",children:n})]}),s&&e(T,{onClick:()=>o(u),"aria-label":`close snackbar ${n}`,children:d?e(h,{render:"cross",size:16,color:"mascarpone"}):e(V,{tag:"span",typo:"desc-medium",color:"mascarpone",children:"Dismiss"})})]},u)),q=v(w)`
  border-radius: 16px;
  background-color: ${_.colors.liquorice};
`,T=v.button`
  cursor: pointer;
`,V=v(x)`
  text-decoration: underline;
`;try{b.displayName="SnackbarItem",b.__docgenInfo={description:"",displayName:"SnackbarItem",props:{deleteSnack:{defaultValue:null,description:"",name:"deleteSnack",required:!0,type:{name:"(id: string) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},autoCloseTime:{defaultValue:{value:"4"},description:"",name:"autoCloseTime",required:!1,type:{name:"enum",value:[{value:"4"},{value:"8"},{value:"5"},{value:"6"},{value:"7"},{value:"9"},{value:"10"}]}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"property"'},{value:'"security"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"alert"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"copy"'},{value:'"crop"'},{value:'"cross"'},{value:'"download"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"fence"'},{value:'"file"'},{value:'"filter"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"key"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"link"'},{value:'"linkedin"'},{value:'"location"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"other"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"search"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},canManuallyClose:{defaultValue:null,description:"",name:"canManuallyClose",required:!1,type:{name:"boolean"}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}}}}}catch{}const C=c.createContext({addSnackbar:()=>{throw new Error("Please add the SnackbarContainer to your application")}}),j=()=>c.useContext(C),i=({children:a})=>{let u=0;const[n,r]=c.useState([]),s=c.useCallback(()=>{const l=`MM_SNACKBAR_${u}`;return u++,l},[u]),d=l=>{const p={...l,id:s()};r([...n,p])},o=l=>{r(n.filter(p=>p.id!==l))};return m(C.Provider,{value:{addSnackbar:d},children:[a,e(B,{children:n.map(l=>e(b,{...l,deleteSnack:o},l.id))})]})},B=v.div`
  position: fixed;
  bottom: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  max-width: 875px;
  z-index: 1000;
`;try{i.displayName="SnackbarContainer",i.__docgenInfo={description:"",displayName:"SnackbarContainer",props:{}}}catch{}const M=()=>{const{addSnackbar:a}=j();return{addSnackbar:a}},W={title:"SnackbarContainer",component:i},N=()=>{const{addSnackbar:a}=M();return e(y,{children:e(S,{primary:!0,onClick:()=>{a({leadingIcon:"tick",message:"Hello there general Kenobi",canManuallyClose:!0})},children:"Click me to add a snack!"})})},z=()=>e(y,{children:e(i,{children:e(N,{})})}),t=z.bind({});var f,k,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <>
      <SnackbarContainer>
        <ChildComponent />
      </SnackbarContainer>
    </>;
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,W as default};
