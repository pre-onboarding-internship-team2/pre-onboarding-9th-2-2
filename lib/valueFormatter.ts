function padLeftZeroIfUnder10(value: number): string {
  if (value < 10) {
    return value.toString().padStart(2, "0");
  }

  return value.toString();
}

function price(priceValue: number): string {
  return priceValue.toLocaleString();
}

function date(dateValue: string | Date): string {
  const dateObject = new Date(dateValue);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();
  const hour = dateObject.getHours();
  const minute = padLeftZeroIfUnder10(dateObject.getMinutes());
  const second = padLeftZeroIfUnder10(dateObject.getSeconds());
  return `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second}`;
}

const formatter = {
  price,
  date,
};

export default formatter;
