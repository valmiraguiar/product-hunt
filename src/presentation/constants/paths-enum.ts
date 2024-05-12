export enum PathNamesEnum {
  HOME = 'Home',
}

export enum PathsEnum {
  HOME = '/home',
}

export type PageRoutes = {
  name: PathNamesEnum;
  path: PathsEnum;
};

export type MatcherRoutes = PageRoutes & {
  matcher: string;
};
