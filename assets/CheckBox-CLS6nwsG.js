import{a as n,F as x,j as r,s as i}from"./styled-components.browser.esm-CskBwHif.js";import{r as b}from"./index-BBkUAzwr.js";import{f as g}from"./focusOutline-JAHtHrmh.js";import{T as h}from"./Text-BfQCQ9vW.js";import{t as e}from"./theme-D50qMPxU.js";import{u as k}from"./id-CqcUMuGv.js";const l=b.forwardRef(function({id:c,checked:d,children:p,toggle:u,error:a,errorMsg:s},m){const f=k(c);return n(x,{children:[n(y,{id:f,children:[r(h,{tag:"span",typo:"base",color:a?"strawberry":"liquorice",children:p}),r("input",{ref:m,type:"checkbox",checked:d,onChange:u}),r(o,{error:a})]}),a&&s&&r($,{children:s})]})}),o=i.span`
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
`,y=i.label`
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

    &:checked ~ ${o} {
      background-color: ${e.colors.liquorice};
      border: solid 2px ${e.colors.liquorice};
    }

    &:checked ~ ${o}:before {
      display: block;
    }

    &:checked ~ ${o}:after {
      display: block;
    }

    ${g({selector:`&:focus-visible ~ ${o}`})}
  }

  &:hover {
    ${o} {
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
`,$=i.span`
  padding-top: 8px;
  font-size: 12px;
  color: ${e.colors.strawberry};
`;try{l.displayName="CheckBox",l.__docgenInfo={description:"",displayName:"CheckBox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"() => void"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},errorMsg:{defaultValue:null,description:"",name:"errorMsg",required:!1,type:{name:"string"}}}}}catch{}export{l as C};
