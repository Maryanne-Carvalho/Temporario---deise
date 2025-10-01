document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const btn = document.querySelector(".btn-consulta");
  const navbar = document.querySelector(".navbar");

  // Função para mover o botão
  function moveButton() {
    if (window.innerWidth <= 768) {
      if (!nav.contains(btn)) {
        nav.appendChild(btn); // move para dentro do menu
      }
    } else {
      if (!navbar.contains(btn)) {
        navbar.appendChild(btn); // move de volta para fora
      }
    }
  }

  // Chama ao carregar e ao redimensionar
  moveButton();
  window.addEventListener("resize", moveButton);

  // Menu hamburguer
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});