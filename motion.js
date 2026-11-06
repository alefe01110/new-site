// Deliberate entrance choreography also runs on touch screens.
const heroTitle=document.querySelector('.hero-copy h1');
heroTitle.innerHTML='<span class="headline-line"><span>Sua marca</span></span><span class="headline-line"><span>merece ser</span></span><span class="headline-line"><span><span class="outline-word">vista.</span><span class="hero-asterisk" aria-hidden="true">✳</span></span></span>';
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
let progressFrame=0;function paintProgress(){const distance=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${distance>0?scrollY/distance:0})`;progressFrame=0}function requestProgress(){if(!progressFrame)progressFrame=requestAnimationFrame(paintProgress)}addEventListener('scroll',requestProgress,{passive:true});addEventListener('resize',requestProgress);paintProgress();
if('IntersectionObserver'in window){
 const sections=document.querySelectorAll('.about-grid,.section-heading,.pricing-heading,.work-grid,.panorama-intro,.process-grid,.quote-grid');
 const choreographer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');choreographer.unobserve(entry.target)}}),{threshold:.12});
 sections.forEach(section=>{section.classList.add('motion-section');[...section.children].forEach((child,index)=>{child.classList.add('motion-item');child.style.setProperty('--motion-delay',`${Math.min(index,5)*110}ms`)});choreographer.observe(section)});
}
// Changing plan category gets a short transition without delaying its controls.
document.querySelectorAll('[data-mode]').forEach(tab=>tab.addEventListener('click',()=>{const grid=document.querySelector('#plan-grid');if(!window.leffeMotion.matches)grid.animate([{opacity:.25,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:400,easing:'ease-out'})}));
document.querySelectorAll('[data-art],[data-expand]').forEach(button=>button.addEventListener('click',()=>document.querySelector('#art-dialog').classList.toggle('matos-art',button.dataset.art==='matos-barbearia')));
