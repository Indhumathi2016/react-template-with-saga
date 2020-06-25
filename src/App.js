import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import Routes from './routes';
import GlobalStyles from 'styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
        <GlobalStyles />
        <Routes />
    </Provider>
  );
}

export default App;
