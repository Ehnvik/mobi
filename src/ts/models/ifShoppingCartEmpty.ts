import { CartItem } from "./CartItem";

export function ifShoppingCartEmpty() {
  let shoppingCartItemLink: HTMLAnchorElement = document.querySelector(
    ".menu__bag-box__anchor"
  ) as HTMLAnchorElement;

  shoppingCartItemLink.classList.add("shopping-cart");

  let shoppingCartItem: HTMLAnchorElement = document.querySelector(
    ".menu__bag-box__anchor--logo"
  ) as HTMLAnchorElement;

  let shoppingCartItemAmount: HTMLSpanElement = document.getElementById(
    "amount-of-products-container"
  ) as HTMLSpanElement;

  shoppingCartItemLink.appendChild(shoppingCartItemAmount);

  let cartItem: CartItem[] = JSON.parse(
    localStorage.getItem("shoppingCart") || "[]"
  );

  if (
    typeof localStorage["shoppingCart"] === "undefined" ||
    localStorage["shoppingCart"] === "[]"
  ) {
    shoppingCartItem.style.color = "white";
    console.log("white");
  } else {
    shoppingCartItem.style.color = "#5c7e96";
    shoppingCartItem.classList.add("shopping-cart__icon");
    shoppingCartItemAmount.classList.add("shopping-cart__amount");
    for (let i = 0; i < cartItem.length; i++) {
      let numbersOfProductsInCart = cartItem.length;
      let numbersOfProductsInCartText: string =
        numbersOfProductsInCart.toString();
      shoppingCartItemAmount.innerHTML = numbersOfProductsInCartText;
    }

    console.log("blue");
  }
}
