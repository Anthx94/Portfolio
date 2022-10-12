// On page load set the theme.
(function () {
    let onpageLoad = localStorage.getItem("theme");
    if (onpageLoad == ""){

    } else { 
        document.body.classList.add(onpageLoad); 
        document.getElementById("btn").innerHTML = "Light";
    }

    
})();


// Change mode view
function themeToggle() {
    document.body.classList.toggle("dark-mode");
    var name = document.querySelector('.btn');

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
        name.innerHTML = "Dark";
    } else {
        localStorage.setItem("theme", "dark-mode");
        name.innerHTML = "Light";
    }
}