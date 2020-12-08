

const toggleButton = document.getElementsByClassName('toggleButton')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        console.log(toggleButton);



        toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('show')
        console.log(navbarLinks.classList);
        })