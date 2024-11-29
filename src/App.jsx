/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// import { useUser } from '../../Context/UserContexto'
import ErrorBoundary from './components/errorBoundary'
import Login from './pages/authentication/login';
import Header from './components/header';
import Footer from './components/footer';
import ProductDetailP from './pages/detalle';
import Buy from './pages/buy';
import OrdersP from './pages/orders/ordersP';
import OrderDetailLastP from './pages/orders/orderDetailLastP';
import OrderDetailP from './pages/orders/orderDetailP';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/home'))
/* const Login = React.lazy(() => import('../Login'))
const Register = React.lazy(() => import('../Register'))
const Reservation = React.lazy(() => import('../Reservation')) */

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  </div>
);
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 m-0 p-0">{children}</main>
      <Footer />
    </div>
  );
};

// Protected Route component
/* const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useUser();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}; */

const App = () => {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <MainLayout>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={<Home />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/login"
            element={<Login />}
            errorElement={<ErrorBoundary />}
          />
          {/*<Route 
          path="/register" 
          element={<Register />}
          errorElement={<ErrorBoundary />}
        /> */}
          <Route
            path="/detalle/:id"
            element={<ProductDetailP />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/buy"
            element={<Buy />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/my-orders"
            element={<OrdersP />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/my-orders/:id"
            element={<OrderDetailP />}
            errorElement={<ErrorBoundary />}
          />
          <Route
            path="/my-orders/last"
            element={<OrderDetailLastP />}
            errorElement={<ErrorBoundary />}
          />
          {/* Protected routes */}
          {/* <Route
          path="/reservation"
          element={
            <ProtectedRoute>
              <Reservation />
            </ProtectedRoute>
          }
          errorElement={<ErrorBoundary />}
        /> */}

          {/* Catch all route - redirect to error page */}
          <Route
            path="*"
            element={<ErrorBoundary />}
          />
        </Routes>
      </MainLayout>
    </React.Suspense>
  );
};

export default App;
