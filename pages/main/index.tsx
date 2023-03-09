import ShareSelect from "@/components/common/share-select";
import ProductsList from "@/components/products/products-list";
import { categoryOptions, priceOptions } from "@/helpers/options";
import { ProductType } from "@/types/product-type";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface MainPageProps {
  products: ProductType[];
}

const MainPage: NextPage<MainPageProps> = ({ products }) => {
  const [priceOption, setPriceOption] = useState("");
  const [categoryOption, setCategoryOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const processedProducts = () => {
    if (!priceOption && !categoryOption) {
      setFilteredProducts(products);
    } else {
      const filteredData = products.reduce<ProductType[]>((acc, cur) => {
        const priceCondition =
          priceOption && priceOption === "10000이하"
            ? cur.price <= 10000
            : priceOption === "10000-20000"
            ? cur.price > 10000 && cur.price <= 20000
            : priceOption === "20000-30000"
            ? cur.price > 20000 && cur.price <= 30000
            : true;

        const categoryCondition = categoryOption
          ? cur.spaceCategory === categoryOption
          : true;

        if (priceCondition && categoryCondition) {
          acc.push(cur);
        }

        return acc;
      }, []);
      setFilteredProducts(filteredData);
    }
  };

  useEffect(() => {
    processedProducts();
  }, [priceOption, categoryOption]);

  return (
    <>
      <ShareSelect
        value={priceOption}
        setValue={setPriceOption}
        options={priceOptions}
        placeholder="가격"
      />
      <ShareSelect
        value={categoryOption}
        setValue={setCategoryOption}
        options={categoryOptions}
        placeholder="카테고리"
      />
      <ProductsList products={filteredProducts} />
    </>
  );
};

export default MainPage;

export const getStaticProps = async () => {
  try {
    const url = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T125114Z&X-Amz-Expires=86400&X-Amz-Signature=f7ebfc3e691d25d4bf2958841e43aaf822c24232d396376cae4338955b480c35&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error Fetching Data!`);
    }
    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
