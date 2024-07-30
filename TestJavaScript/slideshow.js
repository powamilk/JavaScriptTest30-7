let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function previousSlide() {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);
