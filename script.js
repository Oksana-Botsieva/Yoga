document.addEventListener('DOMContentLoaded', () => {

    const moreBtn = document.querySelector('.more');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.popup-close');


    moreBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });

    const popupBtn = document.querySelector('.popup-form__btn');

    popupBtn.addEventListener('click', () => {
        const phoneNumber = document.querySelector('.popup-form__input').value;
        console.log('Номер телефона:', phoneNumber);
    })
})