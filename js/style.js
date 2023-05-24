// CREAZIONE ARRAY
let imgs = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp",];

// DICHIARAZIONE VARIABILI
let slider = document.querySelector(".slider");
let slide = "";
let activeSlide = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// CICLO PER LA CREAZIONE DELLE SLIDE
for( let i=0; i<imgs.length; i++){

    slide += `
        <div class="slide">
            <img src="${imgs[i]}" alt="">
        </div>`
}

// IMPLEMENTAZIONE SLIDE NEL DOM
slider.innerHTML += slide;

// CREAZIONE LISTA SLIDE
let slides = document.getElementsByClassName("slide");

// AGGIUNTA CLASSE ACTIVE
slides[activeSlide].classList.add("active");

// IMPLEMENTAZIONE CLICK
next.addEventListener('click', function(){

    if(activeSlide < (slides.length -1)){
        slides[activeSlide].classList.remove("active");
        activeSlide++
        slides[activeSlide].classList.add("active");
    }
})
prev.addEventListener('click', function(){

    if(activeSlide > 0){
        slides[activeSlide].classList.remove("active");
        activeSlide--
        slides[activeSlide].classList.add("active");
    }
})