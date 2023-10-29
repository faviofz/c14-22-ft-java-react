import PropTypes from 'prop-types';
import { useId } from 'react';

export function Modal({ title, buttonLabel, buttonIcon, children }) {
  const modalID = useId();
  return (
    <>
      <button
        onClick={() => document.getElementById(modalID).showModal()}
        className='gap-3 lg:w-52 sm:btn-wide btn btn-primary md:w-80'
      >
        {buttonIcon}
        {buttonLabel}
      </button>

      <dialog id={`${modalID}`} className='modal'>
        <div className='modal-panel min-w-full  lg:min-w-[60rem]  modal-box rounded-3xl'>
          <div
            method='dialog'
            className='flex flex-col justify-between h-full relative'
          >
            <div className='flex items-center justify-between'>
              <h3 className='mb-5 text-3xl font-semibold text-secondary flex-2'>
                {title}
              </h3>
              <form method='dialog' className='flex-1'>
                <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'>
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
