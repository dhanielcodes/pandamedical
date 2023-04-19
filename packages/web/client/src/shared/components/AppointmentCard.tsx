import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { History } from 'history';
import LocationPin from '../themes/assets/images/location-pin.svg';
import CheckIcon from '../themes/assets/images/accept-check.svg';
import ClockIcon from '../themes/assets/images/clock-icon.svg';

interface IProps {
  appointmentId: string;
  profilePic: string;
  name: string;
  gender: string;
  dob: string;
  location: string;
  insurance: string;
  status: string;
  topic: string;
  acceptAppointment: () => void;
  history: History;
}

const AppointmentCard = ({
  appointmentId,
  profilePic,
  name,
  gender,
  dob,
  location,
  insurance,
  status,
  topic,
  acceptAppointment,
  history,
}: IProps) => {
  const pending = status === 'pending';
  const accepted = status === 'accepted';
  const rejected = status === 'rejected';
  const rescheduled = status === 'rescheduled';

  const reschedule = () => {
    history.push(`/doctor/appointments/${appointmentId}/reschedule`);
  };
  return (
    <div
      className={`AppointmentCard ${
        accepted ? 'AppointmentCard-accepted-appointment' : ''
      } ${rejected ? 'AppointmentCard-rejected-appointment' : ''}`}
    >
      <div className="AppointmentCard-avatar-details-status">
        <div className="AppointmentCard-avatar-details">
          <div className="AppointmentCard-avatar">
            <img src={profilePic} alt={name} />
          </div>

          <div className="AppointmentCard-details">
            <p className="AppointmentCard-name">{name}</p>
            <p className="AppointmentCard-gender">sex: {gender}</p>
            <p className="AppointmentCard-dob">DOB: {dob}</p>
            {location?.trim() && (
              <div className="AppointmentCard-location">
                <span>
                  <img
                    src={LocationPin}
                    alt="location"
                    className="AppointmentCard-location-icon"
                  />
                </span>
                <p className="AppointmentCard-location-text">{location}</p>
              </div>
            )}
            <p className="AppointmentCard-insurance">{insurance}</p>
          </div>
        </div>
        <div
          className={`AppointmentCard-status ${pending ? 'pending' : ''} ${
            accepted ? 'accepted' : ''
          } ${rejected ? 'rejected' : ''}`}
        >
          {status}
        </div>
      </div>

      <div className="AppointmentCard-topic-view">
        {topic?.trim() && (
          <>
            <p className="AppointmentCard-topic">Topic:</p>
            <p className="AppointmentCard-topic-content">{topic}</p>
          </>
        )}

        <Link to={`/doctor/appointments/${appointmentId}`} className="link">
          <p className="AppointmentCard-view">VIEW DETAILS</p>
        </Link>
      </div>

      {!rejected && !rescheduled && (
        <div className="AppointmentCard-buttons">
          {pending && (
            <button
              type="button"
              className="btn-classic AppointmentCard-btn AppointmentCard-btn-accept"
              onClick={acceptAppointment}
            >
              Accept
              <img src={CheckIcon} alt="accept" className="btn-image" />
            </button>
          )}

          <button
            type="button"
            className="btn-classic AppointmentCard-btn AppointmentCard-btn-reschedule"
            onClick={reschedule}
          >
            Reschedule
            <img src={ClockIcon} alt="reschedule" className="btn-image" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
