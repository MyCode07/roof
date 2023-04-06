import { listImages } from './potolki-image-list.js'

const listImagesSections = document.querySelectorAll('.list-images');

if (listImagesSections.length) {

    listImagesSections.forEach(listImage => {
        const imagesContainer = listImage.querySelector('.installation__right');
        const images = imagesContainer.querySelectorAll('.installation__right img');

        const hoverItem = listImage.querySelectorAll('ol li');
        hoverItem.forEach(item => {

            item.addEventListener("mouseenter", (e) => {

                const openLi = item.closest('.list-images').querySelector('li[data-open]');
                if (!openLi) {

                    imagesContainer.style.display = 'block';
                    if (item.dataset.name && Object.keys(listImages).includes(item.dataset.name)) {

                        let imagespack = listImages[item.dataset.name];
                        for (let k = 0; k < imagespack.length; k++) {
                            images[k].src = imagespack[k];
                        }
                    }
                }
            });
        })
    });
}  