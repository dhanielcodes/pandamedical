import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import InsuranceIcon from '../../../../shared/themes/assets/images/insurance.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Insurance = ({ history }: RouteComponentProps<RouteParams>) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="Profile">
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Insurance</p>
        </span>

        <div className="Profile-img">
          <img src={InsuranceIcon} alt="insurance" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <div className="Profile-empty">
            <img src={Empty} alt="empty" className="Profile-empty-image" />
            <p className="Profile-empty-text">Empty!</p>
            <p className="Profile-empty-info">No Insurance Information Found</p>
          </div>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'Dashboard-modal',
        }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default Insurance;
