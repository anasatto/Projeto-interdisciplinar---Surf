// window.addEventListener("scroll", function() {
//     let header = document.querySelector('#header');
//     let logoBranca = document.getElementById('logo-branca');
//     let logoAzul = document.getElementById('logo-azul');

//     if (window.scrollY > 300) {
//         header.classList.add('rolagem');
//         logoBranca.style.display = 'none'; // Oculta a logo branca
//         logoAzul.style.display = 'block'; // Mostra a logo azul
//     } else {
//         header.classList.remove('rolagem');
//         logoBranca.style.display = 'block'; // Mostra a logo branca
//         logoAzul.style.display = 'none'; // Oculta a logo azul
//     }
// });

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let logoBranca = document.getElementById('logo-branca');
    let logoAzul = document.getElementById('logo-azul');
    let isWideScreen = window.innerWidth > (window.innerWidth / 2); // Verifica se a tela é maior que a metade

    if (isWideScreen) {
        // Se a tela for larga, aplica a rolagem e troca as logos
        if (window.scrollY > 300) {
            header.classList.add('rolagem');
            logoBranca.style.display = 'none'; // Oculta a logo branca
            logoAzul.style.display = 'block'; // Mostra a logo azul
        } else {
            header.classList.remove('rolagem');
            logoBranca.style.display = 'block'; // Mostra a logo branca
            logoAzul.style.display = 'none'; // Oculta a logo azul
        }
    } else {
        // Se a tela for menor ou igual à metade, apenas troca as logos
        if (window.scrollY > 300) {
            logoBranca.style.display = 'none'; // Oculta a logo branca
            logoAzul.style.display = 'block'; // Mostra a logo azul
        } else {
            logoBranca.style.display = 'block'; // Mostra a logo branca
            logoAzul.style.display = 'none'; // Oculta a logo azul
        }
    }
});

// Adiciona o evento de resize para lidar com mudanças de tamanho da tela
window.addEventListener("resize", function() {
    let header = document.querySelector('#header');
    let logoBranca = document.getElementById('logo-branca');
    let logoAzul = document.getElementById('logo-azul');
    let isWideScreen = window.innerWidth > (window.innerWidth / 2); // Verifica se a tela é maior que a metade

    // Troca de logo baseado na largura
    if (logoAzul.style.display === 'block' && !isWideScreen) {
        logoBranca.style.display = 'block';
        logoAzul.style.display = 'none';
    } else if (logoBranca.style.display === 'block' && isWideScreen && window.scrollY > 300) {
        logoBranca.style.display = 'none';
        logoAzul.style.display = 'block';
    }
});
