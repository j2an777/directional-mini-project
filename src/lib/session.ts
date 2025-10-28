import { getIronSession, SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';

import { UserContent } from '@/types/user';

const SESSION_COOKIE_NAME = 'HWV-token';

export default async function getSession(): Promise<UserContent | any> {
  const cookieData = await cookies();
  const session = await getIronSession<UserContent | any>(cookieData, sessionOptions);

  return session;
}

export const sessionOptions: SessionOptions = {
  password: process.env.COOKIE_PASSWORD!,
  cookieName: SESSION_COOKIE_NAME,
  ttl: 60 * 60, // 1 hour
  cookieOptions: {
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  },
};
