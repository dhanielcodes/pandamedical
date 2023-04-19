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

import axiosCustom from '../../../../utilities/axios';
import { AuthContext } from '../../../../store/context';
import Loader from '../../../../shared/components/Loader';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import Toolbar from '../../../../shared/components/Toolbar';
import Menu from '../../../../shared/components/Menu';

interface RouteParams {
  appointmentId: string;
}

const AppointmentDetails = ({
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

  const doctorDetails =
    userId === singleAppointment?.scheduler?.id
      ? singleAppointment?.appointee
      : singleAppointment?.scheduler;

  const profilePicture = getUserAvatar(doctorDetails, Avatar, FemaleAvatar);

  const name = `${doctorDetails?.firstName} ${doctorDetails?.lastName}`;

  const gender = doctorDetails?.gender.toLowerCase();
  const dob = moment(doctorDetails?.dateOfBirth).format('DD/MM/YYYY');

  const topic = singleAppointment?.message?.topic;
  const note = singleAppointment?.message?.note;

  const location = `${
    doctorDetails?.state ? `${doctorDetails?.state}, ` : ''
  } ${doctorDetails?.country || ''}`;

  const insurance = doctorDetails?.hmo?.companyName || '';

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
        {doctorDetails && (
          <div className="PatientProfile-profile-header AppointmentDetails-body">
            <div className="PatientProfile-status-insurance">
              <div className="PatientProfile-online-status">
                {doctorDetails?.isOnline ? (
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
          </div>
        )}
      </div>
      <Toolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default withRouter(AppointmentDetails);
