import { lazy } from 'react';

const Dashboard = lazy(() => import('./dashboard-page/Dashboard'));
const ServicePolicy = lazy(() => import('./service-policy-page/ServicePolicy'));
const NoFound = lazy(() => import('./nofound-page/NoFound'));
const ForgotPassword = lazy(() =>
  import('./forgot-password-page/ForgotPassword')
);
const Login = lazy(() => import('./login-page/Login'));
const Register = lazy(() => import('./register-page/Register'));
const Products = lazy(() => import('./product-page/Products'));
const Category = lazy(() => import('./category-page/Category'));
const Provider = lazy(() => import('./provider-page/Provider'));
const Brand = lazy(() => import('./brand-page/Brand'));
const History = lazy(() => import('./history-page/History'));
const Notification = lazy(() => import('./notification-page/Notification'));
const AddProducts = lazy(() => import('./product-page/AddProducts'));
const SubtractProducts = lazy(() => import('./product-page/SubtractProducts'));
const ChangePassword = lazy(() => import('./change-password/ChangePassword'));

export {
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
};
