import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import axios from "axios";
import Item from "../components/Item";
import { ItemType } from "../api/Item.type";

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
      {items?.map((item) => (
        <Item key={item.idx} item={item} />
      ))}
    </PageLayout>
  );
};

export default MainPage;
