const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle') 

// ABRE MENU
for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// FECHA MENU
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}




