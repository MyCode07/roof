const images = document.querySelectorAll('.portfolio__images-img');
const imagebody = document.querySelector('.portfolio__images');
const imageclosebtn = document.querySelector('.portfolio__images-close');

if (images.length) {
    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        image.addEventListener('click', (e) => {
            imagebody.classList.add("_active");
            image.classList.add("_active");
            imageclosebtn.classList.add("_active");
        })

        imageclosebtn.addEventListener('click', () => {
            imagebody.classList.remove("_active");
            image.classList.remove("_active");
            imageclosebtn.classList.remove("_active");
        })
    }
}