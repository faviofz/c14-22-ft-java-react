import PropTypes from 'prop-types';

function DashboardPanelContent({ children }) {
  return (
    <div className='flex flex-col items-start h-full gap-3 overflow-y-auto'>
      {children}
    </div>
  );
}
DashboardPanelContent.propTypes = {
  children: PropTypes.node,
};
function DashboardPanelFooter({ children }) {
  return <>{children}</>;
}
DashboardPanelFooter.propTypes = {
  children: PropTypes.node,
};
export function DashboardPanel({ children, title, Icon }) {
  return (
    <div className='dashboard-page-panel flex flex-col justify-between gap-5 p-5 h-[25rem] bg-base-200 rounded-3xl w-full'>
      <div className='flex items-center gap-5'>
        <Icon className='w-5 h-5 [&>path]:fill-secondary-content' />
        <h1 className='text-lg font-bold'>{title}</h1>
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

DashboardPanel.Content = DashboardPanelContent;
DashboardPanel.Footer = DashboardPanelFooter;
