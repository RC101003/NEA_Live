import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
        domain = {domain}
        clientID = {clientID}
        redirectUri = {window.location.origin}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);