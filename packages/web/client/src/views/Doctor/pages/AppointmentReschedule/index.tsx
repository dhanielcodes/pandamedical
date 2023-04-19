/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import Modal from 'react-responsive-modal';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import CaretRight from '../../../../shared/themes/assets/images/caret-right-white.svg';
import PreviousCaret from '../../../../shared/themes/assets/images/left-booking-caret.svg';
import NextCaret from '../../../../shared/themes/assets/images/right-booking-caret.svg';
import TimeSlots from '../../../Appointment/components/TimeSlots';
import axiosCustom from '../../../../utilities/axios';
import MiniLoader from '../../../../shared/components/MiniLoader';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import Loader from '../../../../shared/components/Loader';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import { AuthContext } from '../../../../store/context';
import DoctorMenu from '../../../../shared/components/DoctorMenu';

interface RouteParams {
  appointmentId: string;
}

const AppointmentReschedule = ({
  history,
  match,
}: RouteComponentProps<RouteParams>) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { appointmentId } = match.params;

  const { state } = useContext(AuthContext);
  const { user } = state;
  const doctorId = user?.id;

  const [appointments, setAppointments] = useState([]);

  const singleAppointment: { [key: string]: any } = appointments?.filter(
    (ap: { [key: string]: any }) => ap.id === appointmentId,
  )[0];

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
  const [timeLoading, setTimeLoading] = useState(false);

  const [date, setDate] = useState(moment().format('dddd, D MMM'));
  const today = moment().format('dddd, D MMM');

  const [nextAvailableDate, setNextAvailableDate] = useState('');

  const selectedDate = moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');

  const [timeSlots, setTimeSlots] = useState([]);

  const [selectedTime, setSelectedTime] = useState('');

  const morning = timeSlots.length
    ? timeSlots.filter((slot: { [key: string]: any }) => slot.slot_time < 12)
    : [];

  const afternoon = timeSlots.length
    ? timeSlots.filter(
        (slot: { [key: string]: any }) =>
          slot.slot_time >= 12 && slot.slot_time < 18,
      )
    : [];

  const evening = timeSlots.length
    ? timeSlots.filter((slot: { [key: string]: any }) => slot.slot_time >= 18)
    : [];

  const morningSlots = morning.map((m: { [key: string]: any }) =>
    moment(m.slot_time, 'hh:mm').format('hh:mm a'),
  );

  const afternoonSlots = afternoon.map((a: { [key: string]: any }) =>
    moment(a.slot_time, 'hh:mm').format('hh:mm a'),
  );

  const eveningSlots = evening.map((e: { [key: string]: any }) =>
    moment(e.slot_time, 'hh:mm').format('hh:mm a'),
  );

  const selectSlot = (slot: string) => {
    const selectedSlot = moment(slot, 'hh:mm a').format('HH');
    setSelectedTime(selectedSlot);
  };

  const nextDay = () => {
    const newDate = moment(date, 'DD-MM-YYYY')
      .add(1, 'day')
      .format('dddd, D MMM');
    setDate(newDate);
  };

  const previousDay = () => {
    const newDate = moment(date, 'DD-MM-YYYY')
      .subtract(1, 'day')
      .format('dddd, D MMM');
    setDate(newDate);
  };

  const nextAvailableDay = (day: string) => {
    const newDate = moment(day, 'DD-MM-YYYY').format('dddd, D MMM');
    setDate(newDate);
  };

  const fetchAppointments = async () => {
    try {
      const data = await axiosCustom().get(`/appointments/${doctorId}`);
      setAppointments(data.data.data.appointments);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  const fetchTimeSlots = async () => {
    try {
      setTimeLoading(true);
      const slotDate = moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
      const data = await axiosCustom().get(
        `/timeslots/?appointee_id=${doctorId}&slot_date=${slotDate}`,
      );
      setSelectedTime('');
      setTimeSlots(data?.data?.data?.timeslots);
      setNextAvailableDate(
        moment(data?.data?.data?.next_available_slot).format('ddd, DD'),
      );
      setTimeLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };
  useEffect(() => {
    fetchTimeSlots();
    // eslint-disable-next-line
  }, [date]);

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line
  }, []);

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
          <p className="TimeBooking-header-text">Reschedule Appointment</p>
        </div>
      </div>

      <div className="TimeBooking-body">
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

        <div className="TimeBooking-date-section">
          <div className="TimeBooking-navigation">
            {today !== date ? (
              <div className="TimeBooking-previous" onClick={previousDay}>
                <img src={PreviousCaret} alt="previous day" />
              </div>
            ) : (
              <div />
            )}

            <p className="TimeBooking-date">{date}</p>

            <div className="TimeBooking-next" onClick={nextDay}>
              <img src={NextCaret} alt="next day" />
            </div>
          </div>

          {timeLoading ? (
            <div className="TimeBooking-miniloader-container">
              <MiniLoader />
            </div>
          ) : (
            <div className="TimeBooking-timeslots">
              {timeSlots.length ? (
                <>
                  <TimeSlots
                    timeOfDay="morning"
                    timeSlots={morningSlots}
                    select={selectSlot}
                    selected={selectedTime}
                  />

                  <TimeSlots
                    timeOfDay="afternoon"
                    timeSlots={afternoonSlots}
                    select={selectSlot}
                    selected={selectedTime}
                  />

                  <TimeSlots
                    timeOfDay="evening & night"
                    timeSlots={eveningSlots}
                    select={selectSlot}
                    selected={selectedTime}
                  />

                  <Link
                    to={`/doctor/appointment/confirmation/${appointmentId}/${selectedDate}/${selectedTime}`}
                    className="link"
                    onClick={(e) => !selectedTime && e.preventDefault()}
                  >
                    <div className="TimeBooking-book-btn">Reschedule</div>
                  </Link>
                </>
              ) : (
                <div className="TimeBooking-empty">
                  <p className="TimeBooking-no-slots">
                    No slots available for today
                  </p>

                  <div
                    className="TimeBooking-next-availability"
                    onClick={() => nextAvailableDay(nextAvailableDate)}
                  >
                    Next day avaibility on {nextAvailableDate}
                  </div>

                  <p className="TimeBooking-or">OR</p>

                  <div className="TimeBooking-caret-right" onClick={nextDay}>
                    <img
                      src={CaretRight}
                      alt="other"
                      className="TimeBooking-caret-icon"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
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

export default withRouter(AppointmentReschedule);
