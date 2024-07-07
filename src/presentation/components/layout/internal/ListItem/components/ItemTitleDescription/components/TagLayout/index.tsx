import CommentsTag from './components/CommentsTag';
import SeparatorCircleIcon from './components/SeparatorCircleIcon';
import Tag from './components/Tag';
import { ITagLayoutProps } from './types';

const TagLayout: React.FC<ITagLayoutProps> = ({ tagList }) => {
  return (
    <div className="w-full flex items-center text-[12px] font-light text-[#4D5A7E] gap-2">
      <CommentsTag />

      {tagList?.map(tag => (
        <>
          <SeparatorCircleIcon />
          <Tag text={tag} />
        </>
      ))}
    </div>
  );
};

export default TagLayout;
