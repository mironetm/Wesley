const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
})
document.querySelectorAIl(".nav-link").forEach(n => n.
    addEventListener ("click", () => {
    hamburger.classList.remove("active");
    hnavMenu.classList.remove("active");
    })) 