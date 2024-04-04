const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', function(){
        navbar.classList.toggle('active', window.scrollY >8)
    })


document.getElementById('boton1').onclick = function(){
    alert('Su información ha sido entregada.');
    }   
