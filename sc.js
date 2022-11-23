const body = document.querySelector("body")
const coral = document.querySelector(".one")
const blue = document.querySelector(".two")
const yellow = document.querySelector(".three")
const white = document.querySelector(".four")
const crimson = document.querySelector(".five")


coral.addEventListener("click", function(){
    body.style.background = "lightcoral";
});

blue.addEventListener("click", () => {
    body.style.background = "lightblue"
})

yellow.addEventListener("click", () => {
    body.style.background = "yellow"
})

white.addEventListener("click", () => {
    body.style.background = "white"
})

crimson.addEventListener("click", () => {
    body.style.background = "crimson"
})