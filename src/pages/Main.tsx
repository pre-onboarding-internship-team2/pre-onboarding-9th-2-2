import React from 'react';
import { ProductProvider } from 'context/ProductContext';
import ProductList from 'components/product/ProductList';

export default function Main() {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
}
