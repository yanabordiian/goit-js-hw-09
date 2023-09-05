!function(){let t=null,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.addEventListener("click",function(){t||(t=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3),e.disabled=!0,d.disabled=!1)}),d.addEventListener("click",function(){clearInterval(t),t=null,e.disabled=!1,d.disabled=!0})}();//# sourceMappingURL=01-color-switcher.b1a1b2e5.js.map

//# sourceMappingURL=01-color-switcher.b1a1b2e5.js.map
