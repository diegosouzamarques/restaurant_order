import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Lounge from './Pages/Lounge/Lounge';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Lounge/>
  </React.StrictMode>
);
