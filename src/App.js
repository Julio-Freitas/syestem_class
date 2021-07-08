// @ts-nocheck
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { Header } from './components/header';

import history from './services/history';
import store, { persistor } from './store/index';

import GlobalStyles from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Header logout={() => false} />
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
