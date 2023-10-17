import {
  IconProductSVG,
} from '@/assets/svg';

export default function DetailModal() {
  return (
    <div className='flex flex-col justify-between w-[27rem] sm:w-[33rem] md:w-[45rem] gap-5 p-5 h-[30rem] bg-base-200 rounded-3xl'>
      <div className='flex gap-5'>
        <img width={20} height={20} src={IconProductSVG} alt='icon product' />
        <h1>Últimos productos registrados</h1>
      </div>
      <div className='flex flex-col gap-3 overflow-y-auto'>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <input
              type='checkbox'
              className='checkbox checkbox-primary checkbox-sm'
            />
            <h1>Producto</h1>
          </div>
          <h1 className='tracking-wide text-primary'>Categoria</h1>
        </div>
      </div>

      <div className='flex flex-col gap-3 mt-5'>
        <button className='w-full btn btn-outline btn-primary'>
          Ver más productos
        </button>
        <button className='w-full btn btn-primary'>Agregar nuevo</button>
      </div>
    </div>
  );
}
