import"./assets/styles-471a3fca.js";/* empty css                     */const a={email:"",message:""},l=document.querySelector(".feedback-form");l.addEventListener("submit",r);l.addEventListener("input",m);o();function m(e){const t=e.target.name;a[t]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))}function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:t,message:s}=l.elements;t.value=e.email,s.value=e.message,a.email=e.email,a.message=e.message}function r(e){e.preventDefault();const{email:t,message:s}=e.target.elements;if(t.value.length&&s.value.length>0)console.log(a);else return alert("Fill please all fields");l.reset(),localStorage.clear()}
//# sourceMappingURL=commonHelpers3.js.map