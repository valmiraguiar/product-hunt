import ProductContent from './components/ProductContent';
import VoteButton from './components/VoteButton';
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  imgUrl,
  tagsList,
  onUpVote,
  onRedirectClick,
  onItemClick,
}) => {
  return (
    <div
      className="transition-all duration-700 relative"
      role="presentation"
      onClick={onItemClick}
    >
      <div
        className="
          w-[840px]
          h-[72px]
          text-[16px]
          flex relative cursor-pointer"
      >
        <div
          className="w-[400px] h-full ml-[64px] text-[#21293B] absolute right-0  cursor-pointer rounded-r-xl transition-all duration-700 bg-gradient-to-bl from-[#FDEFE8] from-30%
          to-transparent to-60% bg-size-200  bg-pos-0 hover:bg-pos-100"
        />
        <div className="w-full h-full flex justify-between z-10 bg-white/100 hover:bg-white/0 transition-all duration-700">
          <ProductContent
            imgUrl={imgUrl}
            title={title}
            description={description}
            tagsList={tagsList}
            onRedirectClick={onRedirectClick}
          />

          <div className="h-full flex justify-center items-center pr-3">
            <VoteButton numberOfVotes="252" onVoteClick={onUpVote} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
