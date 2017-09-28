import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app.js';
import reducer from './reducers/mainReducer.js';
import action from './action/action.js'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);
let log = (store)=>{
    let next = store.dispatch;
    store.dispatch = (action)=>{
        console.log('dispatching' , action);
        let result = next(action);
        console.log('next state' , store.getState());
    }
}
log(store);
render(
    <Provider store = {store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
)
