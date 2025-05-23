document.addEventListener("DOMContentLoaded", function () {
    // Change background dynamically
    document.body.style.setProperty("--background-img", "url('NewBackground.jpg')");

    // Adjust shoe sizes dynamically
    document.body.style.setProperty("--shoe-width", "90%");
    document.body.style.setProperty("--shoe-height", "220px");
});

    // Navbar scroll effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });

    // Smooth hover effect on navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Animations on product images
    document.querySelectorAll(".img-fluid").forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
        });
        img.addEventListener("mouseout", function () {
            this.style.boxShadow = "none";
        });
    });