import { ProductType } from "@/types/product-type";
import ProductItem from "./product-item";
import classes from "./products-list.module.css";

interface ProductsListProps {
  products: ProductType[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section className={classes.products__wrapper}>
      <ul className={classes.products__container}>
        {products?.map((product) => (
          <ProductItem key={product.idx} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
