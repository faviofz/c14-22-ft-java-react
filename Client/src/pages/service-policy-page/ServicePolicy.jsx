import { Panel, Logo } from '@/components';
import { DoubleColumnLayout } from '@/layout';
import { Link } from 'react-router-dom';
import './service-policy-page.scss';
import { useAuth } from '@/hooks/useAuth';

export default function ServicePolicy() {
  const { authState } = useAuth();
  const { isLogged } = authState;

  return (
    <div className='service-polity-page'>
      <DoubleColumnLayout>
        <DoubleColumnLayout.Left>
          {isLogged ? (
            <div className=''></div>
          ) : (
            <header>
              <Logo />
              <div>
                ¿No tiene una cuenta? <Link to='/register'>Regístrese</Link>
              </div>
            </header>
          )}

          <Panel title='Términos y condiciones'>
            <p className='underline'>Ultima actualizacion el Oct 19, 2023</p>

            <ul className='p-5 list-decimal'>
              <li className='text-lg font-bold'>Elegibilidad y Registro</li>
              <ul className='pl-4 list-disc'>
                <li>
                  Antes de hacer uso de nuestros sitios web y servicios, es
                  crucial asegurarse de que dicho uso cumple con todas las
                  leyes, normativas y regulaciones aplicables. Su derecho a
                  acceder a los Sitios web y Servicios se anula si su uso se
                  encuentra prohibido o en conflicto con alguna ley o regulación
                  vigente. Le incumbe la responsabilidad de tomar estas
                  decisiones antes de utilizar nuestros sitios web y servicios.
                </li>
                <li>
                  Nuestros Sitios web y Servicios no están dirigidos ni
                  destinados al uso por parte de personas menores de 18 años. Al
                  utilizarlos, usted declara y garantiza que: (a) tiene 18 años
                  de edad o más; o (b) posee el consentimiento legal, permisos y
                  la capacidad necesarios para utilizar los Sitios web y
                  Servicios en las jurisdicciones correspondientes, tal como
                  usted mismo determine.
                </li>
                <li>
                  Para acceder a los Servicios y a ciertas funcionalidades de
                  los Sitios web, deberá registrarse y crear una cuenta
                  ("Cuenta"). Al registrarse, es posible que deba
                  proporcionarnos cierta información personal, como su nombre,
                  dirección de correo electrónico y un método de pago válido.
                  También tiene la opción de proporcionar información adicional
                  de manera voluntaria. La información de la cuenta y su uso
                  están sujetos a nuestra Política de Privacidad y al Acuerdo de
                  Procesamiento de Datos.
                </li>
                <li>
                  Nos reservamos el derecho, a nuestra entera discreción, de
                  negar la provisión o la continuidad de los Sitios web y
                  Servicios a cualquier persona o entidad y de modificar los
                  criterios de elegibilidad en cualquier momento, incluso si no
                  cumple con los Términos de Servicio. Asimismo, mantenemos el
                  derecho de desactivar, cancelar, restringir el acceso,
                  inhabilitar servicios y/o eliminar cualquier Cuenta o acceso a
                  los Sitios web y Servicios a nuestra completa discreción.
                </li>
              </ul>
              <li className='mt-5 text-lg font-bold'>
                Derechos de Propiedad de StockWise
              </li>
              <ul className='pl-4 list-disc'>
                <li>
                  En lo que respecta a los sitios web y servicios, estos son
                  propiedad de StockWise y/o son proporcionados por la misma.
                  Los nombres, logotipos, marcas comerciales, imagen
                  corporativa, diseños, interfaces visuales, gráficos,
                  estructura, información, datos, código informático (incluido
                  el código fuente o el código objeto), productos, software,
                  servicios y todos los demás elementos de los Sitios web y
                  Servicios (en adelante, los "Materiales") que ofrecemos están
                  protegidos por leyes de propiedad intelectual y otras
                  regulaciones. Todos los Materiales presentes en los Sitios web
                  y Servicios son propiedad de StockWise o de sus licenciantes.
                  Usted solo puede utilizar los Sitios web y Servicios de
                  acuerdo a nuestras autorizaciones expresas y a lo establecido
                  en estos Términos de Servicio. Debe cumplir y respetar todos
                  los avisos, información y restricciones relacionados con la
                  propiedad intelectual que se encuentren en los Sitios web y
                  Servicios. Nos reservamos todos los derechos sobre los Sitios
                  web y Servicios que no sean otorgados expresamente en estos
                  Términos de Servicio.
                </li>
                <li>
                  Si decide proporcionar comentarios y sugerencias acerca de
                  problemas, modificaciones o mejoras sugeridas para los Sitios
                  web y Servicios (en adelante, "Comentarios"), automáticamente
                  nos otorga un derecho de autor sin restricciones, perpetuo,
                  irrevocable, no exclusivo y completamente pagado. Este derecho
                  nos permite explotar los Comentarios de cualquier forma y con
                  cualquier propósito, incluyendo la mejora de los Sitios web y
                  Servicios y la creación de otros productos y servicios.
                </li>
                <li>
                  Además, nos otorga el permiso para incluir su nombre,
                  logotipos y marcas comerciales en nuestros materiales y en
                  nuestras comunicaciones promocionales y de marketing.
                </li>
                <li>
                  Algunos de los Materiales proporcionados por StockWise están
                  bajo licencia de una o más licencias de código abierto,
                  Creative Commons u otros tipos de licencias similares (en
                  conjunto, "Licencias de Código Abierto"). Nada en estos
                  Términos de Servicio tiene como objetivo impedir, restringir o
                  limitar la obtención de dichos materiales bajo las Licencias
                  de Código Abierto aplicables o el uso de estos materiales bajo
                  tales licencias.
                </li>
                <li>
                  Sujeto a su cumplimiento total y continuo de estos Términos de
                  Servicio y a nuestros derechos en ellos, StockWise le otorga
                  una licencia limitada, no exclusiva, intransferible, no
                  sublicenciable y revocable para acceder y utilizar los Sitios
                  web y/o los servicios de acuerdo a lo descrito en estos
                  Términos de Servicio.
                </li>
              </ul>
              <li className='mt-5 text-lg font-bold'>
                Creación de Contenido de la Comunidad y de Usuarios
              </li>
              <ul className='pl-4 list-disc'>
                <li>
                  Determinadas funcionalidades de nuestros sitios web (como la
                  Comunidad de StockWise) le permiten enviar o cargar contenido,
                  como mensajes, reseñas, medios, imágenes, carpetas, datos,
                  texto y otros tipos de trabajos (denominados su "Contenido de
                  Usuario") y publicar dicho Contenido de Usuario en nuestros
                  Sitios Web.
                </li>
                <li>
                  Al proporcionar su Contenido de Usuario a través de los Sitios
                  web o en ellos, usted concede a StockWise un derecho y
                  licencia (con derecho a sublicenciar) a nivel global, no
                  exclusiva, sin regalías y completamente pagada para alojar,
                  almacenar, transferir, mostrar, representar y reproducir su
                  Contenido de Usuario. También le damos derecho a modificar su
                  Contenido de Usuario con el fin de adaptarlo al formato de
                  visualización y a distribuirlo, en su totalidad o en parte, en
                  cualquier formato de medios y a través de cualquier canal de
                  medios.
                </li>
                <li>
                  Al proporcionar su Contenido de Usuario a través de los Sitios
                  web, concede a otros usuarios una licencia no exclusiva para
                  acceder y utilizar su Contenido de Usuario según lo permitido
                  por estos Términos de Servicio y por la funcionalidad de los
                  Sitios web.
                </li>
                <li>
                  Usted asume toda la responsabilidad de su Contenido de Usuario
                  y acepta que StockWise no será responsable de ninguna manera
                  por su Contenido de Usuario. Al proporcionar su Contenido de
                  Usuario a través de los Sitios web, usted manifiesta, declara
                  y garantiza que:
                  <ul className='pl-6 list-decimal'>
                    <li>
                      Usted es el creador y propietario de su Contenido de
                      Usuario o posee las licencias, derechos, consentimientos y
                      permisos necesarios para autorizar a StockWise y a los
                      usuarios de los Sitios web a usar y distribuir su
                      Contenido de Usuario según sea necesario para ejercer las
                      licencias otorgadas por usted en estos Términos de
                      Servicio o de otro modo requerido de usted bajo estos
                      Términos de Servicio.
                    </li>
                    <li>
                      Su Contenido de Usuario y su uso, tal como se contempla en
                      estos Términos de Servicio, no infringen, violan ni se
                      apropian indebidamente de ningún derecho de terceros,
                      incluyendo derechos de autor, marcas comerciales,
                      patentes, secretos comerciales, derechos morales, derechos
                      de privacidad, derechos de publicidad o cualquier otro
                      derecho de propiedad intelectual o de propiedad. Además,
                      su Contenido de Usuario no calumnia, difama, injuria ni
                      viola derechos de privacidad, derechos de publicidad ni
                      cualquier otro derecho de propiedad de cualquier otra
                      persona. Su Contenido de Usuario tampoco incumple ninguna
                      ley o regulación vigente.
                    </li>
                    <li>
                      Usted nos indemnizará ante cualquier reclamación de
                      terceros que surja de su Contenido de Usuario.
                    </li>
                  </ul>
                </li>
                <li>
                  No estamos obligados a editar o controlar su Contenido de
                  Usuario ni el Contenido de Usuario de otros usuarios, y no
                  seremos responsables de ninguna manera por el Contenido de
                  Usuario. Sin embargo, nos reservamos el derecho de filtrar,
                  eliminar, editar o bloquear contenido de usuario en cualquier
                  momento y sin previo aviso, a nuestra discreción.
                </li>
                <li>
                  Al enviar o cargar su Contenido de Usuario, también acepta
                  cumplir con los términos de cualquier Licencia de Código
                  Abierto que pueda aplicarse a su Contenido de Usuario.
                </li>
              </ul>
            </ul>
          </Panel>
          {/* <Footer /> */}
        </DoubleColumnLayout.Left>
        <DoubleColumnLayout.Right></DoubleColumnLayout.Right>
      </DoubleColumnLayout>
    </div>
  );
}
