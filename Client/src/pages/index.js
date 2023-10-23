import { lazy } from 'react';

const Dashboard = lazy(() => import('./dashboard-page/Dashboard'));
const ServicePolicy = lazy(() => import('./service-policy-page/ServicePolicy'));
const NoFound = lazy(() => import('./nofound-page/NoFound'));
const ForgotPassword = lazy(() =>
  import('./forgot-password-page/ForgotPassword')
);
const Login = lazy(() => import('./login-page/Login'));
const Register = lazy(() => import('./register-page/Register'));
const Products = lazy(() => import('./Products/Products'));

export {
  Dashboard,
  ServicePolicy,
  NoFound,
  ForgotPassword,
  Login,
  Register,
  Products,
};
