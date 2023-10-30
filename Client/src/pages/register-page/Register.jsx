import { Panel, Input, Button, Footer, Logo, Alert } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { CircleWarn } from '@/assets/svg';
import { Link } from 'react-router-dom';
import { imgRegister } from '@/assets/images';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './register-page.scss';
import { useAuth } from '../../hooks/useAuth';

export default function Register() {
  const { authState, signUp } = useAuth();

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
        surname: '',
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        accept: false,
      },
      onSubmit: (values, { resetForm }) => {
        signUp(values);
        resetForm();
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 3 caracteres'),
        surname: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 3 caracteres'),
        userName: Yup.string().required('Este dato es requerido'),
        email: Yup.string()
          .required('Este dato es requerido')
          .email('Correo electrónico no válido'),
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
    <div className='register-page'>
      <DoubleColumnLayout double={true} reverse={true}>
        <DoubleColumnLayout.Left>
          <header>
            <Logo />
          </header>
          <Panel title='Cree su cuenta'>
            <Alert message={authState.errorMessage} type='error' />
            <form onSubmit={handleSubmit}>
              <div className='min-[690px]:flex min-[690px]:gap-4'>
                <Input
                  label='Nombres'
                  placeholder='Ingresa tus nombres'
                  name='name'
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorMessage={touched.name && errors.name}
                />
                <Input
                  label='Apellidos'
                  placeholder='Ingresa tus apellidos'
                  name='surname'
                  value={values.surname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorMessage={touched.surname && errors.surname}
                />
              </div>
              <div className='min-[690px]:flex min-[690px]:gap-4'>
                <Input
                  label='Nombre de usuario'
                  placeholder='Ingresa un nombre de usuario'
                  name='userName'
                  value={values.userName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorMessage={touched.userName && errors.userName}
                />
                <Input
                  label='Correo electrónico'
                  placeholder='Ingresa tu correo electrónico'
                  name='email'
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  errorMessage={touched.email && errors.email}
                />
              </div>
              <div className='min-[690px]:flex min-[690px]:gap-4'>
                <Input
                  label='Contraseña'
                  placeholder='Ingresa una contraseña'
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
                  errorMessage={
                    touched.confirmPassword && errors.confirmPassword
                  }
                  type='password'
                />
              </div>
              <div className='terminos-condiciones'>
                {errors.accept && (
                  <CircleWarn className='[&>path]:stroke-[#F87272]' />
                )}
                <input
                  type='checkbox'
                  className='toggle toggle-sm toggle-primary'
                  name='accept'
                  value={values.accept}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {}
                He leido y acepta
                <Link to={'/service-policy'}> terminos y condiciones</Link>
              </div>
              <Button disabled={authState.loading} type='submit'>
                {authState?.loading ? 'Registrando...' : 'Registrar'}
              </Button>
            </form>
            <div>
              ¿Ya tiene una cuenta? <Link to='/login'>Iniciar sesión</Link>
            </div>
          </Panel>

          <Footer />
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right>
          <img src={imgRegister} alt='' />
        </DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
