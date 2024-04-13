const earth = document.getElementById('earth');
const earthFill = document.getElementById('earthFill');
const earthGlobe = document.getElementById('globe');

earth.addEventListener('mouseover', earthAnimateIn);
earth.addEventListener('mouseout', earthAnimateOut)

function earthAnimateIn() {
    if (firstClick) {
        earth.style.transform = 'translate(-50%, -50%) scale(125%)';
        earthFill.style.transform = 'translateY(0)';
        earthGlobe.style.transform = 'translateY(0)';
        earthGlobe.style.opacity = '1';
    } else {
        earth.style.transform = 'translate(-50%, 28.5vh) scale(70%)';
    }
}

function earthAnimateOut() {
    if (firstClick) {
        earth.style.transform = 'translate(-50%, -50%) scale(100%)';
        earthFill.style.transform = 'translateY(-150%)';
        earthGlobe.style.transform = 'translateY(100%)';
        earthGlobe.style.opacity = '0';
    } else {
        earth.style.transform = 'translate(-50%, 30vh) scale(70%)';
    }
}

const loadIn = document.getElementById('loadIn');
const map = document.getElementById('mapContainer');

earth.addEventListener('click', introExpand);
earth.addEventListener('click', toggleMap);

let firstClick = true;
let mapState = false;
let cityShown;
function introExpand() {
    if (firstClick) {
        loadIn.style.height = '120vw';
        loadIn.style.width = '120vw';
        earthGlobe.style.transform = 'translateY(0)';
        earthGlobe.style.opacity = '1';
        
        setTimeout(globeShrink, 1000);
        setTimeout(showMap, 1500);
        firstClick = false;
        mapState = true;
    }
}

function toggleMap() {
    hideCity();
    if (mapState) {
        hideMap();
    } else if (cityShown) {
        setTimeout(showMap, 1000);
        cityShown = false;
    } else {
        showMap();
    }
}

function globeShrink() {
    earth.style.transform = 'translate(-50%, 30vh) scale(70%)';
}

function showMap() {
    titleText.classList.add('fade');
    logo.classList.add('rotate');
    map.style.transform = 'scaleX(100%)';
    mapState = true;
}

function hideMap() {
    titleText.classList.remove('fade');
    logo.classList.remove('rotate');
    map.style.transform = 'scaleX(0%)';
    mapState = false;
    document.querySelector('body').scrollTo(0, 0);
}

//MAP INTERACTIVITY

const continents = document.getElementsByClassName('continent');
const cities = document.getElementsByClassName('city');
// const Europe = document.getElementById('europe');
// const amsterdam = document.getElementById('amsterdam');

for (let i = 0; i < 6; i++) {
    continents[i].addEventListener('click', hideMap);
    continents[i].addEventListener('click', callCity);

    function callCity() {
        showCity(i);
        cityShown = true;
    }
}

function showCity(x) {
    cities[x].style.transform = 'translateX(0)';
    console.log(x);
}

function hideCity() {
    for (let i = 0; i < cities.length; i++) {
        cities[i].style.transform = 'translateX(-100vw)';
    }
}


console.log(continents);