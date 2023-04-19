/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import LocationPin from '../../../../shared/themes/assets/images/location-pin.svg';

import Heart from '../../../../shared/themes/assets/images/vitals-heart-rate.svg';
import Oxygen from '../../../../shared/themes/assets/images/vitals-oxygen.svg';
import Weight from '../../../../shared/themes/assets/images/vitals-weight.svg';
import Lungs from '../../../../shared/themes/assets/images/vitals-lungs.svg';
import BP from '../../../../shared/themes/assets/images/Bp.svg';
import Height from '../../../../shared/themes/assets/images/vitals-height.svg';
import Temp from '../../../../shared/themes/assets/images/vitals-temp.svg';
import BMI from '../../../../shared/themes/assets/images/vitals-bmi.svg';
import BSA from '../../../../shared/themes/assets/images/vitals-bsa.svg';

import Pill from '../../../../shared/themes/assets/images/pill.svg';
import Syringe from '../../../../shared/themes/assets/images/syringe.svg';
import Allergy from '../../../../shared/themes/assets/images/allergy.svg';
import Risk from '../../../../shared/themes/assets/images/risk.svg';
import FamilyHistory from '../../../../shared/themes/assets/images/family-history.svg';
import FamilyImage from '../../../../shared/themes/assets/images/menu-family.svg';
import LifeStyle from '../../../../shared/themes/assets/images/lifestyle.svg';

import axiosCustom from '../../../../utilities/axios';
import ResultCard from '../../../Dashboard/components/ResultCard';
import { vitalInfo } from '../../../../helpers/vitalsHelper';
import SideMenuItem from '../../../Dashboard/components/SideMenuItem';
import ReferralMenu from '../../components/ReferralMenu';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import DoctorMenu from '../../../../shared/components/DoctorMenu';

const PatientProfile = ({ history }: RouteComponentProps) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [vitals, setVitals] = useState([]);

  const [openReferralMenu, setOpenReferralMenu] = useState(false);

  const onOpenReferralModal = () => setOpenReferralMenu(true);
  const onCloseReferralModal = () => setOpenReferralMenu(false);

  const vitalCardImage = (vital: string) => {
    switch (vital) {
      case 'heart_rate':
        return Heart;
      case 'oxygen_saturation':
        return Oxygen;
      case 'weight':
        return Weight;
      case 'respiration_rate':
        return Lungs;
      case 'blood_pressure':
        return BP;
      case 'height':
        return Height;
      case 'temperature':
        return Temp;
      case 'bmi':
        return BMI;
      case 'bsa':
        return BSA;
      default:
        return '';
    }
  };

  const fetchVitals = async () => {
    const data = await axiosCustom().get('/vitals');
    setVitals(data.data.data);
  };

  useEffect(() => {
    fetchVitals();
  }, []);
  return (
    <div className="BookAppointment PatientProfile">
      <div className="BookAppointment-header">
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={BackArrow}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
        </span>
      </div>

      <div className="PatientProfile-body">
        <div className="PatientProfile-profile-header">
          <div className="PatientProfile-status-insurance">
            <div className="PatientProfile-online-status">Online</div>
            <div>
              <p className="PatientProfile-insurance">Hygeia HMO</p>
            </div>
          </div>

          <div className="PatientProfile-basic-details">
            <div className="PatientProfile-avatar-container">
              <div className="PatientProfile-avatar">
                <img src={Avatar} alt="avatar" />
              </div>
            </div>

            <p className="PatientProfile-name">John Paul</p>
            <p className="PatientProfile-gender">Sex: Male</p>
            <p className="PatientProfile-dob">12/01/1993</p>
            <div className="PatientProfile-address">
              <img
                src={LocationPin}
                alt="address"
                className="PatientProfile-location-pin"
              />
              <p>Lekki Phase 1, Lagos, Nigeria</p>
            </div>

            <div className="PatientProfile-result-heading">
              <p className="PatientProfile-result-latest">Latest Results</p>
              <p className="PatientProfile-result-view-all">View All</p>
            </div>

            <div className="PatientProfile-latest-results">
              {vitals?.length ? (
                vitals.map((vital: { [key: string]: any }) => (
                  <ResultCard
                    key={vital?._id}
                    icon={vitalCardImage(vital?.key)}
                    resultTitle={vital?.title}
                    result="--"
                    symbol={vitalInfo(vital?.key)?.unit!}
                    className="PatientProfile-result-card"
                  />
                ))
              ) : (
                <div />
              )}
            </div>

            <div className="PatientProfile-buttons">
              <button type="button" className="btn-classic PatientProfile-btn">
                View Records
              </button>

              <button
                type="button"
                className="btn-classic PatientProfile-btn PatientProfile-second-btn"
                onClick={onOpenReferralModal}
              >
                Refer
              </button>
            </div>
          </div>
        </div>

        <div className="PatientProfile-menu">
          <SideMenuItem image={Pill} title="medications" hasBorder />
          <SideMenuItem
            image={Syringe}
            title="vaccines and immunizations"
            hasBorder
          />
          <SideMenuItem image={Allergy} title="allergy" hasBorder />

          <SideMenuItem image={Risk} title="risk factors" hasBorder />

          <SideMenuItem
            image={FamilyHistory}
            title="family history"
            hasBorder
          />
          <SideMenuItem image={FamilyImage} title="family members" hasBorder />
          <SideMenuItem image={LifeStyle} title="lifestyle" hasBorder />
        </div>
      </div>

      <DoctorToolbar onButtonClick={onOpenModal} />

      <Modal
        open={openReferralMenu}
        onClose={onCloseReferralModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <ReferralMenu />
      </Modal>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <DoctorMenu />
      </Modal>
    </div>
  );
};

export default withRouter(PatientProfile);
