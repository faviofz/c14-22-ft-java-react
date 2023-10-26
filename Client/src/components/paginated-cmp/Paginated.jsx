import PropTypes from 'prop-types';
export function Paginated({ currentPage, totalPages, onPageChange }) {
  return (
    <div className='flex items-center justify-center my-2 join'>
      <button
        className='text-lg join-item btn text-primary'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        «
      </button>

      <button className='join-item btn'>
        Pagina {currentPage}/{totalPages}
      </button>
      <button
        className='text-lg join-item btn text-primary'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
}

Paginated.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
