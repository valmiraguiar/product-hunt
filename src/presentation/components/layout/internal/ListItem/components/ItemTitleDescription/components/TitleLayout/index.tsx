import RedirectIcon from './components/RedirectIcon';
import { ITitleLayoutProps } from './types';

const TitleLayout: React.FC<ITitleLayoutProps> = ({ title, description }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="font-light">
        <span className="font-medium">{title}</span>{' '}
        <span className="text-[#90949D]">—</span> {description}
      </p>

      <RedirectIcon />
    </div>
  );
};

export default TitleLayout;
