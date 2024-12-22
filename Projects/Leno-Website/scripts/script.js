document.addEventListener('DOMContentLoaded',()=>{

    const menuIcon = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    menuIcon.addEventListener('click',()=>{
        mobileMenu.classList.toggle('active');
    })
})