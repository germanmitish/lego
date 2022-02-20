import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { NhostApolloProvider, nhost, GQL_ENDPOINT } from 'common';
import { BrowserRouter as Router } from 'react-router-dom';
import { InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { NhostAuthProvider } from '@nhost/react-auth';
import App from './app';

ReactDOM.render(
  <StrictMode>
    <Router>
      <RecoilRoot>
        <NhostAuthProvider {...{ nhost:nhost as any }}>
          <NhostApolloProvider
            {...{ nhost }}
            cache={new InMemoryCache()}
            publicRole="anonymous"
            graphqlUrl={GQL_ENDPOINT}
          >
              <App />
            </NhostApolloProvider>
        </NhostAuthProvider>
      </RecoilRoot>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
