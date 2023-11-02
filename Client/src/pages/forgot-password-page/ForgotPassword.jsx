import { Link } from 'react-router-dom';
import { DoubleColumnLayout } from '@/layout';
import { Panel, Input, Button, Footer, Logo, Alert } from '@/components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '@/hooks';
import './forgot-password-page.scss';
import { useEffect } from 'react';

export default function ForgotPassword() {
  const { authState, resetPassword, setErrorMessage, setMessage } = useAuth();

  useEffect(() => {
    setErrorMessage();
    setMessage();
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: (values, { resetForm }) => {
        resetPassword(values.email);
        resetForm();
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required('Este dato es requerido')
          .email('Correo electrónico no válido'),
      }),
    });

  return (
    <div className='forgot-password-page'>
      <DoubleColumnLayout>
        <DoubleColumnLayout.Left>
          <header>
            <Logo />
            <div>
              ¿No tiene una cuenta? <Link to='/register'>Regístrese</Link>
            </div>
          </header>
          <Panel title='¿Olvidaste tu contraseña?'>
            <p>
              Introduzca la dirección de correo electrónico asociada a su cuenta
              y le enviaremos un enlace para restablecer su contraseña.
            </p>
            <Alert message={authState.message} type='info' />
            <Alert message={authState.errorMessage} type='error' />
            <form onSubmit={handleSubmit}>
              <Input
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
                name='email'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={touched.email && errors.email}
              />
              <Button disabled={authState.loading} type='submit'>
                {authState?.loading
                  ? 'Enviando...'
                  : 'Solicitar restablecimiento de contraseña'}
              </Button>
              <Link className='text-center' to='/login'>
                Volver a iniciar sesión
              </Link>
            </form>
          </Panel>
          <Footer />
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right></DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
