import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// rendering testing
// import Galary from './components/interactive/Galary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(<Galary/>)

