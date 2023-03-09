import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useProduct } from "@/components/ProductContext";
import { useState } from "react";
import { SpaceCategories } from "@/services/product";
import { css } from "@emotion/react";
import Image from "next/image";

const PRICE_MAX = 999_999_999;
const PRICE_CONVERT = (percent: number) => {
  return percent * 1000;
};

export default function Filter() {
  const { handleFilter } = useProduct();
  const [locations, setLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addLocation = (location: string) => {
    if (locations.includes(location)) {
      setLocations(locations.filter((e) => e !== location));
    } else {
      setLocations([...locations, location]);
    }
  };

  return (
    <>
      <Flex
        w="100%"
        position="sticky"
        top="41"
        borderBottom="solid 1px #e8e8e8"
        zIndex="10"
        backgroundColor="white"
        justifyContent="flex-end"
        py="1"
      >
        <Flex onClick={onOpen} style={{ cursor: "pointer" }}>
          <Image src="/filter.png" alt="filter" width={24} height={24} />
          <Text ml={1} fontSize="16px" fontWeight="bold">
            필터
          </Text>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>필터</DrawerHeader>

          <DrawerBody>
            <Heading size="sm">가격</Heading>

            <RangeSlider
              aria-label={["min", "max"]}
              onChangeEnd={setPriceRange}
              defaultValue={priceRange}
              step={5}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>0원</Text>
              <Text fontSize={"xs"} align="right">
                {PRICE_CONVERT(100).toLocaleString("ko")}원
                <br />
                이상
              </Text>
            </Flex>
            <Text fontSize={"sm"}>
              최소 : {PRICE_CONVERT(priceRange[0]).toLocaleString("ko")}원
            </Text>
            <Text fontSize={"sm"}>
              최대 : {PRICE_CONVERT(priceRange[1]).toLocaleString("ko")}원
              {priceRange[1] === 100 ? " 이상" : null}
            </Text>
            <Heading size="sm" mt={5}>
              지역
            </Heading>
            {SpaceCategories.map((e) => (
              <Badge
                key={e}
                mr={2}
                variant={locations.includes(e) ? "solid" : "outline"}
                colorScheme={locations.includes(e) ? "blue" : "gray"}
                onClick={() => addLocation(e)}
                css={css`
                  :hover {
                    cursor: pointer;
                  }
                `}
              >
                {e}
              </Badge>
            ))}
            <Flex mt={10} justifyContent="space-between">
              <Button variant="outline" mr={3} onClick={onClose} w={"full"}>
                취소
              </Button>
              <Button
                colorScheme="blue"
                w={"full"}
                onClick={() => {
                  handleFilter({
                    locations,
                    minPrice: PRICE_CONVERT(priceRange[0]),
                    maxPrice: PRICE_CONVERT(priceRange[1]),
                  });
                  onClose();
                }}
              >
                적용하기
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
