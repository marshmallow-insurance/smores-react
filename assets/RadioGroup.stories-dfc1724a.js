import{a as G,F as pe,j as r,s as i,A as _}from"./styled-components.browser.esm-eb1c464b.js";import{r as v}from"./index-1b03fe98.js";import{u as se}from"./id-f73e93ae.js";import{F as ce}from"./Fieldset-be12a620.js";import{t as a}from"./theme-9a9bdd1b.js";import{B as C}from"./Box-f9b8808b.js";import{I as me}from"./Icon-d84521c2.js";import{T as fe}from"./Text-147cfb8f.js";import{f as ye}from"./focusOutline-54f19c39.js";import"./InternalField-e08f8449.js";import"./polished.esm-b6220ab2.js";const ue=12,ge=`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,z=v.forwardRef(function({name:o,id:t,value:n,checked:u,onChange:h,onBlur:d,isError:c,...V},b){return G(pe,{children:[r(de,{ref:b,type:"radio",name:o,id:t,value:`${n}`,checked:u,onChange:()=>h(n),onBlur:d}),r(ve,{isError:c,checked:u,...V})]})}),de=i.input`
  ${ge}
`,B=24,ve=i(C)`
  flex-shrink: 0;
  width: ${B}px;
  height: ${B}px;
  border-radius: ${B}px;
  background-color: ${a.colors.cream};
  border: 2px solid
    ${({isError:e})=>e?a.colors.strawberry:a.colors.sesame};

  ${({checked:e,isError:o})=>!e&&!o&&`
    &:hover {
      border: 2px solid ${a.colors.liquorice};
    }
  `}

  ${({checked:e,isError:o})=>e&&`border: 8px solid ${o?a.colors.strawberry:a.colors.liquorice};`}

  ${ye({selector:`${de}:focus-visible + &`})}
`;try{z.displayName="RadioElement",z.__docgenInfo={description:"",displayName:"RadioElement",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: BaseValueType) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const W=v.forwardRef(function({name:o,visual:t,icon:n,iconPosition:u="center",label:h,value:d,checked:c,onChange:V,onBlur:b,displayType:k,isError:m,fallbackStyle:l,bodyCopy:f},y){const g=se();return G(qe,{htmlFor:g,checked:c,displayType:k,"data-testid":d,isError:m,fallbackStyle:l,children:[t&&!n&&r(he,{children:r(be,{visualUrl:t})}),!t&&n&&r(Ve,{iconPosition:u,children:r(me,{render:n,size:24})}),G(C,{flex:!0,alignItems:"center",children:[r(z,{ref:y,name:o,id:g,value:d,checked:c,onChange:V,onBlur:b,isError:m,mr:"8px"}),G(C,{children:[r(Re,{isError:m,children:h}),f&&r(C,{children:r(fe,{typo:"caption",children:f})})]})]})]})}),he=i.div`
  width: 100%;
  max-width: 120px;
  margin: 0 auto 8px;
`,Ve=i.div`
  display: flex;
  padding-bottom: 12px;

  ${({iconPosition:e})=>e==="center"&&_`
      justify-content: center;
    `}

  ${({iconPosition:e})=>e==="start"&&_`
      justify-content: flex-start;
    `}
