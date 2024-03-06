import{a as n,j as e,s}from"./styled-components.browser.esm-CskBwHif.js";import{r as w}from"./index-BBkUAzwr.js";import{B as r}from"./Box-DXvlzhJG.js";import{p as m}from"./purify.es-DxrFu_9L.js";import{t as _}from"./theme-D50qMPxU.js";import{I as R}from"./Icon-C9OFvp9m.js";import{T as b}from"./Text-B0bDEx6T.js";import"./polished.esm-D0h1-lPB.js";import"./focusOutline-JAHtHrmh.js";const i=w.forwardRef(function({htmlString:l,...d},y){const v=m.sanitize(l);return m.isSupported?e(T,{ref:y,...d,dangerouslySetInnerHTML:{__html:v}}):n(r,{...d,children:[n(P,{children:[e(R,{render:"warning"}),"Your browser is not supported, please upgrade to a newer version"]}),l]})}),P=s(r)`
  background-color: ${_.colors.sherbert};
  padding: 16px;
  border-radius: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`,T=s(r)`
  * {
    all: revert;
  }
`;try{i.displayName="RichText",i.__docgenInfo={description:"",displayName:"RichText",props:{htmlString:{defaultValue:null,description:"",name:"htmlString",required:!0,type:{name:"string"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'ResponsiveProp<SpacingProp | "auto">'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveProp<SpacingProp>"}}}}}catch{}const p=()=>e(r,{flex:!0,direction:"column",children:n(r,{flex:!0,direction:"column",mb:"32px",children:[e(I,{tag:"span",typo:"header-medium",children:"RichText variations"}),e(H,{label:"Email",children:e(i,{htmlString:`<div dir="ltr"><div>Testing some features of the rich text viewer. This is an example of an email sent from gmail.<br></div><div><ul><li style="margin-left:15px">bullet</li><li style="margin-left:15px">points<br></li></ul><div><ol><li style="margin-left:15px">numbered</li><li style="margin-left:15px">list</li></ol><div><font size="4">Different</font> <b><i>text</i></b> <u style="background-color:rgb(0,255,255)">formatting</u></div></div></div><div><br></div><span class="gmail_signature_prefix">-- </span><br><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><span style="color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><font size="4"><b>Liam Piesley</b></font></span><div style="color:rgb(136,136,136);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:12.8px"><div>Software Engineer</div><div>Marshmallow</div><div><a href="http://www.marshmallow.com/" rel="noreferrer" style="color:rgb(17,85,204)" target="_blank">www.marshmallow.com</a></div><div><br></div><div><img src="https://i.imgur.com/psgAauI.png" width="200" height="39" style="height: 39px;"><br></div></div></div></div></div>\r
`})})]})}),H=({label:t,children:l})=>n(S,{mt:"32px",children:[e(r,{width:"140px",children:e(b,{tag:"span",typo:"label-large",children:t})}),l]}),S=s(r)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,k="140px",I=s(b)`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 20px;
  margin-left: ${k};
`;try{p.displayName="CollectionPage",p.__docgenInfo={description:"",displayName:"CollectionPage",props:{}}}catch{}const E=()=>e(i,{htmlString:`
        <h1>H1 Header</h1>
        <h2>H2 Header</h2>
        <h3>H3 Header</h3>
        <h4>H4 Header</h4>
        <h5>H5 Header</h5>
        <h6>H6 Header</h6>
        <hr />
        <h3>Image</h3>
        <img src="https://www.gstatic.com/webp/gallery/1.sm.webp" />
        <h3>Paragraph</h3>
        <p>Paragraph of text with <b>bold text</b>, <i>italic text</i>, <u>underlined text</u> and a  <a href='https://liamp.uk'>link</a>
        <h3>List</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <h3>Table</h3>
        <table style="border-collapse: collapse;">
          <tr>
            <th style="padding: 8px; border: 1px solid black;">heading 1</th>
            <th style="padding: 8px; border: 1px solid black;">heading 2</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid black;">cell 1</td>
            <td style="padding: 8px; border: 1px solid black;">cell 2</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid black;">cell 3</td>
            <td style="padding: 8px; border: 1px solid black;">cell 4</td>
          </tr>
        </table>
        <h3>Dangerous html</h3>
        <p><a href='javascript:alert(0)'>sanitised string with dangerous javascript</a></p>
      `,m:"16px"}),M={title:"Rich Text",component:i},q=t=>e(i,{...t}),a=q.bind({});a.args={htmlString:'<h1>Header</h1><h2>Subheader</h2><p>A paragraph of text with a <a href="https://liamp.uk">link</a></p>'};const $=p.bind({}),V=()=>e(E,{}),o=V.bind({});var c,h,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"(props: RichTextProps) => <RichText {...props} />",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"() => <Example />",...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const O=["Default","Collection","WorkingExample"];export{$ as Collection,a as Default,o as WorkingExample,O as __namedExportsOrder,M as default};
