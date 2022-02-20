import { atom } from 'recoil';
import { UserQuery } from 'generated';

export const user = atom({
  key: 'user',
  default: null as UserQuery['users_by_pk']
});

export const authScreen = atom({
  key: 'authScreen',
  default: null as null|'login'|'register'
});