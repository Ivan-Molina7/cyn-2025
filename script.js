const hamburguesa = document.getElementById('hamburguer');
const navList = document.querySelector('.header__nav-list');

hamburguesa.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburguesa.classList.toggle('active');
});

function closeMenu(event) {
    if (!navList.contains(event.target) && !hamburguesa.contains(event.target)) {
        navList.classList.remove("active");
        hamburguesa.classList.toggle('active');
    }
}

document.addEventListener("click", closeMenu);
