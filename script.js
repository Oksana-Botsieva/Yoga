
document.addEventListener('DOMContentLoaded', function() {
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



