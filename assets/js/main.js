document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const burger = document.querySelector(".burger");
const mmenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mmenu.classList.toggle("active");
});