`,be=i.div`
  width: 100%;
  padding-top: 100%;
  background-image: url('${e=>e.visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,qe=i.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({displayType:e,checked:o,isError:t,fallbackStyle:n})=>_`
    ${(e==="horizontal-card"||e==="vertical-card")&&_`
      border-radius: 12px;
      background-color: ${n?a.colors.cream:a.colors.custard};
      padding: ${o?"10px":"12px"};
      border: ${o&&(t?`2px solid ${a.colors.strawberry}`:`2px solid ${a.colors.liquorice}`)};

      &:hover {
        background-color: ${n?a.colors.coconut:a.colors.oatmeal};
      }
    `}
    ${e==="horizontal-card"&&_`
      width: 100%;
      justify-content: center;

      @media (min-width: 420px) {
        width: calc(50% - ${ue/2}px);
      }

      @media (min-width: 768px) {
        width: 201px;
      }
    `}
  `}
`,Re=i.span`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${a.font.weight.medium};
  color: ${({isError:e})=>e?a.colors.strawberry:a.colors.liquorice};
  margin-top: 4px;
`;try{W.displayName="RadioItem",W.__docgenInfo={description:"",displayName:"RadioItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},visual:{defaultValue:null,description:"",name:"visual",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},iconPosition:{defaultValue:{value:"center"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: BaseValueType) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},displayType:{defaultValue:null,description:"",name:"displayType",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"vertical-card"'},{value:'"horizontal-card"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},bodyCopy:{defaultValue:null,description:"",name:"bodyCopy",required:!1,type:{name:"string"}}}}}catch{}const xe=({options:e,onChange:o,onBlur:t,value:n,displayType:u="normal",renderAsTitle:h=!1,error:d=!1,fallbackStyle:c=!1,...V},b)=>{const k=se(),m=v.useRef([]);return v.useImperativeHandle(b,()=>({focus:()=>{var y;const l=e.findIndex(g=>g.value===n),f=l===-1?0:l;(y=m.current[f].current)==null||y.focus()}})),r(ce,{renderAsTitle:h,error:d,...V,children:r(Pe,{displayType:u,children:e.map((l,f)=>{const y=l.value===n;return r(W,{ref:g=>{m.current[f]={current:g}},name:k,visual:l.visual,icon:l.icon,iconPosition:l.iconPosition,label:l.label,value:l.value,checked:y,onChange:o,onBlur:t,displayType:u,isError:d,fallbackStyle:c,bodyCopy:l.bodyCopy},`${l.value}`)})})})},E=v.forwardRef(xe),Pe=i.div`
  display: flex;
  gap: ${ue}px;

  ${({displayType:e})=>e==="horizontal-card"?`
        flex-direction: row;
        flex-wrap: wrap;
      `:"flex-direction: column;"}
`;try{E.displayName="RadioGroup",E.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ visual?: string | undefined; icon?: string | undefined; iconPosition?: IconPosition | undefined; label: string; value: Value; bodyCopy?: string | undefined; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Value) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},displayType:{defaultValue:{value:"normal"},description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"vertical-card"'},{value:'"horizontal-card"'}]}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:{value:"false"},description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const Se=""+new URL("radio-visual-220ab026.svg",import.meta.url).href,Fe={title:"RadioGroup",component:E,argTypes:{onChange:{action:"clicked"}}},T=[{label:"Social",value:"social"},{label:"Social and commuting",value:"social/commuting"},{label:"All the above, and I drive for work",value:"social/commuting/work"},{label:"It’s a commercial vehicle",value:"commercial"}],s={label:"What do you use it for?",onChange:e=>console.log(e),value:T[0].value,options:T,displayType:"normal"},Ie=e=>{const[o,t]=v.useState("");return r(E,{...e,onChange:n=>t(n),value:o})},q=Ie.bind({});q.args=s;const p=e=>r(E,{...e}),R=p.bind({});R.args=s;const x=p.bind({});x.args={...s,displayType:"vertical-card"};const P=p.bind({});P.args={...s,displayType:"horizontal-card"};const S=p.bind({});S.args={...s,displayType:"vertical-card",options:T.map(e=>({...e,bodyCopy:"E.g. shopping, travel and driving to see friends. Does not include travelling to and from work."}))};const I=p.bind({});I.args={...s,error:!0,errorMsg:"something",displayType:"horizontal-card"};const $=p.bind({});$.args={...s,options:T.map(e=>({...e,visual:Se})),displayType:"horizontal-card"};const w=p.bind({});w.args={...s,options:T.map(e=>({...e,icon:"card",iconPosition:"center"})),displayType:"horizontal-card"};var F,A,N;q.parameters={...q.parameters,docs:{...(F=q.parameters)==null?void 0:F.docs,source:{originalSource:`(props: RadioGroupProps<string>) => {
  const [value, setValue] = useState('');
  return <RadioGroup {...props} onChange={nextValue => setValue(nextValue)} value={value} />;
}`,...(N=(A=q.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var H,M,j;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(j=(M=R.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var L,D,U;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(U=(D=x.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var O,J,X;P.parameters={...P.parameters,docs:{...(O=P.parameters)==null?void 0:O.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(X=(J=P.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,K,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,ee,re;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(re=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,ne;$.parameters={...$.parameters,docs:{...(ae=$.parameters)==null?void 0:ae.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(ne=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,te,ie;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(ie=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const Ae=["Interactive","Default","Vertical","Horizontal","WithBodyCopy","WithError","WithVisual","Withicon"];export{R as Default,P as Horizontal,q as Interactive,x as Vertical,S as WithBodyCopy,I as WithError,$ as WithVisual,w as Withicon,Ae as __namedExportsOrder,Fe as default};
