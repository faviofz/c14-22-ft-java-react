import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useCategories,
  useBrands,
  useProviders,
  useProducts,
  useUploadImage,
  useModal,
} from '@/hooks';
import { Input, Select, Preload } from '@/components';
import { ImageIcon } from '@/assets/svg';

export function FormProduct() {
  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();
  const { createProduct } = useProducts();
  const { handleImage, image, loading, resetImage } = useUploadImage();
  const { closeModal } = useModal();

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    getAllProviders();
  }, []);

  const initialValues = {
    nombre: '',
    slogan: crypto.randomUUID(), // ! no registra el slogan en create
    imagen: '',
    costo: 0,
    fechaVencimiento: '',
    categoria: '',
    proveedor: '',
    marca: '',
    min: 0,
    max: 0,
    actual: 0,
  };
  
  const successProductAlert = () => {
    swal({
      title: 'El producto fue guardado',
      icon: 'success',
      timer: 1500,
    });
  };

  const { handleSubmit, touched, errors, values, getFieldProps, resetForm } =
    useFormik({
      initialValues,
      onSubmit: values => {
        values.fechaVencimiento = values.fechaVencimiento
          .split('-')
          .reverse()
          .join('-');

        createProduct(values);
        closeModal();
        successProductAlert();
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required('Este dato es requerido'),
        imagen: Yup.string().required('Este dato es requerido'),
        costo: Yup.number().required('Este dato es requerido'),
        // impuesto: Yup.number().required('Este dato es requerido'),
        fechaVencimiento: Yup.date()
          .min(new Date())
          .required('Este dato es requerido'),
        categoria: Yup.string().required('Este dato es requerido'),
        proveedor: Yup.string().required('Este dato es requerido'),
        marca: Yup.string().required('Este dato es requerido'),
        min: Yup.number().required('Este dato es requerido'),
        max: Yup.number().required('Este dato es requerido'),
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
            label='Categoria'
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
              pattern='\d{2}-\d{2}-\d{4}'
              {...getFieldProps('fechaVencimiento')}
              errorMessage={touched.fechaVencimiento && errors.fechaVencimiento}
            />

            <Input
              type='number'
              min='0'
              step='0.01'
              label='Precio (USD)'
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
                  className='object-contain w-full h-full'
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
      <div className='flex flex-col  min-[730px]:flex-row min-[730px]:gap-5'>
        <Input
          type='number'
          min='0'
          step='0.01'
          label='Minimo'
          placeholder='Ingresar minimo'
          {...getFieldProps('min')}
          errorMessage={touched.costo && errors.costo}
        />
        <Input
          type='number'
          min='0'
          step='0.01'
          label='Maximo'
          placeholder='Ingresar maximo'
          {...getFieldProps('max')}
          errorMessage={touched.costo && errors.costo}
        />
      </div>

      {/* BUTTONS */}
      <div className='flex flex-col gap-3 min-[500px]:flex-row min-[500px]:justify-between'>
        <button
          type='button'
          onClick={() => closeModal()}
          className='w-full btn btn-outline btn-primary min-[500px]:w-[11rem]'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='w-full btn btn-primary min-[500px]:w-[11rem]'
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
