import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import RecordCard from '../../components/RecordCard';
import Heart from '../../../../shared/themes/assets/images/vitals-heart-rate.svg';
import Oxygen from '../../../../shared/themes/assets/images/vitals-oxygen.svg';

const RecordsList = ({ history }: RouteComponentProps) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="Vitals">
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Medical Records</p>
        </span>

        <div className="Vitals-img">
          <img src={VitalsImg} alt="vitals" />
        </div>
      </div>

      <div className="Vitals-body-container">
        <div className="Vitals-body">
          <RecordCard title="Vitals" image={Heart} linkTo="/vitals" />
          <RecordCard
            title="Lab Results"
            image={Oxygen}
            linkTo="/lab-results"
          />
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

export default RecordsList;
