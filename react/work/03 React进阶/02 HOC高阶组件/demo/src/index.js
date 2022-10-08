import React from 'react';
import ReactDOM from 'react-dom/client';
import {A,B} from "./components/Comps"
import withLog from './HOC/withLog';

const ALog=withLog(A);
const BLog=withLog(B);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <ALog a={1} />
 <BLog b={2}/>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

