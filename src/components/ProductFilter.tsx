import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useProduct } from "@/components/ProductContext";
import { useState } from "react";
import { SpaceCategories } from "@/services/product";
import { css } from "@emotion/react";
import Image from "next/image";

const PRICE_MAX = 100_000;

export default function Filter() {
  const { handleFilter } = useProduct();
  const [locations, setLocations] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
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

          <DrawerBody
            css={css`
              & > h2 {
                margin-bottom: 8px;
                margin-top: 24px;
              }
            `}
          >
            <Heading size="sm">가격</Heading>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"xs"}>0원</Text>
              <Text fontSize={"xs"} align="right">
                {PRICE_MAX.toLocaleString("ko")}원
              </Text>
            </Flex>
            <RangeSlider
              aria-label={["min", "max"]}
              onChangeEnd={([min, max]) => {
                setMinPrice(min), setMaxPrice(max);
              }}
              defaultValue={[minPrice, maxPrice]}
              step={5000}
              max={100_000}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Flex justifyContent="space-between">
              <Input
                width="80px"
                size="xs"
                placeholder={minPrice.toString()}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
              <Text> ~ </Text>
              <Input
                width="80px"
                size="xs"
                placeholder={maxPrice.toString()}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </Flex>
            <Heading size="sm">지역</Heading>
            {SpaceCategories.map((e) => (
              <Badge
                key={e}
                mr={2}
                variant={locations.includes(e) ? "solid" : "outline"}
                colorScheme={locations.includes(e) ? "blue" : "gray"}
                onClick={() => addLocation(e)}
                _hover={{ cursor: "pointer" }}
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
                    minPrice,
                    maxPrice,
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
