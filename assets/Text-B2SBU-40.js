import{R as p,r as w}from"./index-DVXBtNgz.js";import{u as d,a as l}from"./styled-components.browser.esm-DtukEPFB.js";import{B as b}from"./Box-CmZ3efAg.js";import{c}from"./polished.esm-DlUGb9xG.js";import{I as x}from"./Icon-DBhMssy7.js";import{t as e}from"./theme-D50qMPxU.js";import{f as y}from"./focusOutline-C7WNMGbj.js";const k=({className:n,href:i,onClick:r,openInNewTab:a,download:s,children:v,typo:u="regular",highlight:m=!1,iconToRender:t=a?"new-window":void 0,isTrailingIcon:o=!0})=>p.createElement(g,{href:i,className:n,onClick:r,download:s,$typo:u,$highlight:m,...a&&{rel:"noopener noreferrer",target:"_blank"}},t&&!o&&p.createElement(x,{mt:{custom:"3px"},mr:{custom:"4px"},render:t,size:u==="regular"?14:12,color:m?"lollipop":"liquorice"}),v,t&&o&&p.createElement(x,{mt:{custom:"3px"},ml:{custom:"4px"},render:t,size:u==="regular"?14:12,color:m?"lollipop":"liquorice"})),g=d.a(({$typo:n,$highlight:i})=>l`
    ${y()}
    display: inline-flex;
    flex-direction: row;

    ${n==="regular"&&l`
      font-size: 16px;
      line-height: 20px;
    `}

    ${n==="small"&&l`
      font-size: 14px;
      line-height: 20px;
    `}

      font-weight: ${e.font.weight.medium};
    text-decoration: underline;
    color: ${i?e.colors.lollipop:e.colors.liquorice};

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
  `),q=({color:n})=>l`
  & ${g} {
    color: ${n};

    path {
      fill: ${n};
    }

    &:hover {
      color: ${c(.1,n)};

      path {
        fill: ${c(.1,n)};
      }
    }
  }
`;k.__docgenInfo={description:"",methods:[],displayName:"Link",props:{className:{required:!1,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler"},description:""},openInNewTab:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},download:{required:!1,tsType:{name:"boolean"},description:""},typo:{required:!1,tsType:{name:"union",raw:"'regular' | 'small'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},highlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconToRender:{required:!1,tsType:{name:"union",raw:"keyof typeof iconList",elements:[{name:"literal",value:"'aa-inverted'"},{name:"literal",value:"'accidental-damage'"},{name:"literal",value:"'account-breakdown'"},{name:"literal",value:"'account-mlp'"},{name:"literal",value:"'activity-clipboard'"},{name:"literal",value:"'add-ons'"},{name:"literal",value:"'address-mta'"},{name:"literal",value:"'album-audio'"},{name:"literal",value:"'alert-engine'"},{name:"literal",value:"'apple-pay'"},{name:"literal",value:"'approved-file'"},{name:"literal",value:"'breakdown-alt'"},{name:"literal",value:"'cancel-bw'"},{name:"literal",value:"'car-mta'"},{name:"literal",value:"'car-repairs'"},{name:"literal",value:"'car-replacement'"},{name:"literal",value:"'car-usage'"},{name:"literal",value:"'chat-bubble'"},{name:"literal",value:"'checkout-with-text'"},{name:"literal",value:"'circle-tick'"},{name:"literal",value:"'claim-line'"},{name:"literal",value:"'clipboard-check'"},{name:"literal",value:"'close-panel'"},{name:"literal",value:"'confused-blue'"},{name:"literal",value:"'contact-email'"},{name:"literal",value:"'dashboard-high'"},{name:"literal",value:"'direct-debit'"},{name:"literal",value:"'doc-download'"},{name:"literal",value:"'doc-upload'"},{name:"literal",value:"'edit-contact'"},{name:"literal",value:"'edit-outline'"},{name:"literal",value:"'email-filled'"},{name:"literal",value:"'falling-items'"},{name:"literal",value:"'file-badge-2'"},{name:"literal",value:"'file-cabinet'"},{name:"literal",value:"'fraud-alert'"},{name:"literal",value:"'freezer-food'"},{name:"literal",value:"'google-play-badge'"},{name:"literal",value:"'help-aboutus'"},{name:"literal",value:"'help-buypolicy'"},{name:"literal",value:"'help-center'"},{name:"literal",value:"'help-idcheck'"},{name:"literal",value:"'help-manage-policy'"},{name:"literal",value:"'help-ncd'"},{name:"literal",value:"'help-verification'"},{name:"literal",value:"'home-excluded'"},{name:"literal",value:"'house-tree'"},{name:"literal",value:"'ios-store-badge'"},{name:"literal",value:"'live-chat'"},{name:"literal",value:"'live-chat2'"},{name:"literal",value:"'log-out'"},{name:"literal",value:"'manage-drivers'"},{name:"literal",value:"'manage-policy'"},{name:"literal",value:"'maximise-window'"},{name:"literal",value:"'minus-circle'"},{name:"literal",value:"'money-bag'"},{name:"literal",value:"'money-heart'"},{name:"literal",value:"'more-dots'"},{name:"literal",value:"'new-window'"},{name:"literal",value:"'no-excess'"},{name:"literal",value:"'open-panel'"},{name:"literal",value:"'out-of-home'"},{name:"literal",value:"'padlock-outline'"},{name:"literal",value:"'phone-filled'"},{name:"literal",value:"'phone-outline'"},{name:"literal",value:"'pin-code'"},{name:"literal",value:"'plus-circle'"},{name:"literal",value:"'policy-details'"},{name:"literal",value:"'policy-doc'"},{name:"literal",value:"'policy-docs'"},{name:"literal",value:"'pound-bold'"},{name:"literal",value:"'pound-filled-circle'"},{name:"literal",value:"'pound-medium'"},{name:"literal",value:"'pound-outline'"},{name:"literal",value:"'pound-regular'"},{name:"literal",value:"'question-help'"},{name:"literal",value:"'refer-a-friend'"},{name:"literal",value:"'reg-plate'"},{name:"literal",value:"'renewal-line'"},{name:"literal",value:"'repeat-charge'"},{name:"literal",value:"'schedule-quote'"},{name:"literal",value:"'send-message'"},{name:"literal",value:"'shield-check'"},{name:"literal",value:"'thumbs-up'"},{name:"literal",value:"'tow-truck'"},{name:"literal",value:"'trace-and-access'"},{name:"literal",value:"'up-down'"},{name:"literal",value:"'upload-documents'"},{name:"literal",value:"'upload-email'"},{name:"literal",value:"'wheel-flat'"},{name:"literal",value:"'windscreen-repair'"},{name:"literal",value:"'windscreen-replacement'"},{name:"literal",value:"aa"},{name:"literal",value:"addons"},{name:"literal",value:"alert"},{name:"literal",value:"amex"},{name:"literal",value:"arrow"},{name:"literal",value:"at"},{name:"literal",value:"axa"},{name:"literal",value:"bank"},{name:"literal",value:"basket"},{name:"literal",value:"bicycle"},{name:"literal",value:"boost"},{name:"literal",value:"breakdown"},{name:"literal",value:"briefcase"},{name:"literal",value:"burger"},{name:"literal",value:"bullets"},{name:"literal",value:"calendar"},{name:"literal",value:"camera"},{name:"literal",value:"cancel"},{name:"literal",value:"car"},{name:"literal",value:"card"},{name:"literal",value:"caret"},{name:"literal",value:"'caret-up'"},{name:"literal",value:"charge"},{name:"literal",value:"chat"},{name:"literal",value:"checkout"},{name:"literal",value:"city"},{name:"literal",value:"claim"},{name:"literal",value:"clipboard"},{name:"literal",value:"clock"},{name:"literal",value:"collpase"},{name:"literal",value:"confused"},{name:"literal",value:"copy"},{name:"literal",value:"crop"},{name:"literal",value:"cross"},{name:"literal",value:"download"},{name:"literal",value:"earth"},{name:"literal",value:"edit"},{name:"literal",value:"engine"},{name:"literal",value:"europe"},{name:"literal",value:"excluded"},{name:"literal",value:"expand"},{name:"literal",value:"facebook"},{name:"literal",value:"fence"},{name:"literal",value:"file"},{name:"literal",value:"filter"},{name:"literal",value:"fire"},{name:"literal",value:"flag"},{name:"literal",value:"folder"},{name:"literal",value:"fuel"},{name:"literal",value:"globe"},{name:"literal",value:"gpay"},{name:"literal",value:"house"},{name:"literal",value:"id"},{name:"literal",value:"inbox"},{name:"literal",value:"included"},{name:"literal",value:"info"},{name:"literal",value:"injury"},{name:"literal",value:"instagram"},{name:"literal",value:"intercom"},{name:"literal",value:"intercom2"},{name:"literal",value:"iphone"},{name:"literal",value:"jewellery"},{name:"literal",value:"key"},{name:"literal",value:"laptop"},{name:"literal",value:"leaks"},{name:"literal",value:"lightbulb"},{name:"literal",value:"link"},{name:"literal",value:"linkedin"},{name:"literal",value:"location"},{name:"literal",value:"marshmallow"},{name:"literal",value:"mastercard"},{name:"literal",value:"maximise"},{name:"literal",value:"medical"},{name:"literal",value:"minimise"},{name:"literal",value:"minus"},{name:"literal",value:"mulsanne"},{name:"literal",value:"notes"},{name:"literal",value:"notification"},{name:"literal",value:"onfido"},{name:"literal",value:"other"},{name:"literal",value:"padlock"},{name:"literal",value:"people"},{name:"literal",value:"person"},{name:"literal",value:"photo"},{name:"literal",value:"plus"},{name:"literal",value:"policy"},{name:"literal",value:"premfina"},{name:"literal",value:"profile"},{name:"literal",value:"prohibited"},{name:"literal",value:"property"},{name:"literal",value:"rac"},{name:"literal",value:"ravelin"},{name:"literal",value:"refund"},{name:"literal",value:"renewal"},{name:"literal",value:"return"},{name:"literal",value:"search"},{name:"literal",value:"security"},{name:"literal",value:"settings"},{name:"literal",value:"shield"},{name:"literal",value:"shopping"},{name:"literal",value:"sofa"},{name:"literal",value:"stack"},{name:"literal",value:"storm"},{name:"literal",value:"stripe"},{name:"literal",value:"subsidence"},{name:"literal",value:"theft"},{name:"literal",value:"tick"},{name:"literal",value:"training"},{name:"literal",value:"trash"},{name:"literal",value:"twitter"},{name:"literal",value:"upload"},{name:"literal",value:"vandalism"},{name:"literal",value:"village"},{name:"literal",value:"visa"},{name:"literal",value:"warning"},{name:"literal",value:"watch"},{name:"literal",value:"wave"},{name:"literal",value:"wellbeing"},{name:"literal",value:"windscreen"}]},description:"",defaultValue:{value:"openInNewTab ? 'new-window' : undefined",computed:!1}},isTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const h={"hero-alternate":`
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
  `},f=w.forwardRef(({children:n,typo:i="body-regular",className:r="",tag:a="p",align:s="left",color:v="liquorice",cursor:u="inherit",title:m="",...t},o)=>p.createElement(P,{forwardedAs:a,className:r,$typo:i,$align:s,$color:v,cursor:u,title:m,...t,ref:o},n));f.displayName="Text";const z=n=>Object.keys(h).includes(n),P=d(b)(({$align:n,$color:i,$cursor:r,$typo:a})=>l`
    /** TYPOGRAPHY STYLES */

    ${z(a)&&h[a]}

    /** DEPRECATED TYPOGRAPHY STYLES */
    ${a==="header-large"&&l`
      font-size: 24px;
      line-height: 31px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 42px;
        line-height: 54px;
      }
    `}

  ${a==="header-medium"&&l`
      font-size: 21px;
      line-height: 27px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 41px;
      }
    `}

  ${a==="header-small"&&l`
      font-size: 18px;
      line-height: 23px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 27px;
      }
    `}

  ${a==="desc-heavy"&&l`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${a==="desc-medium"&&l`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${a==="desc-light"&&l`
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }
    `}

  ${a==="desc-small"&&l`
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  ${a==="base"&&l`
      font-size: 14px;
      line-height: 23px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 26px;
      }
    `}

  ${a==="base-small"&&l`
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 14px;
        line-height: 23px;
      }
    `}

  ${a==="base-xsmall"&&l`
      font-size: 10px;
      line-height: 16px;
      font-weight: 400;

      @media (min-width: 768px) {
        font-size: 12px;
        line-height: 19px;
      }
    `}
  
  ${a==="label-large"&&l`
      font-size: 12px;
      line-height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.75px;
    `}

    text-align: ${n};
    cursor: ${r};
    color: ${e.colors[i]};
    ${q({color:e.colors[i]})}
  `);f.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},tag:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},typo:{required:!1,tsType:{name:"union",raw:"Typo | (string & Record<never, never>)",elements:[{name:"union",raw:`| 'hero-alternate'
