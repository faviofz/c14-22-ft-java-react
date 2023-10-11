// Imports
import Img from '../../assets/svg/Login/img-login.png';
import Logo from "../../assets/svg/logo.png"
//////
export default function Login() {
  return (
    <div>
      <section className='flex w-full h-screen'>
        <section className='bg-[#EDF2F4] w-[40%] flex-col flex justify-evenly items-center'>
          <div className='w-[400px] h-[360px] mt-16 bg-neutral-50 rounded-[35px] shadow'>
            <p className="text-center mt-8  text-slate-800 text-[28px] font-semibold font-['Lexend']">
              Acceda a su cuenta
            </p>
            <nav className='flex items-center flex-col gap-4 mt-4'>
              <div className='flex flex-col'>
                <label>Email</label>
                <input className='w-[321px]' type='email' />
              </div>
              <div className='flex flex-col'>
                <label>Contraseña</label>
                <input className='w-[321px]' type='email' />
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
            <p className='mt-5'>
              No tienes Cuenta?Registrare
            </p>
            <p className="text-slate-800 text-xs font-normal mt-12 font-['Lexend'] leading-snug">© 2023, StockWise. Todos los derechos reservados.</p>
        </section>
        <section
          className='w-[60%] bg-cover bg-center'
          style={{ backgroundImage: `url(${Img})` }}
        >
        <section className='flex  flex-col mt-28 ml-20'>
          <img className='w-[392px] h-[80px] mb-20' src={Logo} alt='logo' />
          <section className=''>
          <h2 className="w-[454px] h-[147px] text-neutral-50 text-[43px] font-semibold font-['Lexend'] leading-[46px]">Solución que facilita la gestión diaria de tu negocio.</h2>
          <div className='flex items-center  gap-5'>
            <p>No tienes Cuenta?</p> <button  className='px-4 py-2 bg-neutral-50 rounded-md border border-blue-500  text-blue-400'>Registrate</button>
          </div>
          </section>
          </section>
         
        </section>
      </section>
    </div>
  );
}
