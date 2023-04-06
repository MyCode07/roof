import { Swiper, Mousewheel, Pagination, FreeMode } from "swiper";
import { colorHeader } from "./colorHeader.js";


const swiper = new Swiper('.swiper', {
    modules: [
        Mousewheel, Pagination,
        FreeMode
    ],
    slidesPerView: 'auto',
    direction: 'vertical',
    speed: 800,
    mousewheelControl: true,
    watchSlidesProgress: true,
    mousewheel: {
        releaseOnEdges: true,
    },
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
    },
    spaceBetween: 50,
    pagination: {
        el: '.pagination',
        clickable: true,
        type: 'bullets',

        renderBullet: function (index, className) {
            if (index != 0) {
                let slide = document.querySelectorAll('.swiper-slide')[index];
                let title = slide.dataset.title;
                return ` 
                <div class="${className} ${slide.classList[1]}">
                    <span>${(index)}.</span>
                    <span>${title}</span>
                </div>
            `;
            }
            else {
                return `<div class="${className} hidden">
                    <span></span>
                    <span></span>
                </div>`;
            }
        }
    },

    on: {
        slideChange: function () {
            let swiper = this;
            let index = swiper.activeIndex;

            changePagination(index);
            changeHeaderSectionName(index);

            colorHeader();
        }
    }
});

function changeHeaderSectionName(index) {
    const span = document.querySelector('.header__left span');
    const slide = document.querySelectorAll('.swiper-slide')[index];
    span.textContent = slide.dataset.title
}

export function changePagination(index) {
    const pagination = document.querySelectorAll('.swiper-pagination-bullet')
    pagination.forEach(item => {
        item.style.display = 'none';

        if (index != pagination.length - 1) {
            pagination[index].style.display = 'none';

            if (pagination[index + 1]) {
                pagination[index + 1].style.display = 'flex';
            }
            if (pagination[index + 2]) {
                pagination[index + 2].style.display = 'flex';
            }
        }
    })
}