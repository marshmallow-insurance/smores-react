import{a as N,j as r,s as P}from"./styled-components.browser.esm-eb1c464b.js";import{r as o}from"./index-1b03fe98.js";import{B as I}from"./Box-f9b8808b.js";import{T as c}from"./Text-4917767b.js";import{I as _}from"./Icon-641c05f5.js";import{t as u}from"./theme-9a9bdd1b.js";import{a as A}from"./focusOutline-54f19c39.js";import"./polished.esm-b6220ab2.js";const R=7,f=Math.ceil(R/2),h=({total:i,partition:S,handlePageChange:T,currentPage:y,...$})=>{const[a,v]=o.useState(0),[t,x]=o.useState(1),[n,w]=o.useState([]),[l,g]=o.useState([]),[O,W]=o.useState(!1),[j,K]=o.useState(!1);o.useEffect(()=>{x(y||1)},[a,y]),o.useEffect(()=>{const e=Math.ceil(i/S);if(e>1?v(e):e===1&&v(0),e>2){const b=Array.from({length:e},(G,M)=>M+1);w(b.slice(1,e-1))}else w([])},[i,S]),o.useEffect(()=>{if(a<=R)g(n);else if(t<=f)g(n.slice(0,f));else if(t>a-f)g(n.slice(n.length-f));else{const e=n.indexOf(t);g(n.slice(e-1,e+2))}},[a,t,n]),o.useEffect(()=>{W(l[0]!==n[0]),K(l[l.length-1]!==n[n.length-1])},[l,n]);const s=e=>{e>0&&e<=a&&(x(e),T(e))};return N(z,{flex:!0,direction:"row",...$,children:[t-1>0&&r(k,{firstPage:!0,onClick:()=>s(t-1),onKeyDown:e=>{e.key==="Enter"&&s(t-1)},children:r(_,{size:18,render:"arrow"})}),r(p,{active:t===1,onClick:()=>s(1),children:r(c,{typo:t===1?"desc-medium":"desc-light",tag:"p",children:"1"})}),O&&r(p,{children:r(c,{tag:"p",children:"..."})}),l.map(e=>r(p,{active:t===e,onClick:()=>s(e),onKeyDown:b=>{b.key==="Enter"&&s(e)},children:r(c,{typo:t===e?"desc-medium":"desc-light",tag:"p",children:e})},e)),j&&r(p,{children:r(c,{tag:"p",children:"..."})}),!!a&&r(p,{active:t===a,onClick:()=>s(a),onKeyDown:e=>{e.key==="Enter"&&s(a)},children:r(c,{typo:t===a?"desc-medium":"desc-light",tag:"p",children:a})}),t+1<=a&&r(k,{onClick:()=>s(t+1),onKeyDown:e=>{e.key==="Enter"&&s(t+1)},children:r(_,{size:18,render:"arrow",rotate:180})})]})},z=P(I)`
  align-items: center;
  > button {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`,p=P.button`
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

  ${A}
`,k=P.button`
  cursor: pointer;

  ${A}
`;try{h.displayName="Pagination",h.__docgenInfo={description:"",displayName:"Pagination",props:{total:{defaultValue:null,description:"Total number of records",name:"total",required:!0,type:{name:"number"}},partition:{defaultValue:null,description:"Number of records per page",name:"partition",required:!0,type:{name:"number"}},handlePageChange:{defaultValue:null,description:"Handle page change",name:"handlePageChange",required:!0,type:{name:"(page: number) => void"}},currentPage:{defaultValue:null,description:"Sets current page number",name:"currentPage",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const te={title:"Pagination",component:h,argTypes:{handlePageChange:{action:"pageChanged"}}},F=P(I)`
  background: ${u.colors.coconut};
`,L=i=>r(F,{height:"100px",flex:!0,alignItems:"center",children:r(h,{mx:"32px",...i})}),d=L.bind({});d.args={total:7,partition:1};const m=L.bind({});m.args={total:11,partition:1};var B,D,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,V,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`(props: PaginationProps & {
  showBg: boolean;
}) => <BgWrapper height="100px" flex alignItems="center">
    <Pagination mx="32px" {...props} />
  </BgWrapper>`,...(C=(V=m.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const re=["Default","LongerPagination"];export{d as Default,m as LongerPagination,re as __namedExportsOrder,te as default};
