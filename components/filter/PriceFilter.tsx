import { useFilterContext } from "@/contexts/Filter.context";
import { useTravelItems } from "@/contexts/TravelItems.context";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function PriceFilter() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { price, changePrice } = useFilterContext();
  const { travelItems } = useTravelItems();

  const travelItemsPrices = travelItems.map((item) => item.price);

  const minPrice = Math.min(...travelItemsPrices);
  const maxPrice = Math.max(...travelItemsPrices);

  const [startPrice, setStartPrice] = useState<number>(minPrice);
  const [endPrice, setEndPrice] = useState<number>(maxPrice);

  useEffect(() => {
    if (!price.start && !price.end) {
      setStartPrice(minPrice);
      setEndPrice(maxPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const changeFilterPrice = () => {
    changePrice({ start: startPrice, end: endPrice });
  };
  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          variant="outline"
          onClick={onToggle}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          가격 설정
        </Button>
      </PopoverTrigger>
      <PopoverContent minW="lg" p={2}>
        <PopoverArrow />
        <PopoverBody>
          <Stack spacing={4}>
            <Box py={4}>
              <RangeSlider
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-label={["min", "max"]}
                min={minPrice}
                max={maxPrice}
                value={[startPrice, endPrice]}
                onChange={([start, end]) => {
                  if (start !== startPrice) setStartPrice(start);
                  if (end !== endPrice) setEndPrice(end);
                }}
              >
                <RangeSliderTrack boxSize={4} bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={8} index={0}>
                  <Box color="tomato" as={ArrowLeftIcon} />
                </RangeSliderThumb>
                <RangeSliderThumb boxSize={8} index={1}>
                  <Box color="tomato" as={ArrowRightIcon} />
                </RangeSliderThumb>
              </RangeSlider>
            </Box>

            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text mb="8px">최저 가격</Text>
                <Input
                  size="sm"
                  value={startPrice}
                  htmlSize={1}
                  width="auto"
                  type="number"
                  onChange={(e) => {
                    const newValue = +e.currentTarget.value;
                    setStartPrice(newValue);
                  }}
                />
                원
              </Box>
              <Box>-</Box>
              <Box>
                <Text mb="8px">최고 가격</Text>
                <Input
                  size="sm"
                  value={endPrice}
                  htmlSize={1}
                  width="auto"
                  type="number"
                  onChange={(e) => {
                    const newValue = +e.currentTarget.value;
                    setEndPrice(newValue);
                  }}
                />
                원
              </Box>
            </Flex>
            <Box textAlign="right">
              <Button onClick={changeFilterPrice}>적용하기</Button>
            </Box>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PriceFilter;
