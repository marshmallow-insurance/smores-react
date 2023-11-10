import{a,s as U}from"./styled-components.browser.esm-1fe49baf.js";import{n as d}from"./noop-1bad6ac0.js";import{r as k}from"./index-1b03fe98.js";import{t as r}from"./theme-9a9bdd1b.js";import{u as Y}from"./id-f73e93ae.js";import{F as G}from"./Field-ead8fbac.js";import"./InternalField-1e7b847b.js";import"./Text-86e5f67c.js";import"./polished.esm-b6220ab2.js";import"./focusOutline-fc5530b3.js";import"./Icon-17e04ef2.js";import"./Box-64a8d8ff.js";const i=k.forwardRef(function({id:m,name:M,value:F,onChange:c,onInputChange:f,resize:W="none",error:x=!1,placeholder:D,disabled:I=!1,maxLength:N,onBlur:B,rows:J=4,fallbackStyle:X,...j},O){const g=Y(m);return a(G,{...j,htmlFor:g,error:x,children:a(K,{ref:O,error:x,id:g,name:M,disabled:I,resize:W,fallbackStyle:X,placeholder:D,value:F,onChange:b=>{c==null||c(b.currentTarget.value),f==null||f(b)},maxLength:N,onBlur:B,rows:J})})}),K=U.textarea`
  font-size: 16px;
  font: inherit;
  line-height: 20px;
  background: ${({fallbackStyle:e})=>e?r.colors.custard:r.colors.cream};
  border: 2px solid ${r.colors.oatmeal};
  box-sizing: border-box;
  border-radius: 12px;
  width: 100%;
  padding: 18px 14px;
  color: ${r.colors.liquorice};
  resize: ${({resize:e})=>e};
  cursor: ${({disabled:e})=>e?"not-allowed":"text"};
  opacity: ${({disabled:e})=>e?"0.5":"1"};
  border-color: ${({error:e})=>r.colors[`${e?"strawberry":"oatmeal"}`]};
  outline: none;

  &:hover,
  &:focus,
  &:focus-visible {
    border-color: ${({error:e})=>e?r.colors.strawberry:r.colors.marzipan};
  }
`;try{i.displayName="Textarea",i.__docgenInfo={description:"",displayName:"Textarea",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>)"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},rows:{defaultValue:{value:"4"},description:"",name:"rows",required:!1,type:{name:"number"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:null,description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: string) => void) | ((e: string) => void)"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((e: FormEvent<HTMLTextAreaElement>) => void) | ((e: FormEvent<HTMLTextAreaElement>) => void)"}}}}}catch{}const Q=()=>{const[e,m]=k.useState("");return a("form",{children:a(i,{id:"textarea_id",label:"Textarea label",value:e,resize:"both",onChange:m,assistiveText:"This is some assistive text",disabled:!1,error:e.length>255,errorMsg:`Your text is ${e.length} characters long. The maximum is 255 characters. Please make it shorter`,placeholder:"Here is some placeholder text."})})},me={title:"Textarea",component:i},u=e=>a(i,{...e}),t=u.bind({});t.args={id:"textarea_id",label:"Textarea label",value:"",onChange:d,disabled:!1,placeholder:"Here is some placeholder text."};const l=u.bind({});l.args={id:"textarea_id",label:"Textarea label",value:"",onChange:d,resize:"none",disabled:!0,placeholder:"Here is some placeholder text."};const s=u.bind({});s.args={id:"textarea_id",label:"Textarea label",value:"",onChange:d,disabled:!1,placeholder:"Here is some placeholder text.",resize:"none",error:!0,errorMsg:"Something really quite terrible has gone wrong here!"};const o=u.bind({});o.args={id:"textarea_id",label:"Textarea label",value:"",onChange:d,disabled:!1,maxLength:200,showCharacterCount:!0,placeholder:"Here is some placeholder text.",required:!0};const n=u.bind({});n.args={id:"textarea_id",label:"Textarea label",value:"",onChange:d,disabled:!1,placeholder:"Here is some placeholder text.",required:!1,renderAsTitle:!0};const Z=()=>a(Q,{}),p=Z.bind({});var y,h,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var q,v,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var P,S,E;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,R,$;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...($=(R=o.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var w,z,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"(props: TextareaProps) => <Textarea {...props} />",...(A=(z=n.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var C,H,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:"() => <Container />",...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ce=["Default","Disabled","Error","Required","WithTitleAsLabel","WorkingExample"];export{t as Default,l as Disabled,s as Error,o as Required,n as WithTitleAsLabel,p as WorkingExample,ce as __namedExportsOrder,me as default};
//# sourceMappingURL=Textarea.stories-9d256843.js.map
