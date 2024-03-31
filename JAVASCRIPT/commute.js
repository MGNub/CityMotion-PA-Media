setTimeout(showVideo, 850);
setTimeout(letScroll, 2000);

const topVideo = document.getElementById('topVideo');
// let theme = document.documentElement.style.getPropertyValue('--bgColor');

function showVideo() {
    topVideo.style.opacity = '1';
}

function letScroll() {
    document.querySelector('body').style.overflowY = 'scroll';
}

function parallax() {
    const bikeVideo = document.getElementById('bikeVideo');
    const transitVideo = document.getElementById('transitVideo');
    const trafficImg = document.getElementById('trafficImg');
    const bikeHorizontal = document.getElementById('bikeHorizontal');
    
    if(window.scrollY > 0) {
        document.getElementById('title').classList.add('fade');
        logo.classList.add('rotate');
    } else {
        document.getElementById('title').classList.remove('fade');
        logo.classList.remove('rotate');
    }

    if (window.scrollY > window.innerHeight * 7.4 + window.innerWidth * 2) {
        bikeVideo.style.display = 'none';
        transitVideo.style.display = 'block';
    } else if(window.scrollY > window.innerHeight) {
        topVideo.style.display = 'none';
        bikeVideo.style.display = 'block';
        transitVideo.style.display = 'none';
    } else if (window.scrollY > 0) {
        topVideo.style.display = 'block';
        bikeVideo.style.display = 'none';
    }

    if(window.scrollY < window.innerHeight * 1.6) {
        trafficImg.style.left = window.innerWidth + (window.innerHeight/1.2) -1 * window.pageYOffset;
        console.log(window.pageYOffset);

    } else if (window.scrollY < window.innerHeight * 3.2) {
        trafficImg.style.transform = 'translateX(0vw) translateY(-25%)';
        trafficImg.style.opacity = 1;
    } else if (window.scrollY > window.innerHeight * 5.3) {
        bikeHorizontal.style.marginLeft = (window.innerHeight * 6.4) + (-1 * window.pageYOffset);
    } else if (window.scrollY > window.innerHeight * 4.6) {
        document.getElementById('page2').style.background = 'rgb(117, 156, 212)'; //rgb(153, 185, 231)
    } else if (window.scrollY > window.innerHeight * 3.2) {
        trafficImg.style.transform = 'translateX(30vw) translateY(-25%)';
        trafficImg.style.opacity = 0;
    }
}

window.addEventListener('scroll', parallax);