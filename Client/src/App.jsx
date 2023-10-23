import { MainRoutes } from '@/routes';
import { DarkmodeProvider, AuthProvider } from '@/context';
import { StoreProvider } from '@/redux';

export function App() {
  return (
    <StoreProvider>
      <DarkmodeProvider>
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </DarkmodeProvider>
    </StoreProvider>
  );
}
