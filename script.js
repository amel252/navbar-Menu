
// Lorsque tu cliques sur l’icône .fa-bars, le script ajoute ou enlève la classe .show-menu à l'élément menuEl.

const barEl = document.querySelector(".fa-bars");
const menuEl = document.querySelector(".nav-menu");

barEl.addEventListener("click", () => {
    menuEl.classList.toggle("show-menu");
});


// Function pour travailler container de cover
const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () =>{
    updateImage()
})
// dans cette function on veux diminuer l'opacity de notre Img
function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    // dininuer le zoom level
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}