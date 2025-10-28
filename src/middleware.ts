import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

import { sessionOptions } from '@/lib/session';
import { UserContent } from '@/types/user';

import { isValidSession } from './utils/session/isValidSession';

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  if (pathname === '/') {
    const homeUrl = new URL('/home', request.url);
    return NextResponse.redirect(homeUrl);
  }

  const cookieData = await cookies();
  const session = await getIronSession<UserContent>(cookieData, sessionOptions);

  const authMenuUrls = ['/login'];
  const isAuthPath = authMenuUrls.some((url) => pathname.startsWith(url));

  if (!isValidSession(session) && !isAuthPath) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/((?!_next|api|images|static|fonts|\\(guest\\)).*)'],
};
