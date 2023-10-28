import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useCategories,
  useBrands,
  useProviders,
  useProducts,
  useUploadImage,
} from '@/hooks';
import { Input, Select } from '@/components';
import { ImageIcon } from '@/assets/svg';

export function FormProduct() {
  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();
  const { createProduct } = useProducts();
  const { handleImage, image, loading } = useUploadImage();

  useEffect(() => {
    if (!categories.lenght) getAllCategories();
    if (!brands.lenght) getAllBrands();
    if (!providers.lenght) getAllProviders();
  }, []);

  const initialValues = {
    nombre: '',
    imagen: '',
    costo: 0,
    impuesto: 0,
    fechaVencimiento: '',
    categoria: '',
    proveedor: '',
    marca: '',
  };

  const { handleSubmit, touched, errors, values, getFieldProps } = useFormik({
    initialValues,
    onSubmit: values => {
      values.fechaVencimiento = values.fechaVencimiento
        .split('-')
        .reverse()
        .join('-');
      console.log(values);

      createProduct(values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Requerido'),
      imagen: Yup.string().required('Requerido'),
      precio: Yup.number().required('Requerido'),
      costo: Yup.number(),
      impuesto: Yup.number(),
      fechaVencimiento: Yup.string().required('Requerido'),
      categoria: Yup.string().required('Requerido'),
      proveedor: Yup.string().required('Requerido'),
      marca: Yup.string().required('Requerido'),
    }),
  });

  return (
    <form
      method='dialog'
      className='flex flex-col justify-between w-full h-full gap-5'
      onSubmit={handleSubmit}
    >
      <section className='flex flex-col flex-wrap gap-3 lg:gap-5 lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-3 lg:gap-5 lg:flex-row'>
          <div className='flex flex-col gap-3 lg:gap-0'>
            <Input
              label='Nombre'
              placeholder='Ingresar nombre'
              {...getFieldProps('nombre')}
              errorMessage={touched.nombre && errors.nombre}
            />

            <Select
              label='Proveedor'
              list={providers.map(e => ({
                id: e.id,
                value: e.email,
                label: e.name,
              }))}
              {...getFieldProps('proveedor')}
              errorMessage={touched.proveedor && errors.proveedor}
            />

            <div className='flex flex-col items-center gap-3 lg:gap-5 lg:flex-row'>
              <Input
                type='date'
                label='Fecha de vencimiento'
                {...getFieldProps('fechaVencimiento')}
                errorMessage={
                  touched.fechaVencimiento && errors.fechaVencimiento
                }
              />

              <Input
                type='number'
                label='Precio'
                placeholder='Ingresar precio'
                {...getFieldProps('precio')}
                errorMessage={touched.precio && errors.precio}
                min='0'
                step='0.01'
              />
            </div>

            <Select
              label='Marca'
              list={brands.map(e => ({
                id: e.id,
                value: e.name,
                label: e.name,
              }))}
              {...getFieldProps('marca')}
              errorMessage={touched.marca && errors.marca}
            />
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col gap-2 '>
              <div>
                <label className='label'>
                  <span className='font-bold label-text'>Imagen</span>
                </label>
                <div className='flex items-center justify-center h-[9rem] lg:h-[10.8rem] bg-base-200 border-2 border-accent p-5'>
                  {image ? (
                    loading ? (
                      'cargando...'
                    ) : (
                      <img
                        className='w-full h-full object-contain'
                        src={image}
                        alt='Nueva imagen de producto'
                      />
                    )
                  ) : (
                    <ImageIcon className='[&>path]:fill-secondary-content w-[2rem] h-[2rem]' />
                  )}
                </div>
              </div>
              <div>
                <div className='pb-2'>
                  <Input
                    type='file'
                    name='ProductImagen'
                    onChange={handleImage}
                    className='w-full file-input file-input-bordered file-input-primary '
                  />
                </div>

                <Input
                  type='text'
                  className='hidden'
                  {...getFieldProps('imagen')}
                  value={(values.imagen = image)}
                  errorMessage={touched.imagen && errors.imagen}
                />

                <Select
                  label='categoria'
                  list={categories.map(e => ({
                    id: e.id,
                    value: e.name,
                    label: e.name,
                  }))}
                  {...getFieldProps('categoria')}
                  errorMessage={touched.categoria && errors.categoria}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUTTONS */}
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
