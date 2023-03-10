import {
  Badge,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hook/redux.hook';
import { maxPrice, priceStep, priceSteps } from '../../redux/redux.interface';
import { price } from '../../redux/slice/productslice';

function PriceRangeSlider() {
  const priceFilter = useAppSelector((state) => state.product.priceFilter);

  const dispatch = useAppDispatch();
  const sliderChange = (priceRange: number[]) => {
    dispatch(price(priceRange));
  };
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
