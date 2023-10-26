import { Input, Button } from '@/components';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useProviders } from '../../../hooks/useProviders';

export function FormProduct() {
  const { loading, createProvider } = useProviders();

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
      },
      onSubmit: values => {
        // console.log(value);
        createProvider(values);
        values.nombre = '';
        values.empresa = '';
        values.email = '';
        values.telefono = '';
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required('Este dato es requerido'),
        empresa: Yup.string().required('Este dato es requerido'),
        email: Yup.string().required('Este dato es requerido'),
        telefono: Yup.string().required('Este dato es requerido'),
      }),
    });

  return (
    <form method='dialog' onSubmit={handleSubmit}>
      <Input
        label='Nombre'
        placeholder='Ingresa nombre'
        name='nombre'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.nombre}
        errorMessage={touched.nombre && errors.nombre}
      />
      <Input
        label='Empresa'
        placeholder='Ingresa empresa'
        name='empresa'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.empresa}
        errorMessage={touched.empresa && errors.empresa}
      />
      <Input
        label='Email'
        placeholder='Ingresa email'
        name='email'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <Input
        label='Telefono'
        placeholder='Ingresa telefono'
        name='telefono'
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.telefono}
        errorMessage={touched.telefono && errors.telefono}
      />
      <Button disabled={loading} type='submit'>
        {loading ? 'Enviando...' : 'Crear'}
      </Button>
    </form>
  );
}
