import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  SliderMark,
  useRangeSlider,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hook/redux.hook';
import { maxPrice, priceStep, priceSteps } from '../../redux/redux.interface';
import { price } from '../../redux/slice/productslice';

const PriceFilter = () => {
  const priceFilter = useAppSelector((state) => state.product.priceFilter);

  const dispatch = useAppDispatch();
  const sliderChange = (priceRange: number[]) => {
    dispatch(price(priceRange));
  };

  return (
    <RangeSlider
      w={'200px'}
      aria-label={['min', 'max']}
      colorScheme="pink"
      defaultValue={[priceFilter.min, priceFilter.max]}
      min={0}
      max={maxPrice}
      step={priceStep}
      minStepsBetweenThumbs={10}
      onChangeEnd={(e) => sliderChange(e)}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0}></RangeSliderThumb>
      <RangeSliderThumb index={1}></RangeSliderThumb>
    </RangeSlider>
  );
};
export default PriceFilter;
