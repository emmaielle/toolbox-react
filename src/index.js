import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ToolboxBackend from './backend/toolboxApi';
import reducers from './reducers/index';
import App from './App';

import Saga from './sagas/sagas';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

const backend = new ToolboxBackend();

const saga = new Saga(backend);
sagaMiddleWare.run(saga.rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);


registerServiceWorker();
