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
          <div className='w-full h-full lg:min-w-[60rem] lg:max-h-[35rem] modal-box rounded-3xl'>
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
              <section className='flex flex-col flex-wrap lg:flex-row lg:justify-around'>
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
                    <label>Provedor</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                    />
                  </div>
                  <div className='lg:flex lg:gap-5'>
                    <div className='flex flex-col'>
                      <label>Precio</label>
                      <input
                        type='number'
                        placeholder='0'
                        min='0'
                        step='0.01'
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
                  </div>
                  <div>
                    <label>Marca</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                      list='marcas-list'
                    />
                    <datalist id='marcas-list'>
                      <option>Cocacola</option>
                      <option>Arcor</option>
                      <option>Nestle</option>
                      <option>Gloria</option>
                      <option>Chocolina</option>
                    </datalist>
                  </div>
                </div>
                <div className='flex flex-col lg:gap-[1.7rem]'>
                  <div className='flex flex-col gap-2 lg:gap-[1.7rem]'>
                    <div>
                      <label>Imagen</label>
                      <div className=' h-[9rem] lg:h-[8.2rem] bg-base-200 border-2 border-accent'>
                        <div className='absolute flex items-center justify-center w-8 h-8' />
                        {/* <img src="" alt="" /> */} <h3>PHOTO</h3>
                      </div>
                    </div>
                    <div>
                      <input
                        type='file'
                        className='w-full file-input file-input-bordered file-input-primary'
                      />
                    </div>
                  </div>
                  <div>
                    <label>Categoria</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                      list='category-list'
                    />
                    <datalist id='category-list'>
                      <option>Tecnologia</option>
                      <option>Lacteos</option>
                      <option>Ropa</option>
                      <option>Carnicería</option>
                      <option>Licores</option>
                    </datalist>
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
          </div>
        </dialog>
      </div>
    </div>
  );
}
