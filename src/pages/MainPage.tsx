import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Item from "../components/Item";
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
      <h2>MainPage</h2>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {item_list.map((item: ItemType) => (
          <Item key={item.idx} item={item} />
        ))}
      </Grid>
    </PageLayout>
  );
};

export default MainPage;
