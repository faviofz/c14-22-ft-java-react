import PropTypes from 'prop-types';

export function DashboardPanel({ children, title, Icon, listItems }) {
  return (
    <div className='dashboard-panel flex flex-col justify-between gap-5 p-5 h-[30rem] bg-base-200 rounded-3xl w-full'>
      <div className='flex gap-5'>
        <Icon />
        <h1>{title}</h1>
      </div>
      <div className='flex flex-col items-start gap-3 overflow-y-auto h-full'>
        {listItems.map(({ name, category }, index) => (
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
  Icon: PropTypes.node,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};
