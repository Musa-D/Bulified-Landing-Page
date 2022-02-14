const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtntimes = document.querySelector('.times'); 
const toggleBtnBars = document.querySelector('.bars');

const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');

//getBoundaryClientRect();
 
function toggleIcons(){
    const LinksContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if (LinksContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }else if(LinksContainerHeight === navContainerHeight){
        linksContainer.style.height = 0;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons);

// Select all links
const links = document.querySelectorAll('.link');

links.forEach(function (linksItem){
    linksItem.addEventListener('click', function (item) {
        linksContainer.style.height = 0;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    })
})

//Ball functionality for roll effect
const mySelf = document.querySelector('.my-self');
const switchBtn = document.querySelector('.switch-btn');

const playBall = document.querySelector('.play');
const stopBall = document.querySelector('.pause');

playBall.addEventListener('click',() => myFunction('play'));
stopBall.addEventListener('click',() => myFunction('stop'));

const myFunction = (state) => {
    if(state === 'play'){
        mySelf.classList.add('animate');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    }
    else if (state ==='stop'){
        mySelf.classList.remove('animate');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    }
}


//Autopying effect using Javascript
const typed =new Typed('.auto-typed',{strings:['Njabulo,'],
    typeSpeed: 240,
    backSpeed:240,
    loop: true,
})

