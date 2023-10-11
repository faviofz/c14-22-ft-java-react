// Imports
import Img from '../../assets/svg/Login/img-login.png';
import Logo from '../../assets/svg/logo.svg';
import ImgFondo from '../../assets/svg/Login/imagenRlogin.svg';

export default function Login() {
  return (
    <div>
      <section className='flex w-full h-screen'>
        <section className=' md:bg-[#EDF2F4] md:w-[40%] w-full flex-col flex justify-evenly items-center'>
          <img
            className='w-[217px] h-[52px] mt-7 md:hidden'
            src={Logo}
            alt='logo'
          />
          <img
            src={ImgFondo}
            alt='Fondo'
            className='md:hidden w-full object-cover h-full  absolute -z-20 '
          />
          <div className='w-[400px] h-[400px] mt-12 bg-neutral-50 rounded-[35px] shadow'>
            <p className="text-center mt-8  text-slate-800 text-[28px] font-semibold font-['Lexend']">
              Acceda a su cuenta
            </p>
            <nav className='flex items-center flex-col gap-4 mt-4'>
              <div className='flex flex-col'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Ingresa tu Email'
                  className='w-[347px] input input-bordered max-w-xs'
                />
              </div>
              <div className='flex flex-col'>
                <label>Contraseña</label>
                <input
                  type='password'
                  placeholder='Contraseña'
                  className='w-[347px] input input-bordered  max-w-xs'

                />
              </div>
            </div>
            </nav>

            <div className='flex mt-5 justify-center items-center'>
              <button className='first:w-[347px] h-12 px-4 py-3 bg-blue-500 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-white text-base font-semibold'>
                Ingresar
              </button>
            </div>
            <p className="text-center mt-10 text-blue-500 text-sm font-semibold font-['Lexend'] leading-[19px]">
              Olvidaste tu contraseña
            </p>
          </div>

          <p className='mt-5 text-white md:text-black'>
            No tienes Cuenta?Registrare
          </p>
          <p className="text-white mb-2 md:text-slate-800 text-xs font-normal mt-12 font-['Lexend'] leading-snug">
            © 2023, StockWise. Todos los derechos reservados.
          </p>
        </section>
        <section
          className='w-[60%] bg-cover bg-center hidden md:block'
          style={{ backgroundImage: `url(${Img})` }}
        >
          <section className='flex  flex-col mt-28 ml-20'>
            <img className='w-[392px] h-[80px] mb-20' src={Logo} alt='logo' />
            <section className=''>
              <h2 className="w-[454px] h-[147px] text-neutral-50 text-[43px] font-semibold font-['Lexend'] leading-[46px]">
                Solución que facilita la gestión diaria de tu negocio.
              </h2>
              <div className='flex items-center mt-2  gap-5'>
                <p className='text-white'>No tienes Cuenta?</p>{' '}
                <button className='px-4 py-2 bg-neutral-50 rounded-md border border-blue-500  text-blue-400'>
                  Registrate
                </button>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
