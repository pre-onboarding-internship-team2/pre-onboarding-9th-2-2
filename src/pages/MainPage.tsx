import React, { useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import Item from "../components/item/Item";
import { ItemType } from "../types/Item.type";
import { Grid } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { fetchItems } from "../store/item/itemSlice";

const MainPage = () => {
  const item_list = useAppSelector((state: any) => state.item.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <PageLayout>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} py="50px">
        {item_list.map((item: ItemType) => (
          <Item key={item.idx} item={item} />
        ))}
      </Grid>
    </PageLayout>
  );
};

export default MainPage;
