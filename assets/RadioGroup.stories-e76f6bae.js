import{j as G,F as de,a as r,s as l,A as w}from"./styled-components.browser.esm-1fe49baf.js";import{r as h}from"./index-1b03fe98.js";import{u as le}from"./id-f73e93ae.js";import{F as pe}from"./Fieldset-202c51c0.js";import{t as a}from"./theme-9a9bdd1b.js";import{f as ce}from"./focusOutline-65f7e9f7.js";import{B as C}from"./Box-0e300cd1.js";import{T as me}from"./Text-81caf24d.js";import{I as fe}from"./Icon-758c1c6b.js";import"./InternalField-cba97fcd.js";import"./polished.esm-b6220ab2.js";const ye=`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,z=h.forwardRef(function({name:o,id:t,value:n,checked:d,onChange:p,isError:c,...m},b){return G(de,{children:[r(se,{ref:b,type:"radio",name:o,id:t,value:`${n}`,checked:d,onChange:()=>p(n)}),r(ge,{isError:c,checked:d,...m})]})}),se=l.input`
  ${ye}
`,E=24,ge=l(C)`
  flex-shrink: 0;
  width: ${E}px;
  height: ${E}px;
  border-radius: ${E}px;
  background-color: ${a.colors.cream};
  border: 2px solid
    ${({isError:e})=>e?a.colors.strawberry:a.colors.sesame};

  ${({checked:e,isError:o})=>!e&&!o&&`
    &:hover {
      border: 2px solid ${a.colors.liquorice};
    }
  `}

  ${({checked:e,isError:o})=>e&&`border: 8px solid ${o?a.colors.strawberry:a.colors.liquorice};`}

  ${ce({selector:`${se}:focus-visible + &`})}
`;try{z.displayName="RadioElement",z.__docgenInfo={description:"",displayName:"RadioElement",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: BaseValueType) => void"}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const ue=12,W=h.forwardRef(function({name:o,visual:t,icon:n,iconPosition:d="center",label:p,value:c,checked:m,onChange:b,displayType:k,isError:f,fallbackStyle:i,bodyCopy:y},g){const v=le();return G(Ve,{htmlFor:v,checked:m,displayType:k,"data-testid":c,isError:f,fallbackStyle:i,children:[t&&!n&&r(ve,{children:r(be,{visualUrl:t})}),!t&&n&&r(he,{iconPosition:d,children:r(fe,{render:n,size:24})}),G(C,{flex:!0,alignItems:"center",children:[r(z,{ref:g,name:o,id:v,value:c,checked:m,onChange:b,isError:f,mr:"8px"}),G(C,{children:[r(qe,{isError:f,children:p}),y&&r(C,{children:r(me,{typo:"caption",children:y})})]})]})]})}),ve=l.div`
  width: 100%;
  max-width: 120px;
  margin: 0 auto 8px;
`,he=l.div`
  display: flex;
  padding-bottom: 12px;

  ${({iconPosition:e})=>e==="center"&&w`
      justify-content: center;
    `}

  ${({iconPosition:e})=>e==="start"&&w`
      justify-content: flex-start;
    `}
