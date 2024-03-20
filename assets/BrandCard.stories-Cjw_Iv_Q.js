import{a as y,j as a,u as p}from"./styled-components.browser.esm-NpdVBoMN.js";import{B as g}from"./Button-DzaCjHVi.js";import{T as A}from"./Tag-fe_H2hM_.js";import{B as r}from"./Box-B1chrFTP.js";import{T as x}from"./Text-DL1uEabl.js";import{t as C}from"./theme-D50qMPxU.js";import"./index-BBkUAzwr.js";import"./Icon-CZCH2Uzd.js";import"./Loader-CuMh7kMB.js";import"./focusOutline-Ba1vYvXH.js";import"./polished.esm-D0h1-lPB.js";const d=({title:e,body:n,visual:s,visualHeight:u="",alignVisual:v,visualBottom:b,tag:f,buttonAction:h,fallbackStyle:I=!1,bgColor:j="matcha",maxWidth:N="",...U})=>y(F,{maxWidth:N,$fallbackStyle:I,$bgColor:j,...U,children:[f&&a(D,{children:f}),s&&!b&&a(w,{$visualHeight:u,children:a(B,{$visualUrl:s,$visualHeight:u,$alignVisual:v})}),a(r,{flex:!0,alignItems:"center",justifyContent:"space-between",mt:"16px",children:a(r,{flex:!0,alignItems:"center",children:y(r,{children:[e&&a(x,{typo:"hero-alternate",color:"liquorice",children:e}),n&&a(x,{typo:"body-regular",color:"liquorice",children:n})]})})}),h&&a(r,{mt:"16px",children:h}),s&&b&&a(w,{$visualHeight:u,mt:"16px",children:a(B,{$visualUrl:s,$visualHeight:u,$alignVisual:v})})]}),F=p(r)`
  background: ${({$fallbackStyle:e,$bgColor:n})=>e?C.colors.cream:C.colors[n]};
  box-sizing: border-box;
  border-radius: 16px 16px 0px 0px;

  padding: 16px;
  position: relative;
  overflow: hidden;
`,D=p(r)`
  position: absolute;
  top: 16px;
  right: 16px;
`,w=p(r)`
  width: 100%;

  ${({$visualHeight:e})=>e&&`height: ${e};`}
`,B=p(r)`
  width: 100%;
  background-image: url('${e=>e.$visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: ${({$alignVisual:e})=>e||"left"};

  ${({$visualHeight:e})=>e?`height: ${e};`:"padding-top: 100%;"}
`;try{d.displayName="BrandCard",d.__docgenInfo={description:"",displayName:"BrandCard",props:{title:{defaultValue:null,description:"generic card title",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"generic card body",name:"body",required:!0,type:{name:"string"}},visual:{defaultValue:null,description:"card image",name:"visual",required:!0,type:{name:"string"}},alignVisual:{defaultValue:null,description:"alignment of the image",name:"alignVisual",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},visualHeight:{defaultValue:{value:""},description:"height of the image, leave this blank for 100%",name:"visualHeight",required:!1,type:{name:"string"}},visualBottom:{defaultValue:null,description:"render image at bottom of card",name:"visualBottom",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:{value:"matcha"},description:"",name:"bgColor",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"checkout"'},{value:'"confused"'},{value:'"facebook"'},{value:'"intercom"'},{value:'"onfido"'},{value:'"premfina"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"stripe"'},{value:'"twitter"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"hometree"'}]}},tag:{defaultValue:null,description:"card tag",name:"tag",required:!1,type:{name:"ReactNode"}},buttonAction:{defaultValue:null,description:"primary button",name:"buttonAction",required:!1,type:{name:"ReactNode"}},fallbackStyle:{defaultValue:{value:"false"},description:"fallback color scheme",name:"fallbackStyle",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:""},description:"margin",name:"maxWidth",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const m=""+new URL("placeHolderImage-B0swrbh0.svg",import.meta.url).href,ee={title:"BrandCard",component:d},c=e=>a(d,{...e}),l=c.bind({});l.args={title:"All about marshmallow miles",body:"Puzzled by your driving score? Wondering about rewards? Here’s how it all works!",alignVisual:"left",bgColor:"macaroon",visualHeight:"200px",visual:m};const o=c.bind({});o.args={title:"All about marshmallow miles",body:"Puzzled by your driving score? Wondering about rewards? Here’s how it all works!",maxWidth:"350px",bgColor:"matcha",visualHeight:"180px",tag:a(A,{label:"default tag",bgColor:"fairyFloss",color:"liquorice"}),buttonAction:a(g,{fallbackStyle:!0,children:"Tell me more"}),visual:m};const t=c.bind({});t.args={title:"All about marshmallow miles",body:"Puzzled by your driving score? Wondering about rewards? Here’s how it all works!",bgColor:"matcha",alignVisual:"right",visualHeight:"180px",buttonAction:a(g,{fallbackStyle:!0,children:"Tell me more"}),visual:m};const i=c.bind({});i.args={title:"All about marshmallow miles",body:"Puzzled by your driving score? Wondering about rewards? Here’s how it all works!",maxWidth:"350px",visualHeight:"180px",alignVisual:"left",visualBottom:!0,bgColor:"peanut",tag:a(A,{label:"new",bgColor:"fairyFloss",color:"liquorice"}),buttonAction:a(g,{fallbackStyle:!0,children:"Tell me more"}),visual:m};var V,q,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:"(props: BrandCardProps) => <BrandCard {...props} />",...(P=(q=l.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var k,S,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:"(props: BrandCardProps) => <BrandCard {...props} />",...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var $,R,T;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:"(props: BrandCardProps) => <BrandCard {...props} />",...(T=(R=t.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var z,H,_;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:"(props: BrandCardProps) => <BrandCard {...props} />",...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const ae=["Default","BrandCardWithImageWithTag","BrandCardAlignImageRight","BrandCardWithImageBelow"];export{t as BrandCardAlignImageRight,i as BrandCardWithImageBelow,o as BrandCardWithImageWithTag,l as Default,ae as __namedExportsOrder,ee as default};
