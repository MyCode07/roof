const list = document.querySelectorAll('.slide-inner li');
const installation = document.querySelectorAll('.installation');


if (list.length) {
    for (let i = 0; i < list.length; i++) {
        const li = list[i];

        li.addEventListener('click', function (e) {
            
            if (e.target.hasAttribute('data-name')) {

                const imageContainer = li.closest('.list-images').querySelector('.installation__right');
                imageContainer.style.display = 'none';

                if (!this.hasAttribute('data-open')) {

                    if (document.querySelector('.slide-inner li[data-open]')) {
                        document.querySelector('.slide-inner li[data-open]').classList.remove('_active')
                        document.querySelector('.slide-inner li[data-open]').removeAttribute('data-open')
                    }

                    list.forEach(item => {
                        item.classList.remove('_active')
                    })

                    this.classList.add('_active')
                    this.setAttribute('data-open', 'open')
                }
                else {
                    this.classList.remove('_active')
                    this.removeAttribute('data-open')
                }
            }
        });
    }
}
