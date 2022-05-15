
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from '../../../commons/store';


   
export function useAuth() {

  const [accessToken] = useRecoilState(accessTokenState);
  const [isLoading] = useState(true);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert('로그인 후 이용 가능합니다!!!');
        }
      });
    }
  }, []);

  return {
    isLoading,
  };
}
