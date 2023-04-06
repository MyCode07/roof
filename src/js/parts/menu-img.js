import { isMobile } from "./ismobile.js";
import { menuImages } from './menu-image-list.js'

const imageLeft = document.querySelectorAll('.header__menu-img img');
const hoverImages = document.querySelectorAll('.header__menu-body ul li');

if (imageLeft.length && !isMobile.any()) {
    if (hoverImages) {
        for (let i = 0; i < hoverImages.length; i++) {
            const hoverImage = hoverImages[i];

            hoverImage.addEventListener("mouseenter", (e) => {
                if (!document.querySelector('.slide-inner li[data-open]')) {

                    if (hoverImage.dataset.name && Object.keys(menuImages).includes(hoverImage.dataset.name)) {

                        let images = menuImages[hoverImage.dataset.name];
                        for (let k = 0; k < imageLeft.length; k++) {
                            imageLeft[k].src = images[k];

                        }
                    }
                }
            });
        }
    }
}