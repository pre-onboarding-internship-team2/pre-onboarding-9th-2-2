import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import axios from "axios";
import Item from "../components/Item";
import { ItemType } from "../types/Item.type";
import { Grid } from "@chakra-ui/react";

const MainPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const getItem = () => {
    axios({
      method: "get",
      url: import.meta.env.VITE_APP_API,
      responseType: "json",
    }).then((response) => {
      setItems(response.data);
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <PageLayout>
      <h2>MainPage</h2>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {items?.map((item) => (
          <Item key={item.idx} item={item} />
        ))}
      </Grid>
    </PageLayout>
  );
};

export default MainPage;
