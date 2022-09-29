// On page load set the theme.
(function () {
    let onpageLoad = localStorage.getItem("theme");
    let element = document.body;
    element.classList.add(onpageLoad);

    document.getElementById("btn").innerHTML = "Light";
})();


function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    var name = document.querySelector('.btn');

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
        localStorage.setItem("mode", "Light");
        name.innerHTML = "Dark";
    } else {
        localStorage.setItem("theme", "dark-mode");
        localStorage.setItem("mode", "Dark");
        name.innerHTML = "Light";
    }
}