import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import {PublicClientApplication, EventType} from "@azure/msal-browser";

import { MsalProvider } from '@azure/msal-react';


const pca = new PublicClientApplication({
    auth: {
        clientId: '716fa805-d117-44b8-8d9a-f6443efba185', // Correction de la casse ici
        authority: 'https://login.microsoftonline.com/fe013626-9e98-4cbe-b49e-c5848b622c2d/oauth2/v2.0/authorize',
        redirectUri: '/',
        scopes: ['User.Read']
    }
});


pca.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS){
   console.log(event);
   pca.setActiveAccount(event.payload.account);
   }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <MsalProvider instance={pca}> 
        <ThemeProvider theme={theme}>
          <App /> 
        </ThemeProvider>
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
