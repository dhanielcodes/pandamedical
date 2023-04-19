/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-responsive-modal';
import moment from 'moment';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import LocationPin from '../../../../shared/themes/assets/images/location-pin.svg';
import CheckIcon from '../../../../shared/themes/assets/images/accept-check.svg';
import ClockIcon from '../../../../shared/themes/assets/images/clock-icon.svg';
import RejectIcon from '../../../../shared/themes/assets/images/reject-icon.svg';

import axiosCustom from '../../../../utilities/axios';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import DoctorMenu from '../../../../shared/components/DoctorMenu';

interface RouteParams {
  appointmentId: string;
}

const DocAppointmentDetails = ({
  history,
  match,
}: RouteComponentProps<RouteParams>) => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { state } = useContext(AuthContext);
  const { user } = state;
  const userId = user?.id;

  const { appointmentId } = match.params;

  const [appointments, setAppointments] = useState([]);

  const singleAppointment: { [key: string]: any } = appointments?.filter(
    (ap: { [key: string]: any }) => ap.id === appointmentId,
  )[0];

  const appointmentUserDetails =
    userId === singleAppointment?.scheduler?.id
      ? singleAppointment?.appointee
      : singleAppointment?.scheduler;

  const profilePicture = getUserAvatar(
    appointmentUserDetails,
    Avatar,
    FemaleAvatar,
  );

  const name = `${appointmentUserDetails?.firstName} ${appointmentUserDetails?.lastName}`;

  const gender = appointmentUserDetails?.gender.toLowerCase();
  const dob = moment(appointmentUserDetails?.dateOfBirth).format('DD/MM/YYYY');

  const topic = singleAppointment?.message?.topic;
  const note = singleAppointment?.message?.note;

  const status = singleAppointment?.timeslots?.status.toLowerCase();

  const pending = status === 'pending';
  const rejected = status === 'rejected';
  const rescheduled = status === 'rescheduled';

  const location = `${
    appointmentUserDetails?.state ? `${appointmentUserDetails?.state}, ` : ''
  } ${appointmentUserDetails?.country || ''}`;

  const insurance = appointmentUserDetails?.hmo?.companyName || '';

  const date = moment(singleAppointment?.timeslots?.slot_date).format(
    'DD/MM/YYYY',
  );

  const time = moment(singleAppointment?.timeslots?.slot_time, 'hh:mm').format(
    'hh:mm a',
  );

  const fetchAppointments = async () => {
    try {
      const data = await axiosCustom().get(`/appointments/${userId}`);
      setAppointments(data.data.data.appointments);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  const acceptAppointment = async () => {
    try {
      setLoading(true);
      const data = await axiosCustom().put(
        `appointments/${appointmentId}/accept`,
      );
      if (data) fetchAppointments();
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setLoading(false);
    }
  };

  const rejectAppointment = async () => {
    try {
      setLoading(true);
      const data = await axiosCustom().put(
        `appointments/${appointmentId}/reject`,
      );
      if (data) fetchAppointments();
      toast.info('Appointment Rejected', { className: 'toasty' });
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setLoading(false);
    }
  };

  const reschedule = () => {
    history.push(`/doctor/appointments/${appointmentId}/reschedule`);
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="BookAppointment PatientProfile AppointmentDetails">
      {loading && <Loader />}
      <div className="BookAppointment-header">
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={BackArrow}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
          <p>Appointment</p>
        </span>
      </div>

      <div className="PatientProfile-body">
        {appointmentUserDetails && (
          <div className="PatientProfile-profile-header AppointmentDetails-body">
            <div className="PatientProfile-status-insurance">
              <div className="PatientProfile-online-status">
                {appointmentUserDetails?.isOnline ? (
                  <span className="AppointmentDetails-online">Online</span>
                ) : (
                  <span className="AppointmentDetails-offline">Offline</span>
                )}
              </div>
              <div>
                <p className="PatientProfile-insurance">{insurance}</p>
              </div>
            </div>

            <div className="PatientProfile-basic-details">
              <div className="PatientProfile-avatar-container">
                <div className="PatientProfile-avatar">
                  <img src={profilePicture} alt="avatar" />
                </div>
              </div>

              <p className="PatientProfile-name">{name}</p>
              <p className="PatientProfile-gender">Sex: {gender}</p>
              <p className="PatientProfile-dob">{dob}</p>
              {location?.trim() && (
                <div className="PatientProfile-address">
                  <img
                    src={LocationPin}
                    alt="address"
                    className="PatientProfile-location-pin"
                  />
                  <p>{location}</p>
                </div>
              )}
            </div>

            <div className="AppointmentDetails-details">
              {topic?.trim() && (
                <p className="AppointmentDetails-topic">{topic}</p>
              )}

              <p className="AppointmentDetails-date">
                On {date} at {time}
              </p>

              {note?.trim() && (
                <p className="AppointmentDetails-note">{note}</p>
              )}
            </div>

            {!rejected && !rescheduled && (
              <div className="AppointmentDetails-buttons">
                {pending && (
                  <button
                    type="button"
                    className="btn-classic AppointmentDetails-btn"
                    onClick={acceptAppointment}
                  >
                    Accept
                    <img src={CheckIcon} alt="accept" className="btn-image" />
                  </button>
                )}

                <div className="AppointmentDetails-reschedule-reject">
                  <button
                    type="button"
                    className="btn-classic AppointmentDetails-btn AppointmentDetails-btn-reschedule"
                    onClick={reschedule}
                  >
                    Reschedule
                    <img src={ClockIcon} alt="accept" className="btn-image" />
                  </button>

                  <button
                    type="button"
                    className="btn-classic AppointmentDetails-btn AppointmentDetails-btn-reject"
                    onClick={rejectAppointment}
                  >
                    Reject
                    <img src={RejectIcon} alt="accept" className="btn-image" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <DoctorToolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <DoctorMenu />
      </Modal>
    </div>
  );
};

export default withRouter(DocAppointmentDetails);
