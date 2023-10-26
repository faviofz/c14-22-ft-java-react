import { Input } from '@/components';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useProviders } from '../../../hooks/useProviders';


export function FormProduct() {
  const {createProvider} = useProviders()

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
      },
      onSubmit: values => {
        createProvider(values);
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required('Este dato es requerido'),
        empresa: Yup.string().required('Este dato es requerido'),
        email: Yup.string().required('Este dato es requerido'),
        telefono: Yup.string().required('Este dato es requerido'),
      }),
    });

  return (
    <form
      method='dialog'
      onSubmit={handleSubmit}
      className='flex flex-col justify-between w-full h-full gap-5'
    >
      <section className='flex flex-col flex-wrap gap-5 lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-4'>
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
        </div>
      </section>

      {/* BUTTOMS */}
      <div className='flex justify-between '>
        <button className='w-[12rem] lg:btn-wide btn btn-outline btn-primary'>
          Cancelar
        </button>
        <button type='submit' className='w-[12rem] lg:btn-wide btn btn-primary'>
          Guardar
        </button>
      </div>
    </form>
  );
}
