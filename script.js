const nav=document.querySelector('.nav');const menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';obs.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.section:not(.hero)').forEach(el=>{el.style.opacity=0;el.style.transform='translateY(18px)';el.style.transition='opacity .7s ease,transform .7s ease';obs.observe(el)});
