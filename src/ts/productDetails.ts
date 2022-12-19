import { IProducts } from "./models/IProducts";

function getProductDetailsFromLs() {
  let productDetails: IProducts = JSON.parse(
    localStorage.getItem("productDetails") || "[]"
  );
  createProductDetailsHtml(productDetails);
}

getProductDetailsFromLs();

function createProductDetailsHtml(productDetails: IProducts) {
  let mainContainer: HTMLDivElement = document.getElementById(
    "mainProductDetails"
  ) as HTMLDivElement;
  let imageContainer: HTMLImageElement = document.createElement("img");
  let descriptionContainer: HTMLDivElement = document.createElement("div");
  let caseDescription: HTMLHeadingElement = document.createElement("h5");
  let price: HTMLParagraphElement = document.createElement("p");
  let firstColor: HTMLDivElement = document.createElement("div");
  let secondColor: HTMLDivElement = document.createElement("div");
  let thirdColor: HTMLDivElement = document.createElement("div");
  let amountContainer: HTMLDivElement = document.createElement("div");
  let amountNumber: HTMLParagraphElement = document.createElement("p");
  let subtractIcon: HTMLDivElement = document.createElement("div");
  let additionIcon: HTMLDivElement = document.createElement("div");
  let shopButton: HTMLButtonElement = document.createElement("button");

  mainContainer.classList.add("product-details-container");
  imageContainer.classList.add("product-details-container__product");
  descriptionContainer.classList.add("product-details-container__description");
  caseDescription.classList.add("product-details-container__price");
  price.classList.add("product-details-container__price");
  firstColor.classList.add("product-details-container__first-color");
  secondColor.classList.add("product-details-container__second-color");
  thirdColor.classList.add("product-details-container__third-color");
  amountContainer.classList.add("product-details-container__amount-container");
  amountNumber.classList.add("product-details-container__amount-number");
  subtractIcon.classList.add("product-details-container__subtract-icon");
  additionIcon.classList.add("product-details-container__addition-icon");
  shopButton.classList.add("product-details-container__shop-button");

  mainContainer.appendChild(imageContainer);
  mainContainer.appendChild(descriptionContainer);

  descriptionContainer.appendChild(caseDescription);
  descriptionContainer.appendChild(price);
  descriptionContainer.appendChild(firstColor);
  descriptionContainer.appendChild(secondColor);
  descriptionContainer.appendChild(thirdColor);
  descriptionContainer.appendChild(amountContainer);

  amountContainer.appendChild(amountNumber);
  amountContainer.appendChild(subtractIcon);
  amountContainer.appendChild(additionIcon);

  descriptionContainer.appendChild(shopButton);
}
