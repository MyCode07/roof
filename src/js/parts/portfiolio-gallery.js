const images = document.querySelectorAll('.portfolio__images-img');
const gallery = document.querySelector('.portfolio__gallery');
const galleryClsoe = document.querySelector('.portfolio__gallery-close');

if (images.length) {
    images.forEach(image => {

        image.addEventListener('click', (e) => {
            const src = image.querySelector('img').src;
            gallery.querySelector('img').src = src;
            gallery.classList.add("_active");
        })
    });

    galleryClsoe.addEventListener('click', () => {
        gallery.classList.remove("_active");
    })
}