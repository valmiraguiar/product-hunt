import Header from '../../base/Header';
import { IExternalLayoutProps } from './types';

const ExternalLayout: React.FC<IExternalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
    </>
  );
};

export { ExternalLayout };
