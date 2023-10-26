import { useCategories, useBrands, useProviders, useProducts } from '@/hooks';
import { Input, Select } from '@/components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function FormProduct() {
  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();
  const [image, setImage] = useState('');
  const { createProduct } = useProducts();
  const [formData, setFormData] = useState({
    nombre: '',
    proveedor: '',
    precio: 0,
    fechaVencimiento: '',
    marca: '',
    categoria: '',
    imagen: image,
  });

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    getAllProviders();
  }, []);

  const handleInputChange = e => {
    const { name, value, type, files } = e.target;
    if (name === 'fechaVencimiento') {
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        const [day, month, year] = dateParts;
        // const isoDate = `${year}-${month}-${day}`;
        const isoDate = `${day}-${month}-${year}`;
        setFormData({
          ...formData,
          [name]: isoDate,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value,
      });
    }
  };

  const handleImage = async e => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'game_store');
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dwfhsitwe/image/upload`,
        data
      );
      const imageUrl = response.data.secure_url;
      setImage(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        nombre: '',
        imagen: '',
        costo: 0,
        impuesto: 0,
        fechaVencimiento: '',
        categoria: '',
        proveedor: '',
        marca: '',
      },
      onSubmit: values => {
        values.fechaVencimiento = values.fechaVencimiento
          .split('-')
          .reverse()
          .join('-');
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
              name='nombre'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nombre}
              errorMessage={touched.nombre && errors.nombre}
            />

            <Select
              name='proveedor'
              label='proveedor'
              list={providers}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.proveedor}
              errorMessage={
                  touched.proveedor && errors.proveedor
                }
            />

            

            <div className='flex flex-col items-center gap-3 lg:gap-5 lg:flex-row'>
              <Input
                type='date'
                label='fecha de vencimiento'
                pattern='\d{2}-\d{2}-\d{4}'
                name='fechaVencimiento'
                value={values.fechaVencimiento}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={
                  touched.fechaVencimiento && errors.fechaVencimiento
                }
              />

              <Input
                label='Precio'
                placeholder='Ingresar precio'
                name='precio'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.precio}
                errorMessage={
                  touched.precio && errors.precio
                }
                type='number'
                min='0'
                step='0.01'
              />
            </div>
            <Select
              label='marca'
              list={brands}
              name='marca'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.marca}
              errorMessage={
                  touched.marca && errors.marca
                }
            />
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col gap-2 lg:gap-[1.7rem]'>
              <div>
                <label>Imagen</label>
                <div className=' h-[9rem] lg:h-[8.2rem] bg-base-200 border-2 border-accent'>
                  <div className='absolute flex items-center justify-center w-8 h-8' />
                  <img
                    className='w-[180px] h-[100px] ml-20 mt-2'
                    src={image}
                    alt=''
                  />
                </div>
              </div>
              <div>
                <Input
                  type='file'
                  name='ProductImagen'
                  onChange={handleImage}
                  className='w-full file-input file-input-bordered file-input-primary'
                />

                <Input
                  type='text'
                  name='imagen'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={(values.imagen = image)}
                  className='hidden'
                  errorMessage={touched.imagen && errors.imagen}
                />

                <Select
                  label='categoria'
                  list={categories}
                  name='categoria'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.categoria}
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
