const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("displayMenu");
})



// For menu icon and cross icon
function toggleMenuIcon() {
    const menuIcon = document.getElementById("menu");

    menuIcon.classList.toggle("cross-icon");
    menuIcon.classList.toggle("rotate-180");
}