import { IItemImageIcon } from './types';

const ItemImageIcon: React.FC<IItemImageIcon> = ({ imgUrl }) => {
  return (
    <div className="flex min-w-[48px] h-[48px]  overflow-hidden rounded">
      <img src={imgUrl} alt="icon-enterprise" />
    </div>
  );
};

export default ItemImageIcon;
