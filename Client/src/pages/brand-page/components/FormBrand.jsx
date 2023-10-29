import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { useBrands } from '@/hooks';
import { closeAllModal } from '@/utils';

export function FormBrand() {
  const { createBrand, loading } = useBrands();
  const { handleSubmit, touched, errors, getFieldProps, resetForm } = useFormik(
    {
      initialValues: {
        name: '',
      },
      onSubmit: (values, { resetForm }) => {
        createBrand(values);
        resetForm();
        closeAllModal();
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Este dato es requerido')
          .min(2, 'Debe tener más de 1 caracteres'),
      }),
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Nombre de la categoría'
        placeholder='Ingresa una categoría'
        {...getFieldProps('name')}
        errorMessage={touched.name && errors.name}
      />

      {/* BUTTONS */}
      <div className='flex flex-col gap-3 min-[500px]:flex-row min-[500px]:justify-between'>
        <Button
          type='button'
          onClick={resetForm}
          disabled={loading}
          className='w-full btn btn-outline btn-primary min-[500px]:w-[13rem]'
        >
          Cancelar
        </Button>
        <Button
          type='submit'
          disabled={loading}
          className='w-full btn btn-primary min-[500px]:w-[13rem]'
        >
          {loading ? 'Enviando...' : 'Crear'}
        </Button>
      </div>
    </form>
  );
}
