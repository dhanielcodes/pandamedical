/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import InfoIcon from '../../../../shared/themes/assets/images/profile-user-info.svg';
import PenIcon from '../../../../shared/themes/assets/images/pen.svg';
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import Button from '../../../../shared/components/Button';
import { namePattern, setInputIcon } from '../../../../helpers/inputHelper';
import InputField from '../../../../shared/components/InputField';
import {
  calculateAge,
  getUserAvatar,
} from '../../../../helpers/helperFunctions';
import { AuthContext } from '../../../../store/context';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const UserInfo = ({ history }: RouteComponentProps<RouteParams>) => {
  const { state, updateUser } = useContext(AuthContext);
  const { user } = state;

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState({
    value: user?.firstName,
    isValid: false,
  });
  const [lastName, setLastName] = useState({
    value: user?.lastName,
    isValid: false,
  });
  const [gender, setGender] = useState(user?.gender);

  const [dateOfBirth, setDateOfBirth] = useState(new Date(user?.dateOfBirth));

  const profilePicture = getUserAvatar(user, Avatar, FemaleAvatar);

  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName({ ...firstName, value: e.target.value });
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName({ ...lastName, value: e.target.value });
  };

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleDate = (date: Date) => setDateOfBirth(date);

  const firstNameIcon = setInputIcon(firstName, errorMessages.firstName);
  const lastNameIcon = setInputIcon(lastName, errorMessages.lastName);

  const checkFirstName = () => {
    if (validator.isEmpty(firstName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        firstName: 'First Name is required.',
      });
      setFirstName({ ...firstName, isValid: false });
      return false;
    }
    if (!namePattern.test(firstName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        firstName:
          'First Name should not have numbers, special characters or symbols.',
      });
      setFirstName({ ...firstName, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      firstName: '',
    });
    setFirstName({ ...firstName, isValid: true });
    return true;
  };

  const checkLastName = () => {
    if (validator.isEmpty(lastName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        lastName: 'Last Name is required.',
      });
      setLastName({ ...lastName, isValid: false });
      return false;
    }
    if (!namePattern.test(lastName.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        lastName:
          'Last Name should not have numbers, special characters or symbols.',
      });
      setLastName({ ...lastName, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      lastName: '',
    });
    setLastName({ ...lastName, isValid: true });
    return true;
  };

  const checkGender = () => {
    if (!validator.isIn(gender, ['MALE', 'FEMALE', 'OTHER'])) {
      setErrorMessages({
        ...errorMessages,
        gender: 'Please select a gender',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      gender: '',
    });
    return true;
  };

  const checkDateOfBirth = () => {
    if (!dateOfBirth) {
      setErrorMessages({
        ...errorMessages,
        dateOfBirth: 'Please select date of birth',
      });
      return false;
    }
    if (calculateAge(dateOfBirth) < 18) {
      setErrorMessages({
        ...errorMessages,
        dateOfBirth: 'User must be up to 18 years of age',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      dateOfBirth: '',
    });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth,
      gender,
    };
    if (
      checkFirstName() &&
      checkLastName() &&
      checkDateOfBirth() &&
      checkGender()
    ) {
      try {
        setLoading(true);
        const data = await axiosCustom().put('/user/update', userData);

        if (data) {
          updateUser({ ...user, ...userData });
          toast.success('Update successful');
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

          <p>Personal Information</p>
        </span>

        <div className="Profile-img">
          <img src={InfoIcon} alt="personal information" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <div className="Profile-avatar-container">
            <div className="Profile-avatar" id="avi">
              <img src={profilePicture} alt="avatar" />
            </div>

            <div className="Profile-user-info-edit">
              Change Profile Picture{' '}
              <span>
                {' '}
                <img
                  src={PenIcon}
                  alt="edit avatar"
                  className="Profile-user-info-pen"
                />
              </span>
            </div>
          </div>

          <form
            className="Profile-form Profile-user-info-form"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="email" className="Profile-label">
                First Name
              </label>
            </div>
            <InputField
              type="text"
              placeholder="First Name"
              value={firstName.value}
              icon
              iconImage={firstNameIcon}
              borderStyle={firstName.isValid ? '1px solid #7BE495' : ''}
              onChange={handleFirstName}
              errorMessage={errorMessages.firstName}
              onKeyUp={checkFirstName}
              onBlur={checkFirstName}
              isEmpty={validator.isEmpty(firstName.value.trim())}
            />

            <div>
              <label htmlFor="email" className="Profile-label">
                Last Name
              </label>
            </div>

            <InputField
              type="text"
              placeholder="Last Name"
              value={lastName.value}
              icon
              iconImage={lastNameIcon}
              borderStyle={lastName.isValid ? '1px solid #7BE495' : ''}
              onChange={handleLastName}
              errorMessage={errorMessages.lastName}
              onKeyUp={checkLastName}
              onBlur={checkLastName}
              isEmpty={validator.isEmpty(lastName.value.trim())}
            />

            <div>
              <label htmlFor="email" className="Profile-label">
                Gender
              </label>
            </div>

            <div className="Profile-input">
              <div className="Register-select">
                <select
                  name="gender"
                  value={gender}
                  onChange={handleGender}
                  onBlur={checkGender}
                >
                  <option value="default" disabled>
                    Gender
                  </option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div className="error-msg">{errorMessages.gender}</div>
            </div>

            <div>
              <label htmlFor="email" className="Profile-label">
                Date of Birth
              </label>
            </div>

            <div className="InputField date-field border-input">
              <DatePicker
                placeholderText="Date of Birth"
                selected={dateOfBirth}
                onChange={handleDate}
                onSelect={() =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  setErrorMessages({ ...errorMessages, dateOfBirth: '' })
                }
                onBlur={checkDateOfBirth}
                showYearDropdown
                showMonthDropdown
                dateFormat="dd/LL/yyyy"
              />
              <img
                src={CalendarImage}
                alt="calendar"
                className="InputField-icon InputField-cal-icon"
              />
              <div className="error-msg">{errorMessages.dateOfBirth}</div>
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

export default UserInfo;
