// Botão contato
document.getElementById("btnContato")
    .addEventListener("click", () => {
        document.getElementById("contato")
            .scrollIntoView({ behavior: "smooth" });
    });

// Reveal moderno
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(sec => observer.observe(sec));