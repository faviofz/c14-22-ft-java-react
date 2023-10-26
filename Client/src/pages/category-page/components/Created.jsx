import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { useCategories } from '@/hooks';

export function Created() {
  const { createCategory, loading } = useCategories();
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
      },
      onSubmit: values => {
        createCategory(values);
        //   values.name = '';
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 3 caracteres'),
      }),
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nombre de la categoría'
          placeholder='Ingresa una categoría'
          name='name'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errorMessage={touched.name && errors.name}
        />

        <Button disabled={loading} type='submit'>
          {loading ? 'Enviando...' : 'Ingresar'}
        </Button>
      </form>
    </>
  );
}
