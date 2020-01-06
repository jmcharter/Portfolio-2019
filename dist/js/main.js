function initializeMenu() {
    //Get Nav DOM Elements
    const menuText = document.querySelector('.menu-text')
    const menuBtn = document.querySelector('.menu-btn');
    const btnLine = document.querySelectorAll('.btn-line');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const brand = document.querySelector('.brand');
    const navItems = document.querySelectorAll('.nav-item');

    //Get Link DOM Elements
    const homeLink = document.querySelector('#home-link');
    const projectsLink = document.querySelector('#projects-link');
    const aboutLink = document.querySelector('#about-link');
    const contactLink = document.querySelector('#contact-link');

    //Get targets for links
    const homeTarget = document.querySelector('.home');
    const projectsTarget = document.querySelector('.projects');
    const aboutTarget = document.querySelector('.about');
    const contactTarget = document.querySelector('.contact');

    navLinks = [homeLink, projectsLink, aboutLink, contactLink];
    linkTargets = [homeTarget, projectsTarget, aboutTarget, contactTarget];

    //Initialize menu

    //Menu is hidden by default, shown on click of hamburger menu by adding .show class
    let showMenu = false;

    function toggleMenu() {
        if (!showMenu) {
            menuText.classList.add('close');
            menuBtn.classList.add('close')
            menu.classList.add('show')
            menuNav.classList.add('show')
            brand.classList.add('show')
            navItems.forEach(item => item.classList.add('show'));

            showMenu = true;
        } else {
            menuText.classList.remove('close')
            menuBtn.classList.remove('close')
            menu.classList.remove('show')
            menuNav.classList.remove('show')
            brand.classList.remove('show')
            navItems.forEach(item => item.classList.add('show'));

            showMenu = false;
        }
    }

    //Function to animate a smooth scroll down to the relevant section
    //when link is clicked.
    function addScrollingToNavLinks() {

        for (let i = 0; i < navLinks.length; i++) {
            let link = navLinks[i];
            link.addEventListener('click', (event) => {
                event.preventDefault();
                toggleMenu(); //Close menu when link is clicked.
                linkTargets[i].scrollIntoView({ behavior: 'smooth' });
            });
        }

    };

    // Change the active class to highlight relevant link, when scrolling into
    // it's respective section.
    function changeActiveOnScroll() {

        let mainNavLinks = document.querySelectorAll(".nav-item a");
        let fromTop = window.scrollY; //Set to current scroll distance from top of screen.

        mainNavLinks.forEach(link => {
            //Takes the section id from the link reference.
            let section = document.querySelector(link.hash);

            if (
                // -100 added here so that it switches links ahead of reaching the section.
                section.offsetTop - 100 <= fromTop &&
                section.offsetTop - 100 + section.offsetHeight > fromTop
            ) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
        });

    };

    menuBtn.addEventListener('click', toggleMenu);
    addScrollingToNavLinks();
    changeActiveOnScroll()
    window.addEventListener('scroll', changeActiveOnScroll)
};


initializeMenu();