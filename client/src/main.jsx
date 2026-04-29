import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Intercept fetch to automatically prepend VITE_API_URL
const originalFetch = window.fetch;
window.fetch = async (resource, config) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  let newResource = resource;
  if (typeof resource === 'string' && resource.startsWith('/api')) {
    newResource = `${apiUrl}${resource}`;
  }
  return originalFetch(newResource, config);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
