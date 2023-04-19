/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import PhoneIcon from '../../../../shared/themes/assets/images/profile-phone.svg';
import Button from '../../../../shared/components/Button';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';
import axiosCustom from '../../../../utilities/axios';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Phone = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const { state } = useContext(AuthContext);
  const { user } = state;

  const [phoneNumber, setPhoneNumber] = useState(user?.phone || '');

  const [errorMessages, setErrorMessages] = useState({
    phoneNumber: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const checkPhoneNumber = () => {
    if (!phoneNumber) {
      setErrorMessages({
        ...errorMessages,
        phoneNumber: 'Phone Number is required.',
      });
      return false;
    }
    if (
      !validator.isNumeric(phoneNumber) ||
      !validator.isMobilePhone(phoneNumber)
    ) {
      setErrorMessages({
        ...errorMessages,
        phoneNumber: 'Please enter a valid phone number',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      phoneNumber: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { phone: phoneNumber };

    if (checkPhoneNumber()) {
      try {
        setLoading(true);
        const data = await axiosCustom().post('/user/phone/update', userData);
        console.log(data.data.data);
        history.push('/profile/phone/otp', { phoneNumber });
      } catch (error) {
        toast.error(error?.response?.data?.errMessage, { className: 'toasty' });
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

          <p>Change Phone Number</p>
        </span>

        <div className="Profile-img">
          <img src={PhoneIcon} alt="phone" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form" onSubmit={handleSubmit}>
            <div>
              <label className="Profile-label">Phone Number*</label>
            </div>
            <div className="Register-phone-input-field">
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="NG"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                onKeyUp={checkPhoneNumber}
                onBlur={checkPhoneNumber}
                international
              />
            </div>
            <div className="error-msg">{errorMessages.phoneNumber}</div>

            <p className="hint phone-hint">
              Verification Code would be sent to this number.
            </p>
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

export default Phone;
