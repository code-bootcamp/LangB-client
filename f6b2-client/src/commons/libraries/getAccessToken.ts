import { GraphQLClient } from 'graphql-request';
import { RESTORE_ACCESS_TOKEN } from '../../components/commons/queries'


export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      'https://backend06.codebootcamp.co.kr/graphql',
      { credentials: 'include' }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
