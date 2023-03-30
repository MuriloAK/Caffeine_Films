 // ação de alteração de cor dentro da navbar //
 const menu = document.querySelector('.navbar')

function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 850);
}

window.addEventListener('scroll', activeScroll)


// ação de transição de imagens //
let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)