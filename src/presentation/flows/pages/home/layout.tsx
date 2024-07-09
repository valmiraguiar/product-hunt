import ListItem from '@/presentation/components/layout/internal/components/ListItem';

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
          key={`key-${product.name}`}
          title={product.name}
          description={product.description}
          imgUrl={product.imgUrl}
          tagsList={product.topics}
        />
      ))}
    </div>
  );
};

export default HomeLayout;
