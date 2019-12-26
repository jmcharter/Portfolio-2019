//Get DOM Elements
const menu_btn = document.querySelector('.menu-btn');
const btn_line = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.menu')
const menu_nav = document.querySelector('.menu-nav')
const brand = document.querySelector('.brand')
const nav_items = document.querySelectorAll('.nav-item')

//Initialize menu
let show_menu = false;



let toggle_menu = function () {
    if (!show_menu) {
        menu_btn.classList.add('close')
        menu.classList.add('show')
        menu_nav.classList.add('show')
        brand.classList.add('show')
        nav_items.forEach(item => item.classList.add('show'));

        show_menu = true;
    } else {
        menu_btn.classList.remove('close')
        menu.classList.remove('show')
        menu_nav.classList.remove('show')
        brand.classList.remove('show')
        nav_items.forEach(item => item.classList.add('show'));

        show_menu = false;
    }
}

menu_btn.addEventListener('click', toggle_menu)