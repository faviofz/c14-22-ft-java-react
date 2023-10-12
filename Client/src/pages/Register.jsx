import imgRegister from '@/assets/images/imgRegister.png';
import logo from '@/assets/logo/logo-blue.svg';

import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='bg-base-200 h-[100vh]'>
      <div className='grid grid-cols-2 '>
        {/* LEFT */}
        <div className=''>
          {/* Image */}
          <img
            src={imgRegister}
            alt='image register'
            className='object-cover h-[100vh] w-full'
          />
        </div>
        {/* RIGTH */}
        <div className='flex flex-col items-center justify-between gap-7 p-5 h-[100vh]'>
          {/* BRAND */}
          <img src={logo} alt='logo' className='w-60' />
          {/* FORM */}
          <div className='flex flex-col items-center gap-5 p-5 bg-base-100 rounded-2xl '>
            <h1 className='text-xl'>Cree su cuenta</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-5'>
                <div>
                  <div className='w-full max-w-xs form-control'>
                    <label className='label'>
                      <span className='label-text'>Nombre</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-sm input-bordered'
                    />
                  </div>
                </div>

                <div>
                  <div className='w-full max-w-xs form-control'>
                    <label className='label'>
                      <span className='label-text'>Apellido</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Type here'
                      className='w-full max-w-xs input input-sm input-bordered'
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className='w-full max-w-xs form-control'>
                  <label className='label'>
                    <span className='label-text'>Correo electronico</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full max-w-xs input input-sm input-bordered'
                  />
                </div>
              </div>

              <div>
                <div className='w-full max-w-xs form-control'>
                  <label className='label'>
                    <span className='label-text'>Contraseña</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full max-w-xs input input-sm input-bordered'
                  />
                </div>
              </div>

              <div>
                <div className='w-full max-w-xs form-control'>
                  <label className='label'>
                    <span className='label-text'>Confirmar contraseña</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='w-full max-w-xs input input-sm input-bordered'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <input
                type='checkbox'
                className='toggle toggle-sm toggle-primary'
              />
              <h1>He leido y acepta terminos y condiciones </h1>
            </div>

            <button className='btn btn-primary btn-wide'>Registrarme</button>

            <h1>
              ¿Ya tiene una cuenta?{' '}
              <Link to='/login' className='text-primary'>
                Iniciar sesión
              </Link>
            </h1>
          </div>
          {/* COPYRIGHT */}
          <h1>© 2023, StockWise. Todos los derechos reservados.</h1>
        </div>
      </div>
    </div>
  );
};
