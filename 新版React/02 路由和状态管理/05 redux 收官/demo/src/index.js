import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import sotre from "./redux/Store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={sotre}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
);
