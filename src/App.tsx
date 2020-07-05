import React from 'react';

import GlobalStyle from './styles/global';
import MainPanel from './components/MainPanel';

const App: React.FC = () => (
  <>
    <MainPanel />
    <GlobalStyle />
  </>
);
export default App;
