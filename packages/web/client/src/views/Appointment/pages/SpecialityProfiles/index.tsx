import React, { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import SearchInput from '../../../../shared/components/SearchInput';
import BackIcon from '../../../../shared/themes/assets/images/back-icon.svg';
import GreenCaretDown from '../../../../shared/themes/assets/images/green-caret-down.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import FilterIcon from '../../../../shared/themes/assets/images/filter.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';
import SpecialityProfileCard from '../../components/SpecialityProfileCard';

import 'react-responsive-modal/styles.css';
import Filter from '../../components/Filter';
import axiosCustom from '../../../../utilities/axios';
import { specialtyInfo } from '../../../../helpers/appointmentHelper';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import MiniLoader from '../../../../shared/components/MiniLoader';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';

interface RouteParams {
  specialty: string;
}

const SpecialityProfiles = ({
  history,
  match,
}: RouteComponentProps<RouteParams>) => {
  const { specialty } = match.params;

  const [searchVal, setSearchVal] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const onOpenFilterModal = () => setOpenFilter(true);
  const onCloseFilterModal = () => setOpenFilter(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const fetchDoctors = async () => {
    try {
      const data = await axiosCustom().get(`/physician/specialty/${specialty}`);
      setDoctors(data?.data?.data?.physicians);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="BookAppointment SpecialityProfiles">
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
          <p className="SpecialityProfiles-speciality">
            {specialtyInfo(specialty).title}
          </p>
          <div className="location-container">
            <span className="location">Lagos</span>
            <span>
              <img
                src={GreenCaretDown}
                alt="location dropdown"
                className="location-caret"
              />
            </span>
          </div>
        </div>

        <SearchInput
          placeholder="Search Doctors"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="SpecialityProfiles-search"
        />
        <div className="SpecialityProfiles-tags-container">
          <div className="SpecialityProfiles-tag">
            <p>Availability</p>
          </div>
          <div className="SpecialityProfiles-tag">
            <p>In Hospital</p>
          </div>
          <div className="SpecialityProfiles-tag">
            <p>Online Booking</p>
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
            {doctors.length ? (
              doctors.map((doctor: { [key: string]: any }) => {
                const doctorInfo = doctor?.user_info;

                const profilePicture = getUserAvatar(
                  doctorInfo,
                  Avatar,
                  FemaleAvatar,
                );

                // eslint-disable-next-line max-len
                const doctorName = `${doctor?.shorthand} ${doctorInfo?.firstName} ${doctorInfo?.lastName}`;

                const qualifications = doctor?.credentials?.map(
                  (cred: { [key: string]: string }) => cred?.key,
                );

                const speciality = doctor?.specialty?.field;
                const profession = doctor?.specialty?.title;

                const startedPractice = moment(doctor?.started_practice);
                const now = moment();
                const yearsOfExperience = now.diff(startedPractice, 'years');
                return (
                  <SpecialityProfileCard
                    key={doctor?.user_id}
                    name={doctorName}
                    profilePicture={profilePicture}
                    votes={36}
                    feedback={doctor?.feedback?.length}
                    rating={4.2}
                    qualifications={qualifications}
                    speciality={speciality}
                    profession={profession}
                    yearsOfExperience={yearsOfExperience}
                    title={doctor?.title}
                    location={doctorInfo?.city}
                    categories={[
                      'LASIK Eye Surgery',
                      'Anterior segment',
                      'Laser surgery',
                      'Cateract removal',
                    ]}
                    percentageRating={97}
                    linkTo={`/appointment/speciality/${specialty}/${doctor?.user_id}`}
                    buttonLink={`/appointment/speciality/${specialty}/${doctor?.user_id}`}
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

      <Toolbar onButtonClick={onOpenModal} />

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
        <Menu />
      </Modal>
    </div>
  );
};

export default withRouter(SpecialityProfiles);
