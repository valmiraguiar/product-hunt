import ListItem from '@/presentation/components/layout/internal/ListItem';

import { IHomeLayoutProps } from './types';

const HomeLayout: React.FC<IHomeLayoutProps> = ({
  listLoadingState,
  productListDataState,
}) => {
  console.log('PRODUCT LIST ', productListDataState);

  return (
    <div className="h-screen w-screen bg-white p-4">
      {productListDataState?.map(product => (
        <ListItem
          title={product.name}
          description={product.description}
          imgUrl={product.imgUrl}
        />
      ))}
    </div>
  );
};

export default HomeLayout;
