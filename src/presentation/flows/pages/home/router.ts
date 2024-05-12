import {
  MatcherRoutes,
  PathNamesEnum,
  PathsEnum,
} from '@/presentation/constants/paths-enum';

export const HomeRouterConfig: MatcherRoutes = {
  name: PathNamesEnum.HOME,
  path: PathsEnum.HOME,
  matcher: '/aircrafts',
};
