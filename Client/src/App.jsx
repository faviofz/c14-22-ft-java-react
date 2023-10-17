import { MainRoutes } from '@/routes';
import { DarkmodeProvider } from '@/context';

export function App() {
  return (
    <DarkmodeProvider>
      <MainRoutes />
    </DarkmodeProvider>
  );
}
