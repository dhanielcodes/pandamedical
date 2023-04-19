/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Hamburger from '../../../../shared/themes/assets/images/hamburger.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import Bell from '../../../../shared/themes/assets/images/notification-bell.svg';
import CaretDown from '../../../../shared/themes/assets/images/caret-down-black.svg';
import IncomeCaret from '../../../../shared/themes/assets/images/income-caret.svg';
import CardImage from '../../../../shared/themes/assets/images/doctor-card.svg';
import QRImage from '../../../../shared/themes/assets/images/doctor-qr.svg';
import DotIndicator from '../../../../shared/components/DotIndicator';
import DoctorMenu from '../../../../shared/components/DoctorMenu';
import { getUserAvatar, greeting } from '../../../../helpers/helperFunctions';

import Patient from '../../../../shared/themes/assets/images/doctor-patient.svg';
import Clinic from '../../../../shared/themes/assets/images/doctor-clinic.svg';
import Lab from '../../../../shared/themes/assets/images/doctor-lab.svg';

import { AuthContext } from '../../../../store/context';
import DoctorSideMenu from '../../components/DoctorSideMenu';
import DoctorToolbar from '../../../../shared/components/DoctorToolbar';
import DoctorOption from '../../components/DoctorOption';
import ActivityItem from '../../../../shared/components/ActivityItem';
import PatientsMenu from '../../components/PatientsMenu';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';
import MiniLoader from '../../../../shared/components/MiniLoader';

