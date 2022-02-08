let hedrImgs = document.querySelectorAll(".header .container .header-img .headr_img-grup .img-opacty img");
let drobImg = document.querySelector("#dropdown img");
hedrImgs[0].style.zIndex = "2";
let heard = document.querySelector(".header");
let app = document.querySelector(".app");
let bxsHeart = document.querySelector(".bxs-heart");
let bxHeart = document.querySelector(".bx-heart");
let bxMenu = document.querySelector(".bx-menu");
let bxX = document.querySelector(".bx-x");
let overly = document.querySelectorAll("main .container .main_img-box .main-Ritbox .owerly .overly");
let overlyI = document.querySelectorAll("main .container .main_img-box .main-Ritbox .owerly .overly i");

for (i of overly) {
    i.onmouseenter = function() {
        this.classList.add("active")
        this.children[0].onmouseenter = () => this.classList.add("active")
        this.children[1].onmouseenter = () => this.classList.add("active")
        this.children[2].onmouseenter = () => this.classList.add("active")
        this.children[3].onmouseenter = () => this.classList.add("active")
    }
    i.onmouseout = function(){
        this.classList.remove("active")
    }
}





let navMenu = document.getElementById("navMenu");
bxMenu.onclick = () => {
    navMenu.classList.add("active")
}
bxX.onclick = () => {
    navMenu.classList.remove("active")
}

bxHeart.onclick = () => {
    bxHeart.style.display = "none"
    bxsHeart.style.display = "block"
}
bxsHeart.onclick = () => {
    bxsHeart.style.display = "none"
    bxHeart.style.display = "block"
}
heard.onclick = (event) => {
    if (event.target.className === "ower") {
        hedrActvImg.src = event.target.parentElement.children[1].src
        for (i of hedrImgs) {
            if (hedrActvImg.src === i.src) {
                i.style.zIndex = "2"
                i.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)"
            }
            else {
                i.style.zIndex = "0"
                i.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.0)"
            }
        }
    }
}

class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.items = options.items

        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        })

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ')

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').textContent = item.label
        this.close()
    }

    open() {
        this.$el.classList.add('open')
        drobImg.classList.add("active")
        app.style.height = "38vh"
    }

    close() {
        this.$el.classList.remove('open')
        drobImg.classList.remove("active")
        app.style.height = ""
    }
}


const dropdown = new Dropdown('#dropdown', {
    items: [
        { label: 'Выбрать размер', id: 'dflt' },
        { label: 'Выбрать размер 26', id: 'msk' },
        { label: 'Выбрать размер 27', id: 'spb' },
        { label: 'Выбрать размер 28', id: 'nsk' },
        { label: 'Выбрать размер 29', id: 'krdr' },
        { label: 'Выбрать размер 30', id: 'rostov' }
    ]
})

let counter = document.querySelector(".counter")
let counterP = document.querySelector(".counter p")
counter.addEventListener("click", (keyt) => {
    if (keyt.target.className === "spanAdd") {
        counterP.textContent++;
    }
    if (keyt.target.className === "spanBack") {
        if (counterP.textContent !== "1") {
            counterP.textContent--;
        }
    }
});







