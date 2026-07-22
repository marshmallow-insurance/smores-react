import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{o as n,s as r}from"./iframe-I_lF-bjH.js";import{n as i,t as a}from"./Box-Btyz54ah.js";import{t as o}from"./Text-CJHXoyl-.js";import{t as s}from"./Text-Cf5tB-IO.js";function c(){var e=`/home/runner/work/smores-react/smores-react/src/LabelledText/LabelledText.tsx`,t=`6c73b449c7f61e48407a535cc9fa6524fd54407a`,n=globalThis,r=`__coverage__`,i={path:`/home/runner/work/smores-react/smores-react/src/LabelledText/LabelledText.tsx`,statementMap:{0:{start:{line:5,column:28},end:{line:14,column:2}},1:{start:{line:5,column:102},end:{line:14,column:2}},2:{start:{line:15,column:18},end:{line:22,column:1}},3:{start:{line:20,column:43},end:{line:20,column:55}},4:{start:{line:23,column:0},end:{line:1337,column:2}}},fnMap:{0:{name:`(anonymous_0)`,decl:{start:{line:5,column:28},end:{line:5,column:29}},loc:{start:{line:5,column:102},end:{line:14,column:2}},line:5},1:{name:`(anonymous_1)`,decl:{start:{line:20,column:21},end:{line:20,column:22}},loc:{start:{line:20,column:43},end:{line:20,column:55}},line:20}},branchMap:{0:{loc:{start:{line:5,column:48},end:{line:5,column:63}},type:`default-arg`,locations:[{start:{line:5,column:62},end:{line:5,column:63}}],line:5}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{0:[0]},inputSourceMap:{version:3,names:[],sources:[`/home/runner/work/smores-react/smores-react/src/LabelledText/LabelledText.tsx`],mappings:`AACA,OAAO,YAAY;AAGnB,SAAS,WAAW;AACpB,SAAS,YAAY;;AAQrB,OAAO,MAAM,gBAAuC,EAClD,OACA,UACA,cAAc,GACd,GAAG,kBAEH,sBAAC,WAAD;CAAW,GAAI;CAAa,cAAc,cAAc;WAAxD,CACE,qBAAC,MAAD;EAAM,KAAI;EAAQ,OAAM;EAAS,MAAK;YACnC;CACG,IACL,QACQ;;AAGb,MAAM,YAAY,OAAO,GAAG,CAAC,AAA0B;;;;;sBAKjC,EAAE,mBAAmB,aAAa`},_coverageSchema:`1a1c01bbd47fc00a2c39e90264f33305004495a9`,hash:`6c73b449c7f61e48407a535cc9fa6524fd54407a`},a=n[r]||(n[r]={});(!a[e]||a[e].hash!==t)&&(a[e]=i);var o=a[e];return c=function(){return o},o}var l,u,d,f=e((()=>{r(),a(),s(),l=t(),c(),c().s[0]++,u=({label:e,children:t,labelMargin:n=(c().b[0][0]++,4),...r})=>(c().f[0]++,c().s[1]++,(0,l.jsxs)(d,{...r,$labelMargin:n+`px`,children:[(0,l.jsx)(o,{tag:`label`,color:`sesame`,typo:`label`,children:e}),t]})),d=(c().s[2]++,n(i)`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: ${({$labelMargin:e})=>(c().f[1]++,c().s[3]++,e)};
  }
`),c().s[4]++,u.__docgenInfo={description:``,methods:[],displayName:`LabelledText`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},label:{required:!0,tsType:{name:`union`,raw:`string | JSX.Element`,elements:[{name:`string`},{name:`JSX.Element`}]},description:``},labelMargin:{required:!1,tsType:{name:`union`,raw:`2 | 4 | 8 | number`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`8`},{name:`number`}]},description:``,defaultValue:{value:`4`,computed:!1}},m:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},mx:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`SpacingProp | 'auto'`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`literal`,value:`'auto'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`SpacingProp | 'auto'`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`literal`,value:`'auto'`}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},my:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},ml:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},mr:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},mt:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``},mb:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown`},{name:`union`,raw:`| '0'
| LegacySpacing
| ThemeSpacing
| { custom: number | string }`,elements:[{name:`literal`,value:`'0'`},{name:`union`,raw:`'8px' | '12px' | '16px' | '24px' | '32px' | '48px' | '64px'`,elements:[{name:`literal`,value:`'8px'`},{name:`literal`,value:`'12px'`},{name:`literal`,value:`'16px'`},{name:`literal`,value:`'24px'`},{name:`literal`,value:`'32px'`},{name:`literal`,value:`'48px'`},{name:`literal`,value:`'64px'`}]},{name:`intersection`,raw:`{
  [K in keyof T]: T[K]
} & {}`,elements:[{name:`signature`,type:`object`,raw:`{
  [K in keyof T]: T[K]
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``}}}})),p,m,h,g;e((()=>{f(),p=t(),m={title:`LabelledText`,component:u,decorators:[e=>(0,p.jsx)(`div`,{style:{margin:`64px`},children:(0,p.jsx)(e,{})})]},h={args:{label:`Name`},render:e=>(0,p.jsx)(u,{...e,children:`Hideo Kojima`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name'
  },
  render: args => <LabelledText {...args}>Hideo Kojima</LabelledText>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};
//# sourceMappingURL=LabelledText.stories-BxdnQtOy.js.map