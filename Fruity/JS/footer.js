let elems1 = document.querySelector('.f1')
let elems2 = document.querySelector('.f1_')
let elems3 = document.querySelector('.f2')
let elems4 = document.querySelector('.f2_')
let elems5 = document.querySelector('.f3')
let elems6 = document.querySelector('.f3_')

elems1.addEventListener('click', function(){
    elems2.style.display = (elems2.style.display == 'block') ? 'none' : 'block';
})
elems3.addEventListener('click', function(){
    elems4.style.display = (elems4.style.display == 'block') ? 'none' : 'block';
})
elems5.addEventListener('click', function(){
    elems6.style.display = (elems6.style.display == 'block') ? 'none' : 'block';
})
