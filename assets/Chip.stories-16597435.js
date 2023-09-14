import{a as i,j as A,F as L,s as _,A as y}from"./styled-components.browser.esm-1fe49baf.js";import{r as j}from"./index-1b03fe98.js";import{t as e}from"./theme-9a9bdd1b.js";import{B as E}from"./Box-d9c24c93.js";import{I as B}from"./Icon-a31d4b43.js";import{L as F}from"./Loader-4d853a84.js";import{f as I}from"./focusOutline-65f7e9f7.js";const c=j.forwardRef(({children:a,handleClick:m,primary:s=!1,secondary:o=!1,disabled:r=!1,loading:u=!1,icon:f="",...R},w)=>i(N,{as:"button",primary:s,secondary:o,disabled:r||u,$loading:u,onClick:m,icon:f,...R,ref:w,children:u?i(F,{color:s?"liquorice":"cream",height:"16"}):A(L,{children:[f&&i(B,{render:f,size:20,color:s?"liquorice":"cream"}),i(T,{children:a})]})}));c.displayName="Chip";const N=_(E)(({primary:a,secondary:m,icon:s,$loading:o,disabled:r})=>y`
    ${I()}

    align-items: center;
    background-color: ${e.colors.oatmeal};
    border-radius: 100px;
    border: 2px solid ${e.colors.oatmeal};
    color: ${e.colors.liquorice};
    display: flex;
    font-size: 16px;
    justify-content: ${s?"space-evenly":"center"};
    line-height: 100%;
    padding: 8px 16px 8px ${s?"8px":"16px"};
    width: 98px;
    min-height: 40px;
    cursor: ${r||o?"not-allowed":"pointer"};
    opacity: ${r?"0.5":"1"};

    ${a&&y`
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
  `),T=_.div`
  flex-grow: 1;
`;try{c.displayName="Chip",c.__docgenInfo={description:"",displayName:"Chip",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"(e: FormEvent<HTMLButtonElement>) => void"}},primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:""},description:"",name:"icon",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const K={title:"Chip",component:c,argTypes:{handleClick:{action:"clicked"}}},d=a=>i(c,{...a}),p=d.bind({});p.args={primary:!0,children:"Add",icon:"plus","data-testid":"works!"};const n=d.bind({});n.args={secondary:!0,children:"Added",icon:"tick"};const l=d.bind({});l.args={loading:!0,primary:!0};const t=d.bind({});t.args={secondary:!0,disabled:!0,loading:!1,children:"Add",icon:"plus"};var h,g,x;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,C,P;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var q,v,$;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...($=(v=l.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var S,V,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:"(props: ChipProps) => <Chip {...props} />",...(k=(V=t.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const Q=["Primary","Secondary","Loading","SecondaryDisabled"];export{l as Loading,p as Primary,n as Secondary,t as SecondaryDisabled,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Chip.stories-16597435.js.map
