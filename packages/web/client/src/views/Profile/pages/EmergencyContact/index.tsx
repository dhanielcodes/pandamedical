/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import PhoneInput from 'react-phone-number-input';
import { toast } from 'react-toastify';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import SirenIcon from '../../../../shared/themes/assets/images/profile-siren.svg';
import Button from '../../../../shared/components/Button';
import InputField from '../../../../shared/components/InputField';
import { namePattern, setInputIcon } from '../../../../helpers/inputHelper';
import Loader from '../../../../shared/components/Loader';
import { AuthContext } from '../../../../store/context';
import axiosCustom from '../../../../utilities/axios';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const EmergencyContact = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;

  const [name, setName] = useState({
    value: user?.additional_info?.emergency_contact?.name || '',
    isValid: false,
  });
  const [phoneNumber, setPhoneNumber] = useState(
    user?.additional_info?.emergency_contact?.phone || '',
  );

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    phoneNumber: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, value: e.target.value });
  };

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const nameIcon = setInputIcon(name, errorMessages.name);

  const checkName = () => {
    if (validator.isEmpty(name.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        name: 'First Name is required.',
      });
      setName({ ...name, isValid: false });
      return false;
    }
    if (!namePattern.test(name.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        name: 'Name should not have numbers, special characters or symbols.',
      });
      setName({ ...name, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      name: '',
    });
    setName({ ...name, isValid: true });
    return true;
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

    const userData = {
      emergency_contact: {
        name: name.value,
        phone: phoneNumber,
      },
    };

    if (checkName() && checkPhoneNumber()) {
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
          toast.success('Emergency contact updated', {
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

          <p>Emergency Contact</p>
        </span>

        <div className="Profile-img">
          <img src={SirenIcon} alt="emergency contact" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form" onSubmit={handleSubmit}>
            <div>
              <label className="Profile-label">Name</label>
            </div>

            <InputField
              type="text"
              placeholder="Contact Name"
              value={name.value}
              icon
              iconImage={nameIcon}
              borderStyle={name.isValid ? '1px solid #7BE495' : ''}
              onChange={handleName}
              errorMessage={errorMessages.name}
              onKeyUp={checkName}
              onBlur={checkName}
              isEmpty={validator.isEmpty(name.value.trim())}
            />

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

            <Button submit text="Update" className="btn-classic" />
          </form>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

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

export default EmergencyContact;
