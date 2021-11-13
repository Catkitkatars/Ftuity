

// Создаем массив для отрисовки изображения на странице
const shop = [
    {
        picture: "img/menus/Banana.png",
        name: 'Ripe Yellow Banana',
        weigth: 500,
        price: 2.89,
        currency: '$',
        bgColor: '#FFD400'
    },
    {
        picture: "img/menus/pomegranat.png",
        name: 'Red Pomegranate',
        weigth: 500,
        price: 3.89,
        currency: '$',
        bgColor: '#FFE3E2'
    },
    {
        picture: "img/menus/orange.png",
        name: 'Sweet Orange',
        weigth: 500,
        price: 2.89,
        currency: '$',
        bgColor: 'rgba(245, 188, 91, 0.75)'
    },
    {
        picture: "img/menus/Avocado.png",
        name: 'Tasty Avocado',
        weigth: 500,
        price: 3.89,
        currency: '$',
        bgColor: '#EDF2F5'
    },
    {
        picture: "img/menus/AppleRed.png",
        name: 'Ripe red apples',
        weigth: 500,
        price: 5.89,
        currency: '$',
        bgColor: 'rgba(246, 118, 109, 0.6)'
    },
    {
        picture: "img/menus/AppleGreen.png",
        name: 'Ripe Green Apple',
        weigth: 500,
        price: 1.89,
        currency: '$',
        bgColor: '#BED09B'
    },
    {
        picture: "img/menus/strawberry.png",
        name: 'Sweet Strawberry',
        weigth: 500,
        price: 5.89,
        currency: '$',
        bgColor: '#FFBAB5'
    },
    {
        picture: "img/menus/watemelon.png",
        name: 'Tasty Watemelon',
        weigth: 500,
        price: 6.89,
        currency: '$',
        bgColor: '#E9F1F3'
    }, 
];

// Отрисовывает товары на витрине.
function renderShop() {
    // Найти родительский элемент для всех товаров.
    let parent = document.querySelector('.shop_block');
    let elemRow; // Родительский элемент parent
    let elemBlock; // Родительский элемент elemRow
    // Оторбразить данные товаров 
    shop.forEach((good, index) => {
        if (index % 4 == 0) {
            elemBlock = document.createElement('div')
            elemBlock.className = 'shop_string'
            parent.appendChild(elemBlock)
        }
        if (index % 2 == 0) {
            elemRow = document.createElement('div')
            elemRow.className = 'shop_string_media992'
            parent.appendChild(elemRow)
        }    
        let elemGood = document.createElement('div')
        elemGood.className = 'shop_elem'

        elemGood.innerHTML = `<div style="background-color: ${good.bgColor};" class="shop_elem_pic_block">
                                    <img class="shop_elem_pic" src="${good.picture}" alt="">
                                </div>
                                <div class="shop_elem_block">
                                    <h3 class="shop_elem_name">${good.name}</h3>
                                    <h3 class="shop_elem_price">${good.currency}${good.price}</h3>
                                </div>
                                <div class="shop_elem_block">
                                    <text class="shop_elem_weight">${good.weigth}g</text>
                                    <button class="shop_elem_btn">Buy</button>
                            </div>`
        elemBlock.appendChild(elemRow).appendChild(elemGood);
    })                 
}
renderShop()

let cart = [];


function renderWeigth(item, index) { // Функция изменения веса товара в корзине
    let elemWeight = document.querySelectorAll('#elem_weigth'); //Находим элемент
    elemWeight[index].innerHTML = `${item}`; // меняем содержимоего конкретного элемента по index и записываем в item
};

function renderAllWeigth() { // Функция изменения веса всех товаров корзине
    let elemTotalWeight = document.querySelector('#total_weigth'); //Находим элемент
    let totalWeigth = 0; // Создаем переменную для отображения
    cart.forEach(item => { // Пересчитываем элементы в массиве cart и записываем количество в totalWeigth
        totalWeigth += item.weigth
    })
    elemTotalWeight.innerHTML = `${totalWeigth}`; // меняем содержимое элемента и записываем item
};

let allTotalPrice = 0;

function renderAllPrice() { // Функция изменения стоимости всех товаров корзине
    let elemTotalPrice = document.querySelector('#total_price'); //Находим элемент
    let totalPrice = 0; // задаем исходный элемент
    let cartMap = cart.map(item => { // Преобразуем массив в массив прайс и олпрайс
        if (item.allPrice) { // Если в объекте есть олпрайс 
            return item.allPrice; // то вернуть ол прайс
        } else {                  // иначе
            return item.price     // вернуть прайс
        }
    })
    cartMap.forEach(item => { // Перебираем получившийся массив
        totalPrice += item    // Добавляем все элементы к исходному элементв
    })
    allTotalPrice = +totalPrice.toFixed(2)
    elemTotalPrice.innerHTML = `${allTotalPrice}`; // меняем содержимое элемента и записываем totalPrice
};

