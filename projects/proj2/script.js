const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// const style = window.getComputedStyle(red)
// console.log(style.backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// -------------------------------------------------------------------------------------------
// EVENTS
// https://developer.mozilla.org/en-US/docs/Web/Events

const orangeElementColor = getBGColor(orange);

// orange.addEventListener('mouseenter', () => {
//     center.style.background = orangeElementColor
// })

// pink.addEventListener('mouseenter', () => {
//     center.style.background = getBGColor(pink)
// })


const changeCenterColor = (element) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = getBGColor(element)
    })
}

changeCenterColor(red)
changeCenterColor(pink)
changeCenterColor(orange)
changeCenterColor(cyan)
changeCenterColor(violet)

