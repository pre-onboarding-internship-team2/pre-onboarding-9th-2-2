import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import { ProductType } from "@/types/product.type";
import ShareSelect from "@/components/common/share-select";
import ProductsList from "@/components/products/products-list";
import { categoryOptions, priceOptions } from "@/helpers/options";
import ShareCheckbox from "@/components/common/share-checkbox";

interface MainPageProps {
  products: ProductType[];
}

const MainPage: NextPage<MainPageProps> = ({ products }) => {
  const [priceOption, setPriceOption] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [locations, setLocations] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const processedProducts = () => {
    if (!priceOption && (locations.length === 0 || locations.length === 5)) {
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

        const locationCondition =
          locations.length === 0 || locations.includes(cur.spaceCategory);

        if (priceCondition && locationCondition) {
          acc.push(cur);
        }

        return acc;
      }, []);
      setFilteredProducts(filteredData);
    }
  };

  useEffect(() => {
    processedProducts();
  }, [priceOption, locations]);

  return (
    <>
      <Flex>
        {categoryOptions.map((category) => (
          <ShareCheckbox
            key={category}
            data={category}
            value={isChecked}
            setValue={setIsChecked}
            locations={locations}
            setLocations={setLocations}
          />
        ))}
      </Flex>
      <ShareSelect
        value={priceOption}
        setValue={setPriceOption}
        options={priceOptions}
        placeholder="가격"
      />
      {filteredProducts.length === 0 ? (
        <Heading pt="50px" as="h2" size="xl" textAlign="center">
          상품이 없습니다
        </Heading>
      ) : (
        <ProductsList products={filteredProducts} />
      )}
    </>
  );
};

export default MainPage;

export const getStaticProps = async () => {
  try {
    const url = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230309T161548Z&X-Amz-Expires=86400&X-Amz-Signature=eadd098753b73b4006ef3b4735f976e0d155e23fc4b2eafcb9e6fa92af67529a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject`;
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
