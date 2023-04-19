/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import AddressIcon from '../../../../shared/themes/assets/images/profile-address.svg';
import SelectCaret from '../../../../shared/themes/assets/images/select-caret.svg';
import Button from '../../../../shared/components/Button';
import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Address = ({ history }: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(false);
  const { state: AuthState, updateUser } = useContext(AuthContext);
  const { user } = AuthState;

  const [country, setCountry] = useState(user?.country || 'Nigeria');
  const [state, setState] = useState(user?.state || '');
  const [address, setAddress] = useState({
    value: user?.street || '',
    isValid: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    country: '',
    state: '',
    address: '',
  });

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const locationPattern = /^[a-zA-Z0-9()&/?":;\n ,.'-]+$/i;

  const checkCountry = () => {
    if (!country.trim()) {
      setErrorMessages({
        ...errorMessages,
        country: 'This field is required',
      });
      return false;
    }
    if (!locationPattern.test(country.trim())) {
      setErrorMessages({
        ...errorMessages,
        country: 'Invalid character input',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      country: '',
    });
    return true;
  };

  const checkState = () => {
    if (!state.trim()) {
      setErrorMessages({
        ...errorMessages,
        state: 'This field is required',
      });
      return false;
    }
    if (!locationPattern.test(state.trim())) {
      setErrorMessages({
        ...errorMessages,
        state: 'Invalid character input',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      state: '',
    });
    return true;
  };

  const checkAddress = () => {
    if (!address.value.trim()) {
      setErrorMessages({
        ...errorMessages,
        address: 'This field is required',
      });
      setAddress({ ...address, isValid: false });
      return false;
    }
    if (!locationPattern.test(address.value.trim())) {
      setErrorMessages({
        ...errorMessages,
        address: 'Invalid character input',
      });
      setAddress({ ...address, isValid: false });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      address: '',
    });
    setAddress({ ...address, isValid: true });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      country,
      state,
      street: address.value,
    };

    if (checkCountry() && checkState() && checkAddress()) {
      try {
        setLoading(true);
        const data = await axiosCustom().put('/user/update', userData);
        if (data) {
          updateUser({ ...user, ...userData });
          toast.success('Address updated successfully', {
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

          <p>Change Address</p>
        </span>

        <div className="Profile-img">
          <img src={AddressIcon} alt="address" />
        </div>
      </div>

      <div className="Profile-body-container">
        <div className="Profile-body">
          <form className="Profile-form" onSubmit={handleSubmit}>
            <div>
              <label className="Profile-label">Country*</label>
            </div>

            <div className="Profile-select Profile-input">
              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)}
                onBlur={checkCountry}
                classes="Vitals-dropdown Profile-dropdown"
                id="country"
                defaultOptionLabel="Select Country"
              />
              <img
                src={SelectCaret}
                alt="select"
                className="Profile-select-caret"
              />
              <div className="error-msg">{errorMessages.country}</div>
            </div>

            <div>
              <label className="Profile-label">City / Province</label>
            </div>

            <div className="Profile-select Profile-input">
              <RegionDropdown
                country={country}
                value={state}
                onChange={(val) => setState(val)}
                classes="Vitals-dropdown Profile-dropdown"
                defaultOptionLabel="Select State"
                onBlur={checkState}
              />
              <img
                src={SelectCaret}
                alt="select"
                className="Profile-select-caret"
              />
              <div className="error-msg">{errorMessages.state}</div>
            </div>

            <div>
              <label className="Profile-label">Address</label>
            </div>

            <div className="Profile-input">
              <textarea
                placeholder="Address"
                value={address.value}
                onChange={(e) =>
                  setAddress({ ...address, value: e.target.value })
                }
                onKeyUp={checkAddress}
                onBlur={checkAddress}
                className="InputField Profile-address-input"
              />
              <div className="error-msg">{errorMessages.address}</div>
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

export default Address;
