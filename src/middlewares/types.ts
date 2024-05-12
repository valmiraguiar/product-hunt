import { type NextMiddleware, type NextResponse } from 'next/server';

export type MiddlewareFactory = (
  middleware: NextMiddleware,
  response: NextResponse,
) => NextMiddleware;
