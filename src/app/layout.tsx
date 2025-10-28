import { Metadata } from 'next';

import applyAxiosConfigurations from '@/utils/applyAxiosConfigurations';
import GroupProvider from '@/components/provider';
import getSession from '@/lib/session';

export const metadata: Metadata = {
  title: '디렉셔널',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  applyAxiosConfigurations(session);

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <GroupProvider>{children}</GroupProvider>
      </body>
    </html>
  );
}
