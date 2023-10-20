import { PlusIcon } from '@/assets/svg';

export function ModaladdProduct() {
  return (
    <div>
      <div>
        <button
          onClick={() => document.getElementById('my_modal_3').showModal()}
          className='w-full gap-5 btn btn-primary'
        >
          <PlusIcon width="15" />
          Nuevo Producto
        </button>

        <dialog id='my_modal_3' className='modal '>
          <div className='w-11/12 max-w-5xl modal-box '>
            <form method='dialog'>
              <div className='flex items-center mb-5 justify-evenly'>
                <h3 className="text-slate-800 text-[28px] font-semibold font-['Inter']">
                  Nuevo Producto
                </h3>
                <button className='text-[30px] hover:text-red-600'>x</button>
              </div>

              <section className='flex justify-center gap-5'>
                <section className='flex flex-col gap-4'>
                  <div>
                    <label>Nombre</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-bordered'
                    />
                  </div>
                  <div>
                    <label>Provedor</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-bordered'
                    />
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex flex-col'>
                      <label>Precio</label>
                      <input
                        type='number'
                        placeholder='Type here'
                        className='input input-bordered w-[60px] max-w-xs'
                      />
                    </div>
                    <div>
                      <label>fecha</label>
                      <input
                        type='date'
                        placeholder='Type here'
                        className='w-full max-w-xs input input-bordered'
                      />
                    </div>
                  </div>
                  <div>
                    <label>Marca</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-bordered'
                    />
                  </div>
                </section>
                <section className='flex flex-col gap-5'>
                  <div>
                    <label>Imagen</label>
                    <div className='w-[309px] h-[146px] relative bg-gray-100 border-2 border-slate-600'>
                      <div className='w-8 h-8 left-[139px] top-[56px] absolute' />
                    </div>
                  </div>
                  <div>
                    <input
                      type='file'
                      className='w-full max-w-xs file-input file-input-bordered file-input-info'
                    />
                  </div>
                  <div>
                    <label>Categoria</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-bordered'
                    />
                  </div>
                </section>
              </section>
              <div className='flex items-center justify-center gap-6 mt-5 mr-3'>
                <div>
                  <button className='btn btn-outline btn-info w-[295px]'>
                    Cancelar
                  </button>
                </div>
                <div>
                  <button className='btn btn-info text-white bg-blue-500 w-[320px]'>
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
