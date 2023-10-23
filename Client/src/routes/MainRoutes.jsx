import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layout';
import { PublicRoutes } from './PublicRoute';
import { PrivateRoutes } from './PrivateRoute';

import {
  Dashboard,
  ServicePolicy,
  NoFound,
  ForgotPassword,
  Login,
  Register,
  Products,
  Category,
} from '@/pages';

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route
            path='login'
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path='register'
            element={
              <PublicRoutes>
                <Register />
              </PublicRoutes>
            }
          />
          <Route
            path='forgot-password'
            element={
              <PublicRoutes>
                <ForgotPassword />
              </PublicRoutes>
            }
          />
          <Route path='service-policy' element={<ServicePolicy />} />
          <Route
            index
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path='dashboard'
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path='product'
            element={
              <PrivateRoutes>
                <Products />
              </PrivateRoutes>
            }
          />
          <Route
            path='category'
            element={
              <PrivateRoutes>
                <Category />
              </PrivateRoutes>
            }
          />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}
