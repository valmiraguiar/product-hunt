import { NextResponse } from 'next/server';

import { MiddlewareFactory } from './types';

export const withAuth: MiddlewareFactory = () => {
  return async request => {
    // TODO - Authentication

    return NextResponse.next();
  };
};
