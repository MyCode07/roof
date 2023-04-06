
export const colorHeader = () => {
    const header = document.querySelector('.header__logo svg');
    const headerMenuText = document.querySelector('.header__menu-buttons a');
    const headerMenuOpen = document.querySelector('.header__menu-open');
    const sections = document.querySelectorAll('[data-background]');

    if (sections.length) {
        for (let i = 0; i < sections.length; i++) {
            const item = sections[i];
            let top = item.getBoundingClientRect().top;
            if (top <= header.getBoundingClientRect().height) {
                header.style.fill = item.dataset.background ? item.dataset.background : 'white';
                headerMenuText.style.color = item.dataset.background ? item.dataset.background : 'white';
                headerMenuOpen.style.stroke = item.dataset.background ? item.dataset.background : 'white';
            }
        }
    }
}