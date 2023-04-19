import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SearchInput from '../../../../shared/components/SearchInput';
import BackIcon from '../../../../shared/themes/assets/images/back-icon.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';

import 'react-responsive-modal/styles.css';
import PatientCard from '../../components/PatientCard';

const AddPatient = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="BookAppointment SpecialityProfiles Patients">
      <div className="BookAppointment-header">
        <div className="SpecialityProfiles-text-location-container Patients-header-text-back">
          <span className="SpecialityProfiles-header-text-back">
            <div onClick={() => history.goBack()}>
              <img
                src={BackIcon}
                alt="back"
                className="SpecialityProfiles-back"
              />
            </div>
          </span>
          <p className="Patients-heading">Add Patient</p>
        </div>
        <SearchInput
          placeholder="Search Patients"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="SpecialityProfiles-search"
        />
        <div className="SpecialityProfiles-tags-container">
          <div className="SpecialityProfiles-tag">
            <p>Insurance</p>
          </div>
          <div className="SpecialityProfiles-tag">
            <p>No Insurance</p>
          </div>
          <div className="SpecialityProfiles-tag">
            <p>Records</p>
          </div>
        </div>
      </div>

      <div className="SpecialityProfiles-body">
        <PatientCard
          profilePicture={Avatar}
          patientName="John Paul"
          gender="Male"
          dateOfBirth="12/01/1993"
          address="Lagos Island"
          insurance="Reliance HMO"
          firstButtonText="Send Request"
          linkTo="/doctor/patients/:patient"
        />

        <PatientCard
          profilePicture={Avatar}
          patientName="Lois Lane"
          gender="Female"
          dateOfBirth="12/01/1993"
          address="Lagos Island"
          insurance="Reliance HMO"
          firstButtonText="Send Request"
          linkTo="/doctor/patients/:patient"
        />

        <PatientCard
          profilePicture={Avatar}
          patientName="John Paul"
          gender="Male"
          dateOfBirth="12/01/1993"
          address="Lagos Island"
          insurance="Reliance HMO"
          firstButtonText="Send Request"
          linkTo="/doctor/patients/:patient"
        />
      </div>
    </div>
  );
};

export default withRouter(AddPatient);
