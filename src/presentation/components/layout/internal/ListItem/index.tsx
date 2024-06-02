import CommentsTagLayout from '../CommentsTagLayout';
import RedirectIcon from '../RedirectIcon';
import VoteButton from '../VoteButton';
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  return (
    <div className="transition-all duration-700 relative">
      <div
        className="
          w-[678px]
          h-[72px]
          text-[16px]
          flex relative cursor-pointer"
      >
        <div
          className="w-[400px] h-full ml-[64px] text-[#21293B] absolute right-0  cursor-pointer rounded-r-xl transition-all duration-700 bg-gradient-to-bl from-[#FDEFE8] from-30%
       to-transparent to-60% bg-size-200  bg-pos-0 hover:bg-pos-100"
        />
        <div className="w-full h-full flex justify-between z-10 bg-white/100 hover:bg-white/0 transition-all duration-700">
          <div className="flex flex-row items-center w-full h-full gap-4">
            <div className="flex min-w-[48px] h-[48px]  overflow-hidden rounded">
              <img
                src="https://ph-files.imgix.net/7cee5ecd-9ad4-486d-b6a3-4d2947bc7a0e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2"
                alt="icon-enterprise"
              />
            </div>

            <div className="w-full flex-row place-items-start">
              <div className="flex items-center gap-2">
                <p className="font-light">
                  <span className="font-medium">{title}</span>{' '}
                  <span className="text-[#90949D]">—</span> {description}
                </p>

                <RedirectIcon />
              </div>

              <CommentsTagLayout />
            </div>
          </div>

          <div className="h-full flex justify-center items-center pr-3">
            <VoteButton numberOfVotes="252" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
