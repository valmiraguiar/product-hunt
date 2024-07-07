'use client';

import useProductList from '@/presentation/services/client/home/productsList';
import { useEffect } from 'react';

import HomeLayout from './layout';

const Home: React.FC = () => {
  const { listLoadingState, productListDataState, getProductList } =
    useProductList();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <HomeLayout
      listLoadingState={listLoadingState}
      productListDataState={productListDataState}
    />
  );
};

export default Home;
