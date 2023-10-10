import{a as e,j as h,A as B,s as g}from"./styled-components.browser.esm-1fe49baf.js";import{r as E}from"./index-1b03fe98.js";import{t as c}from"./theme-9a9bdd1b.js";import{I as O}from"./Icon-e553a677.js";import{F as j}from"./Field-7337833b.js";import{u as M}from"./id-f73e93ae.js";import{u as J}from"./useControlledState-cd167c1b.js";import{B as b}from"./Box-6da10d89.js";import{S as X}from"./CommonInput-1e892b16.js";import{T as N}from"./Text-42cc3ded.js";import{n as K}from"./noop-1bad6ac0.js";import"./InternalField-4c97c413.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";const t=E.forwardRef(function({id:r,placeholder:l,name:n,value:o,defaultValue:i,disabled:V=!1,list:v,onSelect:x,error:T=!1,onInputChange:D,onBlur:U,frontIcon:q,fallbackStyle:C,...z},G){const[w,H]=J({initialState:i,stateProp:o}),A=M(r),P=v.findIndex(s=>!!s.optionGroupLabel)!==-1,W=E.useMemo(()=>{const s=new Map;return v.forEach(u=>{const p=u.optionGroupLabel??"",m=s.get(p)??[];m.push(u),s.set(p,m)}),Array.from(s.values())},[v]);return e(j,{...z,htmlFor:A,error:T,children:h(b,{flex:!0,alignItems:"center",children:[q&&e(X,{disabled:V,render:q,color:"sesame"}),h(Z,{id:A,disabled:V||v.length<1,onChange:s=>{const u=s.currentTarget.value;x==null||x(u),D==null||D(s),H(u)},error:T,ref:G,onBlur:U,name:n,frontIcon:q,fallbackStyle:C,value:w||"",children:[P?e("optgroup",{label:l,children:e("option",{value:"",hidden:!0,children:l})}):e("option",{value:"",hidden:!0,children:l}),W.map((s,u)=>P?e("optgroup",{label:s[0].optionGroupLabel??"Other",children:s.map((p,m)=>e("option",{value:p.value,children:p.label},`${u}-${m}`))},u):s.map((p,m)=>e("option",{value:p.value,children:p.label},m)))]}),e(ee,{children:e(O,{render:"caret",color:"marzipan",size:24})})]})})}),Q=B`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`,Z=g.select`
  ${Q}
  width: 100%;
  height: 32px;

  cursor: pointer;
  background-color: ${({fallbackStyle:a})=>a?c.colors.custard:c.colors.cream};

  border-radius: 12px;
  padding: 18px 14px;
  border: 2px solid
    ${({error:a})=>a?c.colors.strawberry:c.colors.oatmeal};
  height: auto;

  ${({frontIcon:a})=>a&&a!=""&&`
      padding-left: 42px;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &:focus,
  &:focus-visible,
  &:checked {
    border-color: ${({error:a})=>a?c.colors.strawberry:c.colors.marzipan};
  }
`,ee=g.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${c.colors.marzipan};
`;try{t.displayName="Dropdown",t.__docgenInfo={description:"",displayName:"Dropdown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DropdownItem[]"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(((element: string) => void) & ((e: string) => void)) | (((element: string) => void) & ((e: string) => void))"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLSelectElement>) => void) | ((e: FormEvent<HTMLSelectElement>) => void)"}}}}}catch{}const ae=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],re=[{id:"days",list:ae,placeholder:"Placeholder",errorMsg:"This field is required",label:"Days of the week",onSelect:K}],S=()=>e(b,{flex:!0,direction:"column",children:re.map(({id:a,list:r,placeholder:l,errorMsg:n,label:o,onSelect:i})=>h(b,{flex:!0,direction:"column",mb:"32px",children:[e(ne,{tag:"span",typo:"header-medium",children:"Dropdown variations"}),e(d,{label:"Generic",children:e(t,{id:a,label:o,placeholder:l,list:r,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Fallback",children:e(t,{id:a,label:o,placeholder:l,list:r,fallbackStyle:!0,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Disabled",children:e(t,{id:a,label:o,placeholder:l,list:r,disabled:!0,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Leading Icon",children:e(t,{id:a,label:o,placeholder:l,frontIcon:"iphone",list:r,fallbackStyle:!0,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Required",children:e(t,{id:a,label:o,required:!0,placeholder:l,list:r,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Assistive text",children:e(t,{id:a,label:o,placeholder:l,assistiveText:"Some assistive text",list:r,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Completed",children:e(t,{id:a,label:o,placeholder:l,list:r,error:!1,completed:!0,errorMsg:n,onSelect:i})}),e(d,{label:"As title",children:e(t,{id:a,label:o,renderAsTitle:!0,placeholder:l,list:r,error:!1,errorMsg:n,onSelect:i})}),e(d,{label:"Error",children:e(t,{id:a,label:o,placeholder:l,assistiveText:"Some assistive text",list:r,error:!0,errorMsg:n,onSelect:i})}),e(d,{label:"Fallback Error",children:e(t,{id:a,label:o,placeholder:l,assistiveText:"Some assistive text",list:r,fallbackStyle:!0,error:!0,errorMsg:n,onSelect:i})})]},a))}),d=({label:a,children:r})=>h(le,{mt:"32px",children:[e(b,{width:"140px",children:e(N,{tag:"span",typo:"label-large",children:a})}),r]}),le=g(b)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,te="140px",ne=g(N)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${te};
`;try{S.displayName="CollectionPage",S.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const L=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],xe={title:"Dropdown",component:t,argTypes:{onSelect:{action:"selected"}}},$=a=>e(t,{...a}),f=$.bind({});f.args={id:"days",list:L,placeholder:"Placeholder"};const y=$.bind({});y.args={id:"days",list:L,fallbackStyle:!0,placeholder:"Placeholder"};const De=S.bind({});var _,R,F;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(F=(R=f.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var k,Y,I;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(I=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};const qe=["Default","DefaultFallback","Collection"];export{De as Collection,f as Default,y as DefaultFallback,qe as __namedExportsOrder,xe as default};
//# sourceMappingURL=Dropdown.stories-3ccb1bbe.js.map
