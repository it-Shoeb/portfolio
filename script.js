const burger = document.querySelector('.burger-container');
const navLink = document.querySelector('.nav-links')
burger.addEventListener('click', () => {
    navLink.classList.toggle('active')
})