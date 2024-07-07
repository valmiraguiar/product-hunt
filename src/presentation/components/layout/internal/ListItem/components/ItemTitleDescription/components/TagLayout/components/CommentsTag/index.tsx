import ChatIcon from './components/ChatIcon';

const CommentsTag: React.FC = () => {
  return (
    <div className="group w-[24px] h-full flex gap-[2px] font-semibold mr-1 text-[#4B587C]">
      <div className="flex">
        <ChatIcon />
      </div>
      <p className="text-[10px] pt-[1px] group-hover:text-[#F54212]">77</p>
    </div>
  );
};

export default CommentsTag;
