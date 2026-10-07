
const menu=document.getElementById("menu"),navlinks=document.getElementById("navlinks");
if(menu&&navlinks){menu.addEventListener("click",()=>{const open=navlinks.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu")});}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const form=document.getElementById("partner-form"),result=document.getElementById("result");
if(form&&result){form.addEventListener("submit",async e=>{e.preventDefault();const btn=form.querySelector('button[type="submit"]'),old=btn.textContent;btn.disabled=true;btn.textContent="Sending...";
try{const response=await fetch(form.action,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))});if(!response.ok)throw new Error();form.reset();result.className="result show";result.textContent="Thank you. Your inquiry has been received by Westforge Holdings Inc."}
catch(err){result.className="result show error";result.innerHTML='We could not submit the inquiry. Please email <a href="mailto:info@westforgeholdings.com">info@westforgeholdings.com</a> directly.'}
finally{btn.disabled=false;btn.textContent=old}});}
