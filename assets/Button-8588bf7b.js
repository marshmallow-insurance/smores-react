import{j as h,a as i,s,A as n}from"./styled-components.browser.esm-7270970d.js";import{r as B}from"./index-7c191284.js";import{t as o}from"./theme-9a9bdd1b.js";import{B as C}from"./Box-c55ea5dd.js";import{L as S}from"./Loader-092c0258.js";import{I as w}from"./Icon-aa08702e.js";const y=B.forwardRef((e,a)=>{const{children:d,id:u,className:c="",disabled:p=!1,handleClick:m,loading:l=!1,primary:x=!1,secondary:$=!1,fallbackStyle:v=!1,textBtn:g=!1,smallButton:f=!1,icon:r="",trailingIcon:t=!1,forcedWidth:V="",form:b,type:k,...P}=e;return h(N,{as:"button",id:u,className:c,disabled:p,onClick:m,$loading:l,primary:x,secondary:$,fallbackStyle:v,textBtn:g,smallButton:f,icon:r,trailingIcon:t,forcedWidth:V,...b?{form:b}:{},type:k,...P,ref:a,children:[l&&i(R,{children:i(S,{color:"liquorice",height:"16"})}),h(_,{icon:r,$loading:l,children:[!t&&r&&i(q,{trailingIcon:t,render:r,size:f?16:24,color:"liquorice"}),i(I,{className:"childrenContainer",children:d}),t&&r&&g&&i(q,{trailingIcon:t,render:r,size:f?16:24,color:"liquorice",className:"iconContainer"})]})]})});y.displayName="Button";const N=s(C)(({disabled:e,$loading:a,primary:d,secondary:u,forcedWidth:c,fallbackStyle:p,textBtn:m,smallButton:l})=>n`
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

    ${d&&n`
      color: ${o.colors.liquorice};

      &:hover {
        background-color: ${!(e||a)&&o.colors.bubblegum};
      }
      &:active {
        background-color: ${o.colors.lollipop};
      }
    `}
    ${u&&n`
      background-color: ${o.colors.oatmeal};

      &:hover {
        background-color: ${!(e||a)&&o.colors.mascarpone};
      }
      &:active {
        background-color: ${o.colors.custard};
      }
    `}
  ${p&&n`
      background-color: ${o.colors.cream};

      &:hover {
        background-color: ${!(e||a)&&o.colors.coconut};
      }
      &:active {
        background-color: ${o.colors.mascarpone};
      }
    `}
  ${m&&n`
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
  ${l&&n`
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
  `),R=s.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,_=s.div`
  display: flex;
  align-items: center;
  justify-content: ${({icon:e})=>e?"space-evenly":"center"};
  opacity: ${({$loading:e})=>e?"0":"1"};
`,q=s(w)(({trailingIcon:e})=>n`
    margin: ${e?"0 0 0 10px":"0 10px 0 0"};
  `),I=s.div`
  padding: 16px 0;
  flex-grow: 1;
`;try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((e: FormEvent<HTMLButtonElement>) => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},textBtn:{defaultValue:null,description:"",name:"textBtn",required:!1,type:{name:"boolean"}},smallButton:{defaultValue:null,description:"",name:"smallButton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"boolean"}},forcedWidth:{defaultValue:null,description:"",name:"forcedWidth",required:!1,type:{name:"string"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{y as B};
//# sourceMappingURL=Button-8588bf7b.js.map
