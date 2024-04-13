setTimeout(halfSplit, 1600);

function halfSplit() {
    const half = document.getElementsByClassName('half');
    half[0].style.transform = 'translateY(-51vh)';
    half[1].style.transform = 'translateY(51vh)';
    setTimeout(hideDiamond, 500);
}

function hideDiamond() {
    const square = document.getElementById('square');
    square.style.display = 'none';
    document.getElementById('contributeTitle').classList.add('titleShow');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry")
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));
