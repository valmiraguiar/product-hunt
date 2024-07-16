interface IProductContentProps {
  imgUrl: string;
  title: string;
  description: string;
  tagsList: string[];
  onRedirectClick?: () => void;
}

export type { IProductContentProps };
