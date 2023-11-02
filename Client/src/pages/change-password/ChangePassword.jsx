import { DoubleColumnLayout } from '@/layout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAuth } from '@/hooks';
import { Logo, Panel, Input, Button, Footer, Alert } from '@/components';
import './change-password.scss';
import { useEffect } from 'react';

export default function ChangePassword() {
  const { authState, changePassword } = useAuth();
  const { search } = useLocation();

  const navigate = useNavigate();
  const query = new URLSearchParams(search);

  useEffect(() => {
    // if it hasn't query params
    // return to login
    if (!query.get('email')) navigate('/', { replace: true });
    if (!query.get('token')) navigate('/', { replace: true });
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      onSubmit: (values, { resetForm }) => {
        const objectOfChange = {
          email: query.get('email'),
          token: query.get('token'),
          ...values,
        };
        delete objectOfChange.confirmPassword;
        changePassword(objectOfChange).then(() => {
          navigate('/login');
        });
      },
      validationSchema: Yup.object({
        password: Yup.string()
          .required('Este dato es requerido')
          .min(6, 'debe tener al menos 6 caracteres'),
        confirmPassword: Yup.string()
          .required('Este dato es requerido')
          .min(6, 'debe tener al menos 6 caracteres')
          .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
        accept: Yup.bool().isTrue(true),
      }),
    });

  return (
    <div className='change-password-page'>
      <DoubleColumnLayout>
        <DoubleColumnLayout.Left>
          <header>
            <Logo />
            <div>
              ¿No tiene una cuenta? <Link to='/register'>Regístrese</Link>
            </div>
          </header>
          <Panel title='Cambiar contraseña'>
            <Alert message={authState.errorMessage} type='error' />
            <form onSubmit={handleSubmit}>
              <Input
                label='Nueva Contraseña'
                placeholder='Ingresa una nueva contraseña'
                name='password'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={touched.password && errors.password}
                type='password'
              />
              <Input
                label='Confirmar Contraseña'
                placeholder='Repite la contraseña'
                name='confirmPassword'
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={touched.confirmPassword && errors.confirmPassword}
                type='password'
              />
              <Button disabled={authState.loading} type='submit'>
                {authState?.loading ? 'Registrando...' : 'Guardar Cambios'}
              </Button>
              <Link className='text-center' to='/forgot-password'>
                Solicitar cambio de contraseña
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
