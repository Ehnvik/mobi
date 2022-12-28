import { CartItem } from "./models/CartItem";
import { ifShoppingCartEmpty } from "./models/ifShoppingCartEmpty";

window.addEventListener("load", () => {
  ifShoppingCartEmpty();
});

ifShoppingCartEmpty();

let mainContainer: HTMLDivElement = document.getElementById(
  "shopping-cart"
) as HTMLDivElement;
let totalPrice: HTMLParagraphElement = document.getElementById(
  "totaltCost"
) as HTMLParagraphElement;
let toCheckoutLink: HTMLAnchorElement = document.getElementById(
  "toCheckoutlink"
) as HTMLAnchorElement;
let toCheckoutButton: HTMLButtonElement = document.getElementById(
  "toCheckoutButton"
) as HTMLButtonElement;

function getCartItemFromLs() {
  let cartItem: CartItem[] = JSON.parse(
    localStorage.getItem("shoppingCart") || "[]"
  );
  createCartItemhtml(cartItem);
}

getCartItemFromLs();

function createCartItemhtml(cartItem: CartItem[]) {
  cartItem.forEach((cartItem: CartItem) => {
    let productContainer: HTMLDivElement = document.createElement("div");
    let imageContainer: HTMLImageElement = document.createElement("img");
    let cartInfoContainer: HTMLDivElement = document.createElement("div");
    let caseDescription: HTMLHeadingElement = document.createElement("h3");
    let price: HTMLParagraphElement = document.createElement("p");
    let amountContainer: HTMLDivElement = document.createElement("div");
    let amountNumber: HTMLParagraphElement = document.createElement("p");
    let additionIcon: HTMLDivElement = document.createElement("div");
    let subtractIcon: HTMLDivElement = document.createElement("div");
    let trashButton: HTMLDivElement = document.createElement("div");

    mainContainer.classList.add("cartItem");
    productContainer.classList.add("cartItem__details-container");
    imageContainer.classList.add("cartItem__details-container__image");
    cartInfoContainer.classList.add(
      "cartItem__details-container__cart-info-container"
    );
    caseDescription.classList.add(
      "cartItem__details-container__cart-info-container__case-description"
    );
    price.classList.add(
      "cartItem__details-container__cart-info-container__case-price"
    );

    amountContainer.classList.add(
      "cartItem__details-container__amount-container"
    );
    amountNumber.classList.add(
      "cartItem__details-container__amount-container__amount-number"
    );
    subtractIcon.classList.add(
      "cartItem__details-container__amount-container__subtract-icon"
    );
    additionIcon.classList.add(
      "cartItem__details-container__amount-container__addition-icon"
    );
    trashButton.classList.add(
      "cartItem__details-container__amount-container__trash-button"
    );
    totalPrice.classList.add("cartItem__total-price");
    toCheckoutButton.classList.add("cartItem__button");

    cartItem.product.imageUrls.forEach((image: string) => {
      imageContainer.src = image;
      imageContainer.setAttribute("alt", "mobilskal");
    });

    let containerDescription: string = cartItem.product.description;
    caseDescription.innerHTML = containerDescription;

    let amountText: number = cartItem.amount;
    amountNumber.innerHTML = amountText.toString();

    let productPrice: string = cartItem.product.price.toString();
    price.innerHTML = productPrice + " kr";

    let selectedAmount: number = 1;
    let selectedAmountText: string = selectedAmount.toString();

    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    additionIcon.addEventListener("click", () => {
      selectedAmount++;
      selectedAmountText = selectedAmount.toString();
      amountNumber.innerHTML = selectedAmountText;
    });

    subtractIcon.addEventListener("click", () => {
      if (selectedAmount > 1) {
        selectedAmount--;
        selectedAmountText = selectedAmount.toString();
        amountNumber.innerHTML = selectedAmountText;
      }
    });

    additionIcon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
    amountNumber.innerHTML = selectedAmountText;
    subtractIcon.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

    totalPrice.innerHTML = `Summa: 1568 kr`;

    toCheckoutButton.innerHTML = "Till kassan";

    mainContainer.appendChild(productContainer);
    productContainer.appendChild(imageContainer);
    productContainer.appendChild(cartInfoContainer);
    productContainer.appendChild(amountContainer);
    cartInfoContainer.appendChild(caseDescription);
    cartInfoContainer.appendChild(price);
    amountContainer.appendChild(additionIcon);
    amountContainer.appendChild(amountNumber);
    amountContainer.appendChild(subtractIcon);
    amountContainer.appendChild(trashButton);
    mainContainer.appendChild(totalPrice);
    mainContainer.appendChild(toCheckoutLink);
    toCheckoutLink.appendChild(toCheckoutButton);
  });
}

function emptyShoppingCart() {
  if (
    typeof localStorage["shoppingCart"] === "undefined" ||
    localStorage["shoppingCart"] === "[]"
  ) {
    toCheckoutLink.style.display = "none";
    let emptyCartContainer: HTMLDivElement = document.createElement("div");
    let emptyCartHeader: HTMLHeadingElement = document.createElement("h3");
    let emptyCartText: HTMLParagraphElement = document.createElement("p");
    let emptyCartInfo: HTMLParagraphElement = document.createElement("p");

    emptyCartContainer.classList.add("empty-cart-container");
    emptyCartHeader.classList.add("empty-cart-container__header");
    emptyCartText.classList.add("empty-cart-container__text");
    emptyCartInfo.classList.add("empty-cart-container__info");

    emptyCartHeader.innerHTML = "Varukorg";
    emptyCartText.innerHTML = "Din varukorg är tom!";
    emptyCartInfo.innerHTML =
      "När du handlar hos oss får du alltid fri frakt och fri retur till butik.";

    mainContainer.appendChild(emptyCartContainer);
    emptyCartContainer.appendChild(emptyCartHeader);
    emptyCartContainer.appendChild(emptyCartText);
    emptyCartContainer.appendChild(emptyCartInfo);
  }
}

emptyShoppingCart();
