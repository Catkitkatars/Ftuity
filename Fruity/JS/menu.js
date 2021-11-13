const header = document.querySelector('.heder_menu_fixed')


window.addEventListener('scroll', function() {
    let clientWidth = window.screen.width;
    if (clientWidth > 992) {
        if (pageYOffset > 500) {
            header.style.cssText = 'Position:fixed; top:0px; background-color: #FDB827; padding: 10px 0;';
        } else {
            header.style.cssText = 'Position:static top:none; background-color: none; padding: none; transition: all ease 1s;';
        }
    }
    
});
