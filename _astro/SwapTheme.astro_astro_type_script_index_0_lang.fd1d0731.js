function l(a,o=document.body){return o.querySelector(a)}function f(a,o=document.body){return[...o.querySelectorAll(a)]}function i(a){a instanceof HTMLElement&&f("svg",a)?.forEach(o=>{o.classList.toggle("swap-on"),o.classList.toggle("swap-off")})}const u=l(".collapse > input");l('[data-button="menu"]')?.addEventListener("click",function(a){console.log("click"),a.preventDefault(),i(this),u instanceof HTMLInputElement&&(u.checked=!u.checked)});l('[data-button="back-to-top"]')?.addEventListener("click",()=>{window.scrollTo({top:0})});var r={},E={get exports(){return r},set exports(a){r=a}};(function(a,o){function d(){var t=document.querySelector("[data-toggle-theme]");(function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.classList.add(t.getAttribute("data-act-class"))}))})(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(e=>{e.addEventListener("click",function(){var c=e.getAttribute("data-toggle-theme");if(c){var n=c.split(",");document.documentElement.getAttribute("data-theme")==n[0]?n.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",n[1]),localStorage.setItem("theme",n[1])):(document.documentElement.setAttribute("data-theme",n[0]),localStorage.setItem("theme",n[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(g=>{g.classList.toggle(this.getAttribute("data-act-class"))})})})}function m(){(function(t=localStorage.getItem("theme")){if(t!=null&&t!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",t);var e=document.querySelector("[data-set-theme='"+t.toString()+"']");e&&([...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.classList.remove(c.getAttribute("data-act-class"))}),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}else{var e=document.querySelector("[data-set-theme='']");e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(t=>{t.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(e=>{e.classList.remove(e.getAttribute("data-act-class"))}),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))})})}function s(){(function(t=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",t);var e=document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']");e&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach(c=>{c.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(t=>{t.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(e=>{e.selected=!0})})})}function h(t=!0){t===!0?document.addEventListener("DOMContentLoaded",function(e){d(),s(),m()}):(d(),s(),m())}a.exports={themeChange:h}})(E);r.themeChange(!0);l('label.swap > button[data-button="change-theme"]')?.addEventListener("click",function(a){a.preventDefault(),this.parentElement instanceof HTMLElement&&i(this.parentElement)});export{l as $,f as a};
//# sourceMappingURL=SwapTheme.astro_astro_type_script_index_0_lang.fd1d0731.js.map
