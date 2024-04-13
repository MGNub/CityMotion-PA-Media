window.scrollTo(0, 0);
setTimeout(letScroll, 4000);

function letScroll() {
    document.querySelector('body').style.overflowY = 'scroll';
}


const pageHeight = window.innerHeight;

function parallax() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const text2 = document.getElementById('text2');

    if(window.scrollY > 0) {
        document.getElementById('title').classList.add('fade');
        logo.classList.add('rotate');
    } else {
        document.getElementById('title').classList.remove('fade');
        logo.classList.remove('rotate');
    }

    if (scrollY < 730 * 3.2) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (window.pageYOffset / 10 - 730 / 5) + 'px)';
    }
    else if (scrollY < 730 * 4) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (730 * 3.2 / 10 - 730 / 5) + 'px)';
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((window.pageYOffset / 22.5) - 730 / 7.5) + 'px)';
        card2.style.opacity = -8 + window.pageYOffset / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((window.pageYOffset / 22.5) - 730 / 7.5) + 'px)';
        text2.style.opacity = -8 + window.pageYOffset / 320;
    } else {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (730 * 3.2 / 10 - 730 / 5) + 'px)'; //try converting px to % or smthin.
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((730 * 4 / 22.5) - 730 / 7.5) + 'px)';
        card2.style.opacity = -8 + 730 * 4 / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((730 * 4 / 22.5) - 730 / 7.5) + 'px)';
        text2.style.opacity = -8 + 730 * 4 / 320;
    }
}

window.addEventListener('scroll', parallax);
parallax();
//homeBtn

console.log(window.innerHeight);


const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', learn);

function learn() {
    window.scroll({
        top : window.innerHeight * 2.25,
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


//function parallax() {
//     const horizontal = document.getElementById('horizontal');
//     const vertical = document.getElementById('vertical');
//     const videoBG = document.getElementById('background');
//     const video = document.getElementById('backgroundVideo');
//     const postVideoCard = document.getElementById('postVideo');
//     const overlay = document.getElementById('overlay');
//     const introBox = document.getElementById('introBox');
    
    
//     if(window.pageYOffset < window.innerWidth * 2.5) {
//         horizontal.style.left = -1.2 * window.pageYOffset;
//         videoBG.style.left = -1 * window.pageYOffset / 5;
//         overlay.style.left = -1 * window.pageYOffset / 5;
//         videoBG.style.top = 0;
//         postVideoCard.style.marginLeft = window.innerWidth * 2.5 - window.pageYOffset;
//     } else if(window.pageYOffset > window.innerWidth * 2) {
//         videoBG.style.left = window.innerWidth * -2.5/5;
//         horizontal.style.left = window.innerWidth * -2.5 * 1.2;
//         videoBG.style.top = window.pageYOffset - window.innerWidth * 2.5;
//         postVideoCard.style.marginLeft = window.innerWidth * 2 - window.pageYOffset * 1.75;
//     }

//     if(window.scrollY > window.innerWidth / 1.2) {
//         video.style.marginTop = -window.innerWidth / 8;
//         video.style.width = window.innerWidth * 1.7;
//         titleText.classList.add('fade');
//         logo.classList.add('rotate');
//         introBox.style.left = -1 * window.innerWidth;
//     } else {
//         video.style.marginTop = 0;
//         video.style.width = window.innerWidth;
//         titleText.classList.remove('fade');
//         logo.classList.remove('rotate');
//         introBox.style.left = window.innerWidth / 2;
//     }

// }

// window.addEventListener('scroll', parallax);