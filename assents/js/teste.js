let slideIndex = 0;
let slideInterval;

/*
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

*/

/*
let blocos = document.querySelectorAll('.post');

blocos = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    reset: false
});

blocos.reveal(
    '.post', { interval: 500 }
)
*/

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.length;

    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }

    let slideWidth = slides[0].offsetWidth;
    document.querySelector(".slides").style.transform = `translateX(${-slideIndex * slideWidth}px)`;

    // Atualiza a classe ativa dos indicadores
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (dots[slideIndex]) {
        dots[slideIndex].className += " active";
    }
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex);
    resetSlideInterval(); // Reinicia o intervalo quando o usuário navega manualmente
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetSlideInterval(); // Reinicia o intervalo quando o usuário navega manualmente
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        plusSlides(1); // Avança automaticamente
    }, 5000); // Muda o slide a cada 3 segundos
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval(); // Reinicia o intervalo após a navegação manual
}

function setupDots() {
    let slides = document.getElementsByClassName("slide");
    let dotsContainer = document.querySelector(".dots");

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => currentSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Initialize slider and dots
showSlides(slideIndex);
setupDots();
startSlideInterval();
