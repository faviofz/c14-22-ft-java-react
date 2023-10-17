import { DoubleColumnLayout } from '@/layout';
import { Image404 } from './components';
import './nofound-page.scss';

export function NoFound() {
  return (
    <div className='nofound'>
      <DoubleColumnLayout double={true}>
        <DoubleColumnLayout.Left>
          {/* <h1>
            <b>Ooops...</b>Página no encontrada
          </h1>
          <p>
            Parece que esta página no existe. Comprueba la URL e inténtalo de
            nuevo.
          </p> */}
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right>
          <Image404 />
        </DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
