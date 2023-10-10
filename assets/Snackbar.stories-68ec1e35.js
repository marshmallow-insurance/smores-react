import{s as d,j as k,a as e,F as x}from"./styled-components.browser.esm-1fe49baf.js";import{r as l}from"./index-1b03fe98.js";import{B as y}from"./Box-6da10d89.js";import{I as f}from"./Icon-e553a677.js";import{t as I}from"./theme-9a9bdd1b.js";import{T as _}from"./Text-42cc3ded.js";import{u as v}from"./index-38187b74.js";import{B as w}from"./Button-d2965bc6.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";import"./Loader-4d853a84.js";const b=({autoCloseTime:a=4,id:r,message:t,leadingIcon:o,canManuallyClose:u,showCloseIcon:m,deleteSnack:s})=>(v(()=>s(r),a*1e3),k(q,{p:"16px",mt:"16px",flex:!0,justifyContent:"space-between",children:[k(y,{flex:!0,alignItems:"center",children:[o&&e(f,{mr:"12px",render:o,size:24,color:"mascarpone"}),e(_,{typo:"desc-small",color:"mascarpone",children:t})]}),u&&e(T,{onClick:()=>s(r),"aria-label":`close snackbar ${t}`,children:m?e(f,{render:"cross",size:16,color:"mascarpone"}):e(V,{tag:"span",typo:"desc-medium",color:"mascarpone",children:"Dismiss"})})]},r)),q=d(y)`
  border-radius: 16px;
  background-color: ${I.colors.liquorice};
`,T=d.button`
  cursor: pointer;
`,V=d(_)`
  text-decoration: underline;
`;try{b.displayName="SnackbarItem",b.__docgenInfo={description:"",displayName:"SnackbarItem",props:{deleteSnack:{defaultValue:null,description:"",name:"deleteSnack",required:!0,type:{name:"(id: string) => void"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},autoCloseTime:{defaultValue:{value:"4"},description:"",name:"autoCloseTime",required:!1,type:{name:"enum",value:[{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"}]}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"string"}},canManuallyClose:{defaultValue:null,description:"",name:"canManuallyClose",required:!1,type:{name:"boolean"}},showCloseIcon:{defaultValue:null,description:"",name:"showCloseIcon",required:!1,type:{name:"boolean"}}}}}catch{}const g=l.createContext({addSnackbar:()=>{throw new Error("Please add the SnackbarContainer to your application")}}),B=()=>l.useContext(g),i=({children:a})=>{let r=0;const[t,o]=l.useState([]),u=l.useCallback(()=>{const n=`MM_SNACKBAR_${r}`;return r++,n},[r]),m=n=>{const p={...n,id:u()};o([...t,p])},s=n=>{o(t.filter(p=>p.id!==n))};return k(g.Provider,{value:{addSnackbar:m},children:[a,e(M,{children:t.map(n=>e(b,{...n,deleteSnack:s},n.id))})]})},M=d.div`
  position: fixed;
  bottom: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  max-width: 875px;
  z-index: 1000;
`;try{i.displayName="SnackbarContainer",i.__docgenInfo={description:"",displayName:"SnackbarContainer",props:{}}}catch{}const N=()=>{const{addSnackbar:a}=B();return{addSnackbar:a}},W={title:"SnackbarContainer",component:i},j=()=>{const{addSnackbar:a}=N();return e(x,{children:e(w,{primary:!0,onClick:()=>{a({leadingIcon:"tick",message:"Hello there general Kenobi",canManuallyClose:!0})},children:"Click me to add a snack!"})})},z=()=>e(x,{children:e(i,{children:e(j,{})})}),c=z.bind({});var C,S,h;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      <SnackbarContainer>
        <ChildComponent />
      </SnackbarContainer>
    </>;
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const G=["Default"];export{c as Default,G as __namedExportsOrder,W as default};
//# sourceMappingURL=Snackbar.stories-68ec1e35.js.map
