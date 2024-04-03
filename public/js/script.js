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
const content_portfolio3 = document.getElementById('content-portfolio3')

const item1 = document.getElementById('1')
item1.addEventListener('click', () => {
    if (item1.checked) {
      content_portfolio1.classList.add('portfolio-item-show')
      content_portfolio3.classList.add('portfolio-item-show')
      content_portfolio2.classList.add('portfolio-item-show')
      content_portfolio1.classList.remove('portfolio-item-hide')
      content_portfolio3.classList.remove('portfolio-item-hide')
      content_portfolio2.classList.remove('portfolio-item-hide')
    }
})

const item2 = document.getElementById('2')
item2.addEventListener('click', () => {
    if (item2.checked) {
      content_portfolio1.classList.add('portfolio-item-show')
      content_portfolio1.classList.remove('portfolio-item-hide')
      content_portfolio2.classList.add('portfolio-item-hide')
      content_portfolio2.classList.remove('portfolio-item-show')
      content_portfolio3.classList.add('portfolio-item-show')
      content_portfolio3.classList.remove('portfolio-item-hide')
    }
})

const item3 = document.getElementById('3')
item3.addEventListener('click', () => {
    if (item3.checked) {
      content_portfolio2.classList.add('portfolio-item-show')
      content_portfolio1.classList.remove('portfolio-item-show')
      content_portfolio3.classList.remove('portfolio-item-show')
      content_portfolio2.classList.remove('portfolio-item-hide')
      content_portfolio1.classList.add('portfolio-item-hide')
      content_portfolio3.classList.add('portfolio-item-hide')
    }
    
})
// end kategor

// nav active
// const label_id_contact = document.getElementById('label-id-contact');
// const a_contact = document.getElementById('a-contact');
// const id_checkbox_contact = document.getElementById('id-checkbox-contact');

// id_checkbox_contact.addEventListener('click', () => {
//     if (id_checkbox_contact.checked) {
//       a_contact.classList.add('a-new-group')
//     } else {
//       a_contact.classList.remove('a-new-group')
//     }
// })