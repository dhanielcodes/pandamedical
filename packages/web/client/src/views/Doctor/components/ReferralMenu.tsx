import React from 'react';
import { Link } from 'react-router-dom';
import Physician from '../../../shared/themes/assets/images/physician.svg';
import Clinic from '../../../shared/themes/assets/images/menu-clinic.svg';
import Lab from '../../../shared/themes/assets/images/menu-lab.svg';

const ReferralMenu = () => (
  <div>
    <h3 className="Dashboard-menu-heading">Refer To</h3>
    <div className="Dashboard-menu-content">
      <Link to="/doctor/patients/referral/specialties" className="link">
        <div className="Dashboard-menu-item">
          <span>
            <img
              src={Physician}
              alt="physician"
              className="Dashboard-menu-img"
            />
          </span>
          Physician
        </div>
      </Link>

      <div className="Dashboard-menu-item">
        <span>
          <img
            src={Clinic}
            alt="clinics/hospitals"
            className="Dashboard-menu-img"
          />
        </span>
        Clinics/Hospitals
      </div>

      <div className="Dashboard-menu-item">
        <span>
          <img src={Lab} alt="laboratories" className="Dashboard-menu-img" />
        </span>
        Laboratories
      </div>
    </div>
  </div>
);

export default ReferralMenu;
