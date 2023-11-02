import { Link } from 'react-router-dom';
import { DoubleColumnLayout } from '@/layout';
import { Panel, Input, Button, Footer, Logo, Alert } from '@/components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/hooks';
import './login-page.scss';

export default function Login() {
  const { authState, onLogin } = useAuth();

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        userName: '',
        password: '',
      },
      onSubmit: (values, { resetForm }) => {
        onLogin(values);
        resetForm();
      },
      validationSchema: Yup.object({
        userName: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 2 caracteres'),
        password: Yup.string()
          .required('Este dato es requerido')
          .min(6, 'debe tener al menos 6 caracteres'),
      }),
    });

  return (
    <div className='login-page'>
      <DoubleColumnLayout double={true}>
        <DoubleColumnLayout.Left>
          <Panel title='Acceda a su cuenta'>
            <Alert message={authState.message} type='success' />
            <Alert message={authState.errorMessage} type='error' />
            <form onSubmit={handleSubmit}>
              <Input
                label='Nombre de usuario'
                placeholder='Ingresa tu nombre de usuario'
                name='userName'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                errorMessage={touched.userName && errors.userName}
              />
              <Input
                label='Contraseña'
                placeholder='Ingresa tu contraseña'
                name='password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                errorMessage={touched.password && errors.password}
                type='password'
              />
              <Button disabled={authState.loading} type='submit'>
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
