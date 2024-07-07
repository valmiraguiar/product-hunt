import CommentsTag from './components/CommentsTag';
import SeparatorCircleIcon from './components/SeparatorCircleIcon';
import Tag from './components/Tag';

const TagLayout: React.FC = () => {
  return (
    <div className="w-full flex items-center text-[12px] font-light text-[#4D5A7E] gap-2">
      <CommentsTag />

      <SeparatorCircleIcon />
      <Tag text="User Experience" />
      <SeparatorCircleIcon />
      <Tag text="Marketing" />
    </div>
  );
};

export default TagLayout;
