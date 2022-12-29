import { CartItem } from "./models/CartItem";
import { ifShoppingCartEmpty } from "./models/ifShoppingCartEmpty";
import { getCartItemFromLs } from "./shoppingCart";

window.addEventListener("load", () => {
  ifShoppingCartEmpty();
});

ifShoppingCartEmpty();

function lsFromCart() {
  let checkoutSummary: CartItem[] = JSON.parse(
    localStorage.getItem("shoppingCart") || "[]"
  );
  summaryOfOrder(checkoutSummary);
}

lsFromCart();

let checkoutContainer: HTMLDivElement = document.getElementById(
  "checkout"
) as HTMLDivElement;
// let orderContainer: HTMLDivElement = document.getElementById(
//   "orderSummaryContainer"
// ) as HTMLDivElement;

function summaryOfOrder(summary: CartItem[]) {
  summary.forEach((summaryItem: CartItem) => {
    let orderContainer: HTMLDivElement = document.getElementById(
      "orderSummaryContainer"
    ) as HTMLDivElement;
    let summaryContainer: HTMLDivElement = document.createElement("div");
    let summaryDescription: HTMLParagraphElement = document.createElement("p");
    let summaryColorContainer: HTMLParagraphElement =
      document.createElement("p");
    let summaryAmount: HTMLParagraphElement = document.createElement("p");
    let summaryPrice: HTMLParagraphElement = document.createElement("p");
    let summaryTotal: HTMLHeadingElement = document.createElement("h4");

    summaryContainer.classList.add("summaryContainer");
    summaryDescription.classList.add("summaryContainer__description");
    summaryPrice.classList.add("summaryContainer__price");
    summaryAmount.classList.add("summaryContainer__amount");
    summaryColorContainer.classList.add("summaryContainer__color");
    summaryTotal.classList.add("summaryContainer__total");

    summaryDescription.innerHTML = summaryItem.product.description;
    summaryColorContainer.innerHTML = summaryItem.color.toString();
    summaryAmount.innerHTML = summaryItem.amount.toString();
    summaryPrice.innerHTML = summaryItem.product.price.toString() + " kr";

    orderContainer.appendChild(summaryContainer);

    summaryContainer.appendChild(summaryDescription);
    summaryContainer.appendChild(summaryColorContainer);
    summaryContainer.appendChild(summaryAmount);
    summaryContainer.appendChild(summaryPrice);
    summaryContainer.appendChild(summaryTotal);
  });
}
