document.addEventListener('DOMContentLoaded', function () {


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
    });

    showTabContent(0);
})
