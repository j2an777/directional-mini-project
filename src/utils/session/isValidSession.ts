import { UserContent } from '@/types/user';

export function isValidSession(session: UserContent) {
  return (
    session &&
    typeof session === 'object' &&
    !Array.isArray(session) &&
    typeof session.token === 'string' &&
    session.token.trim() !== ''
  );
}
