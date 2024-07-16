import RedirectIcon from '../ItemTitleDescription/components/TitleLayout/components/RedirectIcon';
import { IProductTitleProps } from './types';

const ProductTitle: React.FC<IProductTitleProps> = ({
  title,
  description,
  onRedirectClick,
}) => {
  const handleOnRedirectClick = (
    e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => {
    e?.stopPropagation();
    onRedirectClick?.();
  };

  return (
    <div role="presentation" className="inline relative pe-5 font-light">
      <span className="font-medium">{title}</span>{' '}
      <span className="text-[#90949D]">—</span> {description}
      <div
        role="presentation"
        onClick={handleOnRedirectClick}
        className="inline relative pe-5 font-light"
      >
        <RedirectIcon />
      </div>
    </div>
  );
};

export default ProductTitle;
