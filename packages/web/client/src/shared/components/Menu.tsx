import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from '../themes/assets/images/appointment-img.svg';
import VitalsImage from '../themes/assets/images/vitals-img.svg';
import FamilyImage from '../themes/assets/images/family-img.svg';
import HealthcareImage from '../themes/assets/images/healthcare-img.svg';

const Menu = () => (
  <div>
    <h3 className="Dashboard-menu-heading">Add New</h3>
    <div className="Dashboard-menu-content">
      <Link to="/appointment/book-appointment" className="link">
        <div className="Dashboard-menu-item">
          <span>
            <img
              src={CalendarIcon}
              alt="appointment"
              className="Dashboard-menu-img"
            />
          </span>
          Appointment(s)
        </div>
      </Link>

      <Link to="/vitals/add" className="link">
        <div className="Dashboard-menu-item">
          <span>
            <img
              src={VitalsImage}
              alt="vitals"
              className="Dashboard-menu-img"
            />
          </span>
          Vital(s)
        </div>
      </Link>

      <div className="Dashboard-menu-item">
        <span>
          <img src={FamilyImage} alt="family" className="Dashboard-menu-img" />
        </span>
        Family Member(s)
      </div>

      <div className="Dashboard-menu-item">
        <span>
          <img
            src={HealthcareImage}
            alt="healthcare"
            className="Dashboard-menu-img"
          />
        </span>
        Healthcare Provider(s)
      </div>
    </div>
  </div>
);

export default Menu;
