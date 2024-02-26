import{j as t,s as x}from"./styled-components.browser.esm-CJMx1vp9.js";import{B as C}from"./Box-Dm5zCsW8.js";import{t as u}from"./theme-D50qMPxU.js";import{r as o}from"./index-BBkUAzwr.js";import{T as c}from"./Text-m-KhGIht.js";import{I as w}from"./Icon-BsCxozQo.js";import{a as I}from"./focusOutline-D9_3RTEn.js";import"./polished.esm-D0h1-lPB.js";const A=7,f=Math.ceil(A/2),h=({total:i,partition:S,handlePageChange:L,currentPage:P,...T})=>{const[n,j]=o.useState(0),[r,y]=o.useState(1),[a,v]=o.useState([]),[l,g]=o.useState([]),[$,O]=o.useState(!1),[W,K]=o.useState(!1);o.useEffect(()=>{y(P||1)},[n,P]),o.useEffect(()=>{const e=Math.ceil(i/S);if(e>1?j(e):e===1&&j(0),e>2){const b=Array.from({length:e},(F,M)=>M+1);v(b.slice(1,e-1))}else v([])},[i,S]),o.useEffect(()=>{if(n<=A)g(a);else if(r<=f)g(a.slice(0,f));else if(r>n-f)g(a.slice(a.length-f));else{const e=a.indexOf(r);g(a.slice(e-1,e+2))}},[n,r,a]),o.useEffect(()=>{O(l[0]!==a[0]),K(l[l.length-1]!==a[a.length-1])},[l,a]);const s=e=>{e>0&&e<=n&&(y(e),L(e))};return t.jsxs(N,{flex:!0,direction:"row",...T,children:[r-1>0&&t.jsx(_,{firstPage:!0,onClick:()=>s(r-1),onKeyDown:e=>{e.key==="Enter"&&s(r-1)},children:t.jsx(w,{size:18,render:"arrow"})}),t.jsx(p,{active:r===1,onClick:()=>s(1),children:t.jsx(c,{typo:r===1?"desc-medium":"desc-light",tag:"p",children:"1"})}),$&&t.jsx(p,{children:t.jsx(c,{tag:"p",children:"..."})}),l.map(e=>t.jsx(p,{active:r===e,onClick:()=>s(e),onKeyDown:b=>{b.key==="Enter"&&s(e)},children:t.jsx(c,{typo:r===e?"desc-medium":"desc-light",tag:"p",children:e})},e)),W&&t.jsx(p,{children:t.jsx(c,{tag:"p",children:"..."})}),!!n&&t.jsx(p,{active:r===n,onClick:()=>s(n),onKeyDown:e=>{e.key==="Enter"&&s(n)},children:t.jsx(c,{typo:r===n?"desc-medium":"desc-light",tag:"p",children:n})}),r+1<=n&&t.jsx(_,{onClick:()=>s(r+1),onKeyDown:e=>{e.key==="Enter"&&s(r+1)},children:t.jsx(w,{size:18,render:"arrow",rotate:180})})]})},N=x(C)`
  align-items: center;
  > button {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`,p=x.button`
  background: ${({active:i})=>i?u.colors.custard:u.colors.cream};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: ${u.colors.mascarpone};
  }
  &:active {
    background-color: ${u.colors.custard};
  }

  ${I}
`,_=x.button`
  cursor: pointer;

  ${I}
`;try{h.displayName="Pagination",h.__docgenInfo={description:"",displayName:"Pagination",props:{total:{defaultValue:null,description:"Total number of records",name:"total",required:!0,type:{name:"number"}},partition:{defaultValue:null,description:"Number of records per page",name:"partition",required:!0,type:{name:"number"}},handlePageChange:{defaultValue:null,description:"Handle page change",name:"handlePageChange",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"Sets current page number",name:"currentPage",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const ee={title:"Pagination",component:h,argTypes:{handlePageChange:{action:"pageChanged"}}},z=x(C)`
  background: ${u.colors.coconut};
`,R=i=>t.jsx(z,{height:"100px",flex:!0,alignItems:"center",children:t.jsx(h,{mx:"32px",...i})}),d=R.bind({});d.args={total:7,partition:1};const m=R.bind({});m.args={total:11,partition:1};var k,E,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var D,q,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const te=["Default","LongerPagination"];export{d as Default,m as LongerPagination,te as __namedExportsOrder,ee as default};
