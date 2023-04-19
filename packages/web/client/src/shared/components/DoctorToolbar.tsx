import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Plus from '../themes/assets/images/plus.svg';
import Home from '../themes/assets/images/home.svg';
import Records from '../themes/assets/images/medical-records.svg';
import Appointment from '../themes/assets/images/appointment.svg';
import LocationPin from '../themes/assets/images/pin.svg';

interface IProps {
  onButtonClick: () => void;
  backgroundColor?: string;
}

const DoctorToolbar = ({ onButtonClick, backgroundColor }: IProps) => {
  const { pathname } = useLocation();
  return (
    <div className="Toolbar Toolbar-btn-tool-bar">
      <div className="btn-div">
        <button
          type="button"
          className="Toolbar-floating-btn"
          onClick={onButtonClick}
        >
          <img src={Plus} alt="plus" />
        </button>
      </div>

      <div className="Toolbar-toolbar" style={{ backgroundColor }}>
        <ul>
          <Link to="/doctor/dashboard" className="link">
            <li className={pathname === '/doctor/dashboard' ? 'active' : ''}>
              <img src={Home} alt="home" className="home-icon" />
              <br />
              Home
            </li>
          </Link>

          <li className={pathname === '/medical-records' ? 'active' : ''}>
            <img src={Records} alt="file records" />
            <br />
            Medical Records
          </li>
        </ul>

        <ul>
          <Link to="/doctor/appointments" className="link">
            <li className={pathname === '/doctor/appointments' ? 'active' : ''}>
              <img src={Appointment} alt="appointment" />
              <br />
              Appointments
            </li>
          </Link>

          <li className={pathname === '/connect' ? 'active' : ''}>
            <img src={LocationPin} alt="location pin" />
            <br />
            Connect
          </li>
        </ul>
      </div>
    </div>
  );
};

DoctorToolbar.defaultProps = { backgroundColor: 'transparent' };

export default DoctorToolbar;
