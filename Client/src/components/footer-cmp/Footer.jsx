import { DarkModeSwitch } from '../darkmode-switch-cmp/DarkModeSwitch';

export function Footer() {
  return (
    <footer className='footer-component flex items-center gap-[.5rem] flex-col'>
      © {new Date().getFullYear()}, StockWise. Todos los derechos reservados.
      <DarkModeSwitch icons={true} />
    </footer>
  );
}
