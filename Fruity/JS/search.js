const pushSearch = document.querySelector('.search_btn'); // Десктоп кнопка 
const pushSearchMobile = document.querySelector('.search_btn_mobile') // Мобильная кнопка
const searchBlock = document.querySelector('.search_block_content'); // Контент который нужно показать

const closedMobileBtn = document.querySelector('.closed') // мобильная кнопка закрытия

let allShopName = document.querySelectorAll('.shop_elem_name')



function showSearchBlock() {
    pushSearch.addEventListener('click', () => {
        let coords = pushSearch.getBoundingClientRect()

        searchBlock.style.left = (coords.left - 220) + 'px'
        searchBlock.style.top = (coords.bottom - 52) + "px";

        searchBlock.style.transform = 'scale(1)';
    })
    window.addEventListener('scroll', () => {
        searchBlock.style.left = 'none'
        searchBlock.style.top = 'none'

        searchBlock.style.transform = 'scale(0)';
    });
    window.addEventListener('resize', () => {
        searchBlock.style.left = 'none'
        searchBlock.style.top = 'none'

        searchBlock.style.transform = 'scale(0)';
    });
}

function showSearchBlockMobile() {
    pushSearchMobile.addEventListener('click', () => {
        let coords = pushSearchMobile.getBoundingClientRect()

        searchBlock.style.left = (coords.left + 3) + 'px'
        searchBlock.style.top = (coords.bottom - 40) + "px";

        searchBlock.style.transform = 'scale(1)';
    })
    window.addEventListener('scroll', () => {
        searchBlock.style.left = 'none'
        searchBlock.style.top = 'none'

        searchBlock.style.transform = 'scale(0)';
    });
    window.addEventListener('resize', () => {
        searchBlock.style.left = 'none'
        searchBlock.style.top = 'none'

        searchBlock.style.transform = 'scale(0)';
    });
    closedMobileBtn.addEventListener('click', () => {
        searchBlock.style.left = 'none'
        searchBlock.style.top = 'none'

        searchBlock.style.transform = 'scale(0)';
    })
}




function renderSearch(shop) {
    
    shop.forEach(good => {
        let searchBlock = document.querySelector('.hint_block');
        let elemLi = document.createElement('li');
        elemLi.className = "hint_elem";
        elemLi.innerHTML = `${good.name}`;
        searchBlock.prepend(elemLi);
    })
    
}







function listSearchClick() {
    let listSearch = document.querySelectorAll('.hint_elem')
    listSearch.forEach(item => {
        item.addEventListener('click', () => {
            
        })
    })
}


window.onload = () => {
    let input = document.querySelector('#input');
    let listSearch = document.querySelectorAll('.hint_elem')
    input.oninput = function() {
        let value = this.value.trim();
        if (value.length > 0) {
            let hintBlock = document.querySelector('.hint_block ');
            hintBlock.style.transform = 'scale(1)';
            listSearch.forEach ((elem, index) => {
                if (elem.innerText.search(value) == -1) {
                    listSearch[index].style.display = 'none';
                    
                }
            })   
        } else {
            listSearch.forEach ((elem, index) => {
                let hintBlock = document.querySelector('.hint_block ');
                hintBlock.style.transform = 'scale(0)';
                listSearch[index].style.display = 'block';
            })
        }
    }
};



renderSearch(shop);
showSearchBlockMobile()
showSearchBlock()
listSearchClick() 