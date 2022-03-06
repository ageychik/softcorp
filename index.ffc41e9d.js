!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var n=function(e,t){var n,s;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s=n.preventDefault,n.preventDefault=function(){s.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};n.prototype=window.Event.prototype,window.CustomEvent=n}var s,o,a,r,c,i,l,u,d,p={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"};function m(t,n){var s,o,a,r,c,i,l,u=function(e){a&&a.classList.remove(n.hasFocusClass),void 0!==e?((a=e).classList.add(n.hasFocusClass),S&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):a=void 0},d=function(e){r&&(r.classList.remove(n.isSelectedClass),r.removeAttribute("id"),o.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(n.isSelectedClass),e.setAttribute("id","".concat(L,"-").concat(T,"-selectedOption")),o.setAttribute("aria-activedescendant","".concat(L,"-").concat(T,"-selectedOption")),r=e,o.children[0].textContent=r.customSelectOriginalOption.text):(r=void 0,o.children[0].textContent=""),u(e)},p=function(e){var t=[].indexOf.call(y.options,a.customSelectOriginalOption);y.options[t+e]&&u(y.options[t+e].customSelectCstOption)},m=function(e){if(e||void 0===e){var t=document.querySelector(".".concat(L,".").concat(n.isOpenClass));t&&(t.customSelect.open=!1),s.classList.add(n.isOpenClass),s.classList.add(n.isOpenClass),o.setAttribute("aria-expanded","true"),r&&(c.scrollTop=r.offsetTop),s.dispatchEvent(new CustomEvent("custom-select:open")),S=!0}else s.classList.remove(n.isOpenClass),o.setAttribute("aria-expanded","false"),S=!1,u(r),s.dispatchEvent(new CustomEvent("custom-select:close"));return S},v=function(e){e.target===o||o.contains(e.target)?S?m(!1):m():e.target.classList&&e.target.classList.contains(n.optionClass)&&c.contains(e.target)?(d(e.target),r.customSelectOriginalOption.selected=!0,m(!1),y.dispatchEvent(new CustomEvent("change"))):e.target===y?o!==document.activeElement&&y!==document.activeElement&&o.focus():S&&!s.contains(e.target)&&m(!1)},f=function(e){e.target.classList&&e.target.classList.contains(n.optionClass)&&u(e.target)},g=function(e){if(S)switch(e.keyCode){case 13:case 32:d(a),r.customSelectOriginalOption.selected=!0,y.dispatchEvent(new CustomEvent("change")),m(!1);break;case 27:m(!1);break;case 38:p(-1);break;case 40:p(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){l&&clearTimeout(l),l=setTimeout((function(){w=""}),1500),w+=String.fromCharCode(e.keyCode);for(var t=0,n=y.options.length;t<n;t++)if(y.options[t].text.toUpperCase().substr(0,w.length)===w){u(y.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||m()},C=function(){var e=y.selectedIndex,t=-1===e?void 0:y.options[e].customSelectCstOption;d(t)},h=function(e){var t=e.currentTarget,n=e.target;n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:t.scrollTop=n.offsetTop+n.clientHeight-t.clientHeight},b=function(){document.addEventListener("click",v),c.addEventListener("mouseover",f),c.addEventListener("custom-select:focus-outside-panel",h),y.addEventListener("change",C),s.addEventListener("keydown",g)},E=function(){document.removeEventListener("click",v),c.removeEventListener("mouseover",f),c.removeEventListener("custom-select:focus-outside-panel",h),y.removeEventListener("change",C),s.removeEventListener("keydown",g)},O=function(e,t,n){var s;if(void 0===n||n===y)s=c;else{if(!(n instanceof HTMLElement&&"OPTGROUP"===n.tagName.toUpperCase()&&y.contains(n)))throw new TypeError("Invalid Argument");s=n.customSelectCstOptgroup}var o=e instanceof HTMLElement?[e]:e;if(t)for(var a=0,r=o.length;a<r;a++)s===c?y.appendChild(o[a]):s.customSelectOriginalOptgroup.appendChild(o[a]);for(var i=A(o),l=0,u=i.length;l<u;l++)s.appendChild(i[l]);return o},L="customSelect",S=!1,T="",y=t,w="";function A(e){var t=e,s=[];if(void 0===t.length)throw new TypeError("Invalid Argument");for(var o=0,a=t.length;o<a;o++)if(t[o]instanceof HTMLElement&&"OPTGROUP"===t[o].tagName.toUpperCase()){var r=document.createElement("div");r.classList.add(n.optgroupClass),r.setAttribute("data-label",t[o].label),r.customSelectOriginalOptgroup=t[o],t[o].customSelectCstOptgroup=r;for(var c=A(t[o].children),i=0,l=c.length;i<l;i++)r.appendChild(c[i]);s.push(r)}else{if(!(t[o]instanceof HTMLElement&&"OPTION"===t[o].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var u=document.createElement("div");u.classList.add(n.optionClass),u.textContent=t[o].text,u.setAttribute("data-value",t[o].value),u.setAttribute("role","option"),u.customSelectOriginalOption=t[o],t[o].customSelectCstOption=u,t[o].selected&&d(u),s.push(u)}return s}(s=document.createElement("div")).classList.add(n.containerClass,L),(o=document.createElement("span")).className=n.openerClass,o.setAttribute("role","combobox"),o.setAttribute("aria-autocomplete","list"),o.setAttribute("aria-expanded","false"),o.innerHTML="<span>\n   ".concat(-1!==y.selectedIndex?y.options[y.selectedIndex].text:"","\n   </span>"),c=document.createElement("div");for(var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",N=0;N<5;N++)T+=_.charAt(Math.floor(Math.random()*_.length));return c.id="".concat(L,"-").concat(T,"-panel"),c.className=n.panelClass,c.setAttribute("role","listbox"),o.setAttribute("aria-owns",c.id),O(y.children,!1),s.appendChild(o),y.parentNode.replaceChild(s,y),s.appendChild(y),s.appendChild(c),document.querySelector('label[for="'.concat(y.id,'"]'))?i=document.querySelector('label[for="'.concat(y.id,'"]')):"LABEL"===s.parentNode.tagName.toUpperCase()&&(i=s.parentNode),void 0!==i&&(i.setAttribute("id","".concat(L,"-").concat(T,"-label")),o.setAttribute("aria-labelledby","".concat(L,"-").concat(T,"-label"))),y.disabled?s.classList.add(n.isDisabledClass):(o.setAttribute("tabindex","0"),y.setAttribute("tabindex","-1"),b()),s.customSelect={get pluginOptions(){return n},get open(){return S},set open(e){m(e)},get disabled(){return y.disabled},set disabled(e){!function(e){e&&!y.disabled?(s.classList.add(n.isDisabledClass),y.disabled=!0,o.removeAttribute("tabindex"),s.dispatchEvent(new CustomEvent("custom-select:disabled")),E()):!e&&y.disabled&&(s.classList.remove(n.isDisabledClass),y.disabled=!1,o.setAttribute("tabindex","0"),s.dispatchEvent(new CustomEvent("custom-select:enabled")),b())}(e)},get value(){return y.value},set value(t){var n,s;n=t,(s=y.querySelector("option[value='".concat(n,"']")))||(s=e(y.options)[0]),s.selected=!0,d(y.options[y.selectedIndex].customSelectCstOption)},append:function(e,t){return O(e,!0,t)},insertBefore:function(e,t){return function(e,t){var n;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&y.contains(t))n=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&y.contains(t)))throw new TypeError("Invalid Argument");n=t.customSelectCstOptgroup}var s=A(e.length?e:[e]);return n.parentNode.insertBefore(s[0],n),t.parentNode.insertBefore(e.length?e[0]:e,t)}(e,t)},remove:function(e){var t;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&y.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&y.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var n=e.parentNode.removeChild(e);return C(),n},empty:function(){for(var e=[];y.children.length;)c.removeChild(c.children[0]),e.push(y.removeChild(y.children[0]));return d(),e},destroy:function(){for(var e=0,t=y.options.length;e<t;e++)delete y.options[e].customSelectCstOption;for(var n=y.getElementsByTagName("optgroup"),o=0,a=n.length;o<a;o++)delete n.customSelectCstOptgroup;return E(),s.parentNode.replaceChild(y,s)},opener:o,select:y,panel:c,container:s},y.customSelect=s.customSelect,s.customSelect}s=document.querySelector(".navigation__burger"),o=function(){s.classList.remove("navigation__burger_open"),document.querySelector("html").classList.remove("no--scroll")},s.addEventListener("click",(function(){s.classList.toggle("navigation__burger_open"),document.querySelector("html").classList.toggle("no--scroll")})),window.addEventListener("resize",o),document.addEventListener("click",(function(e){e.target.classList.contains("navigation__link")&&o()})),document.querySelector("input[type=range]")&&(a=document.querySelector("input[type=range]"),r=document.querySelector(".range__value"),(c=function(){return r.innerText="".concat(a.value,"%")})(),a.addEventListener("input",(function(){return c()}))),document.querySelectorAll(".form__select")&&(i=".form__select",l={containerClass:"custom-select",openerClass:"custom-select__opener",panelClass:"custom-select__dropdown",optionClass:"custom-select__option",isSelectedClass:"custom-select__option_selected",hasFocusClass:"custom-select__option_focus",isDisabledClass:"custom-select__option_disabled",isOpenClass:"custom-select_open"},u=[],d=[],function(){if(i&&i instanceof HTMLElement&&"SELECT"===i.tagName.toUpperCase())u.push(i);else if(i&&"string"==typeof i)for(var e=document.querySelectorAll(i),t=0,n=e.length;t<n;++t)e[t]instanceof HTMLElement&&"SELECT"===e[t].tagName.toUpperCase()&&u.push(e[t]);else if(i&&i.length)for(var s=0,o=i.length;s<o;++s)i[s]instanceof HTMLElement&&"SELECT"===i[s].tagName.toUpperCase()&&u.push(i[s]);for(var a=0,r=u.length;a<r;++a)d.push(m(u[a],Object.assign({},p,l)))}())}();
//# sourceMappingURL=index.ffc41e9d.js.map