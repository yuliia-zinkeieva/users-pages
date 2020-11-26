import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';
import store from './services/redux/store';

ReactDOM.render((
        <BrowserRouter>
            <Provider store={store}>
                <App/> {/* The various pages will be displayed by the `Main` component. */}
            </Provider>
        </BrowserRouter>
    ), document.getElementById('root')
);

