
const  btnMenu = document.querySelector('.mobile_menu');
const mobileMenu = document.querySelector('.mobile_menu_block');
const btnMenuClosed = document.querySelector('.closed');

btnMenu.addEventListener('click', function () {
    btnMenu.style.right = -70 + 'px';
    mobileMenu.style.right = 10 + 'px';
});

btnMenuClosed.addEventListener('click', function() {
    btnMenu.style.right = 10 + 'px';
    mobileMenu.style.right = -220 + 'px';
});

// if (document.documentElement.clientWidth > 992) {
//     mobileMenu.style.right = -220 + 'px';
// }

