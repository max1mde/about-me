import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style/style.scss';
import './style/blur-image.css';
import './style/3D-card.css';
import './style/home-page.css';
import './style/login-page.css';
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

