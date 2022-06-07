// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  
  // Hamburger
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // Klik di luar hamburger
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });


// kategori
// Ambil
const content_portfolio1 = document.getElementById('content-portfolio1')
const content_portfolio2 = document.getElementById('content-portfolio2')

const item1 = document.getElementById('1')
item1.addEventListener('click', () => {
    if (item1.checked) {
      content_portfolio1.classList.remove('hidden')
      content_portfolio2.classList.remove('hidden')
    }
    
})

const item2 = document.getElementById('2')
item2.addEventListener('click', () => {
    if (item2.checked) {
      content_portfolio2.classList.remove('hidden')
      content_portfolio1.classList.add('hidden')
    }
    
})

// end kategori