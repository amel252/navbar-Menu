const barEl = document.querySelector(".fa-bars");
const menuEl = document.querySelector(".nav-menu");

barEl.addEventListener("click", () => {
    menuEl.classList.toggle("show-menu");
});
// Lorsque tu cliques sur l’icône .fa-bars, le script ajoute ou enlève la classe .show-menu à l'élément menuEl.
