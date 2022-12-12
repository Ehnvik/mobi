import { IProducts } from "./models/IProducts";
import { products } from "./products/products";

products.forEach((product: IProducts) => {
  let container: HTMLDivElement = document.getElementById(
    "products"
  ) as HTMLDivElement;

  let productContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let imgContainer: HTMLDivElement = document.createElement(
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
  productImg.classList.add("products__container__image-container__image");

  product.imageUrls.forEach((image: string) => {
    productImg.src = image;
    productImg.setAttribute("alt", "mobilskal");
  });

  productInfo.innerHTML = product.description;

  let priceText: string = product.price.toString();
  productPrice.innerHTML = priceText + " kr";

  container.appendChild(productContainer);
  productContainer.appendChild(imgContainer);
  imgContainer.appendChild(productImg);
  productContainer.appendChild(productInfo);
  productContainer.appendChild(productPrice);
});
