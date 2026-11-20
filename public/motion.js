// Soft reveal on scroll. Content stays visible without JS.
(function(){
  var root=document.documentElement;
  if(!('IntersectionObserver' in window))return;
  root.classList.add('js');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{rootMargin:'0px 0px -10% 0px',threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
