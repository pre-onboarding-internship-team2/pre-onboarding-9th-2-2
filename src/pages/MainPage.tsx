import React, { useEffect, useState } from "react";
import { ItemType } from "../types/Item.type";
import { Box, Grid } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { fetchItems } from "../store/item/itemSlice";
import Item from "../components/item/Item";

import SpaceCategorySearch from "../components/search/SpaceCategorySearch";
import PriceRangeSearch from "../components/search/PriceRangeSearch";
import { PriceRange } from "../types/priceRange.type";

const MainPage = () => {
  const item_list = useAppSelector((state) => state.item.items);
  const dispatch = useAppDispatch();

  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 120]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <>
      <Box width="50%" py="20px">
        <SpaceCategorySearch
          item_list={item_list}
          setCategoryFilter={setCategoryFilter}
        />
        <PriceRangeSearch
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={10} py="50px">
        {categoryFilter === "All"
          ? item_list
              ?.filter((item: ItemType) => {
                return (
                  item.price >=
                    Object.values(PriceRange)[
                      Object.keys(PriceRange).indexOf(priceFilter[0].toString())
                    ] &&
                  item.price <=
                    Object.values(PriceRange)[
                      Object.keys(PriceRange).indexOf(priceFilter[1].toString())
                    ]
                );
              })
              ?.map((item: ItemType) => <Item key={item.idx} item={item} />)
          : item_list
              ?.filter((item: ItemType) =>
                item.spaceCategory.includes(categoryFilter)
              )
              ?.filter((item: ItemType) => {
                return (
                  item.price >=
                    Object.values(PriceRange)[
                      Object.keys(PriceRange).indexOf(priceFilter[0].toString())
                    ] &&
                  item.price <=
                    Object.values(PriceRange)[
                      Object.keys(PriceRange).indexOf(priceFilter[1].toString())
                    ]
                );
              })
              .map((item: ItemType) => <Item key={item.idx} item={item} />)}
      </Grid>
    </>
  );
};

export default MainPage;
