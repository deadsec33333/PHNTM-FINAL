(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5866],{50381:function(e,t,a){"use strict";var n=a(91706),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,i,r,l,c,s,d=!1;t||(t={}),a=t.debug||!1;try{if(r=n(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(p){a&&console.error("unable to copy using clipboardData: ",p),a&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),r()}return d}},5866:function(e,t,a){"use strict";a.r(t);var n=a(52903),o=a(2784),i=a(27866),r=a(11198),l=a(47877),c=a(50381),s=a.n(c),d=a(25675),p=a(65820),u=a(93983),m=a(26602),h=a(62747);const v={visible:{x:0},hidden:{x:"-100%"}},f={expanded:{x:0,opacity:1},collapsed:e=>({x:-(48*e+8),opacity:0})},g={type:"spring",stiffness:100,damping:15},x=(0,r.Z)(u.m.div,{target:"e1j68c3a0"})("display:flex;position:fixed;left:0;right:0;bottom:0;padding:var(--spacingL);width:100%;max-width:var(--maxWidthContent);margin:auto;gap:",8,"px;z-index:9;pointer-events:none;",m.Nn.xl,"{padding:var(--spacingS);}",m.Nn.m,"{padding:20px;}"),y=(0,r.Z)("ul",{target:"e1j68c3a1"})("display:flex;gap:",8,"px;"),b=(0,r.Z)(u.m.li,{target:"e1j68c3a2"})("position:relative;"),w=(0,r.Z)(h.Z,{target:"e1j68c3a3"})("position:relative;z-index:100;height:40px;pointer-events:all;",m.Nn.m,"{height:34px;}",(e=>{let{isActive:t}=e;return t?"\n    background-color: var(--black);\n    color: var(--white);\n\n    @media (hover: hover) {\n      &:hover {\n        background-color: var(--dark9);\n        color: var(--light6);\n      }\n    }\n  ":""}),";"),k=(0,r.Z)(h.Z,{target:"e1j68c3a4"})("position:relative;justify-content:center;align-items:center;height:40px;width:40px;padding:0;border-radius:20px;pointer-events:all;background-color:var(--black);color:var(--white);",m.Nn.m,"{height:34px;width:34px;}@media (hover:hover){&:hover{background-color:var(--black);color:var(--purple);}}span{display:flex;}svg{width:16px;height:auto;}",m.Nn.m,"{padding:0;}"),C=(0,r.Z)(u.m.div,{target:"e1j68c3a5"})('position:absolute;bottom:100%;left:50%;width:66px;padding:var(--spacingXXXS) 0;margin-left:-33px;margin-bottom:var(--spacingXXS);background-color:var(--black);color:var(--white);border-radius:8px;text-align:center;font-size:14px;&:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:var(--black) transparent transparent transparent;}');t.default=e=>{let{title:t,url:a,isVisible:r}=e;const[c,u]=(0,o.useState)(!1),[m,h]=(0,o.useState)(!1),Z=encodeURIComponent(a),E=(0,o.useRef)(null),D=(0,d.E)(),R=e=>{var t,a;(null===(t=e.relatedTarget)||void 0===t?void 0:t.nodeType)&&(null===(a=E.current)||void 0===a?void 0:a.contains(e.relatedTarget))||(u(!1),h(!1))};return(0,i.Z)(E,(()=>m&&h(!1))),(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&m&&h(!1)};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[m]),(0,o.useEffect)((()=>{const e=()=>{h(!1)};return m&&window.addEventListener("scroll",e,{once:!0}),()=>{window.removeEventListener("scroll",e)}}),[m]),(0,n.BX)(x,{ref:E,variants:v,initial:"hidden",animate:r||c?"visible":"hidden",transition:g,children:[(0,n.tZ)(w,{variant:"small",isActive:m,onClick:()=>{h((e=>!e))},onFocus:()=>{u(!0)},onBlur:R,"aria-controls":"share","aria-expanded":m,children:"Share"}),(0,n.tZ)(y,{id:"share",children:(0,n.tZ)(p.M,{children:m&&(0,n.BX)(n.HY,{children:[(0,n.BX)(b,{variants:f,custom:1,initial:"collapsed",animate:"expanded",exit:"collapsed",transition:g,children:[(0,n.tZ)(k,{onClick:()=>{s()(a)&&(async()=>{await D.start({y:0,opacity:1,transition:{duration:.3}}),await D.start({opacity:0,transition:{delay:2,duration:.3}})})()},onBlur:R,children:(0,n.tZ)(l.J,{type:"link"})}),(0,n.tZ)(C,{animate:D,initial:{y:10,opacity:0},children:"Copied!"})]}),(0,n.tZ)(b,{variants:f,custom:2,initial:"collapsed",animate:"expanded",exit:"collapsed",transition:g,children:(0,n.tZ)(k,{href:"mailto:?subject=".concat(encodeURIComponent(t),"&body=").concat(encodeURIComponent("Check out this article on ".concat(a))),onBlur:R,children:(0,n.tZ)(l.J,{type:"mail"})})}),(0,n.tZ)(b,{variants:f,custom:3,initial:"collapsed",animate:"expanded",exit:"collapsed",transition:g,children:(0,n.tZ)(k,{href:"https://twitter.com/share?url=".concat(Z,"&text=").concat(t),onBlur:R,children:(0,n.tZ)(l.J,{type:"twitter"})})}),(0,n.tZ)(b,{variants:f,custom:4,initial:"collapsed",animate:"expanded",exit:"collapsed",transition:g,children:(0,n.tZ)(k,{href:"https://www.facebook.com/sharer.php?u=".concat(Z),onBlur:R,children:(0,n.tZ)(l.J,{type:"facebook"})})}),(0,n.tZ)(b,{variants:f,custom:5,initial:"collapsed",animate:"expanded",exit:"collapsed",transition:g,children:(0,n.tZ)(k,{href:"https://www.linkedin.com/shareArticle?url=".concat(Z,"&title=").concat(t),onBlur:R,children:(0,n.tZ)(l.J,{type:"linkedin"})})})]})})})]})}},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);