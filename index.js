const sliderLine = document.querySelector('.slider_line')

const prevBtn = document.querySelector('.slider_prev')
const nextBtn = document.querySelector('.slider_next')

let width = 0;


function next() {
    if (width <= -900) {width = 0;}
    else {
        width = width - 900;
    }
    sliderLine.style.left = width + 'px'
}
function prev() {
    if(width == 0) {width = -900}
    else {
        width = width + 900;
    }
    sliderLine.style.left = width + 'px'
}

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)