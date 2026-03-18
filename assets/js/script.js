window.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menuMobile");
  const menuList = document.querySelector(".menu-list");
  const menuLinks = document.querySelectorAll('.menu-list a[href^="#"]');
  const scrollButton = document.querySelector(".scrollUpButton");

  const closeMenu = () => {
    if (!menuButton || !menuList) {
      return;
    }

    menuList.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    if (!menuButton || !menuList) {
      return;
    }

    menuList.classList.remove("hidden");
    menuButton.setAttribute("aria-expanded", "true");
  };

  if (menuButton && menuList) {
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      if (menuList.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = menuList.contains(event.target);
      const clickedButton = menuButton.contains(event.target);

      if (!clickedInsideMenu && !clickedButton && window.innerWidth < 1024) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        menuButton.setAttribute("aria-expanded", "false");
        menuList.classList.remove("hidden");
        return;
      }

      closeMenu();
    });

    if (window.innerWidth >= 1024) {
      menuList.classList.remove("hidden");
    }
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetSelector);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      const offset = 96;
      const top =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      if (window.innerWidth < 1024) {
        closeMenu();
      }
    });
  });

  const toggleScrollButton = () => {
    if (!scrollButton) {
      return;
    }

    if (window.scrollY > 320) {
      scrollButton.classList.remove("hidden");
    } else {
      scrollButton.classList.add("hidden");
    }
  };

  if (scrollButton) {
    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.addEventListener("scroll", toggleScrollButton);
  toggleScrollButton();
});
