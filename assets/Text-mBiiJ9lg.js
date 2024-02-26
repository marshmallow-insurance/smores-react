import{j as s,s as x,A as i}from"./styled-components.browser.esm-CJMx1vp9.js";import{r as b}from"./index-BBkUAzwr.js";import{t as e}from"./theme-D50qMPxU.js";import{c as h}from"./polished.esm-D0h1-lPB.js";import{I as f}from"./Icon-B-eQ_DO6.js";import{f as $}from"./focusOutline-D9_3RTEn.js";import{B as z}from"./Box-Dm5zCsW8.js";const g=({className:a,href:u,onClick:n,openInNewTab:l,download:v,children:d,typo:o="regular",highlight:r=!1,iconToRender:t=l?"new-window":void 0,isTrailingIcon:p=!0})=>s.jsxs(w,{href:u,className:a,onClick:n,download:v,typo:o,highlight:r,...l&&{rel:"noopener noreferrer",target:"_blank"},children:[t&&!p&&s.jsx(f,{mt:{custom:"3px"},mr:{custom:"4px"},render:t,size:o==="regular"?14:12,color:r?"lollipop":"liquorice"}),d,t&&p&&s.jsx(f,{mt:{custom:"3px"},ml:{custom:"4px"},render:t,size:o==="regular"?14:12,color:r?"lollipop":"liquorice"})]}),w=x.a(({typo:a,highlight:u})=>i`
    ${$()}
    display: inline-flex;
    flex-direction: row;

    ${a==="regular"&&i`
      font-size: 16px;
      line-height: 20px;
    `}

    ${a==="small"&&i`
      font-size: 14px;
      line-height: 20px;
    `}

      font-weight: ${e.font.weight.medium};
    text-decoration: underline;
    color: ${u?e.colors.lollipop:e.colors.liquorice};

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
  `),c=({color:a})=>i`
  & ${w} {
    color: ${a};

    path {
      fill: ${a};
    }

    &:hover {
      color: ${h(.1,a)};

      path {
        fill: ${h(.1,a)};
      }
    }
  }
`;try{g.displayName="Link",g.__docgenInfo={description:"",displayName:"Link",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},openInNewTab:{defaultValue:null,description:"",name:"openInNewTab",required:!1,type:{name:"boolean"}},download:{defaultValue:null,description:"",name:"download",required:!1,type:{name:"boolean"}},typo:{defaultValue:{value:"regular"},description:"",name:"typo",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"regular"'}]}},highlight:{defaultValue:{value:"false"},description:"",name:"highlight",required:!1,type:{name:"boolean"}},iconToRender:{defaultValue:{value:"openInNewTab ? 'new-window' : undefined"},description:"",name:"iconToRender",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"link"'},{value:'"filter"'},{value:'"property"'},{value:'"security"'},{value:'"aa-inverted"'},{value:'"accidental-damage"'},{value:'"account-breakdown"'},{value:'"account-mlp"'},{value:'"activity-clipboard"'},{value:'"add-ons"'},{value:'"address-mta"'},{value:'"album-audio"'},{value:'"alert-engine"'},{value:'"apple-pay"'},{value:'"approved-file"'},{value:'"breakdown-alt"'},{value:'"cancel-bw"'},{value:'"car-mta"'},{value:'"car-repairs"'},{value:'"car-replacement"'},{value:'"car-usage"'},{value:'"chat-bubble"'},{value:'"checkout-with-text"'},{value:'"circle-tick"'},{value:'"claim-line"'},{value:'"clipboard-check"'},{value:'"close-panel"'},{value:'"confused-blue"'},{value:'"contact-email"'},{value:'"dashboard-high"'},{value:'"direct-debit"'},{value:'"doc-download"'},{value:'"doc-upload"'},{value:'"edit-contact"'},{value:'"edit-outline"'},{value:'"email-filled"'},{value:'"falling-items"'},{value:'"file-badge-2"'},{value:'"file-cabinet"'},{value:'"fraud-alert"'},{value:'"freezer-food"'},{value:'"google-play-badge"'},{value:'"help-aboutus"'},{value:'"help-buypolicy"'},{value:'"help-center"'},{value:'"help-idcheck"'},{value:'"help-manage-policy"'},{value:'"help-ncd"'},{value:'"help-verification"'},{value:'"home-excluded"'},{value:'"house-tree"'},{value:'"ios-store-badge"'},{value:'"live-chat"'},{value:'"live-chat2"'},{value:'"log-out"'},{value:'"manage-drivers"'},{value:'"manage-policy"'},{value:'"maximise-window"'},{value:'"minus-circle"'},{value:'"money-bag"'},{value:'"money-heart"'},{value:'"more-dots"'},{value:'"new-window"'},{value:'"no-excess"'},{value:'"open-panel"'},{value:'"out-of-home"'},{value:'"padlock-outline"'},{value:'"phone-filled"'},{value:'"phone-outline"'},{value:'"pin-code"'},{value:'"plus-circle"'},{value:'"policy-details"'},{value:'"policy-doc"'},{value:'"policy-docs"'},{value:'"pound-bold"'},{value:'"pound-filled-circle"'},{value:'"pound-medium"'},{value:'"pound-outline"'},{value:'"pound-regular"'},{value:'"question-help"'},{value:'"refer-a-friend"'},{value:'"reg-plate"'},{value:'"renewal-line"'},{value:'"repeat-charge"'},{value:'"schedule-quote"'},{value:'"send-message"'},{value:'"shield-check"'},{value:'"thumbs-up"'},{value:'"tow-truck"'},{value:'"trace-and-access"'},{value:'"up-down"'},{value:'"upload-documents"'},{value:'"upload-email"'},{value:'"wheel-flat"'},{value:'"windscreen-repair"'},{value:'"windscreen-replacement"'},{value:'"aa"'},{value:'"addons"'},{value:'"alert"'},{value:'"amex"'},{value:'"arrow"'},{value:'"at"'},{value:'"axa"'},{value:'"bank"'},{value:'"basket"'},{value:'"bicycle"'},{value:'"boost"'},{value:'"breakdown"'},{value:'"briefcase"'},{value:'"burger"'},{value:'"calendar"'},{value:'"camera"'},{value:'"cancel"'},{value:'"car"'},{value:'"card"'},{value:'"caret"'},{value:'"charge"'},{value:'"chat"'},{value:'"checkout"'},{value:'"city"'},{value:'"claim"'},{value:'"clipboard"'},{value:'"clock"'},{value:'"collpase"'},{value:'"confused"'},{value:'"copy"'},{value:'"crop"'},{value:'"cross"'},{value:'"download"'},{value:'"earth"'},{value:'"edit"'},{value:'"engine"'},{value:'"europe"'},{value:'"excluded"'},{value:'"expand"'},{value:'"facebook"'},{value:'"fence"'},{value:'"file"'},{value:'"fire"'},{value:'"flag"'},{value:'"folder"'},{value:'"fuel"'},{value:'"globe"'},{value:'"gpay"'},{value:'"house"'},{value:'"inbox"'},{value:'"included"'},{value:'"info"'},{value:'"injury"'},{value:'"instagram"'},{value:'"intercom"'},{value:'"intercom2"'},{value:'"iphone"'},{value:'"jewellery"'},{value:'"key"'},{value:'"laptop"'},{value:'"leaks"'},{value:'"lightbulb"'},{value:'"linkedin"'},{value:'"location"'},{value:'"marshmallow"'},{value:'"mastercard"'},{value:'"maximise"'},{value:'"medical"'},{value:'"minimise"'},{value:'"minus"'},{value:'"mulsanne"'},{value:'"notes"'},{value:'"notification"'},{value:'"onfido"'},{value:'"other"'},{value:'"padlock"'},{value:'"people"'},{value:'"person"'},{value:'"photo"'},{value:'"plus"'},{value:'"policy"'},{value:'"premfina"'},{value:'"profile"'},{value:'"prohibited"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"refund"'},{value:'"renewal"'},{value:'"return"'},{value:'"search"'},{value:'"settings"'},{value:'"shield"'},{value:'"shopping"'},{value:'"sofa"'},{value:'"stack"'},{value:'"storm"'},{value:'"stripe"'},{value:'"subsidence"'},{value:'"theft"'},{value:'"tick"'},{value:'"training"'},{value:'"trash"'},{value:'"twitter"'},{value:'"upload"'},{value:'"vandalism"'},{value:'"village"'},{value:'"visa"'},{value:'"warning"'},{value:'"watch"'},{value:'"wave"'},{value:'"wellbeing"'},{value:'"windscreen"'}]}},isTrailingIcon:{defaultValue:{value:"true"},description:"",name:"isTrailingIcon",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="linkStyleOverride",c.__docgenInfo={description:"Internal utility to override styling in other components (see Text)",displayName:"linkStyleOverride",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const y={"hero-alternate":`
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
  `},m=b.forwardRef(({children:a,typo:u="body-regular",className:n="",tag:l="p",align:v="left",color:d="liquorice",cursor:o="inherit",title:r="",...t},p)=>s.jsx(q,{as:l,className:n,typo:u,align:v,color:d,cursor:o,title:r,...t,ref:p,children:a}));m.displayName="Text";const k=a=>Object.keys(y).includes(a),q=x(z)(({align:a,color:u,cursor:n,typo:l})=>i`
    /** TYPOGRAPHY STYLES */

    ${k(l)&&y[l]}

    /** DEPRECATED TYPOGRAPHY STYLES */
    ${l==="header-large"&&i`
      font-size: 24px;
      line-height: 31px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 42px;
        line-height: 54px;
      }
    `}

  ${l==="header-medium"&&i`
      font-size: 21px;
      line-height: 27px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 41px;
      }
    `}

  ${l==="header-small"&&i`
      font-size: 18px;
      line-height: 23px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 27px;
      }
    `}

  ${l==="desc-heavy"&&i`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${l==="desc-medium"&&i`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${l==="desc-light"&&i`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${l==="desc-small"&&i`
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  ${l==="base"&&i`
      font-size: 14px;
      line-height: 23px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 26px;
      }
    `}

  ${l==="base-small"&&i`
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 23px;
      }
    `}

  ${l==="base-xsmall"&&i`
      font-size: 10px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 12px;
        line-height: 19px;
      }
    `}
  
  ${l==="label-large"&&i`
      font-size: 12px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;
    `}

    text-align: ${a};
    cursor: ${n};
    color: ${e.colors[u]};
    ${c({color:e.colors[u]})}
  `);try{m.displayName="Text",m.__docgenInfo={description:"",displayName:"Text",props:{tag:{defaultValue:{value:"p"},description:"",name:"tag",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},typo:{defaultValue:{value:"body-regular"},description:"",name:"typo",required:!1,type:{name:"Typo | (string & Record<never, never>)"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"string"}},color:{defaultValue:{value:"liquorice"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"oatmeal"'},{value:'"custard"'},{value:'"cream"'},{value:'"coconut"'},{value:'"checkout"'},{value:'"confused"'},{value:'"facebook"'},{value:'"intercom"'},{value:'"onfido"'},{value:'"premfina"'},{value:'"rac"'},{value:'"ravelin"'},{value:'"stripe"'},{value:'"twitter"'},{value:'"lollipop"'},{value:'"marshmallowPink"'},{value:'"bubblegum"'},{value:'"fairyFloss"'},{value:'"boba"'},{value:'"liquorice"'},{value:'"sesame"'},{value:'"chia"'},{value:'"mascarpone"'},{value:'"spearmint"'},{value:'"feijoa"'},{value:'"blueberry"'},{value:'"macaroon"'},{value:'"pistachio"'},{value:'"matcha"'},{value:'"caramel"'},{value:'"peanut"'},{value:'"marzipan"'},{value:'"strawberry"'},{value:'"watermelon"'},{value:'"apple"'},{value:'"mint"'},{value:'"lemon"'},{value:'"sherbert"'},{value:'"tangerine"'},{value:'"compareTheMarket"'},{value:'"hometree"'}]}},cursor:{defaultValue:{value:"inherit"},description:"",name:"cursor",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}export{g as L,m as T,y as f};
