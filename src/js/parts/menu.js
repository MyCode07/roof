import { changePagination } from "./scroll-swiper.js";

let menuOpen = document.querySelector('.header__menu-open');
let menuClose = document.querySelector('.header__menu-close');
let menuBody = document.querySelector('.header__menu-body');
let menuLinks = document.querySelectorAll('.header nav a');

menuOpen.addEventListener('click', () => {
    menuBody.classList.add('_active')
})
menuClose.addEventListener('click', () => {
    menuBody.classList.remove('_active')
})

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuBody.classList.remove('_active');

            const index = +link.dataset.slide;
            const swiper = document.querySelector('.swiper').swiper;
            swiper.slideTo(index)


            changePagination(index);
        })
    });
}