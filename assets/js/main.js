const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', function(){
        navbar.classList.toggle('active', window.scrollY >8)
    })

