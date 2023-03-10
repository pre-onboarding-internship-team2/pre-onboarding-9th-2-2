import React, { useEffect, useState } from "react";
import { ItemType } from "../types/Item.type";
import { Box, Grid } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { fetchItems } from "../store/item/itemSlice";
import Item from "../components/item/Item";
import SpaceCategorySearch from "../components/search/SpaceCategorySearch";
import PriceRangeSearch from "../components/search/PriceRangeSearch";
import filterFunc from "../utils/filterFunc";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const item_list = useAppSelector((state) => state.item.items);

  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<number[]>([0, 120]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const filterdArray = filterFunc({ categoryFilter, priceFilter, item_list });

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
        {filterdArray.map((item: ItemType) => (
          <Item key={item.idx} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default MainPage;
