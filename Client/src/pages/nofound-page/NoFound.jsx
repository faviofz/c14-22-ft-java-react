import { Link } from 'react-router-dom';
import { Image404 } from './components';
import './nofound-page.scss';

export default function NoFound() {
  return (
    <div className='nofound'>
      <div className='container'>
        <div className='nofound-left'>
          <h1 className='title'>
            <b>Ooops...</b>Página no encontrada
          </h1>
          <p>
            Parece que esta página no existe.
            <br />
            Comprueba la URL e inténtalo de nuevo.
            <br />
            <Link to='/login' className='btn btn-second'>
              Regresar
            </Link>
          </p>
        </div>
        <div className='nofound-right'>
          <Image404 />
        </div>
      </div>
    </div>
  );
}
