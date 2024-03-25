import{a as N,j as n,u as P}from"./styled-components.browser.esm-NpdVBoMN.js";import{B as I}from"./Box-BLBwDpxh.js";import{t as u}from"./theme-D50qMPxU.js";import{r as o}from"./index-BBkUAzwr.js";import{I as _}from"./Icon-DLXA4yL5.js";import{T as l}from"./Text-BGEp9_7I.js";import{a as $}from"./focusOutline-Ba1vYvXH.js";import"./polished.esm-D0h1-lPB.js";const A=7,f=Math.ceil(A/2),h=({total:i,partition:S,handlePageChange:L,currentPage:x,...T})=>{const[a,v]=o.useState(0),[t,y]=o.useState(1),[r,w]=o.useState([]),[c,g]=o.useState([]),[O,W]=o.useState(!1),[j,K]=o.useState(!1);o.useEffect(()=>{y(x||1)},[a,x]),o.useEffect(()=>{const e=Math.ceil(i/S);if(e>1?v(e):e===1&&v(0),e>2){const b=Array.from({length:e},(G,M)=>M+1);w(b.slice(1,e-1))}else w([])},[i,S]),o.useEffect(()=>{if(a<=A)g(r);else if(t<=f)g(r.slice(0,f));else if(t>a-f)g(r.slice(r.length-f));else{const e=r.indexOf(t);g(r.slice(e-1,e+2))}},[a,t,r]),o.useEffect(()=>{W(c[0]!==r[0]),K(c[c.length-1]!==r[r.length-1])},[c,r]);const s=e=>{e>0&&e<=a&&(y(e),L(e))};return N(z,{flex:!0,direction:"row",...T,children:[t-1>0&&n(k,{onClick:()=>s(t-1),onKeyDown:e=>{e.key==="Enter"&&s(t-1)},children:n(_,{size:18,render:"arrow"})}),n(p,{$active:t===1,onClick:()=>s(1),children:n(l,{typo:t===1?"desc-medium":"desc-light",tag:"p",children:"1"})}),O&&n(p,{children:n(l,{tag:"p",children:"..."})}),c.map(e=>n(p,{$active:t===e,onClick:()=>s(e),onKeyDown:b=>{b.key==="Enter"&&s(e)},children:n(l,{typo:t===e?"desc-medium":"desc-light",tag:"p",children:e})},e)),j&&n(p,{children:n(l,{tag:"p",children:"..."})}),!!a&&n(p,{$active:t===a,onClick:()=>s(a),onKeyDown:e=>{e.key==="Enter"&&s(a)},children:n(l,{typo:t===a?"desc-medium":"desc-light",tag:"p",children:a})}),t+1<=a&&n(k,{onClick:()=>s(t+1),onKeyDown:e=>{e.key==="Enter"&&s(t+1)},children:n(_,{size:18,render:"arrow",rotate:180})})]})},z=P(I)`
  align-items: center;
  > button {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`,p=P.button`
  background: ${({$active:i})=>i?u.colors.custard:u.colors.cream};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  width: fit-content;
  padding: 0px 4px;
  height: 24px;
  min-width: 24px;

  &:hover {
    background-color: ${u.colors.mascarpone};
  }
  &:active {
    background-color: ${u.colors.custard};
  }

  ${$}
`,k=P.button`
  cursor: pointer;

  ${$}
`;try{h.displayName="Pagination",h.__docgenInfo={description:"",displayName:"Pagination",props:{total:{defaultValue:null,description:"Total number of records",name:"total",required:!0,type:{name:"number"}},partition:{defaultValue:null,description:"Number of records per page",name:"partition",required:!0,type:{name:"number"}},handlePageChange:{defaultValue:null,description:"Handle page change",name:"handlePageChange",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"Sets current page number",name:"currentPage",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const te={title:"Pagination",component:h,argTypes:{handlePageChange:{action:"pageChanged"}}},F=P(I)`
  background: ${u.colors.coconut};
`,R=i=>n(F,{height:"100px",flex:!0,alignItems:"center",children:n(h,{mx:"32px",...i})}),d=R.bind({});d.args={total:123,partition:1};const m=R.bind({});m.args={total:11,partition:1};var B,D,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,V,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(C=(V=m.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const ne=["Default","LongerPagination"];export{d as Default,m as LongerPagination,ne as __namedExportsOrder,te as default};
