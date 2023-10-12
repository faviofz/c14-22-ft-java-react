import { DarkModeSwitch } from '../darkmode-switch-cmp/DarkModeSwitch';

export function Footer() {
  return (
    <footer className='flex items-center gap-[.5rem]'>
      © {new Date().getFullYear()}, StockWise. Todos los derechos reservados.
      <DarkModeSwitch />
    </footer>
  );
}
