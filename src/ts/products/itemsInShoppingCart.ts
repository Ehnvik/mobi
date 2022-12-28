export function itemsInShoppingCart() {
  let shoppingCartItem: HTMLAnchorElement = document.getElementById(
    "menu__bag-box__anchor"
  ) as HTMLAnchorElement;

  if (
    typeof localStorage["shoppingCart"] !== "undefined" ||
    localStorage["shoppingCart"] !== "[]"
  ) {
    shoppingCartItem.style.color = "#5c7e96";
  } else {
    shoppingCartItem.style.color = "white";
  }
}
