import { IProducts } from "./models/IProducts";
import { products } from "./products/products";

function createHtml(products: IProducts[]) {
  products.forEach((product: IProducts) => {
    let container: HTMLDivElement = document.getElementById(
      "products"
    ) as HTMLDivElement;

    let productContainer: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;

    let productImg: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;

    let productInfo: HTMLHeadingElement = document.createElement(
      "h3"
    ) as HTMLHeadingElement;

    let productPrice: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;

    container.classList.add("products");
    productContainer.classList.add("products__container");
    productImg.classList.add("products__container__image");
    productInfo.classList.add("products__container__info");
    productPrice.classList.add("products__container__price");

    product.imageUrls.forEach((image: string) => {
      productImg.src = image;
      productImg.setAttribute("alt", "mobilskal");
    });

    productInfo.innerHTML = product.description;

    let priceText: string = product.price.toString();
    productPrice.innerHTML = priceText + " kr";

    container.appendChild(productContainer);
    productContainer.appendChild(productImg);
    productContainer.appendChild(productInfo);
    productContainer.appendChild(productPrice);
  });
}

// All products
let allProductsLink: HTMLLIElement = document.getElementById(
  "all-products"
) as HTMLLIElement;

allProductsLink.addEventListener("click", () => {
  createHtml(products);
});

// iPhone
let iphoneLink: HTMLLIElement = document.getElementById(
  "iPhone"
) as HTMLLIElement;

iphoneLink.addEventListener("click", () => {
  let iphoneList: IProducts[] = products.filter(
    (newArrayOfObjects) => newArrayOfObjects.brand === "iphone"
  );
  createHtml(iphoneList);
});

// Samsung
let samsungLink: HTMLLIElement = document.getElementById(
  "samsung"
) as HTMLLIElement;

samsungLink.addEventListener("click", () => {
  let samsungList: IProducts[] = products.filter(
    (newArrayOfObjects) => newArrayOfObjects.brand === "samsung"
  );
  createHtml(samsungList);
});

//Huawei
let huaweiLink: HTMLLIElement = document.getElementById(
  "huawei"
) as HTMLLIElement;

huaweiLink.addEventListener("click", () => {
  let huaweiList: IProducts[] = products.filter(
    (newArrayOfObjects) => newArrayOfObjects.brand === "huawei"
  );
  createHtml(huaweiList);
});
