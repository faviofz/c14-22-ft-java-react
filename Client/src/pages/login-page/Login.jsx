import { Panel, Input, Button, Footer, Logo, Alert } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import './login-page.scss';
import { useEffect, useState } from 'react';

const initialFormValues = {
  userName: '',
  password: '',
};

export default function Login() {
  const { authState, onLogin } = useAuth();
  const [formValues, setFormValue] = useState(initialFormValues);

  const handleChange = ({ target }) => {
    setFormValue(s => ({ ...s, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(formValues);
  };

  useEffect(() => {
    setFormValue(initialFormValues);
  }, [authState.errorMessage]);

  return (
    <div className='login-page'>
      <DoubleColumnLayout double={true}>
        <DoubleColumnLayout.Left>
          <Panel title='Acceda a su cuenta'>
            <Alert message={authState?.errorMessage} type='error' />
            <form onSubmit={handleSubmit}>
              <Input
                label='Nombre de usuario'
                placeholder='Ingresa tu nombre de usuario'
                name='userName'
                onChange={handleChange}
                value={formValues.userName}
              />
              <Input
                label='Contraseña'
                placeholder='Ingresa tu contraseña'
                name='password'
                onChange={handleChange}
                value={formValues.password}
                type='password'
              />
              <Button disabled={authState.loading}>
                {authState?.loading ? 'Enviando...' : 'Ingresar'}
              </Button>
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
}
