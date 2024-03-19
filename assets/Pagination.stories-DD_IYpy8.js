import{a as N,j as n,s as P}from"./styled-components.browser.esm-CskBwHif.js";import{B as I}from"./Box-Ck8x80mg.js";import{t as d}from"./theme-D50qMPxU.js";import{r as o}from"./index-BBkUAzwr.js";import{T as c}from"./Text-BfQCQ9vW.js";import{I as _}from"./Icon-GveiwEP7.js";import{a as A}from"./focusOutline-JAHtHrmh.js";import"./polished.esm-D0h1-lPB.js";const R=7,f=Math.ceil(R/2),h=({total:i,partition:S,handlePageChange:T,currentPage:y,...$})=>{const[r,v]=o.useState(0),[t,x]=o.useState(1),[a,w]=o.useState([]),[l,g]=o.useState([]),[O,W]=o.useState(!1),[j,K]=o.useState(!1);o.useEffect(()=>{x(y||1)},[r,y]),o.useEffect(()=>{const e=Math.ceil(i/S);if(e>1?v(e):e===1&&v(0),e>2){const b=Array.from({length:e},(G,M)=>M+1);w(b.slice(1,e-1))}else w([])},[i,S]),o.useEffect(()=>{if(r<=R)g(a);else if(t<=f)g(a.slice(0,f));else if(t>r-f)g(a.slice(a.length-f));else{const e=a.indexOf(t);g(a.slice(e-1,e+2))}},[r,t,a]),o.useEffect(()=>{W(l[0]!==a[0]),K(l[l.length-1]!==a[a.length-1])},[l,a]);const s=e=>{e>0&&e<=r&&(x(e),T(e))};return N(z,{flex:!0,direction:"row",...$,children:[t-1>0&&n(k,{firstPage:!0,onClick:()=>s(t-1),onKeyDown:e=>{e.key==="Enter"&&s(t-1)},children:n(_,{size:18,render:"arrow"})}),n(p,{active:t===1,onClick:()=>s(1),children:n(c,{typo:t===1?"desc-medium":"desc-light",tag:"p",children:"1"})}),O&&n(p,{children:n(c,{tag:"p",children:"..."})}),l.map(e=>n(p,{active:t===e,onClick:()=>s(e),onKeyDown:b=>{b.key==="Enter"&&s(e)},children:n(c,{typo:t===e?"desc-medium":"desc-light",tag:"p",children:e})},e)),j&&n(p,{children:n(c,{tag:"p",children:"..."})}),!!r&&n(p,{active:t===r,onClick:()=>s(r),onKeyDown:e=>{e.key==="Enter"&&s(r)},children:n(c,{typo:t===r?"desc-medium":"desc-light",tag:"p",children:r})}),t+1<=r&&n(k,{onClick:()=>s(t+1),onKeyDown:e=>{e.key==="Enter"&&s(t+1)},children:n(_,{size:18,render:"arrow",rotate:180})})]})},z=P(I)`
  align-items: center;
  > button {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`,p=P.button`
  background: ${({active:i})=>i?d.colors.custard:d.colors.cream};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  width: fit-content;
  padding: 0px 4px;
  height: 24px;
  min-width: 24px;

  &:hover {
    background-color: ${d.colors.mascarpone};
  }
  &:active {
    background-color: ${d.colors.custard};
  }

  ${A}
`,k=P.button`
  cursor: pointer;

  ${A}
`;try{h.displayName="Pagination",h.__docgenInfo={description:"",displayName:"Pagination",props:{total:{defaultValue:null,description:"Total number of records",name:"total",required:!0,type:{name:"number"}},partition:{defaultValue:null,description:"Number of records per page",name:"partition",required:!0,type:{name:"number"}},handlePageChange:{defaultValue:null,description:"Handle page change",name:"handlePageChange",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"Sets current page number",name:"currentPage",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const te={title:"Pagination",component:h,argTypes:{handlePageChange:{action:"pageChanged"}}},F=P(I)`
  background: ${d.colors.coconut};
`,L=i=>n(F,{height:"100px",flex:!0,alignItems:"center",children:n(h,{mx:"32px",...i})}),u=L.bind({});u.args={total:123,partition:1};const m=L.bind({});m.args={total:11,partition:1};var B,D,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,V,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(C=(V=m.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const ne=["Default","LongerPagination"];export{u as Default,m as LongerPagination,ne as __namedExportsOrder,te as default};
