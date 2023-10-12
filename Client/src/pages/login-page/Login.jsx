import { Panel, Input, Button, Footer, Logo } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { Link } from 'react-router-dom';
import './login-page.scss';

export const Login = () => {
  return (
    <div className='login-page'>
      <DoubleColumnLayout double={true}>
        <DoubleColumnLayout.Left>
          <Panel title='Acceda a su cuenta'>
            <form>
              <Input
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
              />
              <Input label='Contraseña' placeholder='Ingresa tu contraseña' />
              <Button>Ingresar</Button>
            </form>
            <Link to='/forgot-password'>¿Olvidaste tu contraseña?</Link>
          </Panel>
          <div>
            ¿No tiene una cuenta? <Link to='/register'>Regístrese</Link>
          </div>
          <Footer />
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right>
          <header>
            <Logo />
            <h1>Solución que facilita la gestión diaria de tu negocio.</h1>
            <div>
              ¿No tiene una cuenta? <Link to='/register'>Regístrese</Link>
            </div>
          </header>
        </DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
};