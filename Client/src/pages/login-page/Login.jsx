import { Panel, Input, Button, Footer, Logo } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import './login-page.scss';

export default function Login() {
  const { authState, onLogin } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    onLogin(formValues);
  };

  return (
    <div className='login-page'>
      <DoubleColumnLayout double={true}>
        <DoubleColumnLayout.Left>
          <Panel title='Acceda a su cuenta'>
            {authState?.errorMessage}

            <form onSubmit={handleSubmit}>
              <Input
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
                name='userName'
              />
              <Input
                label='Contraseña'
                placeholder='Ingresa tu contraseña'
                name='password'
              />
              <Button disabled={authState.loading}>
                {authState.loading ? 'Enviando...' : 'Ingresar'}
              </Button>
            </form>
            <Link to='/forgot-password'>¿Olvidaste tu contraseña?</Link>
            {JSON.stringify(authState, null, 2)}
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
}
