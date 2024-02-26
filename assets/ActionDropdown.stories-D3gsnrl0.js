import{s as l,j as e,A as g}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as b}from"./index-BBkUAzwr.js";import{B as s}from"./Box-Dm5zCsW8.js";import{I as q}from"./Icon-BsCxozQo.js";import{T as h}from"./Text-m-KhGIht.js";import{t as i}from"./theme-D50qMPxU.js";import{c as A}from"./polished.esm-D0h1-lPB.js";import"./focusOutline-D9_3RTEn.js";const c=({options:o,selectOption:t})=>e.jsx(j,{children:o.map(r=>e.jsx(S,{onClick:()=>t(r),children:r.label},r.value))}),j=l.ul`
  padding: 0;
  margin: 0;
  max-height: 188px;
`,S=l.li`
  padding: 16px 24px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
  color: ${i.colors.liquorice};

  &:hover {
    background-color: ${A(.1,i.colors.custard)};
  }

  &:last-child {
    border-bottom: none;
  }
`;try{c.displayName="List",c.__docgenInfo={description:"",displayName:"List",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ActionListItem[]"}},selectOption:{defaultValue:null,description:"",name:"selectOption",required:!0,type:{name:"(option: ActionListItem) => void"}}}}}catch{}const p=({id:o,className:t="",label:r,value:a,list:y,onSelect:v,...w})=>{const[d,C]=b.useState(!1);return e.jsxs(V,{id:o,className:t,onClick:()=>C(_=>!_),...w,children:[r&&e.jsx(h,{tag:"label",color:"sesame",typo:"label",children:r}),e.jsxs(D,{text:a.textColor??"liquorice",bg:a.bgColor??"sesame",children:[e.jsx(P,{children:a.label}),e.jsx(q,{render:"caret",color:a.textColor??"sesame",size:24,rotate:d?180:0})]}),e.jsx(I,{open:d,children:e.jsx(c,{options:y,selectOption:v})})]})},D=l.div(({text:o,bg:t})=>g`
    color: ${i.colors[o]};
    background-color: ${i.colors[t]};
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 64px;
    padding: 16px 16px 14px;
    box-sizing: border-box;
    user-select: none;
  `),P=l.span`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V=l(s)`
  position: relative;
  display: block;
  width: 210px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
`,I=l.div(({open:o})=>g`
    position: absolute;
    width: 100%;
    border-radius: 12px;
    margin-top: 8px;
    display: ${o?"block":"none"};
    max-height: ${o?"235px":"48px"};
    background-color: ${i.colors.custard};
    overflow-y: ${o?"auto":"hidden"};
    z-index: 4;
    transition: all 0.2s ease-in-out;
  `);try{p.displayName="ActionDropdown",p.__docgenInfo={description:"",displayName:"ActionDropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"label displayed above the dropdown",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"value",name:"value",required:!0,type:{name:"ActionListItem"}},list:{defaultValue:null,description:"list of items for the dropdown list",name:"list",required:!0,type:{name:"ActionListItem[]"}},onSelect:{defaultValue:null,description:"onSelect handler",name:"onSelect",required:!0,type:{name:"(action: ActionListItem) => void"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const u=[{label:"Default grey",value:"DEFAULT",bgColor:"coconut",textColor:"liquorice"},{label:"Brand",value:"ACTION",bgColor:"marshmallowPink",textColor:"liquorice"},{label:"Medium",value:"MEDIUM",bgColor:"lemon",textColor:"liquorice"},{label:"High alert",value:"HIGH_ALERT",bgColor:"tangerine",textColor:"cream"},{label:"Good zone",value:"GOOD_ZONE",bgColor:"apple",textColor:"cream"},{label:"DANGER zone",value:"DANGER_ZONE",bgColor:"strawberry",textColor:"cream"}],L=()=>{const[o,t]=b.useState(u[0]);return e.jsxs(s,{flex:!0,alignItems:"center",children:[e.jsx(p,{id:"statusActions",list:u,value:o,onSelect:t}),e.jsx(s,{mr:"16px"}),e.jsx(s,{children:e.jsx(h,{tag:"p",typo:"base-small",children:o.label})})]})},B={title:"Action Dropdown",component:p},O=()=>e.jsx(L,{}),n=O.bind({});n.args={textColor:"liquorice"};var m,x,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"() => <ActionDropdownContainer />",...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const H=["Default"];export{n as Default,H as __namedExportsOrder,B as default};
