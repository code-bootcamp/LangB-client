import { gql } from '@apollo/client';

// backend06 쿼리 테스트로 사용함
export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
