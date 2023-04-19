import React from 'react';
// import { Link } from 'react-router-dom';
import CalendarIcon from '../themes/assets/images/appointment-img.svg';
import VitalsImage from '../themes/assets/images/vitals-img.svg';
import FamilyImage from '../themes/assets/images/family-img.svg';
import HealthcareImage from '../themes/assets/images/healthcare-img.svg';

const DoctorMenu = () => (
  <div>
    <h3 className="Dashboard-menu-heading">Add Result</h3>
    <div className="Dashboard-menu-content">
      <div className="Dashboard-menu-item">
        <span>
          <img
            src={CalendarIcon}
            alt="appointment"
            className="Dashboard-menu-img"
          />
        </span>
        New Reading
      </div>

      <div className="Dashboard-menu-item">
        <span>
          <img src={VitalsImage} alt="vitals" className="Dashboard-menu-img" />
        </span>
        Take a Photo
      </div>

      <div className="Dashboard-menu-item">
        <span>
          <img src={FamilyImage} alt="family" className="Dashboard-menu-img" />
        </span>
        Import from Gallery
      </div>

      <div className="Dashboard-menu-item">
        <span>
          <img
            src={HealthcareImage}
            alt="healthcare"
            className="Dashboard-menu-img"
          />
        </span>
        Import from Cloud
      </div>
    </div>
  </div>
);

export default DoctorMenu;
