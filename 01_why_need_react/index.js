const basket1_count = document.querySelector(".basket-1 span");
const basket2_count = document.querySelector(".basket-2 span");
const left = document.querySelector(".left_btn");
const right = document.querySelector(".right_btn");

let total = 10;
let second_basket = 0;
let first_basket = total - second_basket;

basket1_count.innerHTML = first_basket;
basket2_count.innerHTML = second_basket;

right.addEventListener("click", () => {
  if (first_basket > 0) {
    first_basket--;
    basket1_count.innerHTML = first_basket;
    second_basket++;
    basket2_count.innerHTML = second_basket;
  } else {
    alert("No more Apples in Basket 1...");
  }
});

left.addEventListener("click", () => {
  if (second_basket > 0) {
    second_basket--;
    basket2_count.innerHTML = second_basket;
    first_basket++;
    basket1_count.innerHTML = first_basket;
  } else {
    alert("No more Apples in Basket 2...");
  }
});

// JavaScript is imperative language there is no automatic state updation whenever state
// changes and it also not uses the components to build the websites and also using JS
// we can't build the single page application
