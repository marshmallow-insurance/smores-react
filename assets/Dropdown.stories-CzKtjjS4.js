import{j as e,A as N,s as v}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as P}from"./index-BBkUAzwr.js";import{B as y}from"./Box-DB724hnb.js";import{I as J}from"./Icon-CtANFpqu.js";import{F as X}from"./Field-BMdbfhfG.js";import{S as K}from"./CommonInput-Cxy7X-IH.js";import{t as m}from"./theme-D50qMPxU.js";import{u as Q}from"./id-CqcUMuGv.js";import{u as Z}from"./useControlledState-BjmlLjeg.js";import{T as I}from"./Text-DnLt-YfN.js";import{n as M}from"./noop-BjFrJKj1.js";import"./InternalField-BXiwaVqA.js";import"./polished.esm-D0h1-lPB.js";import"./focusOutline-D9_3RTEn.js";const l=P.forwardRef(function({id:r,placeholder:s,showDefaultOption:t=!1,customDefaultOption:n,name:o,value:$,defaultValue:C,disabled:S=!1,list:b,onSelect:h,error:V=!1,onInputChange:j,onBlur:U,frontIcon:g,fallbackStyle:z,...G},H){const[w,W]=Z({initialState:C,stateProp:$}),T=Q(r),A=b.findIndex(d=>!!d.optionGroupLabel)!==-1,B=P.useMemo(()=>{const d=new Map;return b.forEach(u=>{const p=u.optionGroupLabel??"",c=d.get(p)??[];c.push(u),d.set(p,c)}),Array.from(d.values())},[b]),D=()=>t?n??"Select an option":s;return e.jsx(X,{...G,htmlFor:T,error:V,children:e.jsxs(y,{flex:!0,alignItems:"center",children:[g&&e.jsx(K,{disabled:S,render:g,color:"sesame"}),e.jsxs(ae,{id:T,disabled:S||b.length<1,onChange:d=>{const u=d.currentTarget.value;h==null||h(u),j==null||j(d),W(u)},error:V,ref:H,onBlur:U,name:o,frontIcon:g,fallbackStyle:z,value:w||"",children:[A?e.jsx("optgroup",{label:D(),children:e.jsx("option",{value:"",hidden:!t,disabled:!0,children:D()})}):e.jsx("option",{value:"",hidden:!t,disabled:!0,children:D()}),B.map((d,u)=>A?e.jsx("optgroup",{label:d[0].optionGroupLabel??"Other",children:d.map((p,c)=>e.jsx("option",{value:p.value,children:p.label},`${u}-${c}`))},u):d.map((p,c)=>e.jsx("option",{value:p.value,children:p.label},c)))]}),e.jsx(re,{children:e.jsx(J,{render:"caret",color:"marzipan",size:24})})]})})}),ee=N`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`,ae=v.select`
  ${ee}
  width: 100%;
  height: 32px;

  cursor: pointer;
  background-color: ${({fallbackStyle:a})=>a?m.colors.custard:m.colors.cream};

  border-radius: 12px;
  padding: 18px 14px;
  border: 2px solid
    ${({error:a})=>a?m.colors.strawberry:m.colors.oatmeal};
  height: auto;

  ${({frontIcon:a})=>a&&a!=""&&`
      padding-left: 42px;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({error:a})=>!a&&N`
      :not(:disabled) {
        &:hover,
        &:focus,
        &:focus-visible,
        &:checked {
          border-color: ${m.colors.marzipan}
      }
    `}
`,re=v.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${m.colors.marzipan};
`;try{l.displayName="Dropdown",l.__docgenInfo={description:"",displayName:"Dropdown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showDefaultOption:{defaultValue:{value:"false"},description:"",name:"showDefaultOption",required:!1,type:{name:"boolean"}},customDefaultOption:{defaultValue:null,description:"",name:"customDefaultOption",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DropdownItem[]"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(((element: string) => void) & ((e: string) => void)) | (((element: string) => void) & ((e: string) => void))"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLSelectElement>) => void) | ((e: FormEvent<HTMLSelectElement>) => void)"}}}}}catch{}const le=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],te=[{id:"days",list:le,placeholder:"Placeholder",errorMsg:"This field is required",label:"Days of the week",onSelect:M}],q=()=>e.jsx(y,{flex:!0,direction:"column",children:te.map(({id:a,list:r,placeholder:s,errorMsg:t,label:n,onSelect:o})=>e.jsxs(y,{flex:!0,direction:"column",mb:"32px",children:[e.jsx(se,{tag:"span",typo:"header-medium",children:"Dropdown variations"}),e.jsx(i,{label:"Generic",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Fallback",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,fallbackStyle:!0,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Disabled",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,disabled:!0,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Disabled Fallback",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,disabled:!0,onSelect:o,fallbackStyle:!0})}),e.jsx(i,{label:"Placeholder",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"No placeholder",children:e.jsx(l,{id:a,label:n,list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"show default option",children:e.jsx(l,{id:a,label:n,list:r,placeholder:s,showDefaultOption:!0,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"show default option with custom option label",children:e.jsx(l,{id:a,label:n,list:r,placeholder:s,showDefaultOption:!0,customDefaultOption:"Select a day",error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Leading Icon",children:e.jsx(l,{id:a,label:n,placeholder:s,frontIcon:"iphone",list:r,fallbackStyle:!0,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Required",children:e.jsx(l,{id:a,label:n,required:!0,placeholder:s,list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Assistive text",children:e.jsx(l,{id:a,label:n,placeholder:s,assistiveText:"Some assistive text",list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Completed",children:e.jsx(l,{id:a,label:n,placeholder:s,list:r,error:!1,completed:!0,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"As title",children:e.jsx(l,{id:a,label:n,renderAsTitle:!0,placeholder:s,list:r,error:!1,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Error",children:e.jsx(l,{id:a,label:n,placeholder:s,assistiveText:"Some assistive text",list:r,error:!0,errorMsg:t,onSelect:o})}),e.jsx(i,{label:"Fallback Error",children:e.jsx(l,{id:a,label:n,placeholder:s,assistiveText:"Some assistive text",list:r,fallbackStyle:!0,error:!0,errorMsg:t,onSelect:o})})]},a))}),i=({label:a,children:r})=>e.jsxs(ne,{mt:"32px",children:[e.jsx(y,{width:"140px",children:e.jsx(I,{tag:"span",typo:"label-large",children:a})}),r]}),ne=v(y)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,oe="140px",se=v(I)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${oe};
`;try{q.displayName="CollectionPage",q.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const L=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],De={title:"Dropdown",component:l,argTypes:{onSelect:{action:"selected"}}},O=a=>e.jsx(l,{...a}),f=O.bind({});f.args={id:"days",list:L,placeholder:"Placeholder"};const x=O.bind({});x.args={id:"days",list:L,fallbackStyle:!0,placeholder:"Placeholder"};const qe=q.bind({});var E,R,_;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(_=(R=f.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,F,Y;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(Y=(F=x.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};const Se=["Default","DefaultFallback","Collection"];export{qe as Collection,f as Default,x as DefaultFallback,Se as __namedExportsOrder,De as default};
