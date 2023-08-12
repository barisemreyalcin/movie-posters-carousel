const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;


let slideNumberEl = document.querySelector(".slide-number");
let slideNo = slidePosition + 1;

function renderSlideNo() {
    slideNumberEl.textContent = `${slideNo} / ${totalSlides}`;
}
renderSlideNo();

const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

function moveToNextSlide() {
    hideAllSlides();
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
        slideNo = 1;
    } else {
        slidePosition++;
        slideNo++;
    }

    renderSlideNo()
    slides[slidePosition].classList.add("carousel-item-visible");
};

function moveToPrevSlide() {
    hideAllSlides();
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
        slideNo = totalSlides;
    } else {
        slidePosition--;
        slideNo--;
    }

    renderSlideNo()
    slides[slidePosition].classList.add("carousel-item-visible");
};

function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
};