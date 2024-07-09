import SearchIcon from './components/SearchIcon';

const SearchBar: React.FC = () => {
  return (
    <div className="cursor-text flex items-center w-[216px] h-[32px] max-w-[216px] bg-[#F5F8FE] rounded-full gap-1 px-4 py-2">
      <SearchIcon />
      <text className="text-[14px] font-light text-[#9BA3AF]">
        Search ( ⌘ + k )
      </text>
    </div>
  );
};

export default SearchBar;
