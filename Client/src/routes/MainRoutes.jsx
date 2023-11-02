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
  Provider,
  Brand,
  History,
  Notification,
  AddProducts,
  SubtractProducts,
  ChangePassword,
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
          <Route
            path='changePassword'
            element={
              <PublicRoutes>
                <ChangePassword />
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
            path='product/addProducts/'
            element={
              <PrivateRoutes>
                <AddProducts />
              </PrivateRoutes>
            }
          />
          <Route
            path='product/subtractProducts/'
            element={
              <PrivateRoutes>
                <SubtractProducts />
              </PrivateRoutes>
            }
          />

          <Route
            path='notification'
            element={
              <PrivateRoutes>
                <Notification />
              </PrivateRoutes>
            }
          />
          <Route
            path='provider'
            element={
              <PrivateRoutes>
                <Provider />
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
          <Route
            path='brand'
            element={
              <PrivateRoutes>
                <Brand />
              </PrivateRoutes>
            }
          />
          <Route
            path='history'
            element={
              <PrivateRoutes>
                <History />
              </PrivateRoutes>
            }
          />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}
