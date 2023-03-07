import React from "react";
import { ItemType } from "../api/Item.type";

const Item = ({ item }: { item: ItemType }) => {
  return (
    <div>
      <p>{item.idx}</p>
      <p>{item.name}</p>
      <img
        src={item.mainImage}
        alt={item.name}
        style={{ width: 200, height: 200 }}
      />
      <p>{item.price}</p>
      <p>{item.spaceCategory}</p>
    </div>
  );
};

export default Item;
