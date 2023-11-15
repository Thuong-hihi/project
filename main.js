document.addEventListener('DOMContentLoaded', function () {
    const bannerContainer = document.querySelector('.banner-container');
    const bannerSlides = document.querySelector('.banner-slides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showSlide(index) {
        const translateValue = -index * 100 + '%';
        bannerSlides.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % bannerSlides.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + bannerSlides.children.length) % bannerSlides.children.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', function () {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', function () {
        prevSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 3000);
    }

    let intervalId = setInterval(nextSlide, 3000); // Chuyển ảnh mỗi 3 giây
});
