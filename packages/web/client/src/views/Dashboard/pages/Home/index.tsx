/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ResultCard from '../../components/ResultCard';
import Hamburger from '../../../../shared/themes/assets/images/hamburger.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import Family from '../../../../shared/themes/assets/images/menu-family.svg';
import DotIndicator from '../../../../shared/components/DotIndicator';
import DashboardChart from '../../components/DashboardChart';
import Menu from '../../../../shared/components/Menu';
import { getUserAvatar, greeting } from '../../../../helpers/helperFunctions';
import axiosCustom from '../../../../utilities/axios';

import Heart from '../../../../shared/themes/assets/images/vitals-heart-rate.svg';
import Oxygen from '../../../../shared/themes/assets/images/vitals-oxygen.svg';
import Weight from '../../../../shared/themes/assets/images/vitals-weight.svg';
import Lungs from '../../../../shared/themes/assets/images/vitals-lungs.svg';
import BP from '../../../../shared/themes/assets/images/Bp.svg';
import Height from '../../../../shared/themes/assets/images/vitals-height.svg';
import Temp from '../../../../shared/themes/assets/images/vitals-temp.svg';
import BMI from '../../../../shared/themes/assets/images/vitals-bmi.svg';
import BSA from '../../../../shared/themes/assets/images/vitals-bsa.svg';

import { AuthContext } from '../../../../store/context';
import { vitalInfo } from '../../../../helpers/vitalsHelper';
import DashboardSideMenu from '../../components/DashboardSideMenu';
import Toolbar from '../../../../shared/components/Toolbar';
import Loader from '../../../../shared/components/Loader';
import MiniLoader from '../../../../shared/components/MiniLoader';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  const { state } = useContext(AuthContext);
  const { user } = state;

  const profilePicture = getUserAvatar(user, Avatar, FemaleAvatar);

  const [vitals, setVitals] = useState([]);

  const unitSystem = user?.unit_system;

  const heartRateHistory = user?.vitals?.heart_rate?.history;
  const heartRateUnit = user?.vitals?.heart_rate?.unit || 'bpm';

  const heartRateLows = heartRateHistory?.low || 0;
  const heartRateNormals = heartRateHistory?.normal || 0;
  const heartRateHighs = heartRateHistory?.high || 0;
  const heartRateAverage = heartRateHistory?.average || '--';

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenSideMenu = () => setOpenSideMenu(true);
  const onCloseSideMenu = () => setOpenSideMenu(false);

  const fetchVitals = async () => {
    try {
      const data = await axiosCustom().get('/vitals');
      setVitals(data.data.data);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVitals();
  }, []);

  const vitalCardImage = (vital: string) => {
    switch (vital) {
      case 'heart_rate':
        return Heart;
      case 'oxygen_saturation':
        return Oxygen;
      case 'weight':
        return Weight;
      case 'respiration_rate':
        return Lungs;
      case 'blood_pressure':
        return BP;
      case 'height':
        return Height;
      case 'temperature':
        return Temp;
      case 'bmi':
        return BMI;
      case 'bsa':
        return BSA;
      default:
        return '';
    }
  };

  return (
    <div className="Dashboard">
      {loading && <Loader />}
      <div className="Dashboard-header">
        <div className="Dashboard-top-section">
          <div className="Dashboard-hamburger" onClick={onOpenSideMenu}>
            <img src={Hamburger} alt="menu-toggler" className="toggle-btn" />
          </div>
          <div className="Dashboard-avatar-group">
            <div className="Dashboard-avatar" id="family-member-avi">
              <img src={Family} alt="family member" />
            </div>
            <div className="Dashboard-avatar" id="avi">
              <img src={profilePicture} alt="avatar" />
            </div>
            <DotIndicator color="#56C596" className="online-status" />
          </div>
        </div>

        <div className="Dashboard-greetings">
          <h2 className="Dashboard-hello">
            {greeting()} <br /> {user?.firstName}
          </h2>

          <p>
            Your target for today is to keep a positive mindset and smile to
            everyone you meet.
          </p>
        </div>
      </div>
      <div className="Dashboard-result-heading">
        <h4>Latest Results</h4>
        <Link to="/vitals" className="link">
          <h4 id="view-all">View All</h4>
        </Link>
      </div>
      {vitals?.length ? (
        <div className="Dashboard-latest-results">
          {vitals.map((vital: { [key: string]: any }) => {
            const icon = vitalCardImage(vital?.key);

            const userVitals = user?.vitals;

            let value: string;
            if (vital.key === 'blood_pressure') {
              value = userVitals[vital.key]?.systolic || '--';
            } else {
              value = userVitals[vital.key]?.value || '--';
            }

            const { unit } = vital;
            const unitObj = unit?.find(
              (u: { [key: string]: string }) =>
                u.system === unitSystem.toLowerCase(),
            );
            const { symbol } = unitObj;

            return (
              <Link
                to={`/vitals/history/${vital.key}`}
                key={vital?._id}
                className="link"
              >
                <ResultCard
                  icon={icon}
                  resultTitle={vital?.title}
                  result={value}
                  symbol={symbol}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="Dashboard-vitals-loader-container">
          <MiniLoader />
        </div>
      )}

      <div className="Dashboard-vitals">
        <Link to="/vitals/history/heart_rate" className="link">
          <div className="Dashboard-chart">
            <p className="chart-title">Heart Rate</p>
            <DashboardChart
              average={heartRateAverage}
              lows={heartRateLows}
              normals={heartRateNormals}
              highs={heartRateHighs}
              unit={heartRateUnit}
            />
            <div className="Dashboard-legend">
              <span>
                <DotIndicator color="#FECE5B" />
                <span className="legend-text">Lows: {heartRateLows}</span>
              </span>
              <span>
                <DotIndicator color="#7BE495" />
                <span className="legend-text">Normals: {heartRateNormals}</span>
              </span>
              <span>
                <DotIndicator color="#F75010" />
                <span className="legend-text">Highs: {heartRateHighs}</span>
              </span>
            </div>
          </div>
        </Link>

        <Link to="/vitals/history/blood_pressure" className="link">
          <ResultCard
            icon={BP}
            resultTitle="blood pressure"
            result={user?.vitals?.blood_pressure?.systolic || '--'}
            className="vitals-card"
            symbol={vitalInfo('blood_pressure')?.unit!}
          />
        </Link>

        <Link to="/vitals/history/temperature" className="link">
          <ResultCard
            icon={Temp}
            resultTitle="body temperature"
            result={user?.vitals?.temperature?.value || '--'}
            className="vitals-card"
            symbol={vitalInfo('temperature')?.unit!}
          />
        </Link>

        <Link to="/vitals/history/respiration_rate" className="link">
          <ResultCard
            icon={Lungs}
            resultTitle="respiration rate"
            result={user?.vitals?.respiration_rate?.value || '--'}
            className="vitals-card"
            symbol={vitalInfo('respiration_rate')?.unit!}
          />
        </Link>
      </div>

      <Toolbar onButtonClick={onOpenModal} />

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
        <DashboardSideMenu closeModal={onCloseSideMenu} />
      </Modal>

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

export default Dashboard;