function checkRenderRemove() { // Функция удаления значка количества товаров
    let removeBlocks = document.querySelectorAll('.number_of_products_block')
    removeBlocks.forEach(item => {
        item.remove()
    })
}

function checkRender() { // Функция добавления количества товаров
    if (cart != undefined) {
        renderNumberOfProductsCartDesktop()
        renderNumberOfProductsMobileMenu()
        renderNumberOfProductsCartMobile()
    }
}


// Вопрос, почему нельзя сделать коллекцию элементов из разных классов, пройтись по ним фоич и добавить в каждый элемент блок в виде значка количества
// Пришлось делать под каждый элемент отдельную функцию.

// Функции по созданию блоков с количеством товаров корзине.
function renderNumberOfProductsMobileMenu() {
    const mobileMenu = document.querySelector('.fa-bars')
    
    let amountGoods = document.createElement('div');
    amountGoods.className = "number_of_products_block";
    amountGoods.innerHTML = `<h5 class="number_of_products">${cart.length}</h5>`;
    
    mobileMenu.appendChild(amountGoods)
}
function renderNumberOfProductsCartMobile() {
    const mobileCart = document.querySelector('.mobile-cart')
    
    let amountGoods = document.createElement('div');
    amountGoods.className = "number_of_products_block";
    amountGoods.innerHTML = `<h5 class="number_of_products">${cart.length}</h5>`;
    
    mobileCart.appendChild(amountGoods)
}

function renderNumberOfProductsCartDesktop() {
    const desktopCart = document.querySelector('.desktop_cart')
    
    let amountGoods = document.createElement('div');
    amountGoods.className = "number_of_products_block";
    amountGoods.innerHTML = `<h5 class="number_of_products">${cart.length}</h5>`;
    
    desktopCart.appendChild(amountGoods)
}

// Функции по созданию кнопок + и - на каждой единице товара

function minusBtn () { // функция по созданию кнопки - 
    let btnBlock = document.querySelectorAll('.modal_cart_elem_weigth_block') // Находим блок куда добавить кнопку
    let elemMinus = document.createElement('i') // Создаем тег
    elemMinus.className = "fas fa-minus" // Присваиваем класс
    btnBlock.forEach(item => { // Методом перебора добавляем всем элементам в корзине кнопку минус 
        item.prepend(elemMinus) // Добавляем в начало блока
    })
    elemMinus.onclick = () => { // Если на кнопку - поступил клик 
        let parentName = elemMinus.parentNode.previousElementSibling.previousElementSibling.textContent // Находим название блока
        cart.forEach((item, index) => { // Перебираем массив cart 
            if (item.name == parentName) { // Если имя в массиве == названию блока
                if (item.weigth == 500) { // Проверяем вес, если вес == 500 
                    let removeBlock = document.querySelectorAll('.modal_cart_li') // находим все блоки
                    removeBlock[index].remove(); // Удаляем блок с индексом, на котором parentName == item.name
                    cart.splice(index, 1) // Удаляем тот элемент из массива cart 
                    renderAllWeigth(); // Изменяем общий вес
                    renderAllPrice(); // Изменяем общую цену
                    checkRender() // Изменяем количество товаров в иконке над корзиной
                } else if (item.weigth > 500) {  // Если вес элемента больше 500
                    item.weigth -= 500;          // Уменьшаем вес 
                    item.allPrice = (item.weigth/500) * item.price; // Меняем значение allPrice
                    renderWeigth(item.weigth, index);  // Меняем вес элемента 
                    renderAllWeigth(); // Меняем общий вес 
                    renderAllPrice(); // Меняем общий прайс
                }
            }
        })
        if (cart.length == 0) { // Проверка на длинну массива (чтобы в значке не было значения 0)
            checkRenderRemove() // Удаляем значок количества над корзиной
        }
    }
}


