import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import {CountriesContextProvider} from './Contexts/CountriesContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountriesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesContextProvider>
  </React.StrictMode>,
)