`,be=l.div`
  width: 100%;
  padding-top: 100%;
  background-image: url('${e=>e.visualUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,Ve=l.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({displayType:e,checked:o,isError:t,fallbackStyle:n})=>w`
    ${(e==="horizontal-card"||e==="vertical-card")&&w`
      border-radius: 12px;
      background-color: ${n?a.colors.cream:a.colors.custard};
      padding: ${o?"10px":"12px"};
      border: ${o&&(t?`2px solid ${a.colors.strawberry}`:`2px solid ${a.colors.liquorice}`)};

      &:hover {
        background-color: ${n?a.colors.coconut:a.colors.oatmeal};
      }
    `}
    ${e==="horizontal-card"&&w`
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
`,qe=l.span`
  line-height: 16px;
  font-size: 16px;
  font-weight: ${a.font.weight.medium};
  color: ${({isError:e})=>e?a.colors.strawberry:a.colors.liquorice};
  margin-top: 4px;
`;try{W.displayName="RadioItem",W.__docgenInfo={description:"",displayName:"RadioItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},visual:{defaultValue:null,description:"",name:"visual",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},iconPosition:{defaultValue:{value:"center"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: BaseValueType) => void"}},displayType:{defaultValue:null,description:"",name:"displayType",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"vertical-card"'},{value:'"horizontal-card"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},fallbackStyle:{defaultValue:null,description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},bodyCopy:{defaultValue:null,description:"",name:"bodyCopy",required:!1,type:{name:"string"}}}}}catch{}const Re=({options:e,onChange:o,value:t,displayType:n="normal",renderAsTitle:d=!1,error:p=!1,fallbackStyle:c=!1,...m},b)=>{const k=le(),f=h.useRef([]);return h.useImperativeHandle(b,()=>({focus:()=>{var g;const i=e.findIndex(v=>v.value===t),y=i===-1?0:i;(g=f.current[y].current)==null||g.focus()}})),r(pe,{renderAsTitle:d,error:p,...m,children:r(xe,{displayType:n,children:e.map((i,y)=>{const g=i.value===t;return r(W,{ref:v=>{f.current[y]={current:v}},name:k,visual:i.visual,icon:i.icon,iconPosition:i.iconPosition,label:i.label,value:i.value,checked:g,onChange:o,displayType:n,isError:p,fallbackStyle:c,bodyCopy:i.bodyCopy},`${i.value}`)})})})},_=h.forwardRef(Re),xe=l.div`
  display: flex;
  gap: ${ue}px;

  ${({displayType:e})=>e==="horizontal-card"?`
        flex-direction: row;
        flex-wrap: wrap;
      `:"flex-direction: column;"}
`;try{_.displayName="RadioGroup",_.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ visual?: string | undefined; icon?: string | undefined; iconPosition?: IconPosition | undefined; label: string; value: Value; bodyCopy?: string | undefined; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Value) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"BaseValueType"}},displayType:{defaultValue:{value:"normal"},description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"vertical-card"'},{value:'"horizontal-card"'}]}},fallbackStyle:{defaultValue:{value:"false"},description:"",name:"fallbackStyle",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},renderAsTitle:{defaultValue:{value:"false"},description:"",name:"renderAsTitle",required:!1,type:{name:"boolean"}},assistiveText:{defaultValue:null,description:"",name:"assistiveText",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},frontIcon:{defaultValue:null,description:"",name:"frontIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const Pe=""+new URL("radio-visual-220ab026.svg",import.meta.url).href,Be={title:"RadioGroup",component:_,argTypes:{onChange:{action:"clicked"}}},T=[{label:"Social",value:"social"},{label:"Social and commuting",value:"social/commuting"},{label:"All the above, and I drive for work",value:"social/commuting/work"},{label:"It’s a commercial vehicle",value:"commercial"}],s={label:"What do you use it for?",onChange:e=>console.log(e),value:T[0].value,options:T,displayType:"normal"},Se=e=>{const[o,t]=h.useState("");return r(_,{...e,onChange:n=>t(n),value:o})},V=Se.bind({});V.args=s;const u=e=>r(_,{...e}),q=u.bind({});q.args=s;const R=u.bind({});R.args={...s,displayType:"vertical-card"};const x=u.bind({});x.args={...s,displayType:"horizontal-card"};const P=u.bind({});P.args={...s,displayType:"vertical-card",options:T.map(e=>({...e,bodyCopy:"E.g. shopping, travel and driving to see friends. Does not include travelling to and from work."}))};const S=u.bind({});S.args={...s,error:!0,errorMsg:"something",displayType:"horizontal-card"};const $=u.bind({});$.args={...s,options:T.map(e=>({...e,visual:Pe})),displayType:"horizontal-card"};const I=u.bind({});I.args={...s,options:T.map(e=>({...e,icon:"card",iconPosition:"center"})),displayType:"horizontal-card"};var B,A,N;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`(props: RadioGroupProps<string>) => {
  const [value, setValue] = useState('');
  return <RadioGroup {...props} onChange={nextValue => setValue(nextValue)} value={value} />;
}`,...(N=(A=V.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,F,D;q.parameters={...q.parameters,docs:{...(j=q.parameters)==null?void 0:j.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(D=(F=q.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var H,M,U;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(U=(M=R.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var O,L,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(J=(L=x.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var X,Z,K;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(K=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,Y,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(ee=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var re,ae,oe;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(oe=(ae=$.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,ie,te;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:"(props: RadioGroupProps) => <RadioGroup {...props} />",...(te=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};const Ae=["Interactive","Default","Vertical","Horizontal","WithBodyCopy","WithError","WithVisual","Withicon"];export{q as Default,x as Horizontal,V as Interactive,R as Vertical,P as WithBodyCopy,S as WithError,$ as WithVisual,I as Withicon,Ae as __namedExportsOrder,Be as default};
//# sourceMappingURL=RadioGroup.stories-e76f6bae.js.map
