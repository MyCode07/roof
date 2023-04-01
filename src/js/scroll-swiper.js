import { Swiper, Mousewheel, Pagination, FreeMode } from "swiper";


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
    spaceBetween: 100,
    pagination: {
        el: '.pagination',
        clickable: true,
        type: 'bullets',

        renderBullet: function (index, className) {
            if (index != 0) {
                let slide = document.querySelectorAll('.swiper-slide')[index];
                let title = slide.querySelector('.title').textContent;
                return ` 
                <div class="${className} ${slide.classList[1]}">
                    <span>${(index)}.</span>
                    <span>${title}</span>
                </div>
            `;
            }
            else {
                return ``;
            }
        }
    },

    on: {
        slideChange: function () {
            let swiper = this;
            let index = swiper.activeIndex;

            if (document.querySelectorAll('.swiper-pagination-bullet')[index - 1]) {
                document.querySelectorAll('.swiper-pagination-bullet')[index - 1].style.display = 'none'
            }
            if (document.querySelectorAll('.swiper-pagination-bullet')[index + 1]) {
                document.querySelectorAll('.swiper-pagination-bullet')[index + 1].style.display = 'flex'
            }
            if (document.querySelectorAll('.swiper-pagination-bullet')[index]) {
                document.querySelectorAll('.swiper-pagination-bullet')[index].style.display = 'flex'
            }
        }
    }
});