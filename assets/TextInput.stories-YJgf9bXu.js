import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./SupportMessage-Bw-nWlwo.js";import{n as i,t as a}from"./TextInput-DVp-Li-G.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),i(),o=t(),{useArgs:s,useState:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:`TextInput`,component:a},u=e=>{let[{value:t},n]=s(),[r,i]=c(null),l=t=>{i(t),e?.onChange?.(t)},u=t=>{r!==null&&(n({value:r}),i(null)),e?.onBlur?.(t)};return(0,o.jsx)(a,{...e,value:r??t??``,onChange:l,onBlur:u})},d={args:{name:`textInput`,placeholder:`Placeholder text`},render:u},f={args:{id:`textInput2`,name:`textInput`,placeholder:`Placeholder text`,fallbackStyle:!0},render:u},p=e=>{let[t,n]=c(e.value??``);return(0,o.jsx)(a,{...e,value:t,onChange:n})},m={args:{id:`textInput3`,name:`textInput`,placeholder:`Placeholder text`,type:`password`},render:u},h={args:{id:`textInputDate`,name:`textInputDate`,label:`Date`,placeholder:`Date`,type:`date`},render:p},g={args:{id:`textInputTime`,name:`textInputTime`,label:`Time`,placeholder:`Time`,type:`time`},render:p},_={args:{id:`generic`,label:`First name`,placeholder:`Enter name...`,errorMsg:`This field is required`,assistiveText:(0,o.jsxs)(o.Fragment,{children:[`This is a description with a`,` `,(0,o.jsx)(`a`,{href:`https://marshmallow.com`,rel:`noopener noreferrer`,target:`_blank`,children:`link`}),`.`]})},render:u},v={args:{id:`label-as-title`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,errorMsg:`This field is required`},render:u},y={args:{id:`fallback`,label:`First name`,placeholder:`Enter name...`,fallbackStyle:!0,errorMsg:`This field is required`},render:u},b={args:{id:`disabled`,label:`First name`,placeholder:`Enter name...`,disabled:!0,errorMsg:`This field is required`},render:u},x={args:{id:`disabled-fallback`,label:`First name`,placeholder:`Enter name...`,disabled:!0,fallbackStyle:!0},render:u},S={args:{id:`required`,label:`First name`,placeholder:`Enter name...`,required:!0,errorMsg:`This field is required`},render:u},C={args:{id:`leading-icon`,label:`First name`,placeholder:`Enter name...`,frontIcon:`search`,errorMsg:`This field is required`},render:u},w={args:{id:`trailing-icon`,label:`First name`,placeholder:`Enter name...`,trailingIcon:`car`,errorMsg:`This field is required`},render:u},T={args:{id:`disabled-leading-icon`,label:`First name`,placeholder:`Enter name...`,frontIcon:`search`,disabled:!0},render:u},E={args:{id:`disabled-trailing-icon`,label:`First name`,placeholder:`Enter name...`,trailingIcon:`car`,disabled:!0},render:u},D={args:{id:`assistive-text`,label:`First name`,placeholder:`Enter name...`,assistiveText:`Some assistive text`,errorMsg:`This field is required`},render:u},O={args:{id:`react-element-assistive-text`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,assistiveText:(0,o.jsxs)(o.Fragment,{children:[`This is a description with a`,` `,(0,o.jsx)(`a`,{href:`https://marshmallow.com`,rel:`noopener noreferrer`,target:`_blank`,children:`link`}),`.`]}),errorMsg:`This field is required`,completed:!0},render:u,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},k={args:{id:`completed`,label:`First name`,placeholder:`Enter name...`,completed:!0,errorMsg:`This field is required`},render:u,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},A={args:{id:`as-title`,label:`First name`,placeholder:`Enter name...`,renderAsTitle:!0,errorMsg:`This field is required`},render:u},j={args:{id:`error`,label:`First name`,placeholder:`Enter name...`,required:!0,assistiveText:`Some assistive text`,error:!0,errorMsg:`This field is required`},render:u,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},M={args:{id:`react-element-error`,label:`First name`,placeholder:`Enter name...`,required:!0,error:!0,errorMsg:(0,o.jsx)(r,{type:`warning`,description:`Error!!`})},render:u,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},N={args:{id:`fallback-error`,label:`First name`,placeholder:`Enter name...`,fallbackStyle:!0,required:!0,error:!0,errorMsg:`This field is required`},render:u,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},P=[`Default`,`DefaultFallback`,`TypePassword`,`TypeDate`,`TypeTime`,`Generic`,`WithLabelAsTitle`,`Fallback`,`Disabled`,`DisabledFallback`,`Required`,`LeadingIcon`,`TrailingIcon`,`DisabledLeadingIcon`,`DisabledTrailingIcon`,`AssistiveText`,`ReactElementAssistiveText`,`Completed`,`AsTitle`,`Error`,`ReactElementError`,`FallbackError`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'textInput',
    placeholder: 'Placeholder text'
  },
  render: InteractiveTemplate
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput2',
    name: 'textInput',
    placeholder: 'Placeholder text',
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput3',
    name: 'textInput',
    placeholder: 'Placeholder text',
    type: 'password'
  },
  render: InteractiveTemplate
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInputDate',
    name: 'textInputDate',
    label: 'Date',
    placeholder: 'Date',
    type: 'date'
  },
  render: LocalStateTemplate
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInputTime',
    name: 'textInputTime',
    label: 'Time',
    placeholder: 'Time',
    type: 'time'
  },
  render: LocalStateTemplate
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'label-as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'leading-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    frontIcon: 'search',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'trailing-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    trailingIcon: 'car',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-leading-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    frontIcon: 'search',
    disabled: true
  },
  render: InteractiveTemplate
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-trailing-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    trailingIcon: 'car',
    disabled: true
  },
  render: InteractiveTemplate
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    assistiveText: 'Some assistive text',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}}})))()}F();export{A as AsTitle,D as AssistiveText,k as Completed,d as Default,f as DefaultFallback,b as Disabled,x as DisabledFallback,T as DisabledLeadingIcon,E as DisabledTrailingIcon,j as Error,y as Fallback,N as FallbackError,_ as Generic,C as LeadingIcon,O as ReactElementAssistiveText,M as ReactElementError,S as Required,w as TrailingIcon,h as TypeDate,m as TypePassword,g as TypeTime,v as WithLabelAsTitle,P as __namedExportsOrder,l as default};
//# sourceMappingURL=TextInput.stories-YJgf9bXu.js.map