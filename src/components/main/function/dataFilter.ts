import { dataState } from "../../../redux/types";
import { condition } from "../types/types";

const dataFilter = (data: dataState[], condition: condition) => {
  if (condition.categoryCondition.length === 0) {
    const filteredData = data.filter(
      (product: dataState) =>
        product.price >= condition.priceCondition[0] &&
        product.price <= condition.priceCondition[1]
    );
    return filteredData;
  } else {
    const filteredData = data.filter(
      (product: dataState) =>
        product.price >= condition.priceCondition[0] &&
        product.price <= condition.priceCondition[1] &&
        condition.categoryCondition.includes(product.spaceCategory)
    );
    return filteredData;
  }
};

export default dataFilter;
