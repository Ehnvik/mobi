import { CartItem } from "./models/CartItem";

function getCartItemFromLs() {
  let cartItem: CartItem[] = JSON.parse(
    localStorage.getItem("shoppingCart") || "[]"
  );
  createCartItemhtml(cartItem);
}

getCartItemFromLs();

function createCartItemhtml(cartItem: CartItem[]) {
  cartItem.forEach((cartItem: CartItem) => {
    let mainContainer: HTMLDivElement = document.getElementById(
      "shopping-cart"
    ) as HTMLDivElement;
    let imageContainer: HTMLImageElement = document.createElement("img");
    let cartInfoContainer: HTMLDivElement = document.createElement("div");
    let caseDescription: HTMLHeadingElement = document.createElement("h3");
    let price: HTMLParagraphElement = document.createElement("p");
    let amountContainer: HTMLDivElement = document.createElement("div");
    let amountNumber: HTMLParagraphElement = document.createElement("p");
    let additionIcon: HTMLDivElement = document.createElement("div");
    let subtractIcon: HTMLDivElement = document.createElement("div");
    let totalCost: HTMLHeadingElement = document.createElement("h3");
    let buyButton: HTMLButtonElement = document.createElement("button");
    let trashButton: HTMLDivElement = document.createElement("div");

    mainContainer.classList.add("cartItem-details-container");
    imageContainer.classList.add("cartItem-details-container__image");
    cartInfoContainer.classList.add(
      "cartItem-details-container__cart-info-container"
    );
    caseDescription.classList.add(
      "cartItem-details-container__cart-info-container__case-description"
    );
    price.classList.add(
      "cartItem-details-container__cart-info-container__case-price"
    );

    amountContainer.classList.add(
      "cartItem-details-container__info-container__amount-container"
    );
    amountNumber.classList.add(
      "cartItem-details-container__info-container__amount-container__amount-number"
    );
    subtractIcon.classList.add(
      "cartItem-details-container__info-container__amount-container__subtract-icon"
    );
    additionIcon.classList.add(
      "cartItem-details-container__info-container__amount-container__addition-icon"
    );
    buyButton.classList.add(
      "cartItem-details-container__info-container__buy-button"
    );
    totalCost.classList.add("cartItem-details-container__total-cost");
    trashButton.classList.add("cartItem-details-container__trash-button");

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

    buyButton.innerHTML = "Handla";

    mainContainer.appendChild(imageContainer);
    mainContainer.appendChild(cartInfoContainer);
    cartInfoContainer.appendChild(caseDescription);
    cartInfoContainer.appendChild(price);
    mainContainer.appendChild(amountContainer);
    amountContainer.appendChild(additionIcon);
    amountContainer.appendChild(amountNumber);
    amountContainer.appendChild(subtractIcon);
    mainContainer.appendChild(totalCost);
    cartInfoContainer.appendChild(buyButton);
    cartInfoContainer.appendChild(trashButton);
  });
}
