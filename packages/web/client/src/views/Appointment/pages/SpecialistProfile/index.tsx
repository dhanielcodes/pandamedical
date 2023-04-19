/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from 'react-responsive-modal';
import moment from 'moment';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Star from '../../../../shared/themes/assets/images/star.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import DotIndicator from '../../../../shared/components/DotIndicator';
import OtherProfilesCard from '../../components/OtherProfilesCard';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';

interface RouteParams {
  doctorId: string;
}

interface IUser {
  [key: string]: any;
}

const SpecialistProfile = ({
  history,
  match,
}: RouteComponentProps<RouteParams>) => {
  const { doctorId } = match.params;
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [doctor, setDoctor] = useState<IUser>({});
  const doctorInfo = doctor?.user_info;

  const name = `${doctor?.shorthand} ${doctorInfo?.firstName} ${doctorInfo?.lastName}`;

  const profilePicture = getUserAvatar(doctorInfo, Avatar, FemaleAvatar);

  const qualifications = doctor?.credentials?.map(
    (cred: { [key: string]: string }) => cred?.key,
  );

  const startedPractice = moment(doctor?.started_practice);
  const now = moment();
  const yearsOfExperience = now.diff(startedPractice, 'years');

  const fetchDoctor = async () => {
    try {
      const data = await axiosCustom().get(`/physician/${doctorId}`);
      setDoctor(data.data.data.physician);
      setLoading(false);
      console.log(data.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  useEffect(() => {
    fetchDoctor();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="BookAppointment SpecialistProfile">
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
        </span>
      </div>

      {!loading && (
        <div className="SpecialistProfile-body">
          <div className="SpecialistProfile-profile-header">
            <div className="SpecialistProfile-status-rating">
              <div className="SpecialistProfile-online-status">Online</div>
              <div>
                <span>
                  <img
                    src={Star}
                    alt="rating"
                    className="SpecialistProfile-star"
                  />
                </span>
                <span className="SpecialistProfile-rating">4.2</span>
              </div>
            </div>

            <div className="SpecialistProfile-basic-details">
              <div className="SpecialistProfile-avatar-container">
                <div className="SpecialistProfile-avatar">
                  <img src={profilePicture} alt="avatar" />
                </div>
              </div>

              <p className="SpecialistProfile-name">{name}</p>
              <p className="SpecialistProfile-qualifications">
                {qualifications?.join(', ')}
              </p>

              <div className="SpecialistProfile-exp-votes">
                <div className="SpecialistProfile-exp">
                  <span className="SpecialistProfile-exp-votes-num">
                    {yearsOfExperience}
                  </span>{' '}
                  <span className="SpecialistProfile-exp-votes-text">
                    yrs. Experience
                  </span>
                </div>

                <div className="SpecialistProfile-votes">
                  <span className="SpecialistProfile-exp-votes-num">89%</span>{' '}
                  <span className="SpecialistProfile-exp-votes-text">
                    (443 votes)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="SpecialistProfile-info">
            <div className="SpecialistProfile-fee SpecialistProfile-info-section">
              <p className="SpecialistProfile-price">
                In Clinic Fees :{' '}
                <span className="SpecialistProfile-price-num">$10</span>
              </p>

              <Link to={`/appointment/book/${doctorId}`} className="link">
                <div className="SpecialistProfile-book-btn">Book</div>
              </Link>
            </div>

            <div className="SpecialistProfile-time-open SpecialistProfile-info-section">
              <p className="SpecialistProfile-closed">CLOSED TODAY</p>
              <p className="SpecialistProfile-time">9:30AM - 08:00PM</p>
              <p className="SpecialistProfile-all-timing">All Timing</p>
            </div>

            <div className="SpecialistProfile-feedback-section SpecialistProfile-info-section">
              <p className="SpecialistProfile-info-section-heading">Feedback</p>
              <div className="SpecialistProfile-feedback">
                <p>Very good . courteous and efficient staff.</p>
                <p className="SpecialistProfile-feedback-info">
                  Jitu Raut . 2 years ago
                </p>

                <p className="SpecialistProfile-info-section-all">
                  All Feedback
                </p>
              </div>
            </div>

            <div className="SpecialistProfile-info-section SpecialistProfile-services-section">
              <p className="SpecialistProfile-info-section-heading">Services</p>
              <p className="SpecialistProfile-list-item">Ophthalmology</p>
              <p className="SpecialistProfile-list-item">Glaucoma</p>
              <p className="SpecialistProfile-list-item">Cataract</p>

              <p className="SpecialistProfile-info-section-all">All Services</p>
            </div>

            <div className="SpecialistProfile-info-section SpecialistProfile-specialization-section">
              <p className="SpecialistProfile-info-section-heading">
                Specialization
              </p>
              <p className="SpecialistProfile-list-item">Dermitologist</p>
              <p className="SpecialistProfile-list-item">Trichologist</p>
              <p className="SpecialistProfile-list-item">Cosmetologist</p>
            </div>

            <div className="SpecialistProfile-info-section SpecialistProfile-verification-section">
              <div className="SpecialistProfile-info-section-heading">
                <span>
                  <DotIndicator
                    color="#27AE60"
                    className="SpecialistProfile-dot-indicator"
                  />
                </span>
                VERIFICATION DONE FOR
              </div>
              <p className="SpecialistProfile-list-item">- Medical License</p>
            </div>

            <div className="SpecialistProfile-others-section">
              <p className="SpecialistProfile-info-section-heading">
                ALSO PRACTICES AT
              </p>

              <OtherProfilesCard
                name="Dr. Zan Chau"
                practice="Dermatologist"
                fee="50"
                rating="5.0"
                linkTo="/appointment/speciality/:speciality/:profile"
              />
              <OtherProfilesCard
                name="Dr. Zan Chau"
                practice="Dermatologist"
                fee="50"
                rating="5.0"
                linkTo="/appointment/speciality/:speciality/:profile"
              />
            </div>

            <div className="SpecialistProfile-action">
              <div className="SpecialistProfile-give-feedback">
                Give Feedback
              </div>

              <Link
                to={`/appointment/book/${doctorId}`}
                className="link book-link"
              >
                <div className="SpecialistProfile-book">Book</div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Toolbar onButtonClick={onOpenModal} />

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

export default withRouter(SpecialistProfile);
