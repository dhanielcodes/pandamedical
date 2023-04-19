import React from 'react';
import { Link } from 'react-router-dom';
import LocationPin from '../../../shared/themes/assets/images/location-pin.svg';

interface IProps {
  profilePicture: string;
  patientName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  insurance: string;
  linkTo: string;
  firstButtonText?: string;
  secondButtonText?: string;
  firstButtonClick?: () => void;
  secondButtonClick?: () => void;
}

const PatientCard = ({
  profilePicture,
  patientName,
  gender,
  dateOfBirth,
  address,
  insurance,
  linkTo,
  firstButtonText,
  secondButtonText,
  firstButtonClick,
  secondButtonClick,
}: IProps) => (
  <div className="PatientCard">
    <div className="PatientCard-content">
      <div className="PatientCard-avatar-info">
        <div className="PatientCard-avatar">
          <img src={profilePicture} alt={patientName} />
        </div>

        <div>
          <Link to={linkTo} className="link">
            <p className="PatientCard-name">{patientName}</p>
          </Link>
          <p className="PatientCard-gender">Sex: {gender}</p>
          <p className="PatientCard-dob">DOB: {dateOfBirth}</p>
          <div className="PatientCard-address">
            <img
              src={LocationPin}
              alt="address"
              className="PatientCard-location-pin"
            />
            <p>{address}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="PatientCard-insurance">{insurance}</p>
      </div>
    </div>

    <div className="PatientCard-buttons">
      {firstButtonText && (
        <button
          type="button"
          className="btn-classic PatientCard-btn"
          onClick={firstButtonClick}
        >
          {firstButtonText}
        </button>
      )}

      {secondButtonText && (
        <button
          type="button"
          className="btn-classic PatientCard-btn PatientCard-second-btn"
          onClick={secondButtonClick}
        >
          {secondButtonText}
        </button>
      )}
    </div>
  </div>
);

PatientCard.defaultProps = {
  firstButtonText: '',
  secondButtonText: '',
  firstButtonClick: () => {},
  secondButtonClick: () => {},
};

export default PatientCard;
