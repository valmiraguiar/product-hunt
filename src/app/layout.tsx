import { ExternalProvider } from '@/presentation/providers/external';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>Product Hunt - The best new products in tech.</title>
      </head>
      <body>
        <ExternalProvider>{children}</ExternalProvider>
      </body>
    </html>
  );
}
