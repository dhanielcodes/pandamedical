/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import dateformat from 'dateformat';
import 'react-responsive-modal/styles.css';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import SettingsItem from '../../components/SettingsItem';
import { AuthContext } from '../../../../store/context';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import SettingsIcon from '../../../../shared/themes/assets/images/gear.svg';
import PenIcon from '../../../../shared/themes/assets/images/pen.svg';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const Settings = ({ history }: RouteComponentProps<RouteParams>) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { state } = useContext(AuthContext);
  const { user } = state;

  const dob = dateformat(user?.dateOfBirth, 'dd/mm/yyyy');
  const profilePicture = getUserAvatar(user, Avatar, FemaleAvatar);

  return (
    <div className="Profile">
      <div className="Profile-header Profile-settings-header">
        <span className="Profile-settings-header-gear-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Profile-back" />
          </div>

          <div>
            <img src={SettingsIcon} alt="settings" />
          </div>
        </span>
      </div>

      <div className="Profile-settings-body-container">
        <div className="Profile-avatar-container">
          <div className="Profile-avatar" id="avi">
            <img src={profilePicture} alt="avatar" />
          </div>
          <div className="Profile-info-pen">
            <div className="Profile-info">
              <p className="Profile-name">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="Profile-dob">{dob}</p>
              <p className="Profile-gender">{user?.gender.toLowerCase()}</p>
            </div>
            <Link to="/profile/settings/personal-information" className="link">
              <img src={PenIcon} alt="pen" className="Profile-pen" />
            </Link>
          </div>
        </div>
        <div className="Profile-body Profile-settings-body">
          <div className="Profile-settings-section">
            <div className="Profile-settings-sub-heading">
              <p>Contact</p>
            </div>

            <SettingsItem
              title="Phone No."
              value={user?.phone}
              linkTo="/profile/settings/phone"
            />
            <SettingsItem
              title="Email"
              value={user?.email}
              linkTo="/profile/settings/email"
            />
            <SettingsItem title="Address" linkTo="/profile/settings/address" />
          </div>

          <div className="Profile-settings-section">
            <div className="Profile-settings-sub-heading">
              <p>Security</p>
            </div>

            <SettingsItem
              title="Password"
              linkTo="/profile/settings/password"
            />
            {/* <SettingsItem
              title="Passcode"
              linkTo="/profile/settings/passcode"
            /> */}
          </div>

          <div className="Profile-settings-section">
            <div className="Profile-settings-sub-heading">
              <p>Extra</p>
            </div>

            {/* <SettingsItem
              title="Units"
              value={user?.unit_system.toLowerCase()}
              valueStyle="Profile-settings-unit"
              linkTo="/profile/settings/units"
            /> */}
            <SettingsItem
              title="Insurance"
              linkTo="/profile/settings/insurance"
            />
            <SettingsItem
              title="Blood Type"
              linkTo="/profile/settings/blood-type"
            />
            <SettingsItem
              title="Primary Care Physician"
              linkTo="/profile/settings/physician"
            />
            <SettingsItem
              title="Emergency Information"
              linkTo="/profile/settings/emergency"
            />
          </div>
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

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

export default Settings;
