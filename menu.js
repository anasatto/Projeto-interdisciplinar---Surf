window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let logoBranca = document.getElementById('logo-branca');
    let logoAzul = document.getElementById('logo-azul');

    if (window.scrollY > 500) {
        header.classList.add('rolagem');
        logoBranca.style.display = 'none'; // Oculta a logo branca
        logoAzul.style.display = 'block'; // Mostra a logo azul
    } else {
        header.classList.remove('rolagem');
        logoBranca.style.display = 'block'; // Mostra a logo branca
        logoAzul.style.display = 'none'; // Oculta a logo azul
    }
});

// Função para controlar o menu responsivo
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('header ul');
    menu.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});
