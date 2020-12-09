

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