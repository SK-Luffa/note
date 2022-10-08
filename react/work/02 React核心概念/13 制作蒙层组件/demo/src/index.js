import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './components/Test';
import { DatePicker,Button } from 'antd';
import 'antd/dist/antd.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Test />
        <DatePicker />
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </>

);


