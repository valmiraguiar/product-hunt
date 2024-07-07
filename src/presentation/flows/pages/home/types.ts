import { IProductModelProps } from '@/domain/models/product/product-model';
import { LoadingStateEnum } from '@/presentation/constants/loading-state';

interface IHomeLayoutProps {
  listLoadingState: LoadingStateEnum;
  productListDataState: IProductModelProps[];
}

export type { IHomeLayoutProps };
