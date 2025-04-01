// Script to open and close sidebar
function a_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function a_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// adds a preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})





// moves my top nav
const topnav = document.querySelector(".topnav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        topnav.classList.add("topnav--hidden");
    } else {
        topnav.classList.remove("topnav--hidden");
    }

    lastScrollY = window.scrollY;
});








// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');
let isDark = localStorage.getItem('dark');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage

    document.documentElement.style.overflow = "hidden";
    // trigger reflow so that overflow style is applied
    document.body.clientWidth;
    // change scheme
    document.documentElement.setAttribute(
        "data-color-scheme",
        isDark ? "dark" : "light"


    );

    // remove overflow style, which will bring back the scrollbar with the correct scheme 
    document.documentElement.style.overflow = "";
    isDark = !isDark;

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage

    document.documentElement.style.overflow = "hidden";
    // trigger reflow so that overflow style is applied
    document.body.clientWidth;
    // change scheme
    document.documentElement.setAttribute(
        "data-color-scheme",
        isDark ? "dark" : "light"


    );

    // remove overflow style, which will bring back the scrollbar with the correct scheme 
    document.documentElement.style.overflow = "";
    isDark = !isDark;

    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {


    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});



//scroll to top
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {

    $("html,body").animate({ scrollTop: 0 }, "slow");
});





//show on scroll
const hiddenElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classlist.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll(".fade-in2");

//show scroll 2
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classlist.remove('show');
        }
    });
});

hiddenElements2.forEach((el) => observer2.observe(el));