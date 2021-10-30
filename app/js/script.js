const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', function(){
    if(nav.classList.contains('links-toggle')){
        nav.classList.toggle('nav-active')
        burger.classList.toggle('rotate')
    }
})


