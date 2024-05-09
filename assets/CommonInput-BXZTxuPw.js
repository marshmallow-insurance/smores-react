import{u as e,a}from"./styled-components.browser.esm-uaFiJyE8.js";import{I as i}from"./Icon-CArGiu8V.js";import{t as r}from"./theme-D50qMPxU.js";const l=e.input`
  border: none;
  color: ${({$error:o})=>r.colors[`${o?"strawberry":"liquorice"}`]};
  font-size: 16px;
  width: 100%;
  outline: none;
  cursor: ${({disabled:o})=>o?"not-allowed":"initial"};
  opacity: ${({disabled:o})=>o?"0.5":"1"};
  padding: 18px 14px;
  background-color: ${({$fallbackStyle:o})=>o?r.colors.custard:r.colors.cream};
  border: 2px solid
    ${({$error:o})=>o?r.colors.strawberry:r.colors.oatmeal};

  ${({disabled:o,$error:t})=>!o&&!t&&a`
      &:hover,
      &:focus-within {
        border-color: ${r.colors.marzipan};
      }
    `}

  border-radius: 12px;
  height: auto;

  ${({$frontIcon:o})=>o&&`
      padding-left: 42px;
    `}

  ${({$trailingIcon:o})=>o&&`
      padding-right: 42px;
    `}

  /* Remove the spinner on Firefox and Webkit browsers */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${r.colors.sesame};
  }
`,p=e(i)`
  position: relative;
  left: 36px;
  margin-left: -24px;
  z-index: 1;
  opacity: ${({$disabled:o})=>o?"0.5":"1"};
  color: ${r.colors.liquorice};
`,d=e(i)`
  position: relative;
  right: 36px;
  margin-right: -36px;
  opacity: ${({$disabled:o})=>o?"0.5":"1"};
  color: ${r.colors.liquorice};
`;export{l as I,p as S,d as a};
