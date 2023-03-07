const CURRENCY_FORMATTER = new Intl.NumberFormat("ko", {
  style: "currency",
  currency: "KRW",
});

export function formatCurrency(price: number) {
  return CURRENCY_FORMATTER.format(price);
}
