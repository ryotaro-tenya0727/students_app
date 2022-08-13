import { atom } from 'recoil';

export const LoginStatus = atom({
  key: 'loginState',
  default: false,
});

export const UserStatus = atom({
  key: 'userState',
  default: {},
});
