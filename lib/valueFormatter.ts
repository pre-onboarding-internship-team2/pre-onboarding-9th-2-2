function price(priceValue: number): string {
  return priceValue.toLocaleString("ko", {
    style: "currency",
    currency: "KRW",
  });
}

function date(dateValue: string | Date): string {
  return new Date(dateValue).toLocaleString("ko", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

const formatter = {
  price,
  date,
};

export default formatter;
