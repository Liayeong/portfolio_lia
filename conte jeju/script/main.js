//Java Script Document

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
 
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}
 
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}
 
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}
 
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // 3초마다 자동 슬라이드                
});


jQuery(document).ready(function(){

    $('.r_slide a:gt(0)').hide();
    setInterval(function(){
        $('.r_slide a:first-child')
        .fadeOut(2000)
        .next('a')
        .fadeIn(2000)
        .end()
        .appendTo('.r_slide');
    },3000);
    
    setInterval(function(){
        $('.dining_slidelist').delay(5000);
        $('.dining_slidelist').animate({ marginLeft : -1190});
        $('.dining_slidelist').delay(5000);
        $('.dining_slidelist').animate({ marginLeft : -2380});
        $('.dining_slidelist').delay(5000);
        $('.dining_slidelist').animate({ marginLeft : 0});
        $('.dining_slidelist').delay(5000);
    });

    setInterval(function(){
        $('.space_slidelist').delay(5000);
        $('.space_slidelist').animate({ marginLeft : -1190});
        $('.space_slidelist').delay(5000);
        $('.space_slidelist').animate({ marginLeft : -2380});
        $('.space_slidelist').delay(5000);
        $('.space_slidelist').animate({ marginLeft : 0});
        $('.space_slidelist').delay(5000);
    });
    
});