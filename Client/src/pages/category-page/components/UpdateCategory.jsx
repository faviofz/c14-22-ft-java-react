import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { useCategories, useModal } from '@/hooks';

export function UpdateCategory({ product }) {
  const { updateCategory, loading } = useCategories();
  const { closeModal } = useModal();

  const { handleSubmit, touched, errors, getFieldProps, resetForm } = useFormik(
    {
      initialValues: {
        name: product.name,
      },
      onSubmit: (values, { resetForm }) => {
        updateCategory({ ...values, id: product.id });
        resetForm();
        closeModal();
        successCategoryAlert();
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 3 caracteres'),
      }),
    }
  );

  const successCategoryAlert = () => {
    swal({
      title: 'La categoria fue actualizada',
      icon: 'success',
      timer: 1500,
    });
  };

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
          onClick={() => closeModal()}
          disabled={loading}
          className='w-full btn btn-outline btn-primary min-[500px]:w-[11rem]'
        >
          Cancelar
        </Button>
        <Button
          type='submit'
          disabled={loading}
          className='w-full btn btn-primary min-[500px]:w-[11rem]'
        >
          {loading ? 'Enviando...' : 'Actualizar'}
        </Button>
      </div>
    </form>
  );
}

UpdateCategory.propTypes = {
  product: PropTypes.any,
};
