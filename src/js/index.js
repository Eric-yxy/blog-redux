import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app.js';
import reducer from './reducers/mainReducer.js';
import action from './action/action.js'

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

render(
    <Provider store = {store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
)
