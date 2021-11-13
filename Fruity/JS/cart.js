const modalCart = document.querySelector('.modal_cart'); // Основной блок
const modalCartClose = document.querySelector('.modal_cart_close'); // Кнопка закрытия
const modalCartSend = document.querySelector('#btn_submit'); // Кнопка отправить (временно) !!!
const mobileCart = document.querySelector('#mobile_cart'); // Мобильная кнопка 
const pcCart = document.querySelector('#cart'); // Декстоп кнопка
const modalContent = document.querySelector('.modal_cart_content') // Окно контента


const succes = document.querySelector('#succes_cart'); // Блок успешно
const dangerMinOrder = document.querySelector('.danger_body_min_order'); // Блок минимальная стоимость заказа
const dangerCompletion = document.querySelector('.danger_body_completion'); // Блок не заполненные поля


let allPrice = document.querySelector('.modal_cart_sum').firstChild.textContent // Общая сумма
let allInput = document.querySelectorAll('input')




pcCart.addEventListener('click', function(elem) {
    modalCart.style.transform = 'scale(1)'
    modalContent.style.transform = 'scale(1)'
    modalContent.style.transition = '0.5s ease 0s'
    elem.preventDefault();
});
modalCartClose.addEventListener('click', function(elem) { 
    modalCart.style.transform = 'scale(0)'
    modalContent.style.transform = 'scale(0)'
    elem.preventDefault();
});

modalCartSend.addEventListener('click', function(elem) {
    if (allTotalPrice < 10) {
        dangerMinOrder.style.top = 170 + 'px'
        setTimeout(() => {dangerMinOrder.style.top = -170 + 'px'}, 3000)
    } else {
        let removeBlock = document.querySelectorAll('.modal_cart_li');
        removeBlock.forEach((item, index) => {
            cart.forEach(item => {
                item.weigth = 500;
            });
            item.remove();
            cart.splice(index, removeBlock.length);
            renderAllWeigth();
            renderAllPrice();
            checkRenderRemove()
        });
        succes.style.top = 180 + 'px'
        setTimeout(() => {succes.style.top = -180 + 'px'}, 3000)


        modalCart.style.transform = 'scale(0)'
        modalContent.style.transform = 'scale(0)'
        elem.preventDefault();
    }   
});

mobileCart.addEventListener('click', function(elem) {
    modalCart.style.transform = 'scale(1)'
    modalContent.style.transform = 'scale(1)'
    modalContent.style.transition = '0.5s ease 0s'
    elem.preventDefault();
});

document.addEventListener('click', function (elem) {
    if (elem.target === modalCart) {
        modalCart.style.transform = 'scale(0)'
        modalContent.style.transform = 'scale(0)'
        elem.preventDefault();
    }
});

const btnClear = document.querySelector('#btn_clear');
const btnSubmit = document.querySelector('#btn_submit')

btnClear.addEventListener('click', () => {
    let removeBlock = document.querySelectorAll('.modal_cart_li');
    removeBlock.forEach((item, index) => {
        cart.forEach(item => {
            item.weigth = 500;
        });
        item.remove();
        cart.splice(index, removeBlock.length);
        renderAllWeigth();
        renderAllPrice();
        checkRenderRemove()  
    });
})






