import{a as t,j as a,s as y,A as fe}from"./styled-components.browser.esm-CskBwHif.js";import{B as ie}from"./Button-CTPD25oZ.js";import{I as te}from"./Icon-DDWl0xkC.js";import{T as k,L as be}from"./Text-4w7QZB9F.js";import{T as ye}from"./Tag-DWGSl4mf.js";import{c as Ce}from"./polished.esm-D0h1-lPB.js";import{B as r}from"./Box-Da6YRLOZ.js";import{t as f}from"./theme-D50qMPxU.js";import{a as xe}from"./focusOutline-JAHtHrmh.js";import"./index-BBkUAzwr.js";import"./Loader-BwvOIFW8.js";const b=({children:e,leadingIcon:o,title:C,body:x,visual:i,tag:w,cardOnClickAction:W,rightAction:q,buttonAction:V,fallbackStyle:ne=!1,visualHeight:P="",className:de="",maxWidth:ce="",marginX:se="",marginY:pe="",narrow:ve=!1,wide:me=!1,...ge})=>{const he=(!!o||!!C||!!x)&&e,S=!W;return t(ke,{className:de,maxWidth:ce,marginX:se,marginY:pe,narrow:ve,wide:me,visual:i,fallbackStyle:ne,isNotClickable:S,onClick:W,tabIndex:S?void 0:0,...ge,children:[w&&i&&a(we,{children:w}),i&&a(We,{visualHeight:P,children:a(qe,{visualUrl:i,visualHeight:P})}),t(r,{p:i?"16px":{custom:"0px"},children:[t(r,{flex:!0,alignItems:"center",justifyContent:"space-between",children:[t(r,{flex:!0,alignItems:"center",children:[o&&a(te,{mr:"12px",render:o,size:24,color:"liquorice"}),t(r,{children:[C&&a(k,{typo:"headline-regular",color:"liquorice",children:C}),x&&a(k,{typo:"body-regular",color:"sesame",children:x})]})]}),q&&q]}),a(r,{mt:he?"16px":{custom:"0px"},children:e}),V&&a(r,{mt:"16px",children:V})]})]})},ke=y(r)`
  background: ${({fallbackStyle:e})=>e?f.colors.cream:f.colors.custard};
  box-sizing: border-box;
  border-radius: 16px;

  max-width: ${e=>e.maxWidth};
  margin-top: ${e=>e.marginY};
  margin-right: ${e=>e.marginX};
  margin-bottom: ${e=>e.marginY};
  margin-left: ${e=>e.marginX};

  padding: ${({visual:e})=>e?"0px":"16px"};
  position: relative;
  overflow: hidden;

  ${({isNotClickable:e,fallbackStyle:o})=>!e&&fe`
      cursor: pointer;
      &:hover {
        background: ${Ce(.1,o?f.colors.cream:f.colors.custard)};
      }

      ${xe}
    `};
`,we=y(r)`
  position: absolute;
  top: 12px;
  right: 12px;
`,We=y(r)`
  width: 100%;
  margin-top: -16px;

  ${({visualHeight:e})=>e&&`height: ${e};`}
`,qe=y(r)`
  width: 100%;
  background-image: url('${e=>e.visualUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({visualHeight:e})=>e?`height: ${e};`:"padding-top: 100%;"}
`;try{b.displayName="Card",b.__docgenInfo={description:"",displayName:"Card",props:{leadingIcon:{defaultValue:null,description:"leading card icon",name:"leadingIcon",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"key"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"alert"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"bullets"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"checkout"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"confused"'},{value:'"copy"'},{value:'"crop"'},{value:'"cross"'},{value:'"download"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"facebook"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"location"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"onfido"'},{value:'"other"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"premfina"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"property"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"search"'},{value:'"security"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"stripe"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"twitter"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},title:{defaultValue:null,description:"generic card title",name:"title",required:!1,type:{name:"string"}},body:{defaultValue:null,description:"generic card body",name:"body",required:!1,type:{name:"string"}},visual:{defaultValue:null,description:"card image",name:"visual",required:!1,type:{name:"string"}},visualHeight:{defaultValue:{value:""},description:"height of the image",name:"visualHeight",required:!1,type:{name:"string"}},tag:{defaultValue:null,description:"card tag",name:"tag",required:!1,type:{name:"ReactNode"}},cardOnClickAction:{defaultValue:null,description:"action for a fully clickable card",name:"cardOnClickAction",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rightAction:{defaultValue:null,description:"action to the right of the card, chevron, chip or link text",name:"rightAction",required:!1,type:{name:"ReactNode"}},buttonAction:{defaultValue:null,description:"primary button",name:"buttonAction",required:!1,type:{name:"ReactNode"}},fallbackStyle:{defaultValue:{value:"false"},description:"fallback color scheme",name:"fallbackStyle",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},maxWidth:{defaultValue:{value:""},description:"margin",name:"maxWidth",required:!1,type:{name:"string"}},marginX:{defaultValue:{value:""},description:"left-right margin",name:"marginX",required:!1,type:{name:"string"}},marginY:{defaultValue:{value:""},description:"top-bottom margin",name:"marginY",required:!1,type:{name:"string"}},narrow:{defaultValue:{value:"false"},description:"Narrow padding",name:"narrow",required:!1,type:{name:"boolean"}},wide:{defaultValue:{value:"false"},description:"Wide padding",name:"wide",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const ue=""+new URL("placeHolderImage-B0swrbh0.svg",import.meta.url).href,je={title:"Card",component:b},l=e=>a(b,{...e}),u=l.bind({});u.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px"};const n=l.bind({});n.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",fallbackStyle:!0};const d=l.bind({});d.args={children:a(k,{tag:"h1",children:"Children here"})};const c=l.bind({});c.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px"};const s=l.bind({});s.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",cardOnClickAction:()=>alert("clicked")};const p=l.bind({});p.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",rightAction:a(te,{render:"caret",color:"marzipan",rotate:-90})};const v=l.bind({});v.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",rightAction:a(be,{href:"",typo:"regular",children:"Action"})};const m=l.bind({});m.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",buttonAction:a(ie,{primary:!0,forcedWidth:"100%",children:"Default"})};const g=l.bind({});g.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",visualHeight:"120px",visual:ue};const h=l.bind({});h.args={title:"Card title",body:"Card description",leadingIcon:"copy",maxWidth:"300px",visualHeight:"180px",tag:a(ye,{label:"default",bgColor:"feijoa",color:"cream"}),buttonAction:a(ie,{primary:!0,forcedWidth:"100%",children:"Default"}),visual:ue};var I,A,$;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...($=(A=u.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var R,_,N;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var T,D,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(j=(D=d.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var B,L,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var z,H,G;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(G=(H=s.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var X,Y,E;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(E=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var M,U,F;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(F=(U=v.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,le,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:"(props: CardProps) => <Card {...props} />",...(oe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const Be=["Default","DefaultFallback","GenericChildCard","GenericCard","CardWithOnClickAction","CardWithRightAction","CardWithRightActionLink","CardWithButton","CardWithImage","CardWithImageWithTag"];export{m as CardWithButton,g as CardWithImage,h as CardWithImageWithTag,s as CardWithOnClickAction,p as CardWithRightAction,v as CardWithRightActionLink,u as Default,n as DefaultFallback,c as GenericCard,d as GenericChildCard,Be as __namedExportsOrder,je as default};
