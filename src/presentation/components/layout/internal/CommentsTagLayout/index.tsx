import ChatIcon from '../ChatIcon';
import SeparatorCircleIcon from '../SeparatorCircleIcon';

const CommentsTagLayout: React.FC = () => {
  return (
    <div className="w-full flex items-center text-[12px] font-light text-[#4D5A7E] gap-2">
      <div className="group w-[24px] h-full flex gap-[2px] font-semibold mr-1">
        <div className="flex">
          <ChatIcon />
        </div>
        <p className="text-[10px] pt-[1px] group-hover:text-[#F54212]">77</p>
      </div>

      <SeparatorCircleIcon />
      <p className="hover:underline">User Experience</p>
      <SeparatorCircleIcon />
      <p className="hover:underline">Marketing</p>
    </div>
  );
};

export default CommentsTagLayout;
