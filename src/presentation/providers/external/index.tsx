import { ExternalLayout } from '@/presentation/components/layout/external';

import { IExternalProviderProps } from './types';

const ExternalProvider: React.FC<IExternalProviderProps> = async ({
  children,
}) => {
  return <ExternalLayout>{children}</ExternalLayout>;
};

export { ExternalProvider };
