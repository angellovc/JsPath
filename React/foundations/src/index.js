import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropsAttributesAndChildren from './PropsAttributesAndChildren';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PropsAttributesAndChildren id="this-is-an-attribute" title="this is a property">
        <h2>Child elements</h2>
        <h2>another child</h2>
    </PropsAttributesAndChildren>
);
