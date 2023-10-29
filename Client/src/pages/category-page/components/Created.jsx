import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { useCategories } from '@/hooks';
import swal from 'sweetalert';

export function Created() {
  const { createCategory, loading } = useCategories();
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: '',
      },
      onSubmit: values => {
        createCategoryAlert(values);

        //   values.name = '';
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Este dato es requerido')
          .min(3, 'Debe tener más de 3 caracteres'),
      }),
    });

  const createCategoryAlert = values => {
    swal({
      title: 'Desea crear una categoria',
      icon: 'warning',
      buttons: {
        catch: {
          text: 'Cancelar',
          value: null,
          className: 'btn btn-accent',
        },
        default: {
          text: 'Eliminar',
          value: true,
          className: 'btn btn-primary',
        },
      },
    }).then(valueButtoms => {
      if (valueButtoms) {
        createCategory(values);
        swal({
          title: 'La categoria fue creada',
          icon: 'success',
        });
      }
    });
  };

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
          {loading ? 'Enviando...' : 'Crear'}
        </Button>
      </form>
    </>
  );
}
