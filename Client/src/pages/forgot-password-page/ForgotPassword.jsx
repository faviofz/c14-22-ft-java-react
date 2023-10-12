import { Panel, Input, Button, Footer, Logo } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import './forgot-password-page.scss';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  return (
    <div className='forgot-password-page'>
      <DoubleColumnLayout>
        <DoubleColumnLayout.Left>
          <header>
            <Logo />
            <div>
              ¿No tiene una cuenta? <Link to='/'>Regístrese</Link>
            </div>
          </header>
          <Panel title='¿Olvidaste tu contraseña?'>
            <p>
              Introduzca la dirección de correo electrónico asociada a su cuenta
              y le enviaremos un enlace para restablecer su contraseña.
            </p>
            <form>
              <Input
                label='Correo electrónico'
                placeholder='Ingresa tu contraseña'
              />
              <Button>Solicitar restablecimiento de contraseña</Button>
            </form>
          </Panel>
          <Footer />
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right></DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
