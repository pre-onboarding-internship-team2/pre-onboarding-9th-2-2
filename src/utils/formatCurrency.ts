const currencyFormatter = new Intl.NumberFormat("ko", {
  style: "currency",
  currency: "KRW",
});

export function formatCurrency(price: number) {
  return currencyFormatter.format(price);
}
