import { PlusIcon } from '@/assets/svg';

export function ModaladdProduct() {
  return (
    <div>
      <div>
        <button
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className='w-full gap-5 md:w-80 lg:w-52 sm:btn-wide btn btn-primary'
        >
          <PlusIcon width='15' />
          Nuevo Producto
        </button>

        <dialog id='my_modal_3' className='modal'>
          <div className='w-full h-full modal-box'>
            <form
              method='dialog'
              className='flex flex-col justify-between h-full'
            >
              {/* TITLE */}
              <div className='flex items-center justify-between '>
                <h3 className='text-3xl font-semibold text-secondary '>
                  Nuevo Producto
                </h3>
                <button className='absolute btn btn-md btn-circle btn-ghost right-3 top-3'>
                  ✕
                </button>
              </div>

              {/* FORM */}
              <section className='flex flex-col gap-5'>
                <div>
                  <label>Nombre</label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full input input-bordered'
                  />
                </div>
                <div>
                  <label>Provedor</label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full input input-bordered'
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Precio</label>
                  <input
                    type='number'
                    placeholder='0'
                    className='w-full input input-bordered'
                  />
                </div>
                <div>
                  <label>Fecha</label>
                  <input
                    type='date'
                    placeholder='Type here'
                    className='w-full input input-bordered'
                  />
                </div>
                <div>
                  <label>Marca</label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full input input-bordered'
                  />
                </div>
                <div>
                  <label>Imagen</label>
                  <div className=' h-[146px] bg-base-200 border-2 border-accent'>
                    <div className='w-8 h-8 left-[139px] top-[56px] absolute' />
                  </div>
                </div>
                <div>
                  <input
                    type='file'
                    className='w-full file-input file-input-bordered file-input-primary'
                  />
                </div>
                <div>
                  <label>Categoria</label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full input input-bordered'
                  />
                </div>
              </section>

              {/* BUTTOMS */}
              <div className='flex justify-between'>
                  <button className='w-[12rem] btn btn-outline btn-primary'>Cancelar</button>
                  <button className='w-[12rem] btn btn-primary'>Guardar</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
