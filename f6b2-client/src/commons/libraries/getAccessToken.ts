import { GraphQLClient } from 'graphql-request';
import { RESTORE_ACCESS_TOKEN } from '../../components/commons/queries';

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient('https://langbee.shop/graphql', {
      credentials: 'include',
    });

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log();
  }
}
