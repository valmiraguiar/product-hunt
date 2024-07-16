interface ListItemProps {
  title: string;
  description: string;
  imgUrl: string;
  tagsList: string[];
  onUpVote?: () => void;
  onRedirectClick?: () => void;
  onItemClick?: () => void;
}

export type { ListItemProps };
