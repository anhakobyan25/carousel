let items = document.querySelectorAll('.slider .list .item');
let list = document.querySelector('.slider .list');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let pause = document.getElementById('pause');
let start = document.getElementById('start');
let active = 0;
let itemLength = items.length - 1;
let isPaused = false;
let refreshSlider;
function autoSlide() {
    if (!isPaused) {
        if (active + 1 > itemLength) {
            active = 0;
        } else {
            active += 1;
        }
        reloadSlider();
    }
}
function reloadSlider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = (-checkleft) + 'px';
    let lastActive = document.querySelector('.slider .dots li.active');
    lastActive.classList.remove('active');
    dots[active].classList.add('active');
}
function startInterval() {
   refreshSlider = setInterval(autoSlide, 4000);
}
startInterval()
next.addEventListener('click', function() {
    if (active + 1 > itemLength) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
});
prev.addEventListener('click', function() {
    if (active - 1 < 0) {
        active = itemLength;
    } else {
        active -= 1;
    }
    reloadSlider();
});
start.addEventListener('click', function() {
    isPaused = false;
    refreshSlider = setInterval(autoSlide, 1000);
});
pause.addEventListener('click', function() {
    isPaused = true;
    clearInterval(refreshSlider)
});
