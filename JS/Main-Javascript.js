

const toggleButton = document.getElementsByClassName('toggleButton')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        //console.log(toggleButton);



        toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('show')
        console.log(navbarLinks.classList);
        })



const voice = document.querySelectorAll(".voice");
const audio = document.querySelectorAll(".read-aloud");

for(let i = 0; i < voice.length; i++){
        voice[i].addEventListener("click", function () {
                if(audio[i].style.display == "block"){
                        audio[i].style.display="none";
                }else{
                        audio[i].style.display="block"; 
                }
        })
}

AOS.init();

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});