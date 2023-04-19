/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import Modal from 'react-responsive-modal';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import Clock from '../../../../shared/themes/assets/images/clock.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import axiosCustom from '../../../../utilities/axios';
import Toolbar from '../../../../shared/components/Toolbar';
import Menu from '../../../../shared/components/Menu';
import { AuthContext } from '../../../../store/context';
import SearchInput from '../../../../shared/components/SearchInput';
import AppointmentRecord from '../../components/AppointmentRecord';
import MiniLoader from '../../../../shared/components/MiniLoader';

const Appointments = ({ history }: RouteComponentProps) => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentRecords, setAppointmentRecords] = useState([]);

  const [searchVal, setSearchVal] = useState('');

  const { state } = useContext(AuthContext);
  const { user } = state;
  const userId = user?.id;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState('all');

  const allAppointments = () => {
    setStatus('all');
    setAppointmentRecords([...appointments]);
  };

  const pendingAppointments = () => {
    setStatus('pending');
    setAppointmentRecords(
      appointments?.filter(
        (ap: { [key: string]: any }) => ap?.timeslots?.status === 'PENDING',
      ),
    );
  };

  const approvedAppointments = () => {
    setStatus('accepted');
    setAppointmentRecords(
      appointments?.filter(
        (ap: { [key: string]: any }) => ap?.timeslots?.status === 'ACCEPTED',
      ),
    );
  };

  const rejectedAppointments = () => {
    setStatus('rejected');
    setAppointmentRecords(
      appointments?.filter(
        (ap: { [key: string]: any }) => ap?.timeslots?.status === 'REJECTED',
      ),
    );
  };

  const fetchAppointments = async () => {
    try {
      const data = await axiosCustom().get(`/appointments/${userId}`);
      const appointmentsArray = data.data.data.appointments;
      const sortedAppointments = appointmentsArray.sort(
        (a: { [key: string]: any }, b: { [key: string]: any }) =>
          moment(b.timeslots.slot_date).diff(a.timeslots.slot_date),
      );
      setAppointments(sortedAppointments);
      setAppointmentRecords(sortedAppointments);
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
    <div className="TimeBooking Appointments">
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
          <p className="TimeBooking-header-text">Appointments</p>
        </div>
        <div className="Appointments-img">
          <img src={Clock} alt="emergency contact" />
        </div>
      </div>

      <div className="Appointments-body">
        <SearchInput
          placeholder="Search Doctors"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />

        <div className="Appointments-status-filter">
          <div
            className={`Appointments-status-filter-option ${
              status === 'all' ? 'status-active' : ''
            }`}
            onClick={allAppointments}
          >
            All
          </div>
          <div
            className={`Appointments-status-filter-option ${
              status === 'pending' ? 'status-active' : ''
            }`}
            onClick={pendingAppointments}
          >
            Pending
          </div>
          <div
            className={`Appointments-status-filter-option ${
              status === 'accepted' ? 'status-active' : ''
            }`}
            onClick={approvedAppointments}
          >
            Accepted
          </div>
          <div
            className={`Appointments-status-filter-option ${
              status === 'rejected' ? 'status-active' : ''
            }`}
            onClick={rejectedAppointments}
          >
            Rejected
          </div>
        </div>

        {loading && (
          <div className="MiniLoader-container Appointments-records">
            <MiniLoader />
          </div>
        )}

        {!loading && (
          <div className="Appointments-records">
            {appointmentRecords?.length ? (
              appointmentRecords.map((ap: { [key: string]: any }) => {
                const appointmentUserDetails =
                  userId === ap?.scheduler?.id ? ap?.appointee : ap?.scheduler;

                const profilePicture = getUserAvatar(
                  appointmentUserDetails,
                  Avatar,
                  FemaleAvatar,
                );

                const title = ap?.message?.topic || '';

                const date = moment(ap?.timeslots?.slot_date).format(
                  'DD/MM/YYYY',
                );

                const time = moment(ap?.timeslots?.slot_time, 'hh:mm').format(
                  'hh:mm a',
                );

                const appointmentStatus = ap?.timeslots?.status.toLowerCase();
                return (
                  <Link
                    to={`/appointment/${ap?._id}`}
                    key={ap?._id}
                    className="link"
                  >
                    <AppointmentRecord
                      userImage={profilePicture}
                      name={`Dr. ${appointmentUserDetails?.firstName}`}
                      title={title}
                      date={date}
                      time={time}
                      status={appointmentStatus}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="Appointments-empty">
                <img
                  src={Empty}
                  alt="empty"
                  className="Appointments-empty-image"
                />
                <p className="Appointments-empty-text">Empty!</p>
                <p className="Appointments-empty-info">
                  You have no appointments
                </p>
              </div>
            )}
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

export default withRouter(Appointments);
