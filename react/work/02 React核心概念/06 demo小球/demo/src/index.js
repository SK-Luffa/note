import React from 'react';
import ReactDOM from 'react-dom/client';
import Ball from "./components/Ball"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Ball bg="#000" xSpeed={100} ySpeed={200} left={100} top={100}/>
);


