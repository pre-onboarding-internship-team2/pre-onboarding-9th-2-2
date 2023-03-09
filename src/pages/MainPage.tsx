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

  const startPoint = PriceRange.find(
    (val) => val.range === priceFilter[0]
  )?.price;
  const endPoint = PriceRange.find(
    (val) => val.range === priceFilter[1]
  )?.price;

  return (
    <>
      <Box width="100%" pl="20px">
        <Box width="50%" py="20px">
          <Box width="40%">
            <SpaceCategorySearch
              item_list={item_list}
              setCategoryFilter={setCategoryFilter}
            />
          </Box>
          <Box>
            <PriceRangeSearch
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
          </Box>
        </Box>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} py="50px">
        {categoryFilter === "All"
          ? item_list
              ?.filter((item: ItemType) => {
                return (
                  item.price >= (startPoint ? startPoint : 0) &&
                  item.price <= (endPoint ? endPoint : 0)
                );
              })
              ?.map((item: ItemType) => <Item key={item.idx} item={item} />)
          : item_list
              ?.filter((item: ItemType) =>
                item.spaceCategory.includes(categoryFilter)
              )
              ?.filter((item: ItemType) => {
                return (
                  item.price >= (startPoint ? startPoint : 0) &&
                  item.price <= (endPoint ? endPoint : 0)
                );
              })
              .map((item: ItemType) => <Item key={item.idx} item={item} />)}
      </Grid>
    </>
  );
};

export default MainPage;
