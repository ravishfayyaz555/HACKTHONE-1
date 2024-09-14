var navLinks = document.getElementById('nav-links');
var toggleButton = document.getElementById('menu-toggle');
function toggleMenu() {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
    else {
        navLinks.classList.add('show');
    }
}
toggleButton.addEventListener('click', toggleMenu);
