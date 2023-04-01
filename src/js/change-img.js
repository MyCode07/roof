
const imageLeft = document.querySelectorAll('.installation__right img');
const imageContainer = document.querySelector('.installation__right');
const hoverImages = document.querySelectorAll('.installation__left li');

import { imgSrcArr } from './imagelist.js'


if (hoverImages) {
    for (let i = 0; i < hoverImages.length; i++) {
        const hoverImage = hoverImages[i];

        hoverImage.addEventListener("mouseenter", (e) => {
            if (!document.querySelector('.slide-inner li[data-open]')) {
                imageContainer.style.display = 'block'

                if (hoverImage.dataset.name && Object.keys(imgSrcArr).includes(hoverImage.dataset.name)) {

                    let images = imgSrcArr[hoverImage.dataset.name];

                    for (let k = 0; k < imageLeft.length; k++) {
                        imageLeft[k].src = images[k];

                    }

                }
            }
        });

    }
}