import CommentsTagLayout from './components/TagLayout/components/CommentsTag';
import TitleLayout from './components/TitleLayout';
import { IItemTitleDescription } from './types';

const ItemTitleDescription: React.FC<IItemTitleDescription> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full flex-row place-items-start">
      <TitleLayout title={title} description={description} />
      <CommentsTagLayout />
    </div>
  );
};

export default ItemTitleDescription;
