/* --- we are writing separate html for nav-bar --- */
/* --- now we are linking that separate html to the main page --- */
fetch('/SHARED/nav-bar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-bar-placeholder').innerHTML = data;
  });

  /* --- when we scroll down the page, nav-bar gets hidden */
  let lastScrollY = 0;

  window.addEventListener('scroll', ()=>{
    let currentScrollY = window.scrollY;
    let navBarContainer = document.querySelector('.js-nav-bar-container');

    /* if currentScrollY > lastScrollY => user scrolling down */
    if(currentScrollY > lastScrollY){
      navBarContainer.classList.add('nav-bar-container-hidden');
      lastScrollY = currentScrollY;
    }
    /* if currentScrollY < lastScrollY => user scrolling up */
    else if (currentScrollY < lastScrollY){
      navBarContainer.classList.remove('nav-bar-container-hidden');
      lastScrollY = currentScrollY;
    }
  });
