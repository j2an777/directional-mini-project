'use server';

import { UserContent, UserInfo } from '@/types/user';
import getSession from '@/lib/session';

type Props = {
  token: string;
  user: UserInfo;
};

const updateSession = async ({ token, user }: Props): Promise<boolean> => {
  const session = await getSession();

  session.token = token;
  session.user = user;

  await session.save();
  return true;
};

const deleteSession = async (): Promise<boolean> => {
  const session = await getSession();

  await session.destroy();
  return true;
};

export { updateSession, deleteSession };
