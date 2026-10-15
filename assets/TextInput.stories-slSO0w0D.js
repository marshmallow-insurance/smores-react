import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./SupportMessage-Bw-nWlwo.js";import{n as a,t as o}from"./TextInput-BJfk7q-b.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{s=t(),r(),a(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`TextInput`,component:o},d=e=>{let[{value:t},n]=l(),r=t=>{n({value:t}),e?.onChange?.(t)};return(0,c.jsx)(o,{...e,value:t,onChange:r})},f={args:{name:`textInput`,placeholder:`Placeholder text`},render:d},p={args:{id:`textInput2`,name:`textInput`,placeholder:`Placeholder text`,fallbackStyle:!0},render:d},m=e=>{let[t,n]=(0,s.useState)(e.value??``);return(0,c.jsx)(o,{...e,value:t,onChange:n})},h={args:{id:`textInput3`,name:`textInput`,placeholder:`Placeholder text`,type:`password`},render:d},g={args:{id:`textInputDate`,name:`textInputDate`,label:`Date`,placeholder:`Date`,type:`date`},render:m},_={args:{id:`textInputTime`,name:`textInputTime`,label:`Time`,placeholder:`Time`,type:`time`},render:m},v={args:{id:`generic`,label:`First name`,placeholder:`Enter name...`,errorMsg:`This field is required`,assistiveText:(0,c.jsxs)(c.Fragment,{children:[`This is a description with a`,` `,(0,c.jsx)(`a`,{href:`https://marshmallow.com`,rel:`noopener noreferrer`,target:`_blank`,children:`link`}),`.`]})},render:d},y={args:{id:`label-as-title`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,errorMsg:`This field is required`},render:d},b={args:{id:`fallback`,label:`First name`,placeholder:`Enter name...`,fallbackStyle:!0,errorMsg:`This field is required`},render:d},x={args:{id:`disabled`,label:`First name`,placeholder:`Enter name...`,disabled:!0,errorMsg:`This field is required`},render:d},S={args:{id:`disabled-fallback`,label:`First name`,placeholder:`Enter name...`,disabled:!0,fallbackStyle:!0},render:d},C={args:{id:`required`,label:`First name`,placeholder:`Enter name...`,required:!0,errorMsg:`This field is required`},render:d},w={args:{id:`leading-icon`,label:`First name`,placeholder:`Enter name...`,frontIcon:`search`,errorMsg:`This field is required`},render:d},T={args:{id:`trailing-icon`,label:`First name`,placeholder:`Enter name...`,trailingIcon:`car`,errorMsg:`This field is required`},render:d},E={args:{id:`assistive-text`,label:`First name`,placeholder:`Enter name...`,assistiveText:`Some assistive text`,errorMsg:`This field is required`},render:d},D={args:{id:`react-element-assistive-text`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,assistiveText:(0,c.jsxs)(c.Fragment,{children:[`This is a description with a`,` `,(0,c.jsx)(`a`,{href:`https://marshmallow.com`,rel:`noopener noreferrer`,target:`_blank`,children:`link`}),`.`]}),errorMsg:`This field is required`,completed:!0},render:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},O={args:{id:`completed`,label:`First name`,placeholder:`Enter name...`,completed:!0,errorMsg:`This field is required`},render:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},k={args:{id:`as-title`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,errorMsg:`This field is required`},render:d},A={args:{id:`error`,label:`First name`,placeholder:`Enter name...`,required:!0,assistiveText:`Some assistive text`,error:!0,errorMsg:`This field is required`},render:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},j={args:{id:`react-element-error`,label:`First name`,placeholder:`Enter name...`,required:!0,error:!0,errorMsg:(0,c.jsx)(i,{type:`warning`,description:`Error!!`})},render:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},M={args:{id:`fallback-error`,label:`First name`,placeholder:`Enter name...`,fallbackStyle:!0,required:!0,error:!0,errorMsg:`This field is required`},render:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},N=[`Default`,`DefaultFallback`,`TypePassword`,`TypeDate`,`TypeTime`,`Generic`,`WithLabelAsTitle`,`Fallback`,`Disabled`,`DisabledFallback`,`Required`,`LeadingIcon`,`TrailingIcon`,`AssistiveText`,`ReactElementAssistiveText`,`Completed`,`AsTitle`,`Error`,`ReactElementError`,`FallbackError`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'textInput',
    placeholder: 'Placeholder text'
  },
  render: InteractiveTemplate
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput2',
    name: 'textInput',
    placeholder: 'Placeholder text',
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput3',
    name: 'textInput',
    placeholder: 'Placeholder text',
    type: 'password'
  },
  render: InteractiveTemplate
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInputDate',
    name: 'textInputDate',
    label: 'Date',
    placeholder: 'Date',
    type: 'date'
  },
  render: LocalStateTemplate
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInputTime',
    name: 'textInputTime',
    label: 'Time',
    placeholder: 'Time',
    type: 'time'
  },
  render: LocalStateTemplate
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'generic',
    label: 'First name',
    placeholder: 'Enter name...',
    errorMsg: 'This field is required',
    assistiveText: <>
        This is a description with a{' '}
        <a href="https://marshmallow.com" rel="noopener noreferrer" target="_blank">
          link
        </a>
        .
      </>
  },
  render: InteractiveTemplate
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'label-as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'leading-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    frontIcon: 'search',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'trailing-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    trailingIcon: 'car',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    assistiveText: 'Some assistive text',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'react-element-assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    assistiveText: <>
        This is a description with a{' '}
        <a href="https://marshmallow.com" rel="noopener noreferrer" target="_blank">
          link
        </a>
        .
      </>,
    errorMsg: 'This field is required',
    completed: true
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'completed',
    label: 'First name',
    placeholder: 'Enter name...',
    completed: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    assistiveText: 'Some assistive text',
    error: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'react-element-error',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    error: true,
    errorMsg: <SupportMessage type="warning" description="Error!!" />
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'fallback-error',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    required: true,
    error: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{k as AsTitle,E as AssistiveText,O as Completed,f as Default,p as DefaultFallback,x as Disabled,S as DisabledFallback,A as Error,b as Fallback,M as FallbackError,v as Generic,w as LeadingIcon,D as ReactElementAssistiveText,j as ReactElementError,C as Required,T as TrailingIcon,g as TypeDate,h as TypePassword,_ as TypeTime,y as WithLabelAsTitle,N as __namedExportsOrder,u as default};
//# sourceMappingURL=TextInput.stories-slSO0w0D.js.map