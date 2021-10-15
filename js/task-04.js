let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");


const decrement = counter.querySelector('[data-action="decrement"]');
const increment = counter.querySelector('[data-action="increment"]');


const handleClickD = decrement.addEventListener("click", () => {
    counterValue -=1;
    console.log("Button decrement was clicked, counterValue = ", counterValue);
    value.textContent = counterValue;
});


const handleClickI = increment.addEventListener("click", () => {
    counterValue +=1;
    console.log("Button increment was clicked, counterValue = ", counterValue);
    value.textContent = counterValue;
});