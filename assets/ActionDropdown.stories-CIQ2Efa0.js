import{s as l,j as o,a as c,A as b}from"./styled-components.browser.esm-CskBwHif.js";import{r as h}from"./index-BBkUAzwr.js";import{B as s}from"./Box-Ck8x80mg.js";import{I as A}from"./Icon-GveiwEP7.js";import{T as y}from"./Text-BfQCQ9vW.js";import{t as i}from"./theme-D50qMPxU.js";import{c as S}from"./polished.esm-D0h1-lPB.js";import"./focusOutline-JAHtHrmh.js";const d=({options:e,selectOption:t})=>o(D,{children:e.map(r=>o(P,{onClick:()=>t(r),children:r.label},r.value))}),D=l.ul`
  padding: 0;
  margin: 0;
  max-height: 188px;
`,P=l.li`
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
    background-color: ${S(.1,i.colors.custard)};
  }

  &:last-child {
    border-bottom: none;
  }
`;try{d.displayName="List",d.__docgenInfo={description:"",displayName:"List",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ActionListItem[]"}},selectOption:{defaultValue:null,description:"",name:"selectOption",required:!0,type:{name:"(option: ActionListItem) => void"}}}}}catch{}const p=({id:e,className:t="",label:r,value:a,list:v,onSelect:w,...C})=>{const[u,_]=h.useState(!1);return c(L,{id:e,className:t,onClick:()=>_(q=>!q),...C,children:[r&&o(y,{tag:"label",color:"sesame",typo:"label",children:r}),c(V,{text:a.textColor??"liquorice",bg:a.bgColor??"sesame",children:[o(I,{children:a.label}),o(A,{render:"caret",color:a.textColor??"sesame",size:24,rotate:u?180:0})]}),o(O,{open:u,children:o(d,{options:v,selectOption:w})})]})},V=l.div(({text:e,bg:t})=>b`
    color: ${i.colors[e]};
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
  `),I=l.span`
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,L=l(s)`
  position: relative;
  display: block;
  width: 210px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
`,O=l.div(({open:e})=>b`
    position: absolute;
    width: 100%;
    border-radius: 12px;
    margin-top: 8px;
    display: ${e?"block":"none"};
    max-height: ${e?"235px":"48px"};
    background-color: ${i.colors.custard};
    overflow-y: ${e?"auto":"hidden"};
    z-index: 4;
    transition: all 0.2s ease-in-out;
  `);try{p.displayName="ActionDropdown",p.__docgenInfo={description:"",displayName:"ActionDropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"label displayed above the dropdown",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"value",name:"value",required:!0,type:{name:"ActionListItem"}},list:{defaultValue:null,description:"list of items for the dropdown list",name:"list",required:!0,type:{name:"ActionListItem[]"}},onSelect:{defaultValue:null,description:"onSelect handler",name:"onSelect",required:!0,type:{name:"(action: ActionListItem) => void"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const m=[{label:"Default grey",value:"DEFAULT",bgColor:"coconut",textColor:"liquorice"},{label:"Brand",value:"ACTION",bgColor:"marshmallowPink",textColor:"liquorice"},{label:"Medium",value:"MEDIUM",bgColor:"lemon",textColor:"liquorice"},{label:"High alert",value:"HIGH_ALERT",bgColor:"tangerine",textColor:"cream"},{label:"Good zone",value:"GOOD_ZONE",bgColor:"apple",textColor:"cream"},{label:"DANGER zone",value:"DANGER_ZONE",bgColor:"strawberry",textColor:"cream"}],N=()=>{const[e,t]=h.useState(m[0]);return c(s,{flex:!0,alignItems:"center",children:[o(p,{id:"statusActions",list:m,value:e,onSelect:t}),o(s,{mr:"16px"}),o(s,{children:o(y,{tag:"p",typo:"base-small",children:e.label})})]})},H={title:"Action Dropdown",component:p},$=()=>o(N,{}),n=$.bind({});n.args={textColor:"liquorice"};var f,x,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"() => <ActionDropdownContainer />",...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,H as default};
