export function ifShoppingCartEmpty() {
  let shoppingCartItem: HTMLAnchorElement = document.querySelector(
    ".menu__bag-box__anchor--logo"
  ) as HTMLAnchorElement;

  if (
    typeof localStorage["shoppingCart"] === "undefined" ||
    localStorage["shoppingCart"] === "[]"
  ) {
    shoppingCartItem.style.color = "white";
  } else {
    shoppingCartItem.style.color = "#5c7e96";
  }
}
