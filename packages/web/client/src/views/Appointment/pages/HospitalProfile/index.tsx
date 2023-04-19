import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import BackArrow from '../../../../shared/themes/assets/images/back-arrow-white.svg';
import MedPlus from '../../../../shared/themes/assets/images/medplus.jpg';
import LocationPin from '../../../../shared/themes/assets/images/location-purple.svg';
import LocationPinBlue from '../../../../shared/themes/assets/images/location-pin-blue.svg';
import OtherProfilesCard from '../../components/OtherProfilesCard';
// import MapComponent from '../../components/MapComponent';

const HospitalProfile = ({ history }: RouteComponentProps) => {
  const rating = 4.2;
  return (
    <div className="BookAppointment SpecialistProfile HospitalProfile">
      <div
        className="BookAppointment-header HospitalProfile-header"
        style={{ backgroundImage: `url('${MedPlus}')` }}
      >
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={BackArrow}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
        </span>
      </div>

      <div className="SpecialistProfile-body HospitalProfile-body">
        <div className="SpecialistProfile-info">
          <div className="HospitalProfile-name-section SpecialistProfile-info-section">
            <p className="HospitalProfile-name">MedPlus Clinic</p>
            <p className="HospitalProfile-location">
              <span>
                <img
                  src={LocationPin}
                  alt="location"
                  className="HospitalProfile-location-pin"
                />
              </span>
              Lekki Phase 1
            </p>

            <StarRatings
              rating={rating}
              starRatedColor="#FFCB77"
              starHoverColor="#FFCB77"
              starDimension="18px"
              starSpacing="1.5px"
              numberOfStars={5}
              name="rating"
            />
          </div>

          <div className="SpecialistProfile-time-open SpecialistProfile-info-section">
            <p className="SpecialistProfile-closed">CLOSED TODAY</p>
            <p className="SpecialistProfile-time">9:30AM - 08:00PM</p>
            <p className="SpecialistProfile-all-timing">All Timing</p>
          </div>

          <div className="SpecialistProfile-info-section">
            <p className="HospitalProfile-location-map">
              <span>
                <img
                  src={LocationPinBlue}
                  alt="location"
                  className="HospitalProfile-location-pin"
                />
              </span>
              92/6, 3rd Floor, Outer Ring Road, Chandra Layout
            </p>

            {/* <MapComponent /> */}
          </div>

          <div className="SpecialistProfile-others-section">
            <OtherProfilesCard
              name="Dr. Zan Chau"
              practice="Dermatologist"
              fee="50"
              rating="5.0"
              isHospital
              linkTo="/appointment/time"
            />
            <OtherProfilesCard
              name="Dr. Zan Chau"
              practice="Dermatologist"
              fee="50"
              rating="5.0"
              isHospital
              linkTo="/appointment/time"
            />
          </div>

          <div className="SpecialistProfile-info-section SpecialistProfile-services-section">
            <p className="SpecialistProfile-info-section-heading">Services</p>
            <p className="SpecialistProfile-list-item">Ophthalmology</p>
            <p className="SpecialistProfile-list-item">Glaucoma</p>
            <p className="SpecialistProfile-list-item">Cataract</p>

            <p className="SpecialistProfile-info-section-all">All Services</p>
          </div>

          <div className="SpecialistProfile-feedback-section SpecialistProfile-info-section">
            <p className="SpecialistProfile-info-section-heading">Feedback</p>
            <div className="SpecialistProfile-feedback">
              <p>Very good . courteous and efficient staff.</p>
              <p className="SpecialistProfile-feedback-info">
                Jitu Raut . 2 years ago
              </p>

              <p className="SpecialistProfile-info-section-all">All Feedback</p>
            </div>
          </div>

          <div className="SpecialistProfile-action">
            <div className="SpecialistProfile-give-feedback">Give Feedback</div>
            <Link to="/appointment/time" className="link book-link">
              <div className="SpecialistProfile-book">Book</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HospitalProfile);
