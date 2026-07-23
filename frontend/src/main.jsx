import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BirthProvider } from './contexts/BirthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BirthProvider>
          <App />
        </BirthProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);