import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import LoaderImage from '../themes/assets/images/loader.svg';

const Loader = () => {
  const [open] = useState(true);
  const onCloseModal = () => null;
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{
        modal: 'Loader',
        overlay: 'Loader-overlay',
      }}
      center
    >
      <div className="Loader-body">
        <img src={LoaderImage} alt="loader" className="Loader-spinner" />
        {/* <p>Loading</p> */}
      </div>
    </Modal>
  );
};

export default Loader;
