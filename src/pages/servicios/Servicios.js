document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped'); // Agrega o quita la clase .flipped
    });
});