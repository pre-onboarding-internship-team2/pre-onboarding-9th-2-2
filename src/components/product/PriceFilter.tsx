import React, {useState} from 'react';
import {
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Stack,
  Tooltip,
} from '@chakra-ui/react';

interface IProps {
  selectPrice: number[],
  handleSelectPrice: (value: number[]) => void;
}

export default function PriceFilter({ selectPrice, handleSelectPrice }: IProps) {

  return (
    <Flex w="100%" justifyContent="center" alignItems="center" mb="3">
      <Text fontSize="lg" fontWeight="bold" minW="16">
        가격
      </Text>
      <Stack minW="360px">
        <RangeSlider
          aria-label={['min', 'max']}
          onChangeEnd={(val) => handleSelectPrice(val)}
          defaultValue={selectPrice}
          min={0}
          max={100000}
          step={10000}
        >
          <RangeSliderTrack bg="green.200">
            <RangeSliderFilledTrack bg="teal" />
          </RangeSliderTrack>
          <Tooltip
            hasArrow
            bg="white"
            color="gray.800"
            placement="top"
            border="1px"
            borderColor="gray.100"
            borderRadius="full"
            label={`${selectPrice[0]}원`}
          >
            <RangeSliderThumb boxSize={4} index={0} border="1px" borderColor="green.500" />
          </Tooltip>
          <Tooltip
            hasArrow
            bg="white"
            color="gray.800"
            placement="top"
            border="1px"
            borderColor="gray.100"
            borderRadius="full"
            label={`${selectPrice[1]}원`}
          >
            <RangeSliderThumb boxSize={4} index={1} border="1px" borderColor="green.500" />
          </Tooltip>
        </RangeSlider>
        <Flex justifyContent="space-between">
          <Text fontSize="sm">{selectPrice[0]}원</Text>
          <Text fontSize="sm">{selectPrice[1]}원</Text>
        </Flex>
      </Stack>
    </Flex>
  );
};
