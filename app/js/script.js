const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');
const commentsrc = document.querySelector('.t-coment')
const imagsrc = document.getElementById('t-imgs');
const namesrc = document.querySelector('.t-name');
const leftArrow = document.getElementById('r-left');
const rightArrow = document.getElementById('r-right')
const allCircle = document.querySelectorAll('button.p-circle')

var i = 0
var images = [
    {
        'img': 'dist/images/pers1.webp',
        'name': 'Ruby',
        'recomandation':'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    },
    {
        'img': 'dist/images/pers2.webp',
        'name': 'David',
        'recomandation':'Far far away, behind the word mountains, far from td Consonantia, there live the blind texts',
    },
    {
        'img': 'dist/images/pers3.webp',
        'name': 'Herbert',
        'recomandation':'Far far away, behind the word mountains, far from the countri live the blind texts',
    },
    {
        'img': 'dist/images/pers4.webp',
        'name': 'Alvin',
        'recomandation':'Far rom the countries Vokalia and Consonantia, there live the blind texts',
    }
]


function changeImg(){

    rightArrow.addEventListener("click", function(){
        checkifhasclass()
        if (i > 2){
            i = -1
        }
        i = i + 1;
        imagsrc.src = images[i]['img'];
        namesrc.innerHTML = images[i]['name'];
        commentsrc.innerHTML = images[i]['recomandation'];
        checkifhasclass()
    });

    leftArrow.addEventListener("click", function(){
        checkifhasclass()
        if(i < 1){
            i = 4;
        }
        i = i - 1;
        imagsrc.src = images[i]['img'];
        namesrc.innerHTML = images[i]['name'];
        commentsrc.innerHTML = images[i]['recomandation'];
        checkifhasclass()
    });
}

window.onload = changeImg

burger.addEventListener('click', function(){
    if(nav.classList.contains('links-toggle')){
        nav.classList.toggle('nav-active')
        burger.classList.toggle('rotate')
    }
})

function checkifhasclass(){
    if(allCircle[i].classList.contains('active')){
        allCircle[i].classList.remove("active");
    }else{
        allCircle[i].classList.add("active");
    }
}