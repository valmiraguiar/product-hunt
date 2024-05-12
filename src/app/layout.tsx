import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.ico" />
        <title>Product Hunt</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
