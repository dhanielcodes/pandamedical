import React, { useContext } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { Link, RouteComponentProps } from 'react-router-dom';
import parsePhoneNumber from 'libphonenumber-js';
import Bell from '../../../shared/themes/assets/images/notification-bell.svg';
import HamburgerClose from '../../../shared/themes/assets/images/hamburger-close.svg';
import Avatar from '../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../shared/themes/assets/images/profile-picture-female.png';
import HealthCareImage from '../../../shared/themes/assets/images/healthcare.svg';
import FamilyImage from '../../../shared/themes/assets/images/menu-family.svg';
import AtmImage from '../../../shared/themes/assets/images/atm-card.svg';
import MenuRecordsImage from '../../../shared/themes/assets/images/menu-records.svg';
import PoliciesImage from '../../../shared/themes/assets/images/policies.svg';
import SupportImage from '../../../shared/themes/assets/images/support.svg';
import SettingsImage from '../../../shared/themes/assets/images/settings.svg';
import LogoutImage from '../../../shared/themes/assets/images/menu-logout.svg';
import SideMenuItem from './SideMenuItem';
import { AuthContext } from '../../../store/context';
import { getUserAvatar } from '../../../helpers/helperFunctions';

interface IProps extends Partial<RouteComponentProps> {
  closeModal: () => void;
}

const DashboardSideMenu = ({ closeModal, history }: IProps) => {
  const { state, logout } = useContext(AuthContext);
  const { user } = state;

  const profilePicture = getUserAvatar(user, Avatar, FemaleAvatar);
  const phoneNumber = parsePhoneNumber(user?.phone);
  const formatedPhoneNumber = phoneNumber?.formatInternational();

  const userLogout = () => {
    logout();
    history?.push('/auth/login');
  };

  return (
    <div className="DashboardSideMenu">
      <div className="DashboardSideMenu-content">
        <div className="DashboardSideMenu-header">
          <div className="DashboardSideMenu-header-top">
            <div>
              <img
                src={Bell}
                alt="notification"
                className="DashboardSideMenu-notification-bell"
              />
            </div>

            <div className="DashboardSideMenu-avatar" id="avi">
              <img src={profilePicture} alt="avatar" />
            </div>

            <div className="DashboardSideMenu-hamburger" onClick={closeModal}>
              <img
                src={HamburgerClose}
                alt="notification"
                className="DashboardSideMenu-close-btn"
              />
            </div>
          </div>

          <div className="DashboardSideMenu-user-details">
            <p className="DashboardSideMenu-name">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="DashboardSideMenu-number">{formatedPhoneNumber}</p>
          </div>

          <div className="DashboardSideMenu-progress-bar">
            <p className="DashboardSideMenu-progress-num">22%</p>
            <Progress
              percent={22}
              theme={{
                default: {
                  trailColor: 'rgba(0, 0, 0,0.11)',
                  color: '#fff',
                },
              }}
              symbolClassName="DashboardSideMenu-progress-symbol"
              status="default"
            />
          </div>

          <div className="DashboardSideMenu-btn-container">
            <Link to="/profile/settings" className="link">
              <p className="DashboardSideMenu-complete-profile">
                Complete your profile
              </p>
            </Link>
          </div>
        </div>

        <div className="DashboardSideMenu-menu">
          <SideMenuItem
            image={HealthCareImage}
            title="health care providers"
            hasBorder
          />
          <SideMenuItem image={FamilyImage} title="family members" hasBorder />
          <SideMenuItem image={AtmImage} title="wallet" hasBorder />

          <Link to="/medical-records" className="link">
            <SideMenuItem
              image={MenuRecordsImage}
              title="medical records"
              hasBorder
            />
          </Link>

          <SideMenuItem
            image={PoliciesImage}
            title="policies"
            iconClassName="DashboardSideMenu-policies"
            hasBorder
          />
          <SideMenuItem
            image={SupportImage}
            title="contact support"
            hasBorder
          />
          <Link to="/profile/settings" className="link">
            <SideMenuItem image={SettingsImage} title="settings" hasBorder />
          </Link>
          <SideMenuItem
            image={LogoutImage}
            title="logout"
            onClick={userLogout}
            iconClassName="DashboardSideMenu-logout"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardSideMenu;
