export function FormProduct() {
  return (
    <form
      method='dialog'
      className='flex flex-col justify-between w-full h-full gap-5'
    >
      <section className='flex flex-col flex-wrap gap-5 lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-4'>
          <div>
            <label>Nombre</label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full input input-bordered'
            />
          </div>
          <div>
            <label>Empresa</label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full input input-bordered'
            />
          </div>
          <div>
            <label>Telefono</label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full input input-bordered'
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='text'
              placeholder='Type here'
              className='w-full input input-bordered'
            />
          </div>
        </div>
      </section>

      {/* BUTTOMS */}
      <div className='flex justify-between '>
        <button className='w-[12rem] lg:btn-wide btn btn-outline btn-primary'>
          Cancelar
        </button>
        <button className='w-[12rem] lg:btn-wide btn btn-primary'>
          Guardar
        </button>
      </div>
    </form>
  );
}
