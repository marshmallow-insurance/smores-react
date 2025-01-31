import{f as M}from"./index-DLuT9rNG.js";import{r as w,R as S}from"./index-CO7zwj5_.js";import{d as v,t as e}from"./theme-pdmEyuPW.js";import{m as K}from"./space-B-76eNGj.js";import"./_commonjsHelpers-Cpj98o6Y.js";function A(){var n="/home/runner/work/smores-react/smores-react/src/SliderInput/SliderInput.tsx",i="35c9b82ac971949b0cc02bc293c44f0e2bd3bd80",a=window,o="__coverage__",c={path:"/home/runner/work/smores-react/smores-react/src/SliderInput/SliderInput.tsx",statementMap:{0:{start:{line:5,column:27},end:{line:30,column:1}},1:{start:{line:7,column:4},end:{line:28,column:6}},2:{start:{line:17,column:10},end:{line:17,column:47}},3:{start:{line:31,column:21},end:{line:76,column:1}},4:{start:{line:77,column:0},end:{line:77,column:94}}},fnMap:{0:{name:"SliderInput2",decl:{start:{line:6,column:11},end:{line:6,column:23}},loc:{start:{line:6,column:102},end:{line:29,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:16,column:18},end:{line:16,column:19}},loc:{start:{line:16,column:29},end:{line:18,column:9}},line:16}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/SliderInput/SliderInput.tsx"],names:["SliderInput"],mappings:"AAAA,OAAO,SAAS,kBAAkB;AAClC,OAAO,YAAY;AACnB,SAAS,aAAa;AACtB,SAAS,cAAiD;AAcnD,aAAM,cAAc;AAAA,EACzB,SAASA,aACP,EAAE,OAAO,UAAU,KAAK,KAAK,MAAM,GAAG,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,GAAG,KAAK,GACtE,KACA;AACA,WACE;AAAA,MAAC;AAAA;AAAA,QACC;AAAA,QACA,MAAK;AAAA,QACL;AAAA,QACA;AAAA,QACA;AAAA,QACA;AAAA,QACA,UAAU,CAAC,UAAU;AACnB,mBAAS,MAAM,OAAO,aAAa;AAAA,QACrC;AAAA,QACA,IAAI;AAAA,QACJ,KAAK;AAAA,QACL,KAAK;AAAA,QACL,KAAK;AAAA,QACL,KAAK;AAAA,QACL,KAAK;AAAA,QACL,KAAK;AAAA,QACJ,GAAG;AAAA;AAAA,IACN;AAAA,EAEJ;AACF;AAEA,MAAM,eAAe,OAAO;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,gBASZ,MAAM,OAAO,OAAO;AAAA,IAChC,MAAM;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,oBAiBU,MAAM,OAAO,OAAO;AAAA;AAAA;AAAA,4BAGZ,MAAM,OAAO,eAAe;AAAA;AAAA,2BAE7B,MAAM,OAAO,QAAQ;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA,oBAO5B,MAAM,OAAO,OAAO;AAAA;AAAA,4BAEZ,MAAM,OAAO,eAAe;AAAA,0BAC9B,MAAM,OAAO,QAAQ;AAAA;AAAA;AAAA;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"35c9b82ac971949b0cc02bc293c44f0e2bd3bd80"},r=a[o]||(a[o]={});(!r[n]||r[n].hash!==i)&&(r[n]=c);var t=r[n];return A=function(){return t},t}A();const u=(A().s[0]++,w.forwardRef(function({value:i,onChange:a,min:o,max:c,step:r,m:t,mx:p,my:b,ml:h,mr:C,mt:O,mb:f,...g},x){return A().f[0]++,A().s[1]++,S.createElement(Q,{ref:x,type:"range",min:o,max:c,step:r,value:i,onChange:I=>{A().f[1]++,A().s[2]++,a(I.target.valueAsNumber)},$m:t,$mx:p,$my:b,$ml:h,$mr:C,$mt:O,$mb:f,...g})})),Q=(A().s[3]++,v.input`
  outline: 0;
  border: 0;
  padding: 0;
  border-radius: 500px;
  width: 100%;
  //guard rail as we have a hard coded limit on progress bar length
  max-width: 2000px;
  transition: box-shadow 0.2s ease-in-out;
  background: ${e.colors.coconut};
  ${K};

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    overflow: hidden;
    height: 44px;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
      height: 44px;
      -webkit-appearance: none;
      transition: box-shadow 0.2s ease-in-out;
    }
    &::-webkit-slider-thumb {
      width: 44px;
      -webkit-appearance: none;
      height: 44px;
      cursor: ew-resize;
      background: ${e.colors.coconut};
      box-shadow:
      //handles the progress bar
        -1000px 0 0 980px ${e.colors.marshmallowPink},
        //added for the focus anim
        inset 0 0 0 44px ${e.colors.lollipop};
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      position: relative;
    }
    &:active::-webkit-slider-thumb,
    &:focus::-webkit-slider-thumb {
      background: ${e.colors.coconut};
      box-shadow:
        -1000px 0 0 980px ${e.colors.marshmallowPink},
        inset 0 0 0 4px ${e.colors.lollipop};
    }
  }
`);A().s[4]++;u.__docgenInfo={description:"",methods:[],displayName:"SliderInput"};const G={title:"SliderInput",component:u,args:{onChange:M()}},s={args:{min:1,max:10,mt:"64px","aria-label":"slider"}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 10,
    mt: '64px',
    'aria-label': 'slider'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const U=["Default"];export{s as Default,U as __namedExportsOrder,G as default};
//# sourceMappingURL=SliderInput.stories-7ns27ss3.js.map
