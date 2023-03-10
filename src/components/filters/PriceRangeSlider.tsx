import {
  Badge,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
// import { price } from '../../redux/slice/productslice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IPrice, maxPrice, priceStep, priceSteps } from '../../redux/redux.interface';
import { setPrice } from '../../redux/slice/productslice';

function PriceRangeSlider() {
  const [priceFilter, setPriceFilter] = useState<IPrice>({ min: 0, max: maxPrice });

  const sliderChange = (priceRange: number[]) => {
    setPriceFilter({
      min: priceRange[0],
      max: priceRange[1],
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPrice(priceFilter));
  }, [priceFilter]);

  return (
    <>
      <RangeSlider
        w="full"
        aria-label={['min', 'max']}
        colorScheme="facebook" // 색상 바꾸기
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
      <Flex justifyContent={'space-between'}>
        {priceSteps.map((step, index) => {
          return (
            <Badge key={index} mt="5px" fontSize="sm" color="black">
              ₩{step}
            </Badge>
          );
        })}
      </Flex>
    </>
  );
}

export default PriceRangeSlider;
