export default function Card() {
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
      <section className="mt-5 flex flex-wrap gap-3 px-2">
        {data.map((item, index) => (
          <div
            key={index}
            className='w-[336px] h-[153px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'
          >
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 ] object-cover md:w-[120px]'
                  src={item.Img}
                  alt={item.nombre}
                />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  {item.Categoria}
                </div>
                <p className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                  {item.nombre}
                </p>
                <p className='mt-2 text-gray-500'>{item.Marcas}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
