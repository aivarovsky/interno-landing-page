const BREAKPOINT = 1024;

const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");

const form = document.getElementById('newsletter-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
});

visualViewport.addEventListener("resize", () => {
    if (getWidth() < BREAKPOINT){
        nav.style.display = "block";
        if (!navToggle.checked){
            nav.style.display = "none";
        }

    }
    else {
        nav.style.display = "flex";
        navToggle.checked = false;
    }
  });

function toggleNav() {
    if (getWidth() < BREAKPOINT){
        nav.style.display = "block";
        if (navToggle.checked){
            nav.style.display = "none";
        }
    }
}

function closeNav() {
    if (getWidth() < BREAKPOINT){
        nav.style.display = "none";
        navToggle.checked = false;
    }
}

function getWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
}