import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SearchInput from '../../../../shared/components/SearchInput';
import BackIcon from '../../../../shared/themes/assets/images/back-icon.svg';
import GreenCaretDown from '../../../../shared/themes/assets/images/green-caret-down.svg';
import Avatar from '../../../../shared/themes/assets/images/avatar.jpg';
import MedPlus from '../../../../shared/themes/assets/images/medplus.jpg';
import FilterIcon from '../../../../shared/themes/assets/images/filter.svg';
import SpecialityProfileCard from '../../components/SpecialityProfileCard';

import 'react-responsive-modal/styles.css';
import Filter from '../../components/Filter';

const Hospitals = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');

  const [openFilter, setOpenFilter] = useState(false);

  const onOpenFilterModal = () => setOpenFilter(true);
  const onCloseFilterModal = () => setOpenFilter(false);

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
          <p className="SpecialityProfiles-speciality">Hospital</p>
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
      </div>

      <div className="SpecialityProfiles-body">
        <SpecialityProfileCard
          name="MedPlus Clinic"
          profilePicture={MedPlus}
          avatarStyle="Hospitals-avatar"
          votes={36}
          feedback={95}
          rating={4.2}
          qualifications={['mbbs', 'doms', 'ms']}
          speciality="Badass"
          profession="Ophthalmologist"
          yearsOfExperience={26}
          title="Doctor"
          location="Lagos Island"
          categories={[
            'LASIK Eye Surgery',
            'Anterior segment',
            'Laser surgery',
            'Cateract removal',
          ]}
          percentageRating={97}
          linkTo="/appointment/hospitals/:hospital"
          buttonLink="/appointment/time"
        />
        <SpecialityProfileCard
          name="Jane Amadi"
          profilePicture={Avatar}
          avatarStyle="Hospitals-avatar"
          votes={36}
          feedback={95}
          rating={4.2}
          qualifications={['mbbs', 'doms', 'ms']}
          speciality="Ophthalmology"
          profession="Ophthalmologist"
          yearsOfExperience={26}
          title="Doctor"
          location="Lagos Island"
          categories={[
            'LASIK Eye Surgery',
            'Anterior segment',
            'Laser surgery',
            'Cateract removal',
          ]}
          percentageRating={97}
          linkTo="/appointment/speciality/:speciality/:profile"
          buttonLink="/appointment/time"
        />
        <SpecialityProfileCard
          name="Angela Ade"
          profilePicture={Avatar}
          avatarStyle="Hospitals-avatar"
          votes={36}
          feedback={95}
          rating={4.2}
          qualifications={['mbbs', 'doms', 'ms']}
          speciality="Ophthalmology"
          profession="Ophthalmologist"
          yearsOfExperience={26}
          title="Doctor"
          location="Lagos Island"
          categories={[
            'LASIK Eye Surgery',
            'Anterior segment',
            'Laser surgery',
            'Cateract removal',
          ]}
          percentageRating={97}
          linkTo="/appointment/speciality/:speciality/:profile"
          buttonLink="/appointment/time"
        />
      </div>
      <div className="SpecialityProfiles-filter" onClick={onOpenFilterModal}>
        <img src={FilterIcon} alt="filter" />
      </div>

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
    </div>
  );
};

export default withRouter(Hospitals);
