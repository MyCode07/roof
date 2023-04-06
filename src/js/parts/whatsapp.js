let whatsapp = document.querySelectorAll('.whatsapp a');

for (let i = 0; i < whatsapp.length; i++) {
    const element = whatsapp[i];



    element.addEventListener('click', (e) => {
        const liName = element.closest('li').querySelector('label').textContent
        let href = element.getAttribute('href');
        let customHref = `?text=Здравствуйте!%0AХочу заказать :%0A${liName}`
        href += customHref;
        element.href = href
    })
}