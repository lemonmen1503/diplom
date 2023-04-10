var slides = document.querySelectorAll('.list-group .list-group-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'slides';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}