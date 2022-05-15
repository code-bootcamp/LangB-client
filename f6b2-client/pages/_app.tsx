import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { globalStyles } from '../src/commons/styles/globalstyles';
import ApolloConfig from '../src/components/commons/apollo';
import Layout from '../src/components/commons/layout';
// import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloConfig>
    </RecoilRoot>
  );
}

export default MyApp;
