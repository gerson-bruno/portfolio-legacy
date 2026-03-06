/*===== ANIMAÇÃO DE REVELAÇÃO =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});
sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__icons, .work__img, .contact__input", { interval: 200 });

/*===== MENU MOBILE =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("show"));
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () =>
    document.getElementById("nav-menu").classList.remove("show"),
  ),
);

/*===== LINKS ATIVOS =====*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

function activateMenu() {
  let scrollPos = window.scrollY + 70; // compensa header fixo

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav__menu a[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });

  // Força o contato se estivermos no final da página
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navLinks.forEach((link) => link.classList.remove("active-link"));
    document.querySelector(`.nav__menu a[href="#contact"]`).classList.add("active-link");
  }
}

window.addEventListener("scroll", activateMenu);
window.addEventListener("load", activateMenu);

/*===== COPYRIGHT AUTOMÁTICO =====*/
document.querySelector(".footer p").textContent =
  `© ${new Date().getFullYear()} Gerson Bruno. Todos os direitos reservados.`;

document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("dark-toggle");

  // verifica localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark_mode");
    darkToggle.checked = true; // mantém o checkbox marcado
  }

  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark_mode");

    if (document.body.classList.contains("dark_mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
