/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import DoctorIcon from '../../../../shared/themes/assets/images/profile-doctor.svg';
import SearchImage from '../../../../shared/themes/assets/images/lab-result-search.svg';
import ClearSearchImage from '../../../../shared/themes/assets/images/clear-search.svg';
import Button from '../../../../shared/components/Button';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Physician = ({ history }: RouteComponentProps<RouteParams>) => {
  const [physician, setPhysician] = useState('');

  // const [errorMessages, setErrorMessages] = useState({
  //   physician: '',
  // });

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

          <p>Primary Care Specialist</p>
        </span>

        <div className="Profile-img">
          <img src={DoctorIcon} alt="specialist" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form">
            <div>
              <label className="Profile-label">Search For Specialist</label>
            </div>

            <div className="Vitals-search-container">
              <input
                type="text"
                placeholder="Search Specialists"
                className="Vitals-value Vitals-search Profile-physician-search-input"
                value={physician}
                onChange={(e) => setPhysician(e.target.value)}
              />
              <img
                src={SearchImage}
                alt="search"
                className="Vitals-search-icon"
              />
              {physician && (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <div onClick={() => setPhysician('')}>
                  <img
                    src={ClearSearchImage}
                    alt="clear-search"
                    className="Vitals-clear-search-icon"
                  />
                </div>
              )}
            </div>

            <Button submit text="Update" className="btn-classic" />
          </form>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default Physician;
