import{j as a,s as _,A as y}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as w}from"./index-BBkUAzwr.js";import{B as A}from"./Box-DB724hnb.js";import{I as E}from"./Icon-CtANFpqu.js";import{L}from"./Loader-DblCbV5R.js";import{t as e}from"./theme-D50qMPxU.js";import{f as B}from"./focusOutline-D9_3RTEn.js";const c=w.forwardRef(({children:s,handleClick:m,primary:i=!1,secondary:o=!1,disabled:r=!1,loading:u=!1,icon:f,...j},R)=>a.jsx(I,{as:"button",primary:i,secondary:o,disabled:r||u,$loading:u,onClick:m,icon:f,...j,ref:R,children:u?a.jsx(L,{color:i?"liquorice":"cream",height:"16"}):a.jsxs(a.Fragment,{children:[f&&a.jsx(E,{render:f,size:20,color:i?"liquorice":"cream"}),a.jsx(N,{children:s})]})}));c.displayName="Chip";const I=_(A)(({primary:s,secondary:m,icon:i,$loading:o,disabled:r})=>y`
    ${B()}

    align-items: center;
    background-color: ${e.colors.oatmeal};
    border-radius: 100px;
    border: 2px solid ${e.colors.oatmeal};
    color: ${e.colors.liquorice};
    display: flex;
    font-size: 16px;
    justify-content: ${i?"space-evenly":"center"};
    line-height: 100%;
    padding: 8px 16px 8px ${i?"8px":"16px"};
    width: 98px;
    min-height: 40px;
    cursor: ${r||o?"not-allowed":"pointer"};
    opacity: ${r?"0.5":"1"};

    ${s&&y`
      &:hover {
        border: ${!(r||o)&&`2px solid ${e.colors.mascarpone}`};
        background-color: ${!(r||o)&&e.colors.mascarpone};
      }
    `}
    ${m&&y`
      color: ${e.colors.cream};
      background-color: ${e.colors.liquorice};
      border: 2px solid ${e.colors.liquorice};
      &:hover {
        border: ${!(r||o)&&`2px solid ${e.colors.sesame}`};
        background-color: ${!(r||o)&&e.colors.sesame};
      }
    `};
  `),N=_.div`
  flex-grow: 1;
`;try{c.displayName="Chip",c.__docgenInfo={description:"",displayName:"Chip",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"(e: FormEvent<HTMLButtonElement>) => void"}},primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const G={title:"Chip",component:c,argTypes:{handleClick:{action:"clicked"}}},d=s=>a.jsx(c,{...s}),p=d.bind({});p.args={primary:!0,children:"Add",icon:"plus","data-testid":"works!"};const n=d.bind({});n.args={secondary:!0,children:"Added",icon:"tick"};const l=d.bind({});l.args={loading:!0,primary:!0};const t=d.bind({});t.args={secondary:!0,disabled:!0,loading:!1,children:"Add",icon:"plus"};var h,g,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,C,P;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var q,v,$;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...($=(v=l.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var S,V,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(k=(V=t.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const J=["Primary","Secondary","Loading","SecondaryDisabled"];export{l as Loading,p as Primary,n as Secondary,t as SecondaryDisabled,J as __namedExportsOrder,G as default};
