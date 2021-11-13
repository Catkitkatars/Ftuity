let offset = 0; 
const sliderLine = document.querySelector('.slider_line');


document.querySelector('.btn_slide_rigth').addEventListener('click', function() {
    offset += 604;
    if (offset > 1208) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btn_slide_left').addEventListener('click', function() {
    offset -= 604;
    if (offset < 0) {
        offset = 1208
    }
    sliderLine.style.left = -offset + 'px';
});