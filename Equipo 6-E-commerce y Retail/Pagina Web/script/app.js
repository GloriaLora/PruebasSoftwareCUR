// Script para abrir y cerrar los casos
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    // Cierra otros paneles
    buttons.forEach(b => {
      if (b !== this) b.classList.remove("active");
      const panel = b.nextElementSibling;
      if (b !== this) panel.style.maxHeight = null;
    });

    // Alterna el actual
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (this.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    }
  });
});


