const WA='https://wa.me/971559174451';
const pages=[['index.html','Home'],['about.html','About Us'],['experiences.html','Club Experiences'],['contact.html','Contact Us']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">Sky <i>Ladies</i></a>
<nav id="nav">${pages.map(([h,t])=>`<a href="${h}"${h===cur?' aria-current="page"':''}>${t}</a>`).join('')}</nav>
<div class="hbtns"><a class="btn" href="${WA}">Book Pool Access</a><a class="btn" href="${WA}">Book a Class</a></div>
<button class="menu" aria-expanded="false">Menu</button></header>`);
const h=document.querySelector('header'),m=document.querySelector('.menu');
m.onclick=()=>{const o=h.classList.toggle('open');m.setAttribute('aria-expanded',o)};
document.body.insertAdjacentHTML('beforeend',`<section class="cta"><h2>Begin your <b>ascent</b></h2><p>Reserve a pool session or explore experiences across the club.</p>
<div class="btns"><a class="btn" href="${WA}">Book Pool Access</a><a class="btn" href="${WA}">Book a Class</a></div></section>
<footer><div class="wrap"><div><div class="brand">SKY LADIES CLUB</div><p>Ladies-Only Rooftop Pool &amp; Studios in Sharjah</p></div>
<div><h4>Explore</h4>${pages.slice(0,3).map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}<a href="https://instagram.com/skyladiesclub">Media</a><a href="contact.html">Contact Us</a></div>
<div><h4>Address</h4><p>Floor S3, Al Nisr Plaza, Al Majaz 3<br>Sharjah, UAE</p><h4>Get in touch</h4><a href="tel:+971559174451">+971 55 917 4451</a><a href="mailto:skyladiesclub.shj@gmail.com">skyladiesclub.shj@gmail.com</a></div>
<div><h4>Follow us</h4><div class="soc"><a href="https://www.tiktok.com/@sky.ladies.club" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.2a2.9 2.9 0 11-2.9-2.9c.3 0 .6 0 .9.1V9a6.2 6.2 0 106.2 6.2V8.7a7.6 7.6 0 004.4 1.4V6.8a4.5 4.5 0 01-4.4-4.8z"/></svg></a><a href="https://instagram.com/skyladiesclub" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a></div></div>
<div class="legal"><span>© 2026 Sky Wellness Club</span><span>Sharjah · United Arab Emirates</span></div></div></footer>`);
const f=document.querySelector('form');
if(f)f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
location.href=`mailto:skyladiesclub.shj@gmail.com?subject=${encodeURIComponent(d.reason+' - '+d.name)}&body=${encodeURIComponent(d.message+'\n\n'+d.name+'\n'+d.email+'\n'+d.phone)}`};

document.querySelectorAll('.gal').forEach(g=>{const s=g.querySelector('.strip');g.querySelectorAll('[data-dir]').forEach(b=>b.onclick=()=>s.scrollBy({left:s.clientWidth/2*b.dataset.dir,behavior:'smooth'}))});

(function(){const f=document.getElementById('cform');if(!f)return;const dd=f.querySelector('.dd'),btn=dd.querySelector('.dd-btn'),hid=dd.querySelector('input'),lab=btn.querySelector('span');
btn.onclick=()=>{const o=dd.classList.toggle('open');btn.setAttribute('aria-expanded',o)};
dd.querySelectorAll('li').forEach(li=>li.onclick=()=>{hid.value=li.textContent;lab.textContent=li.textContent;dd.querySelectorAll('li').forEach(x=>x.classList.remove('sel'));li.classList.add('sel');dd.classList.remove('open');btn.setAttribute('aria-expanded',false)});
f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);if(!d.get('name')||!d.get('email')){alert('Please add your name and email.');return}
const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')||''}\nReason: ${d.get('reason')||'General Enquiry'}`;
location.href='mailto:skyladiesclub.shj@gmail.com?subject='+encodeURIComponent('Website enquiry: '+(d.get('reason')||'General Enquiry'))+'&body='+encodeURIComponent(body)}})();
