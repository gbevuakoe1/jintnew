const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBtn.addEventListener("click", () =>{
    links.classList.add("menu-open");
});
closeBtn.addEventListener("click", () =>{
    links.classList.remove("menu-open")
});
