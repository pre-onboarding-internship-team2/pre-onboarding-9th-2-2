import { useFilterContext } from "@/contexts/Filter.context";
import { useTravelItems } from "@/contexts/TravelItems.context";
import { useState, useEffect, ChangeEventHandler } from "react";

function usePriceRangeMinMax() {
  const { travelItems } = useTravelItems();

  const travelItemsPrices = travelItems.map((item) => item.price);

  const minPrice = Math.min(...travelItemsPrices);
  const maxPrice = Math.max(...travelItemsPrices);

  return {
    minPrice,
    maxPrice,
  };
}

export function usePriceFilter() {
  const { price, changePrice } = useFilterContext();
  const { minPrice, maxPrice } = usePriceRangeMinMax();

  const [startPrice, setStartPrice] = useState<number>(minPrice);
  const [endPrice, setEndPrice] = useState<number>(maxPrice);

  const onStartPriceInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = +e.currentTarget.value;
    setStartPrice(newValue);
  };

  const onEndPriceInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = +e.currentTarget.value;
    setEndPrice(newValue);
  };

  const rangeSliderValue = [startPrice, endPrice];
  const onRangeSliderChange = ([start, end]: number[]) => {
    if (start !== startPrice) setStartPrice(start);
    if (end !== endPrice) setEndPrice(end);
  };

  // 필터 reset 시 price.start, price.end가 null로 만듦
  // 두 값이 null 인 경우 각각 min, max price로 초기화시킴
  useEffect(() => {
    if (!price.start && !price.end) {
      setStartPrice(minPrice);
      setEndPrice(maxPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const saveChangedFilterPrice = () => {
    changePrice({ start: startPrice, end: endPrice });
  };

  return {
    startPrice,
    onStartPriceInputChange,
    endPrice,
    onEndPriceInputChange,
    minPrice,
    maxPrice,
    rangeSliderValue,
    onRangeSliderChange,
    saveChangedFilterPrice,
  };
}
