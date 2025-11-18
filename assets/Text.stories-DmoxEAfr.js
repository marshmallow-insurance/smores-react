import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./styled-components.browser.esm-DIuKgO9U.js";import{B as c}from"./index-CeQunsDR.js";import{f as q,T as r,l as E,g as N}from"./Text-CO2oexkb.js";import{c as F}from"./colourOptions-CNulUzjK.js";import"./index-BF9HgEP8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./space-BLajQSvN.js";import"./polished.esm-CYsXSD1d.js";import"./index-DWWf4KiR.js";import"./colourMap-BFMmM0cs.js";import"./variables-CIIDHwG2.js";import"./theme-D-5TnJVB.js";import"./focusOutline-BoWOT1x_.js";function u(){var e="/home/runner/work/smores-react/smores-react/src/utils/storybookHelpers/fontOptions.tsx",a="ed9034ed03c80004797ea12ae7c3f390d0f2910b",n=globalThis,t="__coverage__",l={path:"/home/runner/work/smores-react/smores-react/src/utils/storybookHelpers/fontOptions.tsx",statementMap:{0:{start:{line:2,column:27},end:{line:4,column:1}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/smores-react/smores-react/src/utils/storybookHelpers/fontOptions.tsx"],names:[],mappings:"AAAA,SAAS,6BAA6B;AAE/B,aAAM,cAAc,MAAM;AAAA,EAC/B,IAAI,IAAI,sBAAsB,EAAE,MAAM,IAAI,CAAC;AAC7C;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ed9034ed03c80004797ea12ae7c3f390d0f2910b"},s=n[t]||(n[t]={});(!s[e]||s[e].hash!==a)&&(s[e]=l);var p=s[e];return u=function(){return p},p}u();const I=(u().s[0]++,Array.from(new Set(q().split(", ")))),x=_(c)`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1fr;
  margin-bottom: 24px;
  gap: 10px;
`,G=({typos:e})=>{const a=["hero","heading","body","link","label","caption"],n=e.toSorted((t,l)=>{const s=a.findIndex(y=>t.includes(y)),p=a.findIndex(y=>l.includes(y));return s===p?l.localeCompare(t):s-p});return o.jsxs(c,{children:[o.jsxs(x,{children:[o.jsx(r,{tag:"p",typo:"body-regular",children:"Name"}),o.jsx(r,{tag:"p",typo:"body-regular",children:"Single Line"}),o.jsx(r,{tag:"p",typo:"body-regular",children:"Paragraph"})]}),n.map(t=>o.jsxs(x,{children:[o.jsx(r,{tag:"p",typo:"font.body.200",color:"color.text.subtle",children:t}),o.jsx(r,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time."}),!["hero-alternate","hero","heading-alternate","label"].includes(t)&&!["font.hero.100","font.hero.200","font.hero.300","font.hero.400","font.label.100","font.label.200"].includes(t)&&o.jsx(r,{tag:"p",typo:t,color:"color.text.base",children:"They waited patiently for what seemed a very long time. They waited patiently for what seemed a very long time."})]},t))]})},oe={title:"Text",component:r,argTypes:{color:{control:"select",options:F}},decorators:[e=>o.jsx("div",{style:{margin:"64px"},children:o.jsx(e,{})})]},H=I,i={args:{tag:"p"},argTypes:{typo:{control:"select",options:I}},render:e=>o.jsx(r,{...e,children:"The quick brown fox jumps over the lazy dog"})},d={args:{tag:"label",typo:"label",color:"color.text.base"},render:e=>o.jsx(r,{...e,children:"The quick brown fox jumps over the lazy dog"})},m={args:{tag:"p",title:"a11y title tooltip"},render:e=>o.jsx(r,{...e,children:"The quick brown fox jumps over the lazy dog"})},g={render:()=>o.jsx(G,{typos:H})},h={render:()=>o.jsx(c,{children:Object.keys(E).map(e=>{const a=N(e),n=e==="hero-alternate"||e==="hero"||e==="heading-large"?" (Note: This typo maps to different new values based on screen size)":"";return o.jsxs(x,{mb:"32px",children:[o.jsxs(r,{tag:"p",typo:"font.body.200",color:"color.text.subtle",mb:"8px",children:["Deprecated typo: ",e,o.jsx("br",{}),n]}),o.jsx(c,{children:o.jsxs(r,{tag:"p",typo:e,color:"color.text.base",children:["This is rendered using the deprecated typo value:"," ",e]})}),o.jsx(c,{children:o.jsxs(r,{tag:"p",typo:a,color:"color.text.base",children:["This is rendered using the mapped new typo value: ",a]})})]},e)})})};var T,b,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tag: 'p'
  },
  argTypes: {
    typo: {
      control: 'select',
      options: fontOptions
    }
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var A,v,j;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    tag: 'label',
    typo: 'label',
    color: 'color.text.base'
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,k,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    title: 'a11y title tooltip'
  },
  render: args => <Text {...args}>The quick brown fox jumps over the lazy dog</Text>
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,M,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TypoCollection typos={typos} />
}`,...(C=(M=g.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var O,z,D;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box>
      {Object.keys(legacyFontStyleMapping).map(deprecatedTypo => {
      const mappedTypo = getTypoPath(deprecatedTypo as TypoTypes);
      const responsiveNote = deprecatedTypo === 'hero-alternate' || deprecatedTypo === 'hero' || deprecatedTypo === 'heading-large' ? ' (Note: This typo maps to different new values based on screen size)' : '';
      return <Grid key={deprecatedTypo} mb="32px">
            <Text tag="p" typo="font.body.200" color="color.text.subtle" mb="8px">
              Deprecated typo: {deprecatedTypo}
              <br />
              {responsiveNote}
            </Text>
            <Box>
              <Text tag="p" typo={deprecatedTypo as TypoTypes} color="color.text.base">
                This is rendered using the deprecated typo value:{' '}
                {deprecatedTypo}
              </Text>
            </Box>
            <Box>
              <Text tag="p" typo={mappedTypo} color="color.text.base">
                This is rendered using the mapped new typo value: {mappedTypo}
              </Text>
            </Box>
          </Grid>;
    })}
    </Box>
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const re=["Default","Label","WithTitle","Collection","MappedDeprecatedTypoValues"];export{g as Collection,i as Default,d as Label,h as MappedDeprecatedTypoValues,m as WithTitle,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=Text.stories-DmoxEAfr.js.map
