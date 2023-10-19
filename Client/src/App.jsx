import { MainRoutes } from '@/routes';
import { DarkmodeProvider, AuthProvider } from '@/context';

export function App() {
  return (
    <DarkmodeProvider>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </DarkmodeProvider>
  );
}
