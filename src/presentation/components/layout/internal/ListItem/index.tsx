import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  return (
    <div className="w-[678px] h-[72px] text-[16px] font-light rounded-lg  hover:duration-700 bg-gradient-to-bl from-[#FEEFE8]   to-transparent to-70%">
      <span className="font-medium">{title}</span> — {description}
    </div>
  );
};

export default ListItem;
