import{j as n,s,A as r}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as P}from"./index-BBkUAzwr.js";import{B}from"./Box-DB724hnb.js";import{I as C}from"./Icon-CtANFpqu.js";import{L as j}from"./Loader-DblCbV5R.js";import{t as o}from"./theme-D50qMPxU.js";import{a as S}from"./focusOutline-D9_3RTEn.js";const y=P.forwardRef((e,a)=>{const{children:d,id:u,className:c="",disabled:p=!1,handleClick:m,loading:l=!1,primary:h=!1,secondary:q=!1,fallbackStyle:$=!1,textBtn:g=!1,smallButton:f=!1,icon:t,trailingIcon:i=!1,forcedWidth:v="",form:b,type:V,...k}=e;return n.jsxs(w,{as:"button",id:u,className:c,disabled:p||l,onClick:m,$loading:l,primary:h,secondary:q,fallbackStyle:$,textBtn:g,smallButton:f,icon:t,trailingIcon:i,forcedWidth:v,...b?{form:b}:{},type:V,...k,ref:a,children:[l&&n.jsx(R,{children:n.jsx(j,{color:"liquorice",height:"16"})}),n.jsxs(N,{icon:t,$loading:l,children:[!i&&t&&n.jsx(x,{trailingIcon:i,render:t,size:f?16:24,color:"liquorice"}),n.jsx(_,{className:"childrenContainer",children:d}),i&&t&&g&&n.jsx(x,{trailingIcon:i,render:t,size:f?16:24,color:"liquorice",className:"iconContainer"})]})]})});y.displayName="Button";const w=s(B)(({disabled:e,$loading:a,primary:d,secondary:u,forcedWidth:c,fallbackStyle:p,textBtn:m,smallButton:l})=>r`
    position: relative;
    background-color: ${o.colors.marshmallowPink};
    box-shadow: none;
    color: ${o.colors.liquorice};
    padding: 0 20px;
    outline: none;
    border-radius: 10000px;
    font-weight: ${o.font.weight.medium};
    cursor: ${e||a?"not-allowed":"pointer"};
    line-height: 100%;
    font-size: 16px;
    opacity: ${e?"0.5":"1"};
    width: ${c||"auto"};

    ${S}

    ${d&&r`
      color: ${o.colors.liquorice};

      &:hover {
        background-color: ${!(e||a)&&o.colors.bubblegum};
      }
      &:active {
        background-color: ${o.colors.lollipop};
      }
    `}
    ${u&&r`
      background-color: ${o.colors.oatmeal};

      &:hover {
        background-color: ${!(e||a)&&o.colors.mascarpone};
      }
      &:active {
        background-color: ${o.colors.custard};
      }
    `}
  ${p&&r`
      background-color: ${o.colors.cream};

      &:hover {
        background-color: ${!(e||a)&&o.colors.coconut};
      }
      &:active {
        background-color: ${o.colors.mascarpone};
      }
    `}
  ${l&&r`
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
  ${m&&r`
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      text-decoration: underline;

      &:hover {
        background-color: ${!(e||a)&&o.colors.fairyFloss};
      }
      &:active {
        background-color: transparent;
        color: ${o.colors.sesame};
      }
    `}
  `),R=s.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,N=s.div`
  display: flex;
  align-items: center;
  justify-content: ${({icon:e})=>e?"space-evenly":"center"};
  opacity: ${({$loading:e})=>e?"0":"1"};
`,x=s(C)(({trailingIcon:e})=>r`
    margin: ${e?"0 0 0 10px":"0 10px 0 0"};
  `),_=s.div`
  padding: 16px 0;
  flex-grow: 1;
`;try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((e: FormEvent<HTMLButtonElement>) => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},textBtn:{defaultValue:null,description:"",name:"textBtn",required:!1,type:{name:"boolean"}},smallButton:{defaultValue:null,description:"",name:"smallButton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"boolean"}},forcedWidth:{defaultValue:null,description:"",name:"forcedWidth",required:!1,type:{name:"string"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{y as B};
