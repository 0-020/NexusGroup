
// Slider para cambiar de frase cada 4 segundos 


document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const frases = document.querySelectorAll('.frase');
    
    setInterval(function() {
        frases.forEach(frase => frase.classList.remove('active'));
        frases[index].classList.add('active');
        index = (index + 1) % frases.length;
    }, 4500); 
});
