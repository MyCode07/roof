const lists = document.querySelectorAll('.slide-inner li');
const imageContainer = document.querySelector('.installation__right');

if (lists.length) {
    for (let i = 0; i < lists.length; i++) {
        const list = lists[i];

        list.addEventListener('click', function (e) {
            imageContainer.style.display = 'none';

            if (!this.hasAttribute('data-open')) {

                if (document.querySelector('.slide-inner li[data-open]')) {
                    document.querySelector('.slide-inner li[data-open]').classList.remove('_active')
                    document.querySelector('.slide-inner li[data-open]').removeAttribute('data-open')
                }

                lists.forEach(item => {
                    item.classList.remove('_active')
                })

                this.classList.add('_active')
                this.setAttribute('data-open', 'open')
            }
            else {
                this.classList.remove('_active')
                this.removeAttribute('data-open')
            }
        });
    }
}
