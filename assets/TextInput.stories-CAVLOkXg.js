import{j as r}from"./iframe-C0k-dmK7.js";import"./index-CSY969yl.js";import{T as I}from"./TextInput-C-tNz6DJ.js";import{S as M}from"./SupportMessage-Bmp12Gc0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fO1z4qti.js";import"./space-qkSJaf43.js";import"./getFromObject-CS2Xcxjx.js";import"./index-IPbGisyJ.js";import"./InternalField-CCc7sWXW.js";import"./index-CtYjraUP.js";import"./colourMap-CuTvYFdz.js";import"./index-BZlclk5z.js";import"./Text-wiOoiLoR.js";import"./polished.esm-CYsXSD1d.js";import"./focusOutline-DJUW_vuG.js";import"./shared.styles-D-5pZVXT.js";import"./CommonInput-CFsoVIgU.js";import"./id-D-JhjDv6.js";import"./isReactElement-Bvuymu9l.js";import"./regular-Cz8EdWGq.js";import"./index-ChFEluXx.js";import"./solid-BA6igMXM.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:"TextInput",component:I},e=E=>{const[{value:F},q]=k(),S=v=>{q({value:v}),E?.onChange?.(v)};return r.jsx(I,{...E,value:F,onChange:S})},a={args:{name:"textInput",placeholder:"Placeholder text"},render:e},s={args:{id:"textInput2",name:"textInput",placeholder:"Placeholder text",fallbackStyle:!0},render:e},t={args:{id:"textInput3",name:"textInput",placeholder:"Placeholder text",type:"password"},render:e},n={args:{id:"generic",label:"First name",placeholder:"Enter name...",errorMsg:"This field is required",assistiveText:r.jsxs(r.Fragment,{children:["This is a description with a"," ",r.jsx("a",{href:"https://marshmallow.com",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]})},render:e},i={args:{id:"label-as-title",label:"First name",placeholder:"Enter name...",renderAsTitle:!0,errorMsg:"This field is required"},render:e},l={args:{id:"fallback",label:"First name",placeholder:"Enter name...",fallbackStyle:!0,errorMsg:"This field is required"},render:e},o={args:{id:"disabled",label:"First name",placeholder:"Enter name...",disabled:!0,errorMsg:"This field is required"},render:e},d={args:{id:"disabled-fallback",label:"First name",placeholder:"Enter name...",disabled:!0,fallbackStyle:!0},render:e},c={args:{id:"required",label:"First name",placeholder:"Enter name...",required:!0,errorMsg:"This field is required"},render:e},m={args:{id:"leading-icon",label:"First name",placeholder:"Enter name...",frontIcon:"search",errorMsg:"This field is required"},render:e},p={args:{id:"trailing-icon",label:"First name",placeholder:"Enter name...",trailingIcon:"car",errorMsg:"This field is required"},render:e},u={args:{id:"assistive-text",label:"First name",placeholder:"Enter name...",assistiveText:"Some assistive text",errorMsg:"This field is required"},render:e},g={args:{id:"react-element-assistive-text",label:"First name",placeholder:"Enter name...",renderAsTitle:!0,assistiveText:r.jsxs(r.Fragment,{children:["This is a description with a"," ",r.jsx("a",{href:"https://marshmallow.com",rel:"noopener noreferrer",target:"_blank",children:"link"}),"."]}),errorMsg:"This field is required",completed:!0},render:e,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},h={args:{id:"completed",label:"First name",placeholder:"Enter name...",completed:!0,errorMsg:"This field is required"},render:e,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},b={args:{id:"as-title",label:"First name",placeholder:"Enter name...",renderAsTitle:!0,errorMsg:"This field is required"},render:e},T={args:{id:"error",label:"First name",placeholder:"Enter name...",required:!0,assistiveText:"Some assistive text",error:!0,errorMsg:"This field is required"},render:e,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},f={args:{id:"react-element-error",label:"First name",placeholder:"Enter name...",required:!0,error:!0,errorMsg:r.jsx(M,{type:"warning",description:"Error!!"})},render:e,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},x={args:{id:"fallback-error",label:"First name",placeholder:"Enter name...",fallbackStyle:!0,required:!0,error:!0,errorMsg:"This field is required"},render:e,parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'textInput',
    placeholder: 'Placeholder text'
  },
  render: InteractiveTemplate
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput2',
    name: 'textInput',
    placeholder: 'Placeholder text',
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'textInput3',
    name: 'textInput',
    placeholder: 'Placeholder text',
    type: 'password'
  },
  render: InteractiveTemplate
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'label-as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    fallbackStyle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-fallback',
    label: 'First name',
    placeholder: 'Enter name...',
    disabled: true,
    fallbackStyle: true
  },
  render: InteractiveTemplate
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    label: 'First name',
    placeholder: 'Enter name...',
    required: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'leading-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    frontIcon: 'search',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'trailing-icon',
    label: 'First name',
    placeholder: 'Enter name...',
    trailingIcon: 'car',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'assistive-text',
    label: 'First name',
    placeholder: 'Enter name...',
    assistiveText: 'Some assistive text',
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'as-title',
    label: 'First name',
    placeholder: 'Enter name...',
    renderAsTitle: true,
    errorMsg: 'This field is required'
  },
  render: InteractiveTemplate
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Z=["Default","DefaultFallback","TypePassword","Generic","WithLabelAsTitle","Fallback","Disabled","DisabledFallback","Required","LeadingIcon","TrailingIcon","AssistiveText","ReactElementAssistiveText","Completed","AsTitle","Error","ReactElementError","FallbackError"];export{b as AsTitle,u as AssistiveText,h as Completed,a as Default,s as DefaultFallback,o as Disabled,d as DisabledFallback,T as Error,l as Fallback,x as FallbackError,n as Generic,m as LeadingIcon,g as ReactElementAssistiveText,f as ReactElementError,c as Required,p as TrailingIcon,t as TypePassword,i as WithLabelAsTitle,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=TextInput.stories-CAVLOkXg.js.map
