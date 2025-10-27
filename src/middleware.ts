import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

import { isValidSession } from '@/utils/isValidSession';
import { sessionOptions } from '@/lib/session';
import { SessionContent } from '@/types/user';

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  const cookieData = await cookies();
  const session = await getIronSession<SessionContent | any>(cookieData, sessionOptions);

  const authMenuUrls = ['/login'];
  const isAuthPath = authMenuUrls.some((url) => pathname.startsWith(url));

  if (!isValidSession(session) && !isAuthPath) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|static|fonts|\\(guest\\)).*)'],
};
