import{j as o,s as i}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as m}from"./index-BBkUAzwr.js";import{f}from"./focusOutline-D9_3RTEn.js";import{T as b}from"./Text-m-KhGIht.js";import{t as e}from"./theme-D50qMPxU.js";import{u as g}from"./id-CqcUMuGv.js";const n=m.forwardRef(function({id:l,checked:c,children:d,toggle:p,error:s,errorMsg:a},u){const x=g(l);return o.jsxs(o.Fragment,{children:[o.jsxs(h,{id:x,children:[o.jsx(b,{tag:"span",typo:"base",color:s?"strawberry":"liquorice",children:d}),o.jsx("input",{ref:u,type:"checkbox",checked:c,onChange:p}),o.jsx(r,{error:s})]}),s&&a&&o.jsx(k,{children:a})]})}),r=i.span`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: ${({error:t})=>t?`solid 2px ${e.colors.strawberry}`:`solid 2px ${e.colors.liquorice}`};
  box-sizing: border-box;
  border-radius: 1px;

  &:before {
    content: '';
    position: absolute;
    display: none;
    top: 9px;
    left: 5px;
    width: 3px;
    height: 8px;
    border-radius: 4px;
    background-color: ${e.colors.cream};
    -webkit-transform: rotate(316deg);
    -ms-transform: rotate(316deg);
    transform: rotate(316deg);
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 11px;
    width: 3px;
    height: 15px;
    border-radius: 4px;
    background-color: ${e.colors.cream};
    -webkit-transform: rotate(43deg);
    -ms-transform: rotate(43deg);
    transform: rotate(43deg);
  }
`,h=i.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 32px;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    background-color: ${e.colors.cream};

    &:checked ~ ${r} {
      background-color: ${e.colors.liquorice};
      border: solid 2px ${e.colors.liquorice};
    }

    &:checked ~ ${r}:before {
      display: block;
    }

    &:checked ~ ${r}:after {
      display: block;
    }

    ${f({selector:`&:focus-visible ~ ${r}`})}
  }

  &:hover {
    ${r} {
      background-color: ${e.colors.coconut};
      border: solid 2px ${e.colors.liquorice};
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
  }

  span {
    border-radius: 6px;
  }
`,k=i.span`
  padding-top: 8px;
  font-size: 12px;
  color: ${e.colors.strawberry};
`;try{n.displayName="CheckBox",n.__docgenInfo={description:"",displayName:"CheckBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"() => void"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}}}}}catch{}export{n as C};
