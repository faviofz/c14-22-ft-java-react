import { MainRoutes } from '@/routes';
import { DarkmodeProvider, AuthProvider, ModalProvider } from '@/context';
import { StoreProvider } from '@/redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <StoreProvider>
      <DarkmodeProvider>
        <AuthProvider>
          <ModalProvider>
            <MainRoutes />
            <ToastContainer />
          </ModalProvider>
        </AuthProvider>
      </DarkmodeProvider>
    </StoreProvider>
  );
}