function plusBtn () {
    let btnBlock = document.querySelectorAll('.modal_cart_elem_weigth_block') // Находим блок куда добавить кнопку +
    let elemPlus = document.createElement('i') // Назначем тег
    elemPlus.className = "fas fa-plus" // Назначаем класс
    btnBlock.forEach(item => {
        item.append(elemPlus) // Добавляем в конец элемента
    })
    elemPlus.onclick = () => {  // Если был клик то 
        let parentName = elemPlus.parentNode.previousElementSibling.previousElementSibling.textContent // Находим название элемента
        cart.forEach((item, index) => { //Перебираем все элементы
            if (item.name == parentName) {  // Если есть совпадение имени элемента и parentName
                item.weigth += 500;        // Добавть в этом item вес +500
                item.allPrice = (item.weigth/500) * item.price; // Добавть значение allPrice 
                renderWeigth(item.weigth, index);  // Меняем вес в элементе
                renderAllWeigth(); // Меняем общий вес
                renderAllPrice();  // И общий прайс
            }
        })
    }
}











// При нажатии на кнопку buy. 

const btns = document.querySelectorAll('.shop_elem_btn');


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        let parentName = btn
        .parentNode // получаем родителя этого элемента
        .previousElementSibling // получаем соседний элемент выше
        .firstElementChild // Первого дочернего элемента
        .textContent; // Получаем текст внутри этого элемента

        let parent = document.querySelector('.modal_cart_ul'); //Исходный элемент куда добавляем li

        function renderLi(cart) {
                let lastElem = cart[cart.length - 1];

                let elemGood = document.createElement('li'); // создать элемент li
                elemGood.className = "modal_cart_li"; // Присвоить ему класс 
                elemGood.innerHTML = `<div style="background-color: ${lastElem.bgColor}" class="modal_cart_elem_pic_block">
                                        <img class="modal_cart_elem_pic" src="${lastElem.picture}" alt="">
                                        </div>
                                        <div class="modal_cart_name_block">
                                        <div class="modal_cart_elem_name">${lastElem.name}</div>
                                        <div class="modal_cart_elem_price">${lastElem.currency}${lastElem.price}<span class="price_g">&nbspfor 500g</span></div>
                                        <div class="modal_cart_elem_weigth_block">
                                            
                                            <div class="modal_cart_elem_weigth"><span id="elem_weigth">${lastElem.weigth}</span>g</div>
                                            
                                        </div>
                                    </div>`;
                parent.appendChild(elemGood); //Добавить элемент li в исходный элемент
        }
        shop.forEach((elem) => { // Перебираем элементы в переменной shop 
            if (elem.name == parentName) { // Если name элемента равно имени товара на полке
                
                if (cart.length == 0) { // Если длинна массива равна 0
                    cart.push(elem); // Добавить элемент в переменную cart
                    renderLi(cart) // добавляем элемент в корзину на сайте
                    renderAllWeigth() // Изменить общий вес
                    renderAllPrice() // Изменить общий прайс
                    plusBtn () // Добавить кнопку +
                    minusBtn () // Добавить кнопку -
                    checkRender() //Добавляем иконку количества товаров над корзиной

                } else if (cart.length != 0) { // Если длинна массива не равна 0
                    let find = cart.find(item => item == elem) //Ищем элемент в корзине с таким же названием
                    if (find == undefined) { // Если такого элемента нет
                        cart.push(elem); // Добавить элемент в переменную cart
                        renderLi(cart) //добавляем элемент в корзину на сайте
                        renderAllWeigth() // Меняем общий вес  
                        renderAllPrice() // Меняем общий прайс
                        plusBtn () // Добавляем кнопку +
                        minusBtn () // Добавляем кнопку -
                        checkRender() // Добавляем иконку количества

                    } else if (find == elem) { // Если такой элемент есть
                        cart.forEach((item, index) => { // Перебираем элементы в корзине
                            if (item == find) { // Находим элемент с таким же названием
                                item.weigth += 500; // Добавляем этому элементу вес + 500
                                item.allPrice = (item.weigth/500) * item.price; // Создаем новый элемент объекта "общая сумма за товар"
                                renderWeigth(item.weigth, index) // Изменяем вес элемента в корзине на сайте.
                                renderAllWeigth() // Меняем общий вес
                                renderAllPrice()  // Меняем общий прайс
                            }
                        })
                    }
                } 
            }
            
        }) 
    }) 
});












// Добавить товар в корзину, если его нет.

// Если есть, добавить вес.

// При добавлении/удалении товаров из корзины
// Обновлять количество уникальных товаров на значке.

// При клике по значку корзины, открывать pop-up.
// В этом попап показан список товаров.
// общая сумма, вес в деньгах.
// +/- вес на каждом товаре.
// Кнопка очистить корзину. 
// кнопка отправить заказ.
// После нажатия отправить заказ, корзина очищается и выходит попап (Успешно)
//