import{j as e,a as g,A as N,s as h}from"./styled-components.browser.esm-eb1c464b.js";import{r as E}from"./index-1b03fe98.js";import{t as m}from"./theme-9a9bdd1b.js";import{I as O}from"./Icon-d84521c2.js";import{F as j}from"./Field-38faacfb.js";import{u as M}from"./id-f73e93ae.js";import{u as J}from"./useControlledState-cd167c1b.js";import{B as b}from"./Box-f9b8808b.js";import{S as X}from"./CommonInput-52953cd4.js";import{T as L}from"./Text-147cfb8f.js";import{n as K}from"./noop-1bad6ac0.js";import"./InternalField-e08f8449.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-54f19c39.js";const t=E.forwardRef(function({id:r,placeholder:l,name:i,value:n,defaultValue:o,disabled:V=!1,list:v,onSelect:x,error:T=!1,onInputChange:D,onBlur:U,frontIcon:S,fallbackStyle:z,...G},H){const[A,W]=J({initialState:o,stateProp:n}),w=M(r),P=v.findIndex(s=>!!s.optionGroupLabel)!==-1,B=E.useMemo(()=>{const s=new Map;return v.forEach(u=>{const p=u.optionGroupLabel??"",c=s.get(p)??[];c.push(u),s.set(p,c)}),Array.from(s.values())},[v]);return e(j,{...G,htmlFor:w,error:T,children:g(b,{flex:!0,alignItems:"center",children:[S&&e(X,{disabled:V,render:S,color:"sesame"}),g(Z,{id:w,disabled:V||v.length<1,onChange:s=>{const u=s.currentTarget.value;x==null||x(u),D==null||D(s),W(u)},error:T,ref:H,onBlur:U,name:i,frontIcon:S,fallbackStyle:z,value:A||"",children:[P?e("optgroup",{label:l,children:e("option",{value:"",hidden:!0,children:l})}):e("option",{value:"",hidden:!0,children:l}),B.map((s,u)=>P?e("optgroup",{label:s[0].optionGroupLabel??"Other",children:s.map((p,c)=>e("option",{value:p.value,children:p.label},`${u}-${c}`))},u):s.map((p,c)=>e("option",{value:p.value,children:p.label},c)))]}),e(ee,{children:e(O,{render:"caret",color:"marzipan",size:24})})]})})}),Q=N`
  border: none;
  border-radius: 0;
  font-size: 16px;
  appearance: none; /* remove default arrow */
  outline: none;
`,Z=h.select`
  ${Q}
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
`,ee=h.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  pointer-events: none;
  color: ${m.colors.marzipan};
`;try{t.displayName="Dropdown",t.__docgenInfo={description:"",displayName:"Dropdown",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"DropdownItem[]"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(((element: string) => void) & ((e: string) => void)) | (((element: string) => void) & ((e: string) => void))"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLSelectElement>) => void) | ((e: FormEvent<HTMLSelectElement>) => void)"}}}}}catch{}const ae=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],re=[{id:"days",list:ae,placeholder:"Placeholder",errorMsg:"This field is required",label:"Days of the week",onSelect:K}],q=()=>e(b,{flex:!0,direction:"column",children:re.map(({id:a,list:r,placeholder:l,errorMsg:i,label:n,onSelect:o})=>g(b,{flex:!0,direction:"column",mb:"32px",children:[e(ne,{tag:"span",typo:"header-medium",children:"Dropdown variations"}),e(d,{label:"Generic",children:e(t,{id:a,label:n,placeholder:l,list:r,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Fallback",children:e(t,{id:a,label:n,placeholder:l,list:r,fallbackStyle:!0,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Disabled",children:e(t,{id:a,label:n,placeholder:l,list:r,disabled:!0,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Disabled Fallback",children:e(t,{id:a,label:n,placeholder:l,list:r,disabled:!0,onSelect:o,fallbackStyle:!0})}),e(d,{label:"Leading Icon",children:e(t,{id:a,label:n,placeholder:l,frontIcon:"iphone",list:r,fallbackStyle:!0,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Required",children:e(t,{id:a,label:n,required:!0,placeholder:l,list:r,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Assistive text",children:e(t,{id:a,label:n,placeholder:l,assistiveText:"Some assistive text",list:r,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Completed",children:e(t,{id:a,label:n,placeholder:l,list:r,error:!1,completed:!0,errorMsg:i,onSelect:o})}),e(d,{label:"As title",children:e(t,{id:a,label:n,renderAsTitle:!0,placeholder:l,list:r,error:!1,errorMsg:i,onSelect:o})}),e(d,{label:"Error",children:e(t,{id:a,label:n,placeholder:l,assistiveText:"Some assistive text",list:r,error:!0,errorMsg:i,onSelect:o})}),e(d,{label:"Fallback Error",children:e(t,{id:a,label:n,placeholder:l,assistiveText:"Some assistive text",list:r,fallbackStyle:!0,error:!0,errorMsg:i,onSelect:o})})]},a))}),d=({label:a,children:r})=>g(le,{mt:"32px",children:[e(b,{width:"140px",children:e(L,{tag:"span",typo:"label-large",children:a})}),r]}),le=h(b)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,te="140px",ne=h(L)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${te};
`;try{q.displayName="CollectionPage",q.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const $=[{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"},{label:"Sunday",value:"SUNDAY"}],xe={title:"Dropdown",component:t,argTypes:{onSelect:{action:"selected"}}},C=a=>e(t,{...a}),f=C.bind({});f.args={id:"days",list:$,placeholder:"Placeholder"};const y=C.bind({});y.args={id:"days",list:$,fallbackStyle:!0,placeholder:"Placeholder"};const De=q.bind({});var _,R,k;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(k=(R=f.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var F,Y,I;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:"(props: DropdownProps) => <Dropdown {...props} />",...(I=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};const Se=["Default","DefaultFallback","Collection"];export{De as Collection,f as Default,y as DefaultFallback,Se as __namedExportsOrder,xe as default};
