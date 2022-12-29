import { CartItem } from "./models/CartItem";
import { ifShoppingCartEmpty } from "./models/ifShoppingCartEmpty";

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

function summaryOfOrder(summary: CartItem[]) {
  let totalCost: HTMLParagraphElement = document.getElementById(
    "checkoutSummaryTotalCost"
  ) as HTMLParagraphElement;

  let arrayOfTotalCost: number[] = [];
  let sum = 0;

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

    summaryContainer.classList.add("summaryContainer");
    summaryDescription.classList.add("summaryContainer__description");
    summaryPrice.classList.add("summaryContainer__price");
    summaryAmount.classList.add("summaryContainer__amount");
    summaryColorContainer.classList.add("summaryContainer__color");

    summaryDescription.innerHTML = summaryItem.product.description;
    summaryColorContainer.innerHTML = summaryItem.color.toString();
    summaryAmount.innerHTML = summaryItem.amount.toString() + " st";
    summaryPrice.innerHTML = summaryItem.product.price.toString() + " kr";

    arrayOfTotalCost.push(summaryItem.amount * summaryItem.product.price);

    orderContainer.appendChild(summaryContainer);
    summaryContainer.appendChild(summaryDescription);
    summaryContainer.appendChild(summaryColorContainer);
    summaryContainer.appendChild(summaryAmount);
    summaryContainer.appendChild(summaryPrice);
  });
  for (let i = 0; i < arrayOfTotalCost.length; i++) {
    sum += arrayOfTotalCost[i];
  }
  let sumText: string = sum.toString();
  totalCost.innerHTML = `Total summa: ${sumText} kr`;
}
