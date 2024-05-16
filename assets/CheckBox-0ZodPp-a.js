import{r as u,R as e}from"./index-DVXBtNgz.js";import{u as s}from"./styled-components.browser.esm-DtukEPFB.js";import{f as x}from"./focusOutline-C7WNMGbj.js";import{T as b}from"./Text-B2SBU-40.js";import{t as o}from"./theme-D50qMPxU.js";import{u as f}from"./id-BfHoGO8q.js";const g=u.forwardRef(function({id:c,checked:n,children:l,toggle:p,error:t,errorMsg:i},d){const m=f(c);return e.createElement(e.Fragment,null,e.createElement(h,{id:m},e.createElement(b,{tag:"span",typo:"base",color:t?"strawberry":"liquorice"},l),e.createElement("input",{ref:d,type:"checkbox",checked:n,onChange:p}),e.createElement(r,{$error:t})),t&&i&&e.createElement(k,null,i))}),r=s.span`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: ${({$error:a})=>a?`solid 2px ${o.colors.strawberry}`:`solid 2px ${o.colors.liquorice}`};
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
    background-color: ${o.colors.cream};
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
    background-color: ${o.colors.cream};
    -webkit-transform: rotate(43deg);
    -ms-transform: rotate(43deg);
    transform: rotate(43deg);
  }
`,h=s.label`
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
    background-color: ${o.colors.cream};

    &:checked ~ ${r} {
      background-color: ${o.colors.liquorice};
      border: solid 2px ${o.colors.liquorice};
    }

    &:checked ~ ${r}:before {
      display: block;
    }

    &:checked ~ ${r}:after {
      display: block;
    }

    ${x({selector:`&:focus-visible ~ ${r}`})}
  }

  &:hover {
    ${r} {
      background-color: ${o.colors.coconut};
      border: solid 2px ${o.colors.liquorice};
    }
  }

  @media (min-width: 768px) {
    padding-left: 32px;
  }

  span {
    border-radius: 6px;
  }
`,k=s.span`
  padding-top: 8px;
  font-size: 12px;
  color: ${o.colors.strawberry};
`;g.__docgenInfo={description:"",methods:[],displayName:"CheckBox"};export{g as C};
