/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".card");
    projects.forEach(project => {
        project.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#e3f2fd";
        });
        project.addEventListener("mouseout", function() {
            this.style.backgroundColor = "white";
        });
    });
});
