import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { useCategories } from '@/hooks';
import { closeAllModal } from '@/utils';

export function FormCategory() {
  const { createCategory, loading } = useCategories();
  const { handleSubmit, touched, errors, getFieldProps } = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values, { resetForm }) => {
      createCategory(values);
      resetForm();
      closeAllModal();
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
          {...getFieldProps('name')}
          errorMessage={touched.name && errors.name}
        />

        <Button disabled={loading} type='submit'>
          {loading ? 'Enviando...' : 'Crear'}
        </Button>
      </form>
    </>
  );
}
