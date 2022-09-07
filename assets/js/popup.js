const pop = document.querySelector(".popup");
const cartButton = document.querySelector(".item-wrap");
const closePop = document.querySelector(".bxs-x-circle");
const background = document.querySelector("#overlay")
const pop1 = document.querySelector("#popup1");
const cartButton1 = document.querySelector(".item-wrap1");
const closePop1 = document.querySelector(".close1");


cartButton.addEventListener("click", () => {
    pop.classList.add("active");
});

closePop.addEventListener("click", () => {
    pop.classList.remove("active");
});

cartButton1.addEventListener("click", () => {
    pop1.classList.add("active");
});

closePop1.addEventListener("click", () => {
    pop1.classList.remove("active");
});

cartButton.addEventListener("click", () => {
    background.classList.add("active");
});

closePop.addEventListener("click", () => {
    background.classList.remove("active");
});