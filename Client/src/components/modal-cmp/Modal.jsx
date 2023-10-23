import PropTypes from 'prop-types';
import { useId } from 'react';

export function Modal({ title, buttonLabel, buttonIcon, children }) {
  const modalID = useId();
  return (
    <>
      <button
        onClick={() => document.getElementById(modalID).showModal()}
        className='gap-5 lg:w-52 sm:btn-wide btn btn-primary md:w-80'
      >
        {buttonIcon}
        {buttonLabel}
      </button>

      <dialog id={`${modalID}`} className='modal'>
        <div className='w-full h-auto lg:min-w-[60rem] lg:max-h-[35rem] modal-box rounded-3xl'>
          <div method='dialog' className='flex flex-col justify-between h-full'>
            <div className='flex items-center justify-between '>
              <h3 className='text-3xl font-semibold text-secondary '>
                {title}
              </h3>
              <form method='dialog'>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                  ✕
                </button>
              </form>
            </div>
            <div className='flex flex-col flex-wrap lg:flex-row lg:justify-around'>
              {children}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
Modal.propTypes = {
  title: PropTypes.string,
  buttonIcon: PropTypes.node,
  buttonLabel: PropTypes.node,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
};
