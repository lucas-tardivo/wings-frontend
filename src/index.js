import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoralisProvider } from 'react-moralis';

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <ToastContainer />
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


