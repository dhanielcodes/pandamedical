import React from 'react';
import { Link } from 'react-router-dom';
import Patient from '../../../shared/themes/assets/images/menu-patient.svg';
import FamilyImage from '../../../shared/themes/assets/images/family-img.svg';

const PatientsMenu = () => (
  <div>
    <h3 className="Dashboard-menu-heading">Patients</h3>
    <div className="Dashboard-menu-content">
      <Link to="/doctor/patients/add" className="link">
        <div className="Dashboard-menu-item">
          <span>
            <img
              src={Patient}
              alt="add new patient"
              className="Dashboard-menu-img"
            />
          </span>
          Add New Patient
        </div>
      </Link>

      <Link to="/doctor/my-patients" className="link">
        <div className="Dashboard-menu-item">
          <span>
            <img
              src={FamilyImage}
              alt="my patients"
              className="Dashboard-menu-img"
            />
          </span>
          My patients
        </div>
      </Link>
    </div>
  </div>
);

export default PatientsMenu;
