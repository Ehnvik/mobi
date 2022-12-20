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
  let caseDescription: HTMLHeadingElement = document.createElement("h3");
  let price: HTMLParagraphElement = document.createElement("p");
  let containerColors: HTMLDivElement = document.createElement("div");
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

  caseDescription.innerHTML = productDetails.description;

  let priceText: string = productDetails.price.toString();
  price.innerHTML = priceText + " kr";

  productDetails.colors.forEach((color: string) => {
    let firstColor: HTMLDivElement = document.createElement("div");
    firstColor.classList.add(
      "product-details-container__info-container__container-colors__first-color"
    );
    firstColor.innerHTML = `<i class="fa-solid fa-circle ${color}"></i>`;
    containerColors.appendChild(firstColor);

    productDetails.imageUrls.forEach((image: string) => {
      productImage.src = image;
      productImage.setAttribute("alt", "mobilskal");
      firstColor.addEventListener("click", () => {
        if (image.match(color)) {
          productImage.src = image;
          productImage.setAttribute("alt", "mobilskal");
        }
      });
    });
  });

  subtractIcon.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;
  amountNumber.innerHTML = "1";
  additionIcon.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;

  shopButton.innerHTML = "Lägg i varukorg";

  mainContainer.appendChild(productImage);
  mainContainer.appendChild(productInfoContainer);
  productInfoContainer.appendChild(caseDescription);
  productInfoContainer.appendChild(price);
  productInfoContainer.appendChild(containerColors);
  productInfoContainer.appendChild(amountContainer);
  amountContainer.appendChild(subtractIcon);
  amountContainer.appendChild(amountNumber);
  amountContainer.appendChild(additionIcon);
  productInfoContainer.appendChild(shopButton);
}
