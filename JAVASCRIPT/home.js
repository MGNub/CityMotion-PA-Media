function parallax() {
    const horizontal = document.getElementById('horizontal');
    const vertical = document.getElementById('vertical');
    const videoBG = document.getElementById('background');
    const video = document.getElementById('backgroundVideo');
    const postVideoCard = document.getElementById('postVideo');
    const overlay = document.getElementById('overlay');
    const introBox = document.getElementById('introBox');
    
    if(window.pageYOffset < window.innerWidth * 2.5) {
        horizontal.style.left = -1.2 * window.pageYOffset;
        videoBG.style.left = -1 * window.pageYOffset / 5;
        overlay.style.left = -1 * window.pageYOffset / 5;
        videoBG.style.top = 0;
        postVideoCard.style.marginLeft = window.innerWidth * 2.5 - window.pageYOffset;
    } else if(window.pageYOffset > window.innerWidth * 2) {
        videoBG.style.left = window.innerWidth * -2.5/5;
        horizontal.style.left = window.innerWidth * -2.5 * 1.2;
        videoBG.style.top = window.pageYOffset - window.innerWidth * 2.5;
        postVideoCard.style.marginLeft = window.innerWidth * 2 - window.pageYOffset * 1.75;
    }

    if(window.scrollY > window.innerWidth / 1.2) {
        video.style.marginTop = -window.innerWidth / 8;
        video.style.width = window.innerWidth * 1.7;
        titleText.classList.add('fade');
        logo.classList.add('rotate');
        introBox.style.left = -1 * window.innerWidth;
    } else {
        video.style.marginTop = 0;
        video.style.width = window.innerWidth;
        titleText.classList.remove('fade');
        logo.classList.remove('rotate');
        introBox.style.left = window.innerWidth / 2;
    }

}

window.addEventListener('scroll', parallax);

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', learn);

function learn() {
    window.scroll({
        top : window.innerWidth * 5/6,
        left : 0,
        behavior : 'smooth',
    });
}

function roads() {
    location.href = "HTML/road.html";
}

const routeBtn = document.querySelector('#btn');
const innerBtn = document.querySelector('#btn button');

routeBtn.addEventListener('mousedown', function() {
    innerBtn.classList.add('btnClicked');
})

routeBtn.addEventListener('mouseout', function() {
    innerBtn.classList.remove('btnClicked');
})