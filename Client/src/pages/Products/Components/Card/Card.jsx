export default function Card() {
  const data = [
    {
      nombre: 'Rutini Cabernet',
      Img: 'https://winesupply.vtexassets.com/arquivos/ids/158573-800-auto?v=638072496489730000&width=800&height=auto&aspect=true',
      Categoria: 'Bebidas',
      Marcas: 'Cabernet',
      Stock: 4,
    },
    {
      nombre: 'Leche Entera',
      Img: 'https://acdn.mitiendanube.com/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-1024-1024.webp',
      Categoria: 'Lacteos',
      Marcas: 'La Serenisima',
      Stock: 23,
    },
    {
      nombre: 'Fideos',
      Img: 'https://marolio.com.ar/sites/default/files/styles/blog_image/public/fideos-2.jpg?itok=vb4alT6i',
      Categoria: 'Fideos',
      Marcas: 'Marolio',
      Stock: 16,
    },
    {
      nombre: 'Ossetra Caviar',
      Img: 'https://s1.abcstatics.com/abc/www/multimedia/gastronomia/2022/07/17/lata-caviar-precio-RneLZjUCFwrew3eoruzSJZP-758x470@abc.jpg',
      Categoria: 'Enlatados',
      Marcas: 'Royal',
      Stock: 4,
    },
    {
      nombre: 'Coca  Cola',
      Img: 'https://static.wixstatic.com/media/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg',
      Categoria: 'bebidas',
      Marcas: 'Coca cola',
      Stock: 20,
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
