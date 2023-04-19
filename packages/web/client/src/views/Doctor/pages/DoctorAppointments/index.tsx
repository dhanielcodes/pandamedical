import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import SearchInput from '../../../../shared/components/SearchInput';
import BackIcon from '../../../../shared/themes/assets/images/back-icon.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import FilterIcon from '../../../../shared/themes/assets/images/filter.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';

import 'react-responsive-modal/styles.css';
import Filter from '../../components/AppointmentsFilter';
import axiosCustom from '../../../../utilities/axios';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import MiniLoader from '../../../../shared/components/MiniLoader';
import DoctorMenu from '../../../../shared/components/DoctorMenu';
import { AuthContext } from '../../../../store/context';
import AppointmentCard from '../../../../shared/components/AppointmentCard';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import Loader from '../../../../shared/components/Loader';

const DoctorAppointments = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);

  const { state } = useContext(AuthContext);
  const { user } = state;
  const userId = user?.id;

  const [appointments, setAppointments] = useState([]);

  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const onOpenFilterModal = () => setOpenFilter(true);
  const onCloseFilterModal = () => setOpenFilter(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const today = new Date();
  const startOfWeek = moment().clone().startOf('week').format('YYYY-MM-DD');
  const endOfWeek = moment().clone().endOf('week').format('YYYY-MM-DD');
  const startOfMonth = moment().clone().startOf('month').format('YYYY-MM-DD');
  const endOfMonth = moment().clone().endOf('month').format('YYYY-MM-DD');

  const [startDate, setStartDate] = useState('');

  const [endDate, setEndDate] = useState('');

  const todayAppointments = () => {
    setStartDate(moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'));
    setEndDate(moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'));
  };

  const thisWeekAppointments = () => {
    if (moment(startOfWeek).isBefore(startOfMonth, 'month')) {
      setStartDate(startOfMonth);
    } else {
      setStartDate(startOfWeek);
    }

    if (moment(endOfWeek).isAfter(endOfMonth, 'month')) {
      setEndDate(endOfMonth);
    } else {
      setEndDate(endOfWeek);
    }
  };

  const thisMonthAppointments = () => {
    setStartDate(startOfMonth);
    setEndDate(endOfMonth);
  };

  const appointmentUrl =
    startDate && endDate
      ? `/appointments/${userId}/?start_date=${startDate}&end_date=${endDate}`
      : `/appointments/${userId}`;

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const data = await axiosCustom().get(appointmentUrl);
      const appointmentsArray = data.data.data.appointments;
      const sortedAppointments = appointmentsArray.sort(
        (a: { [key: string]: any }, b: { [key: string]: any }) =>
          moment(b.timeslots.slot_date).diff(a.timeslots.slot_date),
      );
      setAppointments(sortedAppointments);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  const acceptAppointment = async (appointmentId: string) => {
    try {
      setStatusLoading(true);
      const data = await axiosCustom().put(
        `appointments/${appointmentId}/accept`,
      );
      if (data) fetchAppointments();
      setStatusLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setStatusLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line
  }, [startDate, endDate]);

  return (
    <div className="BookAppointment SpecialityProfiles DoctorAppointments">
      {statusLoading && <Loader />}
      <div className="BookAppointment-header">
        <div className="SpecialityProfiles-text-location-container">
          <span className="SpecialityProfiles-header-text-back">
            <div onClick={() => history.goBack()}>
              <img
                src={BackIcon}
                alt="back"
                className="SpecialityProfiles-back"
              />
            </div>
          </span>
          <p className="SpecialityProfiles-speciality DoctorAppointments-heading">
            My Appointments
          </p>
        </div>

        <SearchInput
          placeholder="Search Appointments"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="SpecialityProfiles-search"
        />
        <div className="SpecialityProfiles-tags-container">
          <div className="SpecialityProfiles-tag" onClick={todayAppointments}>
            <p>Today</p>
          </div>
          <div
            className="SpecialityProfiles-tag"
            onClick={thisWeekAppointments}
          >
            <p>This week</p>
          </div>
          <div
            className="SpecialityProfiles-tag"
            onClick={thisMonthAppointments}
          >
            <p>This month</p>
          </div>
        </div>
      </div>

      <div className="SpecialityProfiles-body">
        {loading ? (
          <div className="MiniLoader-container">
            <MiniLoader />
          </div>
        ) : (
          <div>
            {appointments.length ? (
              appointments.map((ap: { [key: string]: any }) => {
                const appointmentUserDetails =
                  userId === ap?.scheduler?.id ? ap?.appointee : ap?.scheduler;

                const profilePicture = getUserAvatar(
                  appointmentUserDetails,
                  Avatar,
                  FemaleAvatar,
                );

                // eslint-disable-next-line max-len
                const name = `${appointmentUserDetails?.firstName} ${appointmentUserDetails?.lastName}`;

                const gender = appointmentUserDetails?.gender.toLowerCase();

                const topic = ap?.message?.topic;

                const dob = moment(appointmentUserDetails?.dateOfBirth).format(
                  'DD/MM/YYYY',
                );

                const location = `${
                  appointmentUserDetails?.state
                    ? `${appointmentUserDetails?.state}, `
                    : ''
                } ${appointmentUserDetails?.country || ''}`;

                const insurance =
                  appointmentUserDetails?.hmo?.companyName || '';

                const status = ap?.timeslots?.status.toLowerCase();

                return (
                  <AppointmentCard
                    key={ap?.id}
                    appointmentId={ap?.id}
                    profilePic={profilePicture}
                    name={name}
                    gender={gender}
                    dob={dob}
                    status={status}
                    location={location}
                    insurance={insurance}
                    topic={topic}
                    acceptAppointment={() => acceptAppointment(ap?.id)}
                    history={history}
                  />
                );
              })
            ) : (
              <div className="SpecialityProfiles-empty">
                <img
                  src={Empty}
                  alt="empty"
                  className="SpecialityProfiles-empty-image"
                />
                <p className="SpecialityProfiles-empty-text">Empty!</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="SpecialityProfiles-filter" onClick={onOpenFilterModal}>
        <img src={FilterIcon} alt="filter" />
      </div>

      <DoctorToolbar onButtonClick={onOpenModal} />

      <Modal
        open={openFilter}
        onClose={onCloseFilterModal}
        classNames={{
          overlay: 'SpecialityProfiles-filter-overlay',
          modal: 'SpecialityProfiles-filter-modal',
        }}
      >
        <Filter closeModal={onCloseFilterModal} />
      </Modal>

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

export default withRouter(DoctorAppointments);
