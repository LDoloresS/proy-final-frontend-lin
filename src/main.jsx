import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
/* import { UserProvider } from "./Context/UserContexto";
import { TableProvider } from "./Context/TableContext"; */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </StrictMode>,
)
