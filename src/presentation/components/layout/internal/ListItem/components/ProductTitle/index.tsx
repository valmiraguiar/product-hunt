import RedirectIcon from '../ItemTitleDescription/components/TitleLayout/components/RedirectIcon';
import { IProductTitleProps } from './types';

const ProductTitle: React.FC<IProductTitleProps> = ({ title, description }) => {
  return (
    <div className="inline relative pe-5 font-light">
      <span className="font-medium">{title}</span>{' '}
      <span className="text-[#90949D]">—</span> {description}
      <RedirectIcon />
    </div>
  );
};

export default ProductTitle;
