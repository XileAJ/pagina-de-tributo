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

    // Adicione um ouvinte de evento de clique ao document.body para fechar o menu quando clicar em qualquer lugar do body
    document.body.addEventListener('click', function () {
        const menuNav = document.querySelector('.menu nav ul');
        menuNav.style.display = 'none'; // Oculte o menu
    });

    // Adicione um ouvinte de evento de clique ao menu para impedir que o clique nele propague até o body
    const menuMobile = document.querySelector('.menuMobile');
    menuMobile.addEventListener('click', function (event) {
        // Impedir que o clique no menu se propague para o body
        event.stopPropagation();
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
