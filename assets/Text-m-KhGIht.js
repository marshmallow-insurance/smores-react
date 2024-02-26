import{j as u,s as v,A as a}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as $}from"./index-BBkUAzwr.js";import{t as e}from"./theme-D50qMPxU.js";import{c}from"./polished.esm-D0h1-lPB.js";import{I as g}from"./Icon-BsCxozQo.js";import{f as z}from"./focusOutline-D9_3RTEn.js";import{B as b}from"./Box-Dm5zCsW8.js";const x=({className:i,href:n,onClick:o,openInNewTab:t,download:m,children:d,typo:r="regular",highlight:p=!1,iconToRender:l=t?"new-window":void 0,isTrailingIcon:s=!0})=>u.jsxs(w,{href:n,className:i,onClick:o,download:m,typo:r,highlight:p,...t&&{rel:"noopener noreferrer",target:"_blank"},children:[l&&!s&&u.jsx(g,{mt:{custom:"3px"},mr:{custom:"4px"},render:l,size:r==="regular"?14:12,color:p?"lollipop":"liquorice"}),d,l&&s&&u.jsx(g,{mt:{custom:"3px"},ml:{custom:"4px"},render:l,size:r==="regular"?14:12,color:p?"lollipop":"liquorice"})]}),w=v.a(({typo:i,highlight:n})=>a`
    ${z()}
    display: inline-flex;
    flex-direction: row;

    ${i==="regular"&&a`
      font-size: 16px;
      line-height: 20px;
    `}

    ${i==="small"&&a`
      font-size: 14px;
      line-height: 20px;
    `}

      font-weight: ${e.font.weight.medium};
    text-decoration: underline;
    color: ${n?e.colors.lollipop:e.colors.liquorice};

    background: none;
    cursor: pointer;

    &:hover {
      color: ${e.colors.sesame};

      path {
        fill: ${e.colors.sesame};
      }
    }

    &:active {
      color: ${e.colors.liquorice};

      path {
        fill: ${e.colors.liquorice};
      }
    }
  `),h=({color:i})=>a`
  & ${w} {
    color: ${i};

    path {
      fill: ${i};
    }

    &:hover {
      color: ${c(.1,i)};

      path {
        fill: ${c(.1,i)};
      }
    }
  }
`;try{x.displayName="Link",x.__docgenInfo={description:"",displayName:"Link",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},openInNewTab:{defaultValue:null,description:"",name:"openInNewTab",required:!1,type:{name:"boolean"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"boolean"}},typo:{defaultValue:{value:"regular"},description:"",name:"typo",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'}]}},highlight:{defaultValue:{value:"false"},description:"",name:"highlight",required:!1,type:{name:"boolean"}},iconToRender:{defaultValue:{value:"openInNewTab ? 'new-window' : undefined"},description:"",name:"iconToRender",required:!1,type:{name:"string"}},isTrailingIcon:{defaultValue:{value:"true"},description:"",name:"isTrailingIcon",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="linkStyleOverride",h.__docgenInfo={description:"Internal utility to override styling in other components (see Text)",displayName:"linkStyleOverride",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const y={"hero-alternate":`
    font-size: 40px;
    font-family: 'MarshmallowYouth';
    font-weight: ${e.font.weight.bold};
    line-height: 40px;

    @media (min-width: 768px) {
      font-size: 56px;
      line-height: 52px;
    }
  `,hero:`
    font-size: 32px;
    font-weight: ${e.font.weight.medium};
    line-height: 40px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 44px;
    }
  `,"heading-alternate":`
    font-size: 40px;
    font-family: 'MarshmallowYouth';
    font-weight: ${e.font.weight.bold};
    line-height: 40px;
  `,"heading-large":`
    font-size: 28px;
    font-weight: ${e.font.weight.medium};
    line-height: 32px;

    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  `,"heading-medium":`
    font-size: 24px;
    font-weight: ${e.font.weight.medium};
    line-height: 32px;
  `,"heading-small":`
    font-size: 20px;
    font-weight: ${e.font.weight.medium};
    line-height: 28px;
  `,"headline-regular":`
    font-size: 16px;
    font-weight: ${e.font.weight.medium};
    line-height: 20px;
  `,"headline-small":`
    font-size: 14px;
    font-weight: ${e.font.weight.medium};
    line-height: 20px;
  `,"body-standfirst":`
    font-size: 18px;
    font-weight: ${e.font.weight.normal};
    line-height: 24px;
  `,"body-regular":`
    font-size: 16px;
    font-weight: ${e.font.weight.normal};
    line-height: 20px;
  `,"body-small":`
    font-size: 14px;
    font-weight: ${e.font.weight.normal};
    line-height: 20px;
  `,caption:`
    font-size: 12px;
    font-weight: ${e.font.weight.normal};
    line-height: 16px;
  `,label:`
    font-size: 10px;
    line-height: 12px;
    font-weight: ${e.font.weight.medium};
    text-transform: uppercase;
  `},f=$.forwardRef(({children:i,typo:n="body-regular",className:o="",tag:t="p",align:m="left",color:d="liquorice",cursor:r="inherit",title:p="",...l},s)=>u.jsx(_,{as:t,className:o,typo:n,align:m,color:d,cursor:r,title:p,...l,ref:s,children:i}));f.displayName="Text";const q=i=>Object.keys(y).includes(i),_=v(b)(({align:i,color:n,cursor:o,typo:t})=>a`
    /** TYPOGRAPHY STYLES */

    ${q(t)&&y[t]}

    /** DEPRECATED TYPOGRAPHY STYLES */
    ${t==="header-large"&&a`
      font-size: 24px;
      line-height: 31px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 42px;
        line-height: 54px;
      }
    `}

  ${t==="header-medium"&&a`
      font-size: 21px;
      line-height: 27px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 41px;
      }
    `}

  ${t==="header-small"&&a`
      font-size: 18px;
      line-height: 23px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 27px;
      }
    `}

  ${t==="desc-heavy"&&a`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${t==="desc-medium"&&a`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${t==="desc-light"&&a`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${t==="desc-small"&&a`
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  ${t==="base"&&a`
      font-size: 14px;
      line-height: 23px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 26px;
      }
    `}

  ${t==="base-small"&&a`
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 23px;
      }
    `}

  ${t==="base-xsmall"&&a`
      font-size: 10px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 12px;
        line-height: 19px;
      }
    `}
  
  ${t==="label-large"&&a`
      font-size: 12px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;
    `}

    text-align: ${i};
    cursor: ${o};
    color: ${e.colors[n]};
    ${h({color:e.colors[n]})}
  `);try{f.displayName="Text",f.__docgenInfo={description:"",displayName:"Text",props:{tag:{defaultValue:{value:"p"},description:"",name:"tag",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},typo:{defaultValue:{value:"body-regular"},description:"",name:"typo",required:!1,type:{name:"Typo | (string & Record<never, never>)"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"string"}},color:{defaultValue:{value:"liquorice"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"confused"'},{value:'"onfido"'},{value:'"twitter"'},{value:'"premfina"'},{value:'"checkout"'},{value:'"facebook"'},{value:'"stripe"'},{value:'"intercom"'},{value:'"ravelin"'},{value:'"rac"'},{value:'"hometree"'}]}},cursor:{defaultValue:{value:"inherit"},description:"",name:"cursor",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{x as L,f as T,y as f};
