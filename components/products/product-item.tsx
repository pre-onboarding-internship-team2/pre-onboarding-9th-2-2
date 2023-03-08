import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/product-type";
import classes from "./product-item.module.css";

interface ProductItemProps {
  product: ProductType;
  showModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductItem = ({ product, showModal }: ProductItemProps) => {
  const addToCart = async () => {
    await fetch(`/api/reservations`, {
      method: "POST",
      body: JSON.stringify(product),
    });
  };

  return (
    <li className={classes.product__item}>
      <Image
        src={product.mainImage}
        alt={product.description as string}
        width={300}
        height={300}
      />
      <h3>{product.name}</h3>
      <span>{product.idx}</span>
      <span>{product.price}</span>
      <span>{product.spaceCategory}</span>
      <button type="button" id={String(product.idx)} onClick={showModal}>
        더보기
      </button>
      <button onClick={addToCart}>예약</button>
    </li>
  );
};

export default React.memo(ProductItem);
