import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-ByIQkB2l.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,s as i}from"./iframe-BxKzTu0s.js";import{n as a,t as o}from"./Box-DjWgY_1i.js";import{n as s,t as c}from"./CheckBox-CMQnWE1h.js";function l(){var e=`/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx`,t=`72f3ee6e437cd7a8efaf6fd8e7dc034053a4f747`,n=globalThis,r=`__coverage__`,i={path:`/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx`,statementMap:{0:{start:{line:5,column:29},end:{line:14,column:2}},1:{start:{line:5,column:102},end:{line:14,column:2}},2:{start:{line:7,column:46},end:{line:13,column:12}},3:{start:{line:10,column:16},end:{line:10,column:33}},4:{start:{line:15,column:18},end:{line:19,column:1}},5:{start:{line:17,column:27},end:{line:17,column:56}},6:{start:{line:18,column:24},end:{line:18,column:40}},7:{start:{line:20,column:0},end:{line:1363,column:2}}},fnMap:{0:{name:`(anonymous_0)`,decl:{start:{line:5,column:29},end:{line:5,column:30}},loc:{start:{line:5,column:102},end:{line:14,column:2}},line:5},1:{name:`(anonymous_1)`,decl:{start:{line:7,column:20},end:{line:7,column:21}},loc:{start:{line:7,column:46},end:{line:13,column:12}},line:7},2:{name:`(anonymous_2)`,decl:{start:{line:10,column:10},end:{line:10,column:11}},loc:{start:{line:10,column:16},end:{line:10,column:33}},line:10},3:{name:`(anonymous_3)`,decl:{start:{line:17,column:20},end:{line:17,column:21}},loc:{start:{line:17,column:27},end:{line:17,column:56}},line:17},4:{name:`(anonymous_4)`,decl:{start:{line:18,column:9},end:{line:18,column:10}},loc:{start:{line:18,column:24},end:{line:18,column:40}},line:18}},branchMap:{0:{loc:{start:{line:5,column:48},end:{line:5,column:63}},type:`default-arg`,locations:[{start:{line:5,column:59},end:{line:5,column:63}}],line:5},1:{loc:{start:{line:17,column:27},end:{line:17,column:56}},type:`cond-expr`,locations:[{start:{line:17,column:40},end:{line:17,column:48}},{start:{line:17,column:51},end:{line:17,column:56}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0],1:[0,0]},inputSourceMap:{version:3,names:[],sources:[`/home/runner/work/smores-react/smores-react/src/CheckBoxGroup/CheckBoxGroup.tsx`],mappings:`AACA,OAAO,YAAY;AAEnB,SAAS,WAAW;AACpB,SAAS,gBAAgB;;AAgBzB,OAAO,MAAM,iBAAyC,EACpD,MACA,UACA,WAAW,MACX,GAAG,kBAEH,qBAAC,WAAD;CAAqB;WAClB,KAAK,KAAK,SACT,qBAAC,UAAD;EAEE,IAAI,OAAO,KAAK,EAAE;EAClB,SAAS,KAAK;EACd,cAAc,SAAS,KAAK,EAAE;EAC9B,GAAI;YAEH,KAAK;CACE,GAPH,KAAK,EAOF,CACX;AACQ;AAGb,MAAM,YAAY,OAAO,GAAG,CAAC,AAAuB;;qBAE/B,MAAO,EAAE,WAAW,WAAW,MAAO;UACjD,EAAE,YAAY,MAAM,MAAM,KAAK`},_coverageSchema:`1a1c01bbd47fc00a2c39e90264f33305004495a9`,hash:`72f3ee6e437cd7a8efaf6fd8e7dc034053a4f747`},a=n[r]||(n[r]={});(!a[e]||a[e].hash!==t)&&(a[e]=i);var o=a[e];return l=function(){return o},o}var u,d,f;function p(){return(p=e((()=>{r(),a(),s(),u=n(),l(),l().s[0]++,d=({list:e,onToggle:t,isColumn:n=(l().b[0][0]++,!0),...r})=>(l().f[0]++,l().s[1]++,(0,u.jsx)(f,{isColumn:n,children:e.map(e=>(l().f[1]++,l().s[2]++,(0,u.jsx)(c,{id:String(e.id),checked:e.checked,toggle:()=>(l().f[2]++,l().s[3]++,t(e.id)),...r,children:e.label},e.id)))})),f=(l().s[4]++,i(o)`
  display: flex;
  flex-direction: ${e=>(l().f[3]++,l().s[5]++,e.isColumn?(l().b[1][0]++,`column`):(l().b[1][1]++,`row`))};
  gap: ${({theme:e})=>(l().f[4]++,l().s[6]++,e.space[200])};
`),l().s[7]++,d.__docgenInfo={description:``,methods:[],displayName:`CheckBoxGroup`,props:{list:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: number
  label: string
  checked: boolean
  value?: string | number
}`,signature:{properties:[{key:`id`,value:{name:`number`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`checked`,value:{name:`boolean`,required:!0}},{key:`value`,value:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}],required:!1}}]}}],raw:`Item[]`},description:``},onToggle:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: number) => void`,signature:{arguments:[{type:{name:`number`},name:`id`}],return:{name:`void`}}},description:``},isColumn:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},m:{required:!1,tsType:{name:`union`,raw:`PropValue | PropByBreakpoint<PropValue>`,elements:[{name:`union`,raw:`| '0'
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
}`,signature:{properties:[{key:{name:`unknown`,required:!0},value:{name:`unknown[K]`,raw:`T[K]`}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}]},{name:`signature`,type:`object`,raw:`{ custom: number | string }`,signature:{properties:[{key:`custom`,value:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}],required:!0}}]}}]}],raw:`Record<Breakpoint, PropValue>`}],raw:`Partial<Record<Breakpoint, PropValue>>`}]},description:``}}}})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{m=t(),p(),h=n(),g={title:`Checkbox Group`,component:d,decorators:[e=>(0,h.jsx)(`div`,{style:{margin:`64px`},children:(0,h.jsx)(e,{})})]},_=[{id:0,label:`Apples`,checked:!1},{id:1,label:`Oranges`,checked:!1},{id:2,label:`Grapes`,checked:!1},{id:3,label:`Bananas`,checked:!1}],v={render:()=>{let[e,t]=(0,m.useState)(_);return(0,h.jsx)(d,{list:_,onToggle:n=>{let r=[...e];r[n].checked=!e[n].checked,t(r)}})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [list, setList] = useState(options);
    const toggleCheck = (id: number) => {
      const newList = [...list];
      newList[id].checked = !list[id].checked;
      setList(newList);
    };
    return <CheckBoxGroup list={options} onToggle={toggleCheck} />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]})))()}b();export{v as Default,y as __namedExportsOrder,g as default};
//# sourceMappingURL=CheckBoxGroup.stories-BhJM_QF8.js.map