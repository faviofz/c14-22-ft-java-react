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

              <section className='flex flex-col items-center justify-center gap-5'>
                <div className='w-56 h-56 transition-all duration-300 ease-out rounded-full bg-primary hover:opacity-40'></div>
                <h3 className='text-lg text-secondary'>Luis Angel Salcedo</h3>
              </section>
              {/* FORM */}
              <section className='flex flex-col flex-wrap gap-5 lg:flex-row lg:justify-around'>
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

              {/* BUTTOMS */}
              <div>
                <button className='w-full lg:btn-wide btn btn-primary'>
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
