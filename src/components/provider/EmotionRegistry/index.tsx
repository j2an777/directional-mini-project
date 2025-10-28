'use client';

import { CacheProvider, SerializedStyles } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import type { StyleSheet } from '@emotion/sheet';
import { PropsWithChildren } from 'react';
import createCache from '@emotion/cache';

export default function EmotionRegistry({ children }: PropsWithChildren) {
  const cache = createCache({ key: 'css' });
  const prevInsert = cache.insert;
  let inserted: string[] = [];

  cache.insert = (selector: string, serialized: SerializedStyles, sheet: StyleSheet, shouldCache: boolean) => {
    if (cache.inserted[serialized.name] === undefined) {
      inserted.push(serialized.name);
    }
    return prevInsert(selector, serialized, sheet, shouldCache);
  };

  useServerInsertedHTML(() => {
    if (inserted.length === 0) return null;

    const names = inserted.join(' ');
    const css = inserted.map((name) => cache.inserted[name]).join('');
    inserted = [];

    return <style key={cache.key} data-emotion={`${cache.key} ${names}`} dangerouslySetInnerHTML={{ __html: css }} />;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
