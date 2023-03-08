import { useState } from "react";
import { ProductType } from "@/types/product-type";
import ProductItem from "./product-item";
import classes from "./products-list.module.css";
import Modal from "../modal/modal";
import Image from "next/image";

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [matchedProduct, setMatchedProduct] = useState({} as ProductType);

  let specificProduct: any;

  const showModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalShown(true);
    specificProduct = products?.find(
      (product) => product.idx === Number((e.target as HTMLElement).id),
    );
    setMatchedProduct(specificProduct);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
    setMatchedProduct({} as ProductType);
  };

  return (
    <section className={classes.products__wrapper}>
      {isModalShown && (
        <Modal closeModal={closeModalHandler}>
          <Image
            src={matchedProduct.mainImage}
            alt={matchedProduct.description}
            width={200}
            height={200}
          />
          <span>아이디 : {matchedProduct.idx}</span>
          <span>이름 : {matchedProduct.name}</span>
          <p>내용 : {matchedProduct.description}</p>
          <span>위치 : {matchedProduct.spaceCategory}</span>
          <span>비용 : {matchedProduct.price}</span>
          <span>수수료 : {matchedProduct.maximumPurchases}</span>
          <span>등록일 : {matchedProduct.registrationDate}</span>
        </Modal>
      )}
      <ul className={classes.products__container}>
        {products?.map((product) => (
          <ProductItem
            key={product.idx}
            product={product}
            showModal={showModalHandler}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
