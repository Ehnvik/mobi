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
  let productImage: HTMLImageElement = document.createElement("img");
  let productInfoContainer: HTMLDivElement = document.createElement("div");
  let caseDescription: HTMLHeadingElement = document.createElement("h5");
  let price: HTMLParagraphElement = document.createElement("p");
  let containerColors: HTMLDivElement = document.createElement("div");
  let firstColor: HTMLDivElement = document.createElement("div");
  let secondColor: HTMLDivElement = document.createElement("div");
  let thirdColor: HTMLDivElement = document.createElement("div");
  let amountContainer: HTMLDivElement = document.createElement("div");
  let amountNumber: HTMLParagraphElement = document.createElement("p");
  let subtractIcon: HTMLDivElement = document.createElement("div");
  let additionIcon: HTMLDivElement = document.createElement("div");
  let shopButton: HTMLButtonElement = document.createElement("button");

  mainContainer.classList.add("product-details-container");
  productImage.classList.add("product-details-container__product-img");
  productInfoContainer.classList.add(
    "product-details-container__info-container"
  );
  caseDescription.classList.add(
    "product-details-container__info-container__description"
  );
  price.classList.add("product-details-container__info-container__price");

  containerColors.classList.add(
    "product-details-container__info-container__container-colors"
  );

  firstColor.classList.add(
    "product-details-container__info-container__container-colors__first-color"
  );
  secondColor.classList.add(
    "product-details-container__info-container__container-colors__second-color"
  );
  thirdColor.classList.add(
    "product-details-container__info-container__container-colors__third-color"
  );
  amountContainer.classList.add(
    "product-details-container__info-container__amount-container"
  );
  amountNumber.classList.add(
    "product-details-container__info-container__amount-container__amount-number"
  );
  subtractIcon.classList.add(
    "product-details-container__info-container__amount-container__subtract-icon"
  );
  additionIcon.classList.add(
    "product-details-container__info-container__amount-container__addition-icon"
  );
  shopButton.classList.add(
    "product-details-container__info-container__shop-button"
  );

  productDetails.imageUrls.forEach((image: string) => {
    productImage.src = image;
    productImage.setAttribute("alt", "mobilskal");
  });

  mainContainer.appendChild(productImage);
  mainContainer.appendChild(productInfoContainer);

  productInfoContainer.appendChild(caseDescription);
  productInfoContainer.appendChild(price);
  productInfoContainer.appendChild(containerColors);
  containerColors.appendChild(firstColor);
  containerColors.appendChild(secondColor);
  containerColors.appendChild(thirdColor);
  productInfoContainer.appendChild(amountContainer);

  amountContainer.appendChild(subtractIcon);
  amountContainer.appendChild(amountNumber);
  amountContainer.appendChild(additionIcon);

  productInfoContainer.appendChild(shopButton);
}
