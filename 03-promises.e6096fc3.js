!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON");let u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},l=Number(u.delay.value),a=Number(u.step.value),d=Number(u.amount.value);u.form.addEventListener("submit",function(t){t.preventDefault();for(let t=1;t<=d;t+=1)(function(e,t){return new Promise((o,n)=>{let r=Math.random()>.3;setTimeout(()=>{r&&o({position:e,delay:t}),n({position:e,delay:t})},t)})})(t,l).then(({position:t,delay:o})=>{/*@__PURE__*/e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}).catch(({position:t,delay:o})=>{/*@__PURE__*/e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}),l+=a;u.form.reset()})}();//# sourceMappingURL=03-promises.e6096fc3.js.map

//# sourceMappingURL=03-promises.e6096fc3.js.map