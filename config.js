const menu = document.querySelector('#mobile-menu');
const menuPages = document.querySelector('.navbarMenu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuPages.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#homePage');
    const aboutMenu = document.querySelector('#aboutPage');
    const servicesMenu = document.querySelector('#servicesPage'); 
    const contactUsMenu = document.querySelector('#ContactUsPage');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2385) {
        contactUsMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }

   
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);