/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-responsive-modal';
import moment from 'moment';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';
import Button from '../../../../shared/components/Button';
import { AuthContext } from '../../../../store/context';
import ConfirmationSuccess from '../../../Appointment/pages/ConfirmationSuccess';
import { commentPattern } from '../../../../helpers/inputHelper';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import DoctorMenu from '../../../../shared/components/DoctorMenu';

interface RouteParams {
  appointmentId: string;
  selectedDate: string;
  selectedTime: string;
}

const Confirmation = ({ history, match }: RouteComponentProps<RouteParams>) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [confirmed, setConfirmed] = useState(false);
  const { appointmentId, selectedDate, selectedTime } = match.params;

  const { state } = useContext(AuthContext);
  const { user } = state;
  const doctorId = user?.id;

  const [appointments, setAppointments] = useState([]);

  const singleAppointment: { [key: string]: any } = appointments?.filter(
    (ap: { [key: string]: any }) => ap.id === appointmentId,
  )[0];

  const [topic, setTopic] = useState('');
  const [note, setNote] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    topic: '',
    note: '',
  });

  const checkTopic = () => {
    if (!topic.trim()) {
      setErrorMessages({
        ...errorMessages,
        topic: 'This field is required',
      });
      return false;
    }
    if (!commentPattern.test(topic.trim())) {
      setErrorMessages({
        ...errorMessages,
        topic: 'Invalid character input',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      topic: '',
    });
    return true;
  };

  const checkNote = () => {
    if (!note.trim()) {
      setErrorMessages({
        ...errorMessages,
        note: 'This field is required',
      });
      return false;
    }
    if (!commentPattern.test(note.trim())) {
      setErrorMessages({
        ...errorMessages,
        note: 'Invalid character input',
      });
      return false;
    }
    setErrorMessages({
      ...errorMessages,
      note: '',
    });
    return true;
  };

  const appointmentUserDetails =
    doctorId === singleAppointment?.scheduler?.id
      ? singleAppointment?.appointee
      : singleAppointment?.scheduler;

  const profilePicture = getUserAvatar(
    appointmentUserDetails,
    Avatar,
    FemaleAvatar,
  );

  const name = `${appointmentUserDetails?.firstName || ''} ${
    appointmentUserDetails?.lastName || ''
  }`;

  const gender = appointmentUserDetails?.gender.toLowerCase();
  const dob = moment(appointmentUserDetails?.dateOfBirth).format('DD/MM/YYYY');

  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const data = await axiosCustom().get(`/appointments/${doctorId}`);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const appointmentDetails = {
      slot_time: selectedTime,
      slot_date: selectedDate,
      topic,
      note,
    };

    if (checkTopic() && checkNote()) {
      try {
        setLoading(true);
        const data = await axiosCustom().put(
          `appointments/${appointmentId}/reschedule`,
          appointmentDetails,
        );

        if (data) {
          setConfirmed(true);
          toast.success(data?.data?.message);
          setLoading(false);
          setTimeout(() => {
            history.push('/doctor/appointments');
          }, 3000);
        } else {
          toast.error('Something went wrong!');
          setLoading(false);
        }
      } catch (error) {
        toast.error(error?.response?.data?.errMessage);
        setLoading(false);
      }
    }
  };
  return (
    <div className="TimeBooking AppointmentReschedule">
      {loading && <Loader />}
      <div className="BookAppointment-header">
        <div className="TimeBooking-back-text">
          <span className="SpecialityProfiles-header-text-back">
            <div onClick={() => history.goBack()}>
              <img
                src={BackArrow}
                alt="back"
                className="SpecialityProfiles-back"
              />
            </div>
          </span>
          <p className="TimeBooking-header-text">Confirm Appointment</p>
        </div>
      </div>

      <div className="TimeBooking-body Confirmation-body">
        {confirmed ? (
          <ConfirmationSuccess />
        ) : (
          <>
            <div className="TimeBooking-profile-header">
              <div className="SpecialistProfile-basic-details">
                <div className="TimeBooking-avatar">
                  <img src={profilePicture} alt="avatar" />
                </div>

                <div className="TimeBooking-doc-details AppointmentReschedule-details">
                  <p className="SpecialistProfile-name">{name}</p>
                  <p className="SpecialistProfile-qualifications TimeBooking-qualifications">
                    {gender}
                  </p>
                  <p className="SpecialistProfile-qualifications TimeBooking-qualifications">
                    {dob}
                  </p>
                </div>
              </div>
            </div>

            <div className="Confirmation-date-fee">
              <div className="Confirmation-date">
                <p className="Confirmation-heading">DATE & TIME</p>
                <p className="Confirmation-content">
                  {moment(selectedDate).format('dddd, D MMM')}
                </p>
                <p className="Confirmation-content">
                  {moment(selectedTime, 'HH:MM').format('hh:mm A')}
                </p>
              </div>

              <div className="Confirmation-line" />

              <div className="Confirmation-fee">
                <p className="Confirmation-heading">Consultation Fees</p>
                <p className="Confirmation-content">$0</p>
              </div>
            </div>

            <form className="Confirmation-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="bp-systolic" className="Vitals-label">
                  Topic
                </label>
              </div>

              <div>
                <input
                  type="text"
                  className="Vitals-value"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyUp={checkTopic}
                  onBlur={checkTopic}
                />
              </div>
              <div className="error-msg">{errorMessages.topic}</div>

              <div>
                <label htmlFor="bp-systolic" className="Vitals-label">
                  Notes
                </label>
              </div>

              <div>
                <textarea
                  name="comment"
                  id="comment"
                  className="Vitals-comment"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  onKeyUp={checkNote}
                  onBlur={checkNote}
                />
              </div>
              <div className="error-msg">{errorMessages.note}</div>

              <p className="Confirmation-text">Reschedule Appointment</p>

              <Button
                submit
                text="Confirm Now"
                className="TimeBooking-book-btn Confirmation-btn"
              />
            </form>

            <p className="Confirmation-disclaimer">
              By booking this appointment you agree to the{' '}
              <span className="Confirmation-T-C">T&C</span>
            </p>
          </>
        )}
      </div>
      <DoctorToolbar onButtonClick={onOpenModal} />

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

export default withRouter(Confirmation);
