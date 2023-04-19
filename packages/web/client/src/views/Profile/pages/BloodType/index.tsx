/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import BloodIcon from '../../../../shared/themes/assets/images/profile-blood.svg';
import SelectCaret from '../../../../shared/themes/assets/images/select-caret.svg';
import Button from '../../../../shared/components/Button';
import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const BloodType = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;

  const [bloodType, setBloodType] = useState(
    user?.additional_info?.blood_type || 'default',
  );

  const [errorMessages, setErrorMessages] = useState({
    bloodType: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const checkBloodType = () => {
    if (
      !validator.isIn(bloodType, [
        'A+',
        'A-',
        'AB+',
        'AB-',
        'B+',
        'B-',
        'O+',
        'O-',
      ])
    ) {
      setErrorMessages({
        ...errorMessages,
        bloodType: 'Please select a blood type',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      bloodType: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      blood_type: bloodType,
    };

    if (checkBloodType()) {
      try {
        setLoading(true);
        const data = await axiosCustom().put(
          '/user/update/additionalinfo',
          userData,
        );
        if (data) {
          updateUser({
            ...user,
            additional_info: {
              ...user?.additional_info,
              ...userData,
            },
          });
          toast.success('Blood Type updated successfully', {
            className: 'toasty',
          });
          setLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.errMessage);
        setLoading(false);
      }
    }
  };

  return (
    <div className="Profile">
      {loading && <Loader />}
      <div className="Profile-header">
        <span className="Profile-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <p>Blood Type</p>
        </span>

        <div className="Profile-img">
          <img src={BloodIcon} alt="blood type" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form" onSubmit={handleSubmit}>
            <div>
              <label className="Profile-label">Select Your Blood Type</label>
            </div>

            <div className="Profile-select">
              <select
                name="blood-type"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                onBlur={checkBloodType}
                className="Vitals-dropdown Profile-dropdown"
              >
                <option value="default" disabled>
                  Blood Type
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <img
                src={SelectCaret}
                alt="select"
                className="Profile-select-caret"
              />
            </div>
            <div className="error-msg">{errorMessages.bloodType}</div>

            <Button
              submit
              text="Update"
              className="btn-classic Profile-blood-btn"
            />
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

export default BloodType;
