window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let logoBranca = document.getElementById('logo-branca');
    let logoAzul = document.getElementById('logo-azul');

    if (window.innerWidth <= 768) { // Modo mobile
        if (window.scrollY > 30) {
            header.classList.add('rolagem');
            logoBranca.style.display = 'none'; // Oculta a logo branca
            logoAzul.style.display = 'block'; // Mostra a logo azul
        } else {
            header.classList.remove('rolagem');
            logoBranca.style.display = 'block'; // Mostra a logo branca
            logoAzul.style.display = 'none'; // Oculta a logo azul
        }
    } else { // Modo desktop
        if (window.scrollY > 300) {
            header.classList.add('rolagem');
            logoBranca.style.display = 'none'; // Oculta a logo branca
            logoAzul.style.display = 'block'; // Mostra a logo azul
        } else {
            header.classList.remove('rolagem');
            logoBranca.style.display = 'block'; // Mostra a logo branca
            logoAzul.style.display = 'none'; // Oculta a logo azul
        }
    }
});
