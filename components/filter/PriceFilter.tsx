import { usePriceFilter } from "@/hooks/usePriceFilter";
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
  InputProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderProps,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function PriceFilter() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const {
    startPrice,
    onStartPriceInputChange,
    endPrice,
    onEndPriceInputChange,
    minPrice,
    maxPrice,
    rangeSliderValue,
    onRangeSliderChange,
    saveChangedFilterPrice,
  } = usePriceFilter();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          variant="outline"
          onClick={onToggle}
          colorScheme="blue"
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          가격 설정
        </Button>
      </PopoverTrigger>
      <PopoverContent minW="lg" p={2}>
        <PopoverArrow />
        <PopoverBody display="flex" flexDirection="column" gap={8} py={8}>
          <PriceRangeSlider
            min={minPrice}
            max={maxPrice}
            value={rangeSliderValue}
            onChange={onRangeSliderChange}
          />

          <Flex justifyContent="space-between" alignItems="center">
            <PriceFilterInput
              label="최저 가격"
              value={startPrice}
              onChange={onStartPriceInputChange}
            />
            <Box>-</Box>
            <PriceFilterInput
              label="최고 가격"
              value={endPrice}
              onChange={onEndPriceInputChange}
            />
          </Flex>
          <Box textAlign="right">
            <Button onClick={saveChangedFilterPrice} colorScheme="blue">
              적용하기
            </Button>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PriceFilter;

function PriceRangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  return (
    <RangeSlider
      // eslint-disable-next-line jsx-a11y/aria-proptypes
      aria-label={["min", "max"]}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
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
  );
}

function PriceFilterInput({
  label,
  value,
  onChange,
}: { label: string } & InputProps) {
  return (
    <Box>
      <Text mb="8px">{label}</Text>
      <Input
        size="sm"
        value={value}
        htmlSize={1}
        width="auto"
        type="number"
        onChange={onChange}
      />
      원
    </Box>
  );
}
