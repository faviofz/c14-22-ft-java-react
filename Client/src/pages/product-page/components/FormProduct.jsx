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
import { Input, Select, Preload } from '@/components';
import { ImageIcon } from '@/assets/svg';

export function FormProduct() {
  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();
  const { createProduct } = useProducts();
  const { handleImage, image, loading, resetImage } = useUploadImage();

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    getAllProviders();
  }, []);

  const initialValues = {
    nombre: '',
    imagen: '',
    costo: 0,
    // impuesto: 0,
    fechaVencimiento: '',
    categoria: '',
    proveedor: '',
    marca: '',
  };

  const { handleSubmit, touched, errors, values, getFieldProps, resetForm } =
    useFormik({
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
        costo: Yup.number().required('Requerido'),
        // impuesto: Yup.number().required('Requerido'),
        fechaVencimiento: Yup.string().required('Requerido'),
        categoria: Yup.string().required('Requerido'),
        proveedor: Yup.string().required('Requerido'),
        marca: Yup.string().required('Requerido'),
      }),
    });

  const handleReset = () => {
    resetForm();
    resetImage();
  };

  return (
    <form
      method='dialog'
      className='flex flex-col w-full h-full gap-5 '
      onSubmit={handleSubmit}
    >
      <div className='min-[730px]:flex min-[730px]:gap-5'>
        <div>
          <Input
            label='Nombre'
            placeholder='Ingresar nombre'
            {...getFieldProps('nombre')}
            errorMessage={touched.nombre && errors.nombre}
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

          <div className='min-[500px]:flex min-[500px]:gap-3'>
            <Input
              type='date'
              label='Fecha de vencimiento'
              {...getFieldProps('fechaVencimiento')}
              errorMessage={touched.fechaVencimiento && errors.fechaVencimiento}
            />

            <Input
              type='number'
              min='0'
              step='0.01'
              label='Precio'
              placeholder='Ingresar precio'
              {...getFieldProps('costo')}
              errorMessage={touched.costo && errors.costo}
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

        <div>
          <div className='mb-1'>
            <label className='label'>
              <span className='font-bold label-text'>Imagen</span>
            </label>
            <div
              className='
              flex items-center justify-center bg-base-200 border-2 border-accent p-5 mb-2
               h-[12rem] min-[730px]:h-[9.7rem]
              '
            >
              {loading ? (
                <Preload />
              ) : image ? (
                <img
                  className='w-full h-full object-contain'
                  src={image}
                  alt='Nueva imagen de producto'
                />
              ) : (
                <ImageIcon className='[&>path]:fill-secondary-content w-[2rem] h-[2rem]' />
              )}
            </div>
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
            label='Proveedor'
            list={providers.map(e => ({
              id: e.id,
              value: e.email,
              label: e.name,
            }))}
            {...getFieldProps('proveedor')}
            errorMessage={touched.proveedor && errors.proveedor}
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className='flex flex-col gap-3 min-[500px]:flex-row min-[500px]:justify-between'>
        <button
          type='button'
          onClick={handleReset}
          className='w-full btn btn-outline btn-primary min-[500px]:w-[13rem] min-[600px]:w-[16rem]'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='w-full btn btn-primary min-[500px]:w-[13rem] min-[600px]:w-[16rem]'
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
