import { useCategories, useBrands, useProviders, useProducts } from '@/hooks';
import { useEffect, useState } from 'react';
import axios from "axios"
export function FormProduct() {

  const { categories, getAllCategories } = useCategories();
  const { brands, getAllBrands } = useBrands();
  const { providers, getAllProviders } = useProviders();
  const [image, setImage] = useState("");
  const { createProduct } = useProducts();
  const [formData, setFormData] = useState({
    nombre: '',
    proveedor: '',
    precio: 0,
    fechaVencimiento:'',
    marca: '',
    categoria: '',
    imagen: image
  });

  useEffect(() => {
    getAllCategories();
    getAllBrands();
    getAllProviders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (name === 'fechaVencimiento') {
      const dateParts = value.split('-');
      if (dateParts.length === 3) {
        const [day, month, year] = dateParts;
        const isoDate = `${year}-${month}-${day}`;
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

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "game_store");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dwfhsitwe/image/upload`,
        data
      );
      const imageUrl = response.data.secure_url;
      setImage(imageUrl);
      setFormData({
        ...formData,
        imagen: imageUrl, 
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };



  const formattedDate = formData.fechaVencimiento.split('-').reverse().join('-');
  return (
    <form
      method='dialog'
      className='flex flex-col justify-between w-full h-full gap-5'
      onSubmit={handleSubmit}
    >
      <section className='flex flex-col flex-wrap gap-5 lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-4'>
          <div>
            <label>Nombre</label>
            <input
              type='text'
              name='nombre'
              placeholder='Type here'
              value={formData.nombre}
              onChange={handleInputChange}
              className='w-full input input-bordered'
            />
          </div>
          <div>
            <select
              className='w-full input input-bordered'
              name='proveedor'
              value={formData.proveedor}
              onChange={handleInputChange}
            >
              <option value='all'> Proveedor</option>
              {providers.map(provider => (
                <option key={provider.id} value={provider.email}>
                  {provider.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='lg:flex lg:gap-5'>
            <div className='flex flex-col'>
              <label>Precio</label>
              <input
                type='number'
                name='precio'
                placeholder='0'
                min='0'
                step='0.01'
                value={formData.precio}
                onChange={handleInputChange}
                className='w-full input input-bordered'
              />
            </div>
            <div>
              <label>Fecha</label>
              <input
          type="date"
          name="fechaVencimiento"
          value={formattedDate}
          onChange={handleInputChange}
          className="w-full input input-bordered"
        />
            </div>
          </div>
          <div>
            <select
              className='w-full input input-bordered'
              name='marca'
              value={formData.marca}
              onChange={handleInputChange}
            >
              <option value='all'>Filtrar por Marca</option>
              {brands.map(brand => (
                <option key={brand.id} value={brand.nombre}>
                  {brand.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col lg:gap-[1.7rem] gap-5'>
          <div className='flex flex-col gap-2 lg:gap-[1.7rem]'>
            <div>
              <label>Imagen</label>
              <div className=' h-[9rem] lg:h-[8.2rem] bg-base-200 border-2 border-accent'>
                <div className='absolute flex items-center justify-center w-8 h-8' />
                <img className='w-[180px] h-[100px] ml-20 mt-2' src={image} alt="" /> 
              </div>
            </div>
            <div>
              <input
                type='file'
                name='imagen'
                onChange={handleImage}
                className='w-full file-input file-input-bordered file-input-primary'
                
              />
            </div>
          </div>
          <div>
            <select
              className='w-full input input-bordered mb-6'
              name='categoria'
              value={formData.categoria}
              onChange={handleInputChange}
            >
              <option value='all'>Filtrar por Categoria</option>
              {categories.map(category => (
                <option key={category.id} value={category.nombre}>
                  {category.nombre}
                </option>
              ))}
            </select>
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
