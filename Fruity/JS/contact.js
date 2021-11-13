const popup = document.querySelector('.popup'); // Основной блок
const popupClose = document.querySelector('.popup_close_elem'); // Кнопка закрытия
const popupSend = document.querySelector('.popup_send'); // Кнопка отправить (временно)
const mobileContact = document.querySelector('#mobile_contact'); // Мобильная кнопка 
const pcContact = document.querySelector('#contact'); // Декстоп кнопка
const popupContent = document.querySelector('.popup_content') // сам попап блок

const popupSucces = document.querySelector('#succes_phone');



pcContact.addEventListener('click', function(elem) {
    popup.style.transform = 'scale(1)'
    popupContent.style.transform = 'scale(1)'
    popupContent.style.transition = '0.5s ease 0s'
    elem.preventDefault();
});
popupClose.addEventListener('click', function(elem) { 
    popup.style.transform = 'scale(0)'
    popupContent.style.transform = 'scale(0)'
    elem.preventDefault();
});
popupSend.addEventListener('click', function(elem) {
    popupSucces.style.top = 180 + 'px'
    setTimeout(() => {popupSucces.style.top = -180 + 'px'}, 3000)
    popup.style.transform = 'scale(0)'
    popupContent.style.transform = 'scale(0)'
    elem.preventDefault();

});
mobileContact.addEventListener('click', function(elem) {
    popup.style.transform = 'scale(1)'
    popupContent.style.transform = 'scale(1)'
    popupContent.style.transition = '0.5s ease 0s'
    elem.preventDefault();
});

document.addEventListener('click', function (elem) {
    if (elem.target === popup) {
        popup.style.transform = 'scale(0)'
        popupContent.style.transform = 'scale(0)'
        elem.preventDefault();
    }
});
