import { ProductType } from "@/types/product-type";
import Image from "next/image";
import classes from "./product-item.module.css";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className={classes.product__item}>
      <Image
        src={product.mainImage}
        alt={product.description}
        width={300}
        height={300}
      />
      <h3>{product.name}</h3>
      <span>{product.idx}</span>
      <span>{product.price}</span>
      <span>{product.spaceCategory}</span>
      <button type="button" id={String(product.idx)}>
        더보기
      </button>
      <button>예약</button>
    </li>
  );
};

export default ProductItem;
