//Get Link DOM Elements
const home_link = document.querySelector('#home-link');
const projects_link = document.querySelector('#projects-link');
const about_link = document.querySelector('#about-link');
const contact_link = document.querySelector('#contact-link');

//Get targets for links
const home_target = document.querySelector('#home');
const projects_target = document.querySelector('#projects');
const about_target = document.querySelector('#about');
const contact_target = document.querySelector('#contact');

nav_links = [home_link, projects_link, about_link, contact_link];
link_targets = [home_target, projects_target, about_target, contact_target];


//Get Nav DOM Elements
const menu_text = document.querySelector('.menu-text')
const menu_btn = document.querySelector('.menu-btn');
const btn_line = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.menu')
const menu_nav = document.querySelector('.menu-nav')
const brand = document.querySelector('.brand')
const nav_items = document.querySelectorAll('.nav-item')

for (let i = 0; i < nav_links.length; i++) {
    let link = nav_links[i];
    link.addEventListener('click', (event) => {
        event.preventDefault();
        toggle_menu();
        link_targets[i].scrollIntoView({ behavior: 'smooth' });
    });
}

//Initialize menu
let show_menu = false;

let toggle_menu = function () {
    if (!show_menu) {
        menu_text.classList.add('close');
        menu_btn.classList.add('close')
        menu.classList.add('show')
        menu_nav.classList.add('show')
        brand.classList.add('show')
        nav_items.forEach(item => item.classList.add('show'));

        show_menu = true;
    } else {
        menu_text.classList.remove('close')
        menu_btn.classList.remove('close')
        menu.classList.remove('show')
        menu_nav.classList.remove('show')
        brand.classList.remove('show')
        nav_items.forEach(item => item.classList.add('show'));

        show_menu = false;
    }
}

menu_btn.addEventListener('click', toggle_menu);