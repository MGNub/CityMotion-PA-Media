window.scrollTo(0, 0);
setTimeout(letScroll, 4000);
setTimeout(enableParallax, 7000);

function letScroll() {
    if (screen.width > 600) {
        document.querySelector('body').style.overflowY = 'scroll';
    }
    
}

function enableParallax() {
     document.getElementById('menu').style.pointerEvents = "all";
     document.querySelector('main').style.pointerEvents = "all";
     document.getElementById('descendBtn').style.pointerEvents = "all";
     parallaxItems.forEach((el) => {el.style.transition = "0.5s cubic-bezier(.2, .49, .32, .99)"});
}


const aspectRatio = 1600 * (window.innerHeight / window.innerWidth);

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

    if (scrollY < aspectRatio * 3.2) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (window.pageYOffset / 15.4 - aspectRatio / 5.25) + 'vh)';
    }
    else if (scrollY < aspectRatio * 4.2) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (aspectRatio * 3.2 / 15.4 - aspectRatio / 5.25) + 'vh)';
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((window.pageYOffset / 22.5) - aspectRatio / 7) + 'px)';
        card2.style.opacity = -8 + window.pageYOffset / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((window.pageYOffset / 22.5) - aspectRatio / 7) + 'px)';
        text2.style.opacity = -8 + window.pageYOffset / 320;
    } else {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (aspectRatio * 3.2 / 15.4 - aspectRatio / 5.25) + 'vh)'; //try converting px to % or smthin.
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((aspectRatio * 4.2 / 22.5) - aspectRatio / 7) + 'px)';
        card2.style.opacity = -8 + aspectRatio * 4.2 / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((aspectRatio * 4.2 / 22.5) - aspectRatio / 7) + 'px)';
        text2.style.opacity = -8 + aspectRatio * 4.2 / 320;
    }
}

window.addEventListener('scroll', parallax);
parallax();
//homeBtn

console.log(window.innerHeight);


// const homeBtn = document.getElementById('homeBtn');
// homeBtn.addEventListener('click', learn);

function learn() {
    if (screen.width > 600) {
        window.scroll({
            top : window.innerHeight * 2.25,
            left : 0,
            behavior : 'smooth',
        });
    } else {
        location.href = "HTML/road.html";
    }
    
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

//other parallax

const parallaxItems = document.querySelectorAll(".parallax");

let x = 0, y = 0;

document.querySelector('main').addEventListener('mousemove', (e) => {
     x = e.clientX - window.innerWidth / 2;
     y = e.clientY - window.innerHeight / 2;


     parallaxItems.forEach((el) => {
          let speedx = el.dataset.speedx;
          let speedy = el.dataset.speedy;
          let z = el.dataset.speedy / el.dataset.speedx;

          el.style.transform = `translateX(calc(-50% + ${-x * speedx}px)) translateY(calc(-50% + ${y * speedy}px)) perspective(2500px) translateZ(${z}px)`;
          // console.log(speedx);
     });
     // console.log(x, y);
})

document.querySelector('#menu').addEventListener('mousemove', (e) => {
     x = e.clientX - window.innerWidth / 2;
     y = e.clientY - window.innerHeight / 2;


     parallaxItems.forEach((el) => {
          let speedx = el.dataset.speedx;
          let speedy = el.dataset.speedy;
          let z = el.dataset.speedy / el.dataset.speedx;

          el.style.transform = `translateX(calc(-50% + ${-x * speedx}px)) translateY(calc(-50% + ${y * speedy}px)) perspective(2500px) translateZ(${z}px)`;
          // console.log(speedx);
     });
     // console.log(x, y);
})

let timeline = gsap.timeline();


Array.from(parallaxItems).filter((el) => !el.classList.contains("text")).forEach((el) => {
     timeline.from(
          el, {
               top : `${el.offsetHeight / 2 + +el.dataset.distance}px`,
               duration : 3.5,
               ease : "power3.out",
          },
          "4.5"
     );
});

const descendBtn = document.getElementById('descendBtn');

descendBtn.addEventListener('click', descend);

function descend() {
     parallaxItems.forEach((el) => {
          el.style.top = "-150%";
          el.style.transition = `${2.5 - +el.dataset.speedy * 10}s ease-in-out`;
          el.style.transitionDelay = "0.3s";
          console.log(el.dataset.speedy);
     });
     document.getElementById('transitionClouds').style.top = "-450%";
     setTimeout(() => {location.href = 'HTML/road.html'}, 1400);
}
