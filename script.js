let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon. classList.toggle('fa-brands fa')
    navbar.classList.toggle('active');
}