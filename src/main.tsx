import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.scss';
import './blur-image.css';
import './3D-card.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)

const script = document.createElement('script');
script.src = '/src/hover-3D.js';
document.body.appendChild(script);