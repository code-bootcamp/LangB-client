// 글로벌 스테이트 만들기
import { atom, selector } from 'recoil';
import { getAccessToken } from '../libraries/getAccessToken';


export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    email: '',
    name: '',
  },
});

export const visitedPageState = atom({
  key: 'visitedPageState',
  default: '/',
});

export const restoreAccessTokenLoadable = selector({
  key: 'restoreAccessTokenLoadable',
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
