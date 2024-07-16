import { Fragment } from 'react';

import CommentsTag from './components/CommentsTag';
import SeparatorCircleIcon from './components/SeparatorCircleIcon';
import Tag from './components/Tag';
import { ITagLayoutProps } from './types';

const TagLayout: React.FC<ITagLayoutProps> = ({ tagList }) => {
  return (
    <div className="w-full flex items-center text-[12px] font-light text-[#4D5A7E] gap-2">
      <CommentsTag />

      {tagList?.map(tag => (
        <Fragment key={`key-${tag}`}>
          <SeparatorCircleIcon />
          <Tag text={tag} />
        </Fragment>
      ))}
    </div>
  );
};

export default TagLayout;
