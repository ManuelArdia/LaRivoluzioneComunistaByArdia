let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
const counter = document.getElementById('slide-counter');

// Funzione principale per mostrare una specifica slide
function showSlide(index) {
    // Gestione del ciclo continuo (se vai oltre l'ultima torna alla prima, e viceversa)
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Nasconde tutte le slide e rimuove lo stato attivo dai pulsanti
    slides.forEach(slide => slide.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Attiva la slide corrente e il relativo pulsante nella barra superiore
    slides[currentSlide].classList.add('active');
    navButtons[currentSlide].classList.add('active');

    // Aggiorna il contatore in basso (es. "1 / 4")
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

// Funzione per i pulsanti "Indietro" (-1) e "Avanti" (+1)
function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Funzione per saltare direttamente alla slide cliccata dal menu in alto
function goToSlide(index) {
    showSlide(index);
}

// Supporto per le frecce della tastiera (Sinistra e Destra)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        changeSlide(1);
    } else if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});