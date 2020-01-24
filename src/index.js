import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App/App';

import reducers from './reducers';
import { watchInput } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchInput);

ReactDOM.render(
    <Provider store={store}> <App/> </Provider>,
    document.querySelector('#root')
);