import PropTypes from 'prop-types';

export function DashboardPanel({
  children,
  title,
  Icon,
  listItems,
  isProduct,
}) {
  return (
    <div className='dashboard-page-panel flex flex-col justify-between gap-5 p-5 h-[25rem] bg-base-200 rounded-3xl w-full'>
      <div className='flex items-center gap-5'>
        <Icon className='w-5 h-5 [&>path]:fill-secondary-content' />
        <h1 className='text-lg font-bold'>{title}</h1>
      </div>
      <div className='flex flex-col items-start h-full gap-3 overflow-y-auto'>
        {isProduct
          ? listItems.map(({ nombre, categoria }, index) => (
              <div key={index} className='flex justify-between w-full'>
                <h3>{nombre}</h3>
                <h3 className='tracking-wide text-primary'>
                  {!categoria ? 'NULL' : categoria.nombre}
                </h3>
              </div>
            ))
          : listItems.map(({ name, category }, index) => (
              <div key={index} className='flex justify-between w-full'>
                <h3>{name}</h3>
                <h3 className='tracking-wide text-primary'>{category}</h3>
              </div>
            ))}
      </div>

      {children}
    </div>
  );
}

DashboardPanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  Icon: PropTypes.func,
  isProduct: PropTypes.bool,
  listItems: PropTypes.any,
};
