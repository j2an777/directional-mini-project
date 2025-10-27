import { Metadata } from 'next';

import GroupProvider from '@/components/provider';

export const metadata: Metadata = {
  title: '디렉셔널',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <GroupProvider>{children}</GroupProvider>
      </body>
    </html>
  );
}
