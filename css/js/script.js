// TerraQuest Venture Alliance JavaScript

// Sticky Navigation Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome Message
window.onload = function () {
    console.log("Welcome to TerraQuest Venture Alliance");
};
