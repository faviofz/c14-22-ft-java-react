export default function ConfigModal() {
  return (
    <div onClick={() => document.getElementById('modal_config').showModal()}>
      <div>
        <button>Configuracion</button>

        <dialog id='modal_config' className='modal'>
          <div className='w-full h-full lg:min-w-[60rem] lg:max-h-[35rem] modal-box rounded-3xl'>
            <form
              method='dialog'
              className='flex flex-col justify-between h-full'
            >
              {/* TITLE */}
              <div className='flex items-center justify-between '>
                <h3 className='text-3xl font-semibold text-secondary '>
                  Perfil
                </h3>
                <button className='absolute btn btn-md btn-circle btn-ghost right-3 top-3'>
                  ✕
                </button>
              </div>

              <div className='flex flex-col justify-between lg:justify-around lg:flex-row-reverse'>
                <section className='flex flex-col items-center justify-center gap-5 lg:bg-base-200 lg:rounded-3xl lg:px-8'>
                  <div className='w-40 h-40 transition-all duration-300 ease-out rounded-full lg:w-56 lg:h-56 bg-primary hover:opacity-40'></div>
                  <h3 className='text-lg text-secondary'>Luis Angel Salcedo</h3>
                </section>
                {/* FORM */}
                <section className='flex flex-col flex-wrap gap-5'>
                  <div>
                    <label>Nombre</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                    />
                  </div>
                  <div>
                    <label>Apellido</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                    />
                  </div>
                  <div>
                    <label>Mail</label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full input input-bordered'
                    />
                  </div>
                  <div>
                    <label htmlFor='tema'>Temas</label>
                    <select className='w-full input input-bordered'>
                      <option value='tema'>Temas</option>
                    </select>
                  </div>
                </section>
              </div>

              {/* BUTTOMS */}
              <div className='w-full'>
                <button className='w-full mb-5 btn btn-primary'>Guardar</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
