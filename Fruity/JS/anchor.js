const anchors = document.querySelectorAll('a[href*="#"]')
const anchorsBtn = document.querySelectorAll('button[href*="#"]')
console.log(anchorsBtn)

for(let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

for(let anchor of anchorsBtn) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}