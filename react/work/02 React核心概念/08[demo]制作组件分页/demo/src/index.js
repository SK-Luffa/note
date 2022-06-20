import React from 'react';
import ReactDOM from 'react-dom/client';
import Pager from './components/Pager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Pager
        current={1}
        total={100}
        limit={9}
        panelNumber={5}
    />
);

