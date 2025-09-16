let p2 = document.querySelector('.project-2-link');
p2.addEventListener('mousemove', (e)=>{
  p2.style.setProperty('--mouse-x', `${e.offsetX}px`);
  p2.style.setProperty('--mouse-y', `${e.offsetY}px`);
});
