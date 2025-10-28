'use client';

import Footer from '@/app/_component/Footer';

import GlobalStyleProvider from './GlobalStyleProvider';
import EmotionRegistry from './EmotionRegistry';
import QueryProvider from './QueryProvider';

const GroupProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionRegistry>
      <GlobalStyleProvider />
      <QueryProvider>
        {children}
        <Footer />
      </QueryProvider>
    </EmotionRegistry>
  );
};

export default GroupProvider;
