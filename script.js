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
})