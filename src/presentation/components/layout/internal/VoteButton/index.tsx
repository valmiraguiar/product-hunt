import ArrowUpIcon from '@/presentation/components/base/ArrowUpIcon';

import { VoteButtonProps } from './types';

const VoteButton: React.FC<VoteButtonProps> = ({ numberOfVotes }) => {
  return (
    <div className="flex flex-col items-center justify-center size-[48px] border border-solid border-[#D9E1EC] rounded gap-[2px] pt-2 pb-1">
      <ArrowUpIcon />
      <p className="text-[12px] font-semibold text-[#4D5A7E] ">
        {numberOfVotes}
      </p>
    </div>
  );
};

export default VoteButton;
