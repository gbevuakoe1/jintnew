const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBtn.addEventListener("click", () =>{
    links.classList.add("menu-open");
});
closeBtn.addEventListener("click", () =>{
    links.classList.remove("menu-open")
});


window.addEventListener("scroll", () => {
    navbar = document.getElementById("navbar");

    if(window.scrollY > 100){
        navbar.classList.add("nav-fixed");
    }
    else{
        navbar.classList.remove("nav-fixed")
    }
});

    // fixed nav bar

window.addEventListener("scroll", () => {
    navbar = document.getElementById("navbar");

    if(window.scrollY > 100){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
});