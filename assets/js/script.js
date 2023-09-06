window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        const menuNav = document.querySelector(".menu nav ul");
        if (menuNav.style.display === 'flex') {
            // Se o menu está aberto, fecha suavemente
            menuNav.style.opacity = '0';
            setTimeout(() => {
                menuNav.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            // Se o menu está fechado, abre suavemente
            menuNav.style.display = 'flex';
            setTimeout(() => {
                menuNav.style.opacity = '1';
            }, 10); // Pequeno intervalo para a exibição ser ajustada antes da animação
        }
    });
}

function getDistanceFromTheTop (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
    
}
function nativeScroll (distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: 'smooth'
    });
}


function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -90;
    nativeScroll(distanceFromTheTop);
}

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
        
});







