const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
var meals = document.querySelector('.dsadas');

burger.addEventListener('click', function(){
    if(nav.classList.contains('links-toggle')){
        nav.classList.toggle('nav-active')
        burger.classList.toggle('rotate')
    }
})


