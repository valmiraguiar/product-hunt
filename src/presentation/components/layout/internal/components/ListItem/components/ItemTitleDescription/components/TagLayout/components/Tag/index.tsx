import { ITagProps } from './types';

const Tag: React.FC<ITagProps> = ({ text }) => {
  return <p className="hover:underline">{text}</p>;
};

export default Tag;
