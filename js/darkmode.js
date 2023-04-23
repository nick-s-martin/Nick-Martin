let theme = localStorage.getItem('theme');
const themeToggleDark = document.querySelector('#theme-toggle-dark');
const themeToggleLight = document.querySelector('#theme-toggle-light');

//Check local storage for theme, if none set uses PC pref

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem("theme", "dark");
    themeToggleDark.setAttribute("checked", "true");
}

const enableLightMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem("theme", "light");
    themeToggleLight.setAttribute("checked", "true");
}
document.onload = console.log(theme);
if (theme !== 'dark'&& theme !== 'light'){
    if (window.matchMedia('(prefers-color-scheme: dark)')){
        enableDarkMode();
    }else{
        enableLightMode();
    }
}

if (theme == 'dark') {
    enableDarkMode();
}

themeToggleDark.addEventListener("click", () => {
    theme = localStorage.getItem('theme');
    if (theme !== 'dark') {
        enableDarkMode();
    }
});

themeToggleLight.addEventListener("click", () => {
    theme = localStorage.getItem('theme');
    if (theme !== 'light') {
        enableLightMode();
    }
});