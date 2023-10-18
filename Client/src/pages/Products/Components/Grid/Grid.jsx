export default function Grid() {
  
  const data = [
    {
      nombre: 'Messi',
      Img: 'https://res-console.cloudinary.com/dmxriftxk/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2xkLXNhbXBsZS01/template_primary',
      Categoria: 'Deportes',
      Marcas: 'Adidas',
      Stock: 4,
    },
    {
      nombre: 'Messi',
      Img: 'https://res-console.cloudinary.com/dmxriftxk/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2xkLXNhbXBsZS01/template_primary',
      Categoria: 'Deportes',
      Marcas: 'Adidas',
      Stock: 4,
    },
    {
      nombre: 'Messi',
      Img: 'https://res-console.cloudinary.com/dmxriftxk/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2xkLXNhbXBsZS01/template_primary',
      Categoria: 'Deportes',
      Marcas: 'Adidas',
      Stock: 4,
    },
    {
      nombre: 'Messi',
      Img: 'https://res-console.cloudinary.com/dmxriftxk/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2xkLXNhbXBsZS01/template_primary',
      Categoria: 'Deportes',
      Marcas: 'Adidas',
      Stock: 4,
    },
    {
      nombre: 'Messi',
      Img: 'https://res-console.cloudinary.com/dmxriftxk/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y2xkLXNhbXBsZS01/template_primary',
      Categoria: 'Deportes',
      Marcas: 'Adidas',
      Stock: 4,
    },
  ];

  return (
    <div>
      <div className='bg-white mt-10'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Marcas</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </td>
                <td>{item.nombre}</td>
                <td>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src={item.Img} alt='Imagen' />
                  </div>
                </td>
                <td>{item.Categoria}</td>
                <td>{item.Marcas}</td>
                <td>{item.Stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
