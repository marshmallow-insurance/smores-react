import{j as v,a as l,s as g,A as x}from"./styled-components.browser.esm-1fe49baf.js";import{r as w}from"./index-1b03fe98.js";import{B as D}from"./Button-2e94f24b.js";import{B as m}from"./Box-8725b8d8.js";import{t as P}from"./theme-9a9bdd1b.js";import{r as L}from"./index-6fd5a17b.js";import{T as O}from"./Text-77fda0c7.js";import{I as H}from"./IconStrict-93bfb81f.js";import"./Icon-16aa76aa.js";import"./Loader-4d853a84.js";import"./focusOutline-fc5530b3.js";import"./polished.esm-b6220ab2.js";function R(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var b=!1;if(typeof window<"u"){var B={get passive(){b=!0}};window.addEventListener("testPassive",null,B),window.removeEventListener("testPassive",null,B)}var d=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),i=[],s=!1,S=-1,c=void 0,a=void 0,f=void 0,A=function(e){return i.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},p=function(e){var o=e||window.event;return A(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},j=function(e){if(f===void 0){var o=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;if(o&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);f=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}c===void 0&&(c=document.body.style.overflow,document.body.style.overflow="hidden")},I=function(){f!==void 0&&(document.body.style.paddingRight=f,f=void 0),c!==void 0&&(document.body.style.overflow=c,c=void 0)},F=function(){return window.requestAnimationFrame(function(){if(a===void 0){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-n,setTimeout(function(){return window.requestAnimationFrame(function(){var h=r-window.innerHeight;h&&o>=r&&(document.body.style.top=-(o+h))})},300)}})},q=function(){if(a!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(o,e),a=void 0}},$=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},z=function(e,o){var n=e.targetTouches[0].clientY-S;return A(e.target)?!1:o&&o.scrollTop===0&&n>0||$(o)&&n<0?p(e):(e.stopPropagation(),!0)},N=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!i.some(function(r){return r.targetElement===e})){var n={targetElement:e,options:o||{}};i=[].concat(R(i),[n]),d?F():j(o),d&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(S=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&z(r,e)},s||(document.addEventListener("touchmove",p,b?{passive:!1}:void 0),s=!0))}},W=function(){d&&(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),s&&(document.removeEventListener("touchmove",p,b?{passive:!1}:void 0),s=!1),S=-1),d?q():I(),i=[]},Y=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}i=i.filter(function(o){return o.targetElement!==e}),d&&(e.ontouchstart=null,e.ontouchmove=null,s&&i.length===0&&(document.removeEventListener("touchmove",p,b?{passive:!1}:void 0),s=!1)),d?q():I()};function G({node:t,showModal:e}){w.useEffect(()=>()=>W(),[]),w.useEffect(()=>{t!==null&&(e?N(t,{reserveScrollBarGap:!0,allowTouchMove:()=>!0}):Y(t))},[t,e])}const y=({title:t="",children:e,showModal:o=!1,handleClick:n,drawer:r=!0,cross:h=!0,width:E,containerClass:V,portalContainer:_=document.body})=>{const M=w.useRef(null);return G({node:M.current,showModal:o}),L.createPortal(v(X,{showModal:o,ref:M,children:[l(J,{onClick:n}),v(K,{drawer:r,width:E||"460px",className:V,children:[v(m,{flex:!0,alignItems:"flex-start",justifyContent:"space-between",mb:"8px",children:[l(Q,{flex:!0,direction:"column",children:l(O,{tag:"h2",typo:"heading-small",align:"left",children:t})}),h&&l(H,{render:"cross",backgroundColor:"oatmeal",handleClick:n,size:36})]}),l(m,{flex:!0,direction:"column",children:e})]})]}),_)},X=g(m)(({showModal:t})=>x`
    display: ${t?"flex":"none"};
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  `),J=g.div`
  position: fixed;
  background: ${P.colors.liquorice};
  cursor: pointer;
  opacity: 0.4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,K=g.div(({drawer:t,width:e})=>x`
    background: ${P.colors.coconut};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: ${e};
    position: fixed;
    max-height: calc(100vh - 64px);
    overflow: auto;

    ${t===!0&&x`
      @media (max-width: 768px) {
        max-width: none;
        border-radius: 16px 16px 0px 0px;
        padding: 10% 24px;
        max-height: 90vh;

        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
      }
    `}
  `),Q=g(m)`
  align-self: center;
`;try{y.displayName="Modal",y.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},showModal:{defaultValue:{value:"false"},description:"",name:"showModal",required:!1,type:{name:"boolean"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"() => void"}},drawer:{defaultValue:{value:"true"},description:"",name:"drawer",required:!1,type:{name:"boolean"}},cross:{defaultValue:{value:"true"},description:"",name:"cross",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},containerClass:{defaultValue:null,description:"",name:"containerClass",required:!1,type:{name:"string"}},portalContainer:{defaultValue:{value:"document.body"},description:"",name:"portalContainer",required:!1,type:{name:"Element | DocumentFragment"}}}}}catch{}const ce={title:"Modal",component:y,argTypes:{handleClick:{action:"Callback - `handleClick`"}}},U=t=>{const[e,o]=w.useState(!1),n=()=>{o(!e)};return v(m,{height:"900px",children:[l(y,{...t,handleClick:n,showModal:e,children:"[A modal window] creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it."}),l(D,{primary:!0,handleClick:n,children:"Show Modal with Mobile Drawer"})]})},u=U.bind({});u.args={icon:"calendar",title:"Hello world i'm a beautiful modal",showModal:!1,drawer:!0,cross:!0,width:"640px"};var T,C,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(props: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return <Box height="900px">
      <Modal {...props} handleClick={handleClick} showModal={showModal}>
        [A modal window] creates a mode that disables the main window, but keeps
        it visible with the modal window as a child window in front of it.
      </Modal>
      <Button primary handleClick={handleClick}>
        Show Modal with Mobile Drawer
      </Button>
    </Box>;
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const fe=["Interactive"];export{u as Interactive,fe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Modal.stories-9591ebd0.js.map
