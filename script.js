document.addEventListener('DOMContentLoaded', function () {

    const sliderItems = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.slider-dots .dot');

    let currentSlide = 0;

    function showSlide(index) {
        sliderItems.forEach(item => {
            item.style.display = 'none';
        })

        sliderItems[index].style.display = 'block';

        dots.forEach(dot => {
            dot.classList.remove('dot-active');
        })
        dots[index].classList.add('dot-active');
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    }

    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    showSlide(currentSlide);

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
  

    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    const endDate = new Date('2024-05-08 00:00:00');

    function updateTimer() {

    const currentDate = new Date();
    const timeDiff = endDate - currentDate;

    let hours = Math.floor(timeDiff / ( 1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % ( 1000 * 60 * 60)) / ( 1000 * 60));
    let seconds = Math.floor((timeDiff % ( 1000 * 60)) / 1000);

    hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

    if ( timeDiff <= 0) {
        clearInterval(timerInterval);
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
    }
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
  
  
    const tabs = document.querySelectorAll('.info-header-tab');
    const tabContents = document.querySelectorAll('.info-tabcontent');

    function hideAllTabs() {
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('show');
            tabContent.classList.add('hide');
        });
    }

    function showTabContent(tabIndex) {
        hideAllTabs();
        tabContents[tabIndex].classList.remove('hide');
        tabContents[tabIndex].classList.add('show');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showTabContent(index);
        });

    showTabContent(0);
})