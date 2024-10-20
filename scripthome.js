const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelectorAll('.burger-menu a');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    burgerMenu.classList.toggle('show');
});

// Tutup menu ketika salah satu link di klik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('show');
        burger.classList.remove('toggle');
    });
});

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

console.log("Script home.js berhasil dimuat.");