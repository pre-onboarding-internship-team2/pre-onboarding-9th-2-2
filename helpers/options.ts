export interface OptionsType {
  value: string;
  text: string;
}

export const priceOptions = [
  {
    value: "10000이하",
    text: "~ 10000",
  },
  {
    value: "10000-20000",
    text: "10000 - 20000",
  },
  {
    value: "20000-30000",
    text: "20000 - 30000",
  },
];
export const categoryOptions = [
  "서울",
  "강원",
  "부산",
  "대구",
  "제주",
] as const;
