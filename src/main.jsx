import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
// importamos el css que sera global al componente Padre
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <GifExpertApp />
  </React.StrictMode>
)
