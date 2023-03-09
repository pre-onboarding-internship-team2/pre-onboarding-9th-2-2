import React from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from "@chakra-ui/react";
import { PriceRange_ } from "../../types/priceRange.type";

type Props = {
  priceFilter: number[];
  setPriceFilter: (range: number[]) => void;
};

const PriceRangeSearch = ({ setPriceFilter }: Props) => {
  return (
    <div>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 120]}
        min={0}
        max={120}
        step={20}
        onChange={(e) => {
          setPriceFilter(e);
        }}
      >
        {PriceRange_.map((rangeValue, idx) => {
          return (
            <RangeSliderMark
              value={rangeValue.range}
              mt="1"
              ml="-2.5"
              fontSize="sm"
              key={idx}
            >
              {rangeValue.price}
            </RangeSliderMark>
          );
        })}
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </div>
  );
};

export default PriceRangeSearch;