| 'hero'
| 'heading-alternate'
| 'heading-large'
| 'heading-medium'
| 'heading-small'
| 'headline-regular'
| 'headline-small'
| 'body-standfirst'
| 'body-regular'
| 'body-small'
| 'caption'
| 'label'`,elements:[{name:"literal",value:"'hero-alternate'"},{name:"literal",value:"'hero'"},{name:"literal",value:"'heading-alternate'"},{name:"literal",value:"'heading-large'"},{name:"literal",value:"'heading-medium'"},{name:"literal",value:"'heading-small'"},{name:"literal",value:"'headline-regular'"},{name:"literal",value:"'headline-small'"},{name:"literal",value:"'body-standfirst'"},{name:"literal",value:"'body-regular'"},{name:"literal",value:"'body-small'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'label'"}]},{name:"unknown"}]},description:"",defaultValue:{value:"'body-regular'",computed:!1}},align:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'left'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"lollipop"},{name:"literal",value:"marshmallowPink"},{name:"literal",value:"bubblegum"},{name:"literal",value:"fairyFloss"},{name:"literal",value:"boba"},{name:"literal",value:"liquorice"},{name:"literal",value:"sesame"},{name:"literal",value:"chia"},{name:"literal",value:"custard"},{name:"literal",value:"mascarpone"},{name:"literal",value:"coconut"},{name:"literal",value:"cream"},{name:"literal",value:"spearmint"},{name:"literal",value:"feijoa"},{name:"literal",value:"blueberry"},{name:"literal",value:"macaroon"},{name:"literal",value:"pistachio"},{name:"literal",value:"matcha"},{name:"literal",value:"caramel"},{name:"literal",value:"peanut"},{name:"literal",value:"marzipan"},{name:"literal",value:"oatmeal"},{name:"literal",value:"strawberry"},{name:"literal",value:"watermelon"},{name:"literal",value:"apple"},{name:"literal",value:"mint"},{name:"literal",value:"lemon"},{name:"literal",value:"sherbert"},{name:"literal",value:"tangerine"},{name:"literal",value:"compareTheMarket"},{name:"literal",value:"confused"},{name:"literal",value:"onfido"},{name:"literal",value:"twitter"},{name:"literal",value:"premfina"},{name:"literal",value:"checkout"},{name:"literal",value:"facebook"},{name:"literal",value:"stripe"},{name:"literal",value:"intercom"},{name:"literal",value:"ravelin"},{name:"literal",value:"rac"},{name:"literal",value:"hometree"}]},description:"",defaultValue:{value:"'liquorice'",computed:!1}},cursor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'inherit'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},m:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mx:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"SpacingProp | 'auto'",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"literal",value:"'auto'"}]}}]}}]},description:""},my:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},ml:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mr:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mt:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""},mb:{required:!1,tsType:{name:"union",raw:"PropValue | PropByBreakpoint<PropValue>",elements:[{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]},{name:"signature",type:"object",raw:"{ [key in Breakpoint]?: PropValue }",signature:{properties:[{key:{name:"unknown",required:!1},value:{name:"union",raw:"'0' | Spacing | { custom: number | string }",elements:[{name:"literal",value:"'0'"},{name:"union",raw:"'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'",elements:[{name:"literal",value:"'8px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'16px'"},{name:"literal",value:"'24px'"},{name:"literal",value:"'32px'"},{name:"literal",value:"'48px'"},{name:"literal",value:"'64px'"}]},{name:"signature",type:"object",raw:"{ custom: number | string }",signature:{properties:[{key:"custom",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}]}}]}}]},description:""}}};export{k as L,f as T,h as f};
