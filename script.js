// Smooth scrolling and active nav link
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for sticky header height
                behavior: "smooth",
            });
        }
    });
});
