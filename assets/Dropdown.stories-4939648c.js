import{j as e,a as h,A as L,s as g}from"./styled-components.browser.esm-eb1c464b.js";import{r as _}from"./index-1b03fe98.js";import{t as m}from"./theme-9a9bdd1b.js";import{I as X}from"./Icon-d84521c2.js";import{F as K}from"./Field-38faacfb.js";import{u as Q}from"./id-f73e93ae.js";import{u as Z}from"./useControlledState-cd167c1b.js";import{B as b}from"./Box-f9b8808b.js";import{S as M}from"./CommonInput-c2621e58.js";import{T as O}from"./Text-147cfb8f.js";import{n as ee}from"./noop-1bad6ac0.js";import"./InternalField-e08f8449.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-54f19c39.js";const l=_.forwardRef(function({id:r,placeholder:i,showDefaultOption:t=!1,customDefaultOption:n,name:o,value:U,defaultValue:z,disabled:w=!1,list:v,onSelect:x,error:T=!1,onInputChange:D,onBlur:G,frontIcon:q,fallbackStyle:H,...W},B){const[A,j]=Z({initialState:z,stateProp:U}),P=Q(r),E=v.findIndex(d=>!!d.optionGroupLabel)!==-1,J=_.useMemo(()=>{const d=new Map;return v.forEach(u=>{const p=u.optionGroupLabel??"",c=d.get(p)??[];c.push(u),d.set(p,c)}),Array.from(d.values())},[v]),S=()=>t?n??"Select an option":i;return e(K,{...W,htmlFor:P,error:T,children:h(b,{flex:!0,alignItems:"center",children:[q&&e(M,{disabled:w,render:q,color:"sesame"}),h(re,{id:P,disabled:w||v.length<1,onChange:d=>{const u=d.currentTarget.value;x==null||x(u),D==null||D(d),j(u)},error:T,ref:B,onBlur:G,name:o,frontIcon:q,fallbackStyle:H,value:A||"",children:[E?e("optgroup",{label:S(),children:e("option",{value:"",hidden:!t,children:S()})}):e("option",{value:"",hidden:!t,children:S()}),J.map((d,u)=>E?e("optgroup",{label:d[0].optionGroupLabel??"Other",children:d.map((p,c)=>e("option",{value:p.value,children:p.label},`${u}-${c}`))},u):d.map((p,c)=>e("option",{value:p.value,children:p.label},c)))]}),e(le,{children:e(X,{render:"caret",color:"marzipan",size:24})})]})})}),ae=L`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`,re=g.select`
  ${ae}
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

  ${({error:a})=>!a&&L`
      :not(:disabled) {
        &:hover,
        &:focus,
        &:focus-visible,
        &:checked {
          border-color: ${m.colors.marzipan}
      }
    `}
`,le=g.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${m.colors.marzipan};
`;try{l.displayName="Dropdown",l.__docgenInfo={description:"",displayName:"Dropdown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showDefaultOption:{defaultValue:{value:"false"},description:"",name:"showDefaultOption",required:!1,type:{name:"boolean"}},customDefaultOption:{defaultValue:null,description:"",name:"customDefaultOption",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DropdownItem[]"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(((element: string) => void) & ((e: string) => void)) | (((element: string) => void) & ((e: string) => void))"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLSelectElement>) => void) | ((e: FormEvent<HTMLSelectElement>) => void)"}}}}}catch{}const te=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],ne=[{id:"days",list:te,placeholder:"Placeholder",errorMsg:"This field is required",label:"Days of the week",onSelect:ee}],V=()=>e(b,{flex:!0,direction:"column",children:ne.map(({id:a,list:r,placeholder:i,errorMsg:t,label:n,onSelect:o})=>h(b,{flex:!0,direction:"column",mb:"32px",children:[e(se,{tag:"span",typo:"header-medium",children:"Dropdown variations"}),e(s,{label:"Generic",children:e(l,{id:a,label:n,placeholder:i,list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Fallback",children:e(l,{id:a,label:n,placeholder:i,list:r,fallbackStyle:!0,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Disabled",children:e(l,{id:a,label:n,placeholder:i,list:r,disabled:!0,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Disabled Fallback",children:e(l,{id:a,label:n,placeholder:i,list:r,disabled:!0,onSelect:o,fallbackStyle:!0})}),e(s,{label:"Placeholder",children:e(l,{id:a,label:n,placeholder:i,list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"No placeholder",children:e(l,{id:a,label:n,list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"show default option",children:e(l,{id:a,label:n,list:r,placeholder:i,showDefaultOption:!0,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"show default option with custom option label",children:e(l,{id:a,label:n,list:r,placeholder:i,showDefaultOption:!0,customDefaultOption:"Select a day",error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Leading Icon",children:e(l,{id:a,label:n,placeholder:i,frontIcon:"iphone",list:r,fallbackStyle:!0,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Required",children:e(l,{id:a,label:n,required:!0,placeholder:i,list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Assistive text",children:e(l,{id:a,label:n,placeholder:i,assistiveText:"Some assistive text",list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Completed",children:e(l,{id:a,label:n,placeholder:i,list:r,error:!1,completed:!0,errorMsg:t,onSelect:o})}),e(s,{label:"As title",children:e(l,{id:a,label:n,renderAsTitle:!0,placeholder:i,list:r,error:!1,errorMsg:t,onSelect:o})}),e(s,{label:"Error",children:e(l,{id:a,label:n,placeholder:i,assistiveText:"Some assistive text",list:r,error:!0,errorMsg:t,onSelect:o})}),e(s,{label:"Fallback Error",children:e(l,{id:a,label:n,placeholder:i,assistiveText:"Some assistive text",list:r,fallbackStyle:!0,error:!0,errorMsg:t,onSelect:o})})]},a))}),s=({label:a,children:r})=>h(oe,{mt:"32px",children:[e(b,{width:"140px",children:e(O,{tag:"span",typo:"label-large",children:a})}),r]}),oe=g(b)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,ie="140px",se=g(O)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${ie};
`;try{V.displayName="CollectionPage",V.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const $=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],Se={title:"Dropdown",component:l,argTypes:{onSelect:{action:"selected"}}},C=a=>e(l,{...a}),f=C.bind({});f.args={id:"days",list:$,placeholder:"Placeholder"};const y=C.bind({});y.args={id:"days",list:$,fallbackStyle:!0,placeholder:"Placeholder"};const Ve=V.bind({});var R,k,F;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(F=(k=f.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var Y,N,I;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(I=(N=y.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const we=["Default","DefaultFallback","Collection"];export{Ve as Collection,f as Default,y as DefaultFallback,we as __namedExportsOrder,Se as default};
