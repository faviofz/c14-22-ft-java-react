import { Panel, Input, Button, Footer, Logo } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { Link } from 'react-router-dom';
import { imgRegister } from '@/assets/images';
import './register-page.scss';

export default function Register() {
  return (
    <div className='register-page'>
      <DoubleColumnLayout double={true} reverse={true}>
        <DoubleColumnLayout.Left>
          <header>
            <Logo />
          </header>
          <Panel title='Cree su cuenta'>
            <form>
              <Input label='Nombre' placeholder='Ingresa tu Nombre' />
              <Input label='Apellidos' placeholder='Ingresa tus Apellidos' />
              <Input
                label='Correo electrónico'
                placeholder='Ingresa tu correo electrónico'
              />
              <Input label='Contraseña' placeholder='Ingresa tu contraseña' />
              <Input
                label='Confirmar Contraseña'
                placeholder='Ingresa tu contraseña'
              />
              <div className='terminos-condiciones'>
                <input
                  type='checkbox'
                  className='toggle toggle-sm toggle-primary'
                />
                He leido y acepta{' '}
                <Link to={'/service-policy'}>terminos y condiciones</Link>
              </div>
              <Button>Ingresar</Button>
            </form>
            <div>
              ¿Ya tiene una cuenta? <Link to='/login'>Iniciar sesión</Link>
            </div>
          </Panel>

          <Footer />
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right>
          <img src={imgRegister} alt='' />
        </DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
