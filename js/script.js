const price = Array.from(document.querySelectorAll(".price"));
const toggle = document.querySelector("input[type='checkbox']");

console.log(price);
function priceUpdate() {
  if (!toggle.checked) {
    price[0].innerHTML = "199.99";
    price[1].innerHTML = "249.99";
    price[2].innerHTML = "399.99";
    return;
  }

  price[0].innerHTML = "19.99";
  price[1].innerHTML = "24.99";
  price[2].innerHTML = "39.99";
}

window.onload = priceUpdate;
toggle.addEventListener("click", priceUpdate);
