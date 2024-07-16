import ListItem from '@/presentation/components/layout/internal/components/ListItem';

import { IHomeLayoutProps } from './types';

const HomeLayout: React.FC<IHomeLayoutProps> = ({
  listLoadingState,
  productListDataState,
}) => {
  console.log('PRODUCT LIST ', productListDataState);

  const handleUpVote = () => {
    console.log('ON UPVOTE CLICK');
  };

  const handleRedirectClick = () => {
    console.log('ON REDIRECT CLICK');
  };

  const handleOnItemClick = () => {
    console.log('ON ITEM CLICK');
  };

  return (
    <div className="h-screen w-screen bg-white p-4">
      {productListDataState?.map(product => (
        <ListItem
          key={`key-${product.name}`}
          title={product.name}
          description={product.description}
          imgUrl={product.imgUrl}
          tagsList={product.topics}
          onUpVote={handleUpVote}
          onRedirectClick={handleRedirectClick}
          onItemClick={handleOnItemClick}
        />
      ))}
    </div>
  );
};

export default HomeLayout;
