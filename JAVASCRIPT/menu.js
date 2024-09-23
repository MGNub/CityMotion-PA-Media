const menuBtn = document.getElementById('menuBtn');
const menuBtn2 = document.getElementById('menuBtn2');
const logo = document.getElementById('logo');
const active = document.getElementById('active');

menuBtn.addEventListener('click', menuExpand);

menuBtn2.onclick = menuExpand;

function menuExpand() {
    const titleText = document.getElementById('titleText');

    menuBtn.classList.remove('reveal');
    if (menuBtn2.classList.contains('expandMenu')) {
        menuBtn2.classList.toggle('expandMenu');
        menuBtn2.classList.toggle('expandMenu2');
        titleText.style.transitionDelay = '0s';
        logo.style.transitionDelay = '0s';
    } else if (menuBtn2.classList.contains('expandMenu2')) {
        menuBtn2.classList.toggle('expandMenu');
        menuBtn2.classList.toggle('expandMenu2');
        titleText.style.transitionDelay = '1s';
        logo.style.transitionDelay = '1s';
    } else {
        menuBtn2.classList.toggle('expandMenu');
        titleText.style.transitionDelay = '1s';
        logo.style.transitionDelay = '1s';
    }
    menuBtn.style.display = 'none';
    titleText.classList.toggle('fade');
    logo.classList.toggle('rotate');
            
    setTimeout(menuBackground, 1100);
}

function menuBackground() {
    document.getElementById('menuBackground').classList.toggle('menuActive');
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        document.getElementById('title').classList.add('fade');
        logo.classList.add('rotate');
    } else {
        document.getElementById('title').classList.remove('fade');
        logo.classList.remove('rotate');
    }
})
