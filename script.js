const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelector(".nav-wrapper");

openBtn.addEventListener("click", () =>{
    links.classList.add("menu-open");
});
closeBtn.addEventListener("click", () =>{
    links.classList.remove("menu-open")
});



const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-slide every 3 seconds
setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
}, 3000);

window.addEventListener('resize', updateCarousel);





const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.textContent = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.textContent;
        const speed = 80;

        const increment = target / speed;

        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            let finalValue = target;

            // Add + symbol if data-plus="true"
            if (counter.getAttribute('data-plus') === "true") {
                finalValue += "+";
            }

            counter.textContent = finalValue;
        }
    };

    updateCounter();
});


