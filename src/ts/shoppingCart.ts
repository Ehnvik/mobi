import { CartItem } from "./models/CartItem";

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

function createCartItemhtml(cartItem: CartItem[]) {
  let arrayOfNumbers: number[] = [];
  let sum = 0;

  cartItem.forEach((item: CartItem) => {
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

    imageContainer.src = item.image;
    imageContainer.setAttribute("alt", "mobilskal");

    let containerDescription: string = item.product.description;
    caseDescription.innerHTML = containerDescription;

    let selectedAmount = item.amount;

    let productPrice: string = item.product.price.toString();
    price.innerHTML = productPrice + " kr";

    let selectedAmountText = selectedAmount.toString();

    additionIcon.addEventListener("click", () => {
      selectedAmount++;
      selectedAmountText = selectedAmount.toString();
      amountNumber.innerHTML = selectedAmountText;
      item.amount++;
      newAmountOfProducts(cartItem);
      mainContainer.innerHTML = "";
      getCartItemFromLs();
    });

    subtractIcon.addEventListener("click", () => {
      selectedAmount--;
      selectedAmountText = selectedAmount.toString();
      amountNumber.innerHTML = selectedAmountText;
      if (item.amount >= 1) {
        item.amount--;
        newAmountOfProducts(cartItem);
      }
      if (selectedAmount < 1) {
        mainContainer.innerHTML = "";
        deleteProductFromCart(cartItem, item);
        getCartItemFromLs();
        emptyShoppingCart();
      }
      mainContainer.innerHTML = "";
      getCartItemFromLs();
    });

    additionIcon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
    amountNumber.innerHTML = selectedAmountText;
    subtractIcon.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    trashButton.addEventListener("click", () => {
      mainContainer.innerHTML = "";
      deleteProductFromCart(cartItem, item);
      getCartItemFromLs();
      emptyShoppingCart();
    });

    arrayOfNumbers.push(item.amount * item.product.price);

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
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  let sumText: string = sum.toString();

  totalPrice.innerHTML = `Total summa: ${sumText} kr`;

  toCheckoutButton.innerHTML = "Till kassan";
}

function deleteProductFromCart(cartItem: CartItem[], item: CartItem) {
  let deletedProduct = cartItem.filter((listItem) => listItem != item);
  localStorage.setItem("shoppingCart", JSON.stringify(deletedProduct));
}

window.addEventListener("load", () => {
  getCartItemFromLs();
});

function newAmountOfProducts(cartItem: CartItem[]) {
  localStorage.setItem("shoppingCart", JSON.stringify(cartItem));
}

function emptyShoppingCart() {
  if (
    typeof localStorage["shoppingCart"] === "undefined" ||
    localStorage["shoppingCart"] === "[]"
  ) {
    toCheckoutLink.style.display = "none";
    let emptyCartheader: HTMLHeadingElement = document.createElement("h3");
    let emptyCartText: HTMLParagraphElement = document.createElement("p");
    emptyCartheader.innerHTML = "Varukorg";
    emptyCartText.innerHTML = "Din varukorg är tom";
    mainContainer.appendChild(emptyCartheader);
    mainContainer.appendChild(emptyCartText);
  }
}

emptyShoppingCart();
