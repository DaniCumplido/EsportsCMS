const themeToggleBtn = document.getElementById('switch');

themeToggleBtn.addEventListener("click", function () {
    // Get the HTML element
    const html = document.querySelector("html");
    // Toggle between light and dark mode
    if (html.getAttribute("data-bs-theme") === "dark") {
        html.setAttribute("data-bs-theme", "light");
        // Cambiar la imagen a img/textLogoLight.png
        document.querySelector(".imglogoeclipse").src = "img/textLogoLight.png";
    } else {
        html.setAttribute("data-bs-theme", "dark");
        // Cambiar la imagen a img/textLogoDark.png
        document.querySelector(".imglogoeclipse").src = "img/textLogoDark.png";
    }
});
