import{s as d,j as e}from"./styled-components.browser.esm-CJMx1vp9.js";import{B as g}from"./Button-Bcc5EwQO.js";import{r as l}from"./index-BBkUAzwr.js";import{B as S}from"./Box-Dm5zCsW8.js";import{I as k}from"./Icon-BsCxozQo.js";import{t as _}from"./theme-D50qMPxU.js";import{T as h}from"./Text-m-KhGIht.js";import{u as j}from"./index-Bq5HI2zZ.js";import"./Loader-DblCbV5R.js";import"./focusOutline-D9_3RTEn.js";import"./polished.esm-D0h1-lPB.js";const x=({autoCloseTime:a=4,id:r,message:t,leadingIcon:o,canManuallyClose:u,showCloseIcon:m,deleteSnack:s})=>(j(()=>s(r),a*1e3),e.jsxs(I,{p:"16px",mt:"16px",flex:!0,justifyContent:"space-between",children:[e.jsxs(S,{flex:!0,alignItems:"center",children:[o&&e.jsx(k,{mr:"12px",render:o,size:24,color:"mascarpone"}),e.jsx(h,{typo:"desc-small",color:"mascarpone",children:t})]}),u&&e.jsx(v,{onClick:()=>s(r),"aria-label":`close snackbar ${t}`,children:m?e.jsx(k,{render:"cross",size:16,color:"mascarpone"}):e.jsx(w,{tag:"span",typo:"desc-medium",color:"mascarpone",children:"Dismiss"})})]},r)),I=d(S)`
  border-radius: 16px;
  background-color: ${_.colors.liquorice};
`,v=d.button`
  cursor: pointer;
`,w=d(h)`
  text-decoration: underline;
`;try{x.displayName="SnackbarItem",x.__docgenInfo={description:"",displayName:"SnackbarItem",props:{deleteSnack:{defaultValue:null,description:"",name:"deleteSnack",required:!0,type:{name:"(id: string) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},autoCloseTime:{defaultValue:{value:"4"},description:"",name:"autoCloseTime",required:!1,type:{name:"enum",value:[{value:"4"},{value:"8"},{value:"5"},{value:"6"},{value:"7"},{value:"9"},{value:"10"}]}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"string"}},canManuallyClose:{defaultValue:null,description:"",name:"canManuallyClose",required:!1,type:{name:"boolean"}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}}}}}catch{}const y=l.createContext({addSnackbar:()=>{throw new Error("Please add the SnackbarContainer to your application")}}),q=()=>l.useContext(y),i=({children:a})=>{let r=0;const[t,o]=l.useState([]),u=l.useCallback(()=>{const n=`MM_SNACKBAR_${r}`;return r++,n},[r]),m=n=>{const p={...n,id:u()};o([...t,p])},s=n=>{o(t.filter(p=>p.id!==n))};return e.jsxs(y.Provider,{value:{addSnackbar:m},children:[a,e.jsx(T,{children:t.map(n=>e.jsx(x,{...n,deleteSnack:s},n.id))})]})},T=d.div`
  position: fixed;
  bottom: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  max-width: 875px;
  z-index: 1000;
`;try{i.displayName="SnackbarContainer",i.__docgenInfo={description:"",displayName:"SnackbarContainer",props:{}}}catch{}const V=()=>{const{addSnackbar:a}=q();return{addSnackbar:a}},O={title:"SnackbarContainer",component:i},B=()=>{const{addSnackbar:a}=V();return e.jsx(e.Fragment,{children:e.jsx(g,{primary:!0,onClick:()=>{a({leadingIcon:"tick",message:"Hello there general Kenobi",canManuallyClose:!0})},children:"Click me to add a snack!"})})},M=()=>e.jsx(e.Fragment,{children:e.jsx(i,{children:e.jsx(B,{})})}),c=M.bind({});var b,f,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <>
      <SnackbarContainer>
        <ChildComponent />
      </SnackbarContainer>
    </>;
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const U=["Default"];export{c as Default,U as __namedExportsOrder,O as default};
