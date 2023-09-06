window.onload = function () {
    const menuMobile = document.querySelector(".menuMobile");
    const menuNav = document.querySelector(".menu nav ul");

    // Ouvinte de evento de clique no botão do menu
    menuMobile.addEventListener("click", function (event) {
        event.stopPropagation(); // Impede a propagação para o body
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

    // Ouvinte de evento de clique no document.body para fechar o menu quando clicar fora do menu
    document.body.addEventListener('click', function (event) {
        if (!menuMobile.contains(event.target) && menuNav.style.display === 'flex') {
            // Verifica se o clique ocorreu fora do menu e se o menu está aberto
            menuNav.style.opacity = '0';
            setTimeout(() => {
                menuNav.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        }
    });
};



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
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -250;
    nativeScroll(distanceFromTheTop);
}

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
        
});

let buttonUP = document.querySelector('.scrollUpButton');
buttonUP.addEventListener('click', ScrollUpButton);
function ScrollUpButton () {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

function offButton () {
    if(window.scrollY === 0) {
        //ocultar botão
        buttonUP.style.display = 'none'
    }else{
        //mostrar botão
        buttonUP.style.display = 'block'
    }
}
window.addEventListener('scroll', offButton);
