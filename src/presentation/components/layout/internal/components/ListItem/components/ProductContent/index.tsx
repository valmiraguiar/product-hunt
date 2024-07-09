import ItemImageIcon from '../ItemImageIcon';
import TagLayout from '../ItemTitleDescription/components/TagLayout';
import ProductTitle from '../ProductTitle';
import { IProductContentProps } from './types';

const ProductContent: React.FC<IProductContentProps> = ({
  title,
  description,
  imgUrl,
  tagsList,
}) => {
  return (
    <div className="flex flex-row items-center w-full h-full gap-4">
      <ItemImageIcon imgUrl={imgUrl} />

      <div className="w-full flex-row place-items-start">
        <ProductTitle title={title} description={description} />

        <TagLayout tagList={tagsList} />
      </div>
    </div>
  );
};

export default ProductContent;
