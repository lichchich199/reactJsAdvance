import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Layout from './components/organisms/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
,
  </React.StrictMode>,
  document.getElementById('root')
);
