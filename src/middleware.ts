import { stackMiddlewares } from './middlewares/stack';
import { withAuth } from './middlewares/withAuth';

const middlewares = [withAuth];

export default stackMiddlewares(middlewares);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets/).*)'],
};
