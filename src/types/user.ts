export interface UserInfo {
  id: string;
  email: string;
}

export interface UserContent {
  token: string;
  user: UserInfo;
}