const DoctorDashboard = () => {
  const [open, setOpen] = useState(false);
  const [openPatientsOptions, setOpenPatientsOptions] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const filterMenu = useRef<HTMLDivElement>(null);
  const appointmentSpan = useRef<HTMLDivElement>(null);

  const [appointmentsInterval, setAppointmentsInterval] = useState('today');

  const [appointments, setAppointments] = useState([]);
  const appointmentRecords = appointments?.slice(0, 4);
  const [loading, setLoading] = useState(true);
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);

  const { state } = useContext(AuthContext);
  const { user } = state;

  const doctorId = user?.id;

  const profilePicture = getUserAvatar(user, Avatar, FemaleAvatar);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenPatientsModal = () => setOpenPatientsOptions(true);
  const onClosePatientsModal = () => setOpenPatientsOptions(false);

  const onOpenSideMenu = () => setOpenSideMenu(true);
  const onCloseSideMenu = () => setOpenSideMenu(false);

  const today = new Date();
  const startOfWeek = moment().clone().startOf('week').format('YYYY-MM-DD');
  const endOfWeek = moment().clone().endOf('week').format('YYYY-MM-DD');
  const startOfMonth = moment().clone().startOf('month').format('YYYY-MM-DD');
  const endOfMonth = moment().clone().endOf('month').format('YYYY-MM-DD');

  const [startDate, setStartDate] = useState(
    moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'),
  );

  const [endDate, setEndDate] = useState(
    moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'),
  );

  const todayAppointments = () => {
    setAppointmentsInterval('today');
    setStartDate(moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'));
    setEndDate(moment(today, 'DD-MM-YYYY').format('YYYY-MM-DD'));
    setShowFilterMenu(false);
  };

  const thisWeekAppointments = () => {
    setAppointmentsInterval('this week');
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

    setShowFilterMenu(false);
  };

  const thisMonthAppointments = () => {
    setAppointmentsInterval('this month');
    setStartDate(startOfMonth);
    setEndDate(endOfMonth);
    setShowFilterMenu(false);
  };

  const fetchAppointments = async () => {
    try {
      setAppointmentsLoading(true);
      const data = await axiosCustom().get(
        `/appointments/${doctorId}/?start_date=${startDate}&end_date=${endDate}`,
      );
      setAppointments(data.data.data.appointments);
      setLoading(false);
      setAppointmentsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setLoading(false);
      setAppointmentsLoading(false);
    }
  };

  const handleClickOutside = (e: Event) => {
    if (
      filterMenu.current &&
      appointmentSpan.current &&
      !filterMenu.current.contains(e.target as Node) &&
      !appointmentSpan.current.contains(e.target as Node)
    ) {
      setShowFilterMenu(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line
  }, [startDate, endDate]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="Dashboard DoctorDashboard">
      {loading && <Loader />}
      <div className="Dashboard-header">
        <div className="Dashboard-top-section">
          <div className="Dashboard-hamburger" onClick={onOpenSideMenu}>
            <img src={Hamburger} alt="menu-toggler" className="toggle-btn" />
          </div>
          <div className="Dashboard-avatar-group">
            <div className="DoctorDashboard-notification-bell-container">
              <img
                src={Bell}
                alt="notifications"
                className="DoctorDashboard-notification-bell"
              />
              <DotIndicator
                color="#f3f8f3"
                className="DoctorDashboard-notification-indicator"
                text="1"
              />
            </div>
            <div className="Dashboard-avatar" id="avi">
              <img src={profilePicture} alt="avatar" />
            </div>
            <DotIndicator color="#56C596" className="online-status" />
          </div>
        </div>

        <div className="Dashboard-greetings">
          <h2 className="Dashboard-hello">
            {greeting()} <br /> {user?.physician?.shorthand} {user?.firstName}
          </h2>

          <p>
            Your target for today is to keep a positive mindset and smile to
            everyone you meet.
          </p>
        </div>
      </div>

      <div className="DoctorDashboard-options">
        <DoctorOption
          icon={Patient}
          title="Patients"
          onClick={onOpenPatientsModal}
        />
        <DoctorOption icon={Clinic} title="Clinics" />
        <DoctorOption icon={Lab} title="Labs" />
      </div>

      <div className="Dashboard-vitals">
        <div className="DoctorDashboard-activity-container">
          <div className="DoctorDashboard-activity-heading">
            <span className="DoctorDashboard-activity-title">Appointments</span>
            <div
              className="DoctorDashboard-activity-day-caret"
              ref={appointmentSpan}
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              <div className="DoctorDashboard-activity-day">
                {appointmentsInterval}
              </div>
              <span>
                <img
                  src={CaretDown}
                  alt="caret"
                  className="DoctorDashboard-activity-caret"
                />
              </span>
            </div>
          </div>

          {showFilterMenu && (
            <div className="DoctorDashboard-filter" ref={filterMenu}>
              <div
                className="DoctorDashboard-filter-option"
                onClick={todayAppointments}
              >
                Today
              </div>
              <div
                className="DoctorDashboard-filter-option"
                onClick={thisWeekAppointments}
              >
                This Week
              </div>
              <div
                className="DoctorDashboard-filter-option"
                onClick={thisMonthAppointments}
              >
                This Month
              </div>
            </div>
          )}

          <div className="DoctorDashboard-activity-content">
            {appointmentsLoading ? (
              <div className="MiniLoader-container">
                <MiniLoader />
              </div>
            ) : (
              <>
                {appointmentRecords.length ? (
                  appointmentRecords.map((ap: { [key: string]: any }) => {
                    const appointmentUserDetails =
                      doctorId === ap?.scheduler?.id
                        ? ap?.appointee
                        : ap?.scheduler;

                    // eslint-disable-next-line max-len
                    const patientName = `${appointmentUserDetails?.firstName} ${appointmentUserDetails?.lastName}`;

                    const time = moment(
                      ap?.timeslots?.slot_time,
                      'hh:mm',
                    ).format('h:mm A');

                    return (
                      <Link
                        key={ap?._id}
                        className="link"
                        to={`/doctor/appointments/${ap?._id}`}
                      >
                        <ActivityItem
                          avatar={Avatar}
                          patientName={patientName}
                          time={time}
                        />
                      </Link>
                    );
                  })
                ) : (
                  <div className="DoctorDashboard-no-appointments">
                    No appointments
                  </div>
                )}
              </>
            )}
          </div>
          <div className="DoctorDashboard-view-all-container">
            <Link to="/doctor/appointments" className="link">
              <div className="DoctorDashboard-view-all">View All</div>
            </Link>
          </div>
        </div>

        <div className="DoctorDashboard-activity-container">
          <div className="DoctorDashboard-activity-heading">
            <p className="DoctorDashboard-activity-title">Recent Activity</p>
          </div>
          <div className="DoctorDashboard-activity-content">
            <ActivityItem
              avatar={Avatar}
              patientName="Alao James"
              time="9:30 AM"
              description="Consultation"
              date="22/01/2021"
              timeFinished="2:30 pm"
            />
            <ActivityItem
              avatar={Avatar}
              patientName="Alao James"
              time="9:30 AM"
              description="Medical Records Approved"
              date="22/01/2021"
              timeFinished="2:30 pm"
            />
            <ActivityItem
              avatar={Avatar}
              patientName="Alao James"
              time="9:30 AM"
              description="Lab Results Received"
              date="22/01/2021"
              timeFinished="2:30 pm"
            />
          </div>
        </div>

        <div className="DoctorDashboard-info-card">
          <div className="DoctorDashboard-info-card-content">
            <img
              src={CardImage}
              alt="income"
              className="DoctorDashboard-info-card-icon"
            />
            <div>
              <div className="income-caret-container">
                Income{' '}
                <span>
                  <img src={IncomeCaret} alt="caret" className="income-caret" />
                </span>
              </div>
              <p className="DoctorDashboard-info-card-income-detail">
                #250,000.00
              </p>
            </div>
          </div>
        </div>

        <div className="DoctorDashboard-info-card">
          <div className="DoctorDashboard-info-card-content">
            <img
              src={QRImage}
              alt="income"
              className="DoctorDashboard-info-card-icon"
            />
            <div>
              <p className="income-caret-container">Scan QR</p>
              <p className="DoctorDashboard-info-card-qr-detail">
                Scan QR Code
              </p>
            </div>
          </div>
        </div>
      </div>

      <DoctorToolbar onButtonClick={onOpenModal} />

      <Modal
        open={openSideMenu}
        onClose={onCloseSideMenu}
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
          modal: 'SideMenu-modal',
          overlay: 'SideMenu-overlay',
        }}
        animationDuration={150}
      >
        <DoctorSideMenu closeModal={onCloseSideMenu} />
      </Modal>

      <Modal
        open={openPatientsOptions}
        onClose={onClosePatientsModal}
        center
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <PatientsMenu />
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

export default DoctorDashboard;
