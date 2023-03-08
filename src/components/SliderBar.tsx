import { useEffect, useState } from "react";
import fetchData from "../redux/function/fetchData";
import { useAppDispatch, useAppSelector } from "../redux/hook/redux.hook";
import { dataState, RootState } from "../redux/types";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderMark,
  Button,
  Flex,
} from "@chakra-ui/react";

interface condition {
  priceCondition: number[];
  categoryCondition: string[];
}

const SilderBar = () => {
  const thunkDispatch = useAppDispatch();
  const [filterCondition, setFilterCondition] = useState<condition>({
    priceCondition: [0, 30000],
    categoryCondition: [],
  });

  const { data, isLoading, error } = useAppSelector((state: RootState) => {
    return state.data;
  });

  const spaceCategoryArray = data.reduce(
    (acc: string[], cur: dataState) =>
      acc.includes(cur.spaceCategory) ? acc : [...acc, cur.spaceCategory],
    []
  );

  useEffect(() => {
    thunkDispatch(fetchData());
    console.log(filterCondition);
  }, [thunkDispatch, filterCondition]);

  return (
    <>
      <Box>
        {spaceCategoryArray.map((str: string) => (
          <Button
            key={spaceCategoryArray.indexOf(str) + 1}
            bg={
              filterCondition.categoryCondition.includes(str)
                ? "whatsapp.100"
                : "gray.50"
            }
            onClick={() =>
              !filterCondition.categoryCondition.includes(str)
                ? setFilterCondition((prevState) => ({
                    ...prevState,
                    categoryCondition: [
                      ...filterCondition.categoryCondition,
                      str,
                    ],
                  }))
                : setFilterCondition((prevState) => ({
                    ...prevState,
                    categoryCondition: filterCondition.categoryCondition.filter(
                      (item) => item !== str
                    ),
                  }))
            }
          >
            {str}
          </Button>
        ))}
      </Box>
      <Box w="75%" p={4}>
        <RangeSlider
          defaultValue={[0, 30000]}
          min={0}
          max={30000}
          step={5000}
          onChange={(values: number[]) =>
            setFilterCondition((prevState) => ({
              ...prevState,
              priceCondition: values,
            }))
          }
        >
          <RangeSliderMark value={0} mt="1.5" fontSize="xs">
            ₩0
          </RangeSliderMark>
          <RangeSliderMark value={5000} mt="1.5" fontSize="xs">
            ₩5000
          </RangeSliderMark>
          <RangeSliderMark value={10000} mt="1.5" fontSize="xs">
            ₩10000
          </RangeSliderMark>
          <RangeSliderMark value={15000} mt="1.5" fontSize="xs">
            ₩15000
          </RangeSliderMark>
          <RangeSliderMark value={20000} mt="1.5" fontSize="xs">
            ₩20000
          </RangeSliderMark>
          <RangeSliderMark value={25000} mt="1.5" fontSize="xs">
            ₩25000
          </RangeSliderMark>
          <RangeSliderMark value={30000} mt="1.5" fontSize="xs">
            ₩30000
          </RangeSliderMark>
          <RangeSliderTrack bg="green.100">
            <RangeSliderFilledTrack bg="whatsapp.500" />
          </RangeSliderTrack>
          <RangeSliderThumb
            boxSize={6}
            index={0}
            onChange={(value: any) =>
              setFilterCondition((preveState) => ({
                ...preveState,
                priceCondition: [value, filterCondition.priceCondition[1]],
              }))
            }
          />
          <RangeSliderThumb
            boxSize={6}
            index={1}
            onChange={(value: any) =>
              setFilterCondition((preveState) => ({
                ...preveState,
                priceCondition: [filterCondition.priceCondition[0], value],
              }))
            }
          />
        </RangeSlider>
      </Box>
    </>
  );
};

export default SilderBar;
