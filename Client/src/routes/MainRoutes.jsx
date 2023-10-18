import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartLayout } from '@/layout';
import { Login, Register, ForgotPassword, Dashboard, NoFound ,Products } from '@/pages';

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='product' element={<Products />} />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}
