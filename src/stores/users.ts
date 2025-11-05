import { computed, map, atom } from "nanostores";

export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

export const $users = map<Record<number, User>>({});
export const $currentUserId: number = atom(1);

export const getUserToken = (id: number) => {
  const userToken = $users.get()[id]?.token;
  return userToken;
};

export const addUser = (user: User) => {
  $users.setKey(user.id, user);
};
