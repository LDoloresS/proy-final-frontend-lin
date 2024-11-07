import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/home'))
/* const Login = React.lazy(() => import('../Login'))
const Register = React.lazy(() => import('../Register')) */

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
