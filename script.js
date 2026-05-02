document.addEventListener('DOMContentLoaded', function() {

    // 1. Meta Pixel InitiateCheckout tracking
    const botoesCTA = document.querySelectorAll('.btn-cta');
    botoesCTA.forEach(function(botao) {
        botao.addEventListener('click', function() {
            if (typeof fbq === 'function') {
                fbq('track', 'InitiateCheckout', {
                    value: 67.00,
                    currency: 'BRL',
                    content_name: 'Copia Cola Cresce',
                    content_type: 'product'
                });
            }
        });
    });


    // 2. Intersection Observer para Animação de Fade-in
    const observerOptions = {
        root: null,
        rootMargin: '100px 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animar apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Fecha os outros (opcional, deixar se quiser que feche os outros ao abrir um)
            // accordionHeaders.forEach(h => {
            //     if(h !== this) {
            //         h.classList.remove('active');
            //         h.nextElementSibling.style.maxHeight = null;
            //         h.querySelector('span').textContent = '▼';
            //     }
            // });

            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const icon = this.querySelector('span');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.textContent = '▼';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '▲';
            }
        });
    });

});
