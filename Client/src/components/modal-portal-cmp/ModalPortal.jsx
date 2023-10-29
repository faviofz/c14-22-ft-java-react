import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './modal-portal.scss';
import { Panel } from '@/components';
import { StoreProvider } from '@/redux';

export function ModalPortal({ title, children, show, handleClose, className }) {
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return createPortal(
    <StoreProvider>
      <div
        className={`modal-portal-component ${show ? 'show' : ''} ${className}`}
      >
        <Panel title={title}>
          <button
            className='modal-portal-component-close btn btn-sm btn-circle btn-ghost'
            onClick={handleClose}
          >
            ✕
          </button>
          <div className='modal-portal-component-body'>{children}</div>
        </Panel>
      </div>
    </StoreProvider>,
    portalNode
  );
}

ModalPortal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  className: PropTypes.string,
};

ModalPortal.defaultProps = {
  title: '',
  show: false,
  className: '',
};
