import React, { useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import SearchInput from '../../../../shared/components/SearchInput';
import CancelIcon from '../../../../shared/themes/assets/images/cancel.svg';

const HealthcareFacilities = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <div className="BookAppointment">
      <div className="BookAppointment-header">
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={CancelIcon}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
          <p>Healthcare Facilities</p>
        </span>
        <SearchInput
          placeholder="Search Doctors"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="BookAppointment-search"
        />
      </div>

      <p className="BookAppointment-body-heading">Categories</p>
      <div className="BookAppointment-body BookAppointment-specialities-body">
        <Link to="/appointment/hospitals" className="link">
          <div className="BookAppointment-speciality-container">
            <p className="BookAppointment-speciality">Hospitals</p>
          </div>
        </Link>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Maternity Clinic</p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Health Centre</p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">
            Ambulatory Surgical Centers
          </p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Blood banks</p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">
            Clinics and Medical Offices
          </p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Hospice Homes</p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Nursing Homes</p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">
            Orthopedic and Other Rehabilitation Centers
          </p>
        </div>
        <div className="BookAppointment-speciality-container">
          <p className="BookAppointment-speciality">Urgent Care</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HealthcareFacilities);
