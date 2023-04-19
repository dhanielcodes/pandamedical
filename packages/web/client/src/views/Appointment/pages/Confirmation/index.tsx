/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import Modal from 'react-responsive-modal';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import Avatar from '../../../../shared/themes/assets/images/profile-picture.png';
import FemaleAvatar from '../../../../shared/themes/assets/images/profile-picture-female.png';
import { getUserAvatar } from '../../../../helpers/helperFunctions';
import axiosCustom from '../../../../utilities/axios';
import Toolbar from '../../../../shared/components/Toolbar';
import Menu from '../../../../shared/components/Menu';
import Loader from '../../../../shared/components/Loader';
import Button from '../../../../shared/components/Button';
import { AuthContext } from '../../../../store/context';
import ConfirmationSuccess from '../ConfirmationSuccess';
import { commentPattern } from '../../../../helpers/inputHelper';

interface RouteParams {
  doctorId: string;
  selectedDate: string;
  selectedTime: string;
}

interface IUser {
  [key: string]: any;
}

const Confirmation = ({ history, match }: RouteComponentProps<RouteParams>) => {
  const [confirmed, setConfirmed] = useState(false);
  const { doctorId, selectedDate, selectedTime } = match.params;

  const [topic, setTopic] = useState('');
  const [note, setNote] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    topic: '',
    note: '',
  });

  const checkTopic = () => {
    if (topic.trim()) {
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
    }
    setErrorMessages({
      ...errorMessages,
      topic: '',
    });
    return true;
  };

  const checkNote = () => {
    if (note.trim()) {
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
    }
    setErrorMessages({
      ...errorMessages,
      note: '',
    });
    return true;
  };

  const { state } = useContext(AuthContext);
  const { user } = state;
  const userId = user?.id;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [doctor, setDoctor] = useState<IUser>({});
  const doctorInfo = doctor?.user_info;

  const name = `${doctor?.shorthand || ''} ${doctorInfo?.firstName || ''} ${
    doctorInfo?.lastName || ''
  }`;

  const profilePicture = getUserAvatar(doctorInfo, Avatar, FemaleAvatar);

  const qualifications = doctor?.credentials?.map(
    (cred: { [key: string]: string }) => cred?.key,
  );

  const [loading, setLoading] = useState(true);

  const fetchDoctor = async () => {
    try {
      const data = await axiosCustom().get(`/physician/${doctorId}`);
      setDoctor(data.data.data.physician);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  useEffect(() => {
    fetchDoctor();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const appointmentDetails = {
      appointee: doctorId,
      scheduler: userId,
      slot_time: selectedTime,
      slot_date: selectedDate,
      topic,
      note,
    };

    if (checkTopic() && checkNote()) {
      try {
        setLoading(true);
        const data = await axiosCustom().post(
          '/appointments',
          appointmentDetails,
        );

        if (data) {
          setConfirmed(true);
          toast.success(data?.data?.message);
          setLoading(false);
          setTimeout(() => {
            history.push('/appointment/appointments');
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
    <div className="TimeBooking">
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
          <p className="TimeBooking-header-text">Confirmation</p>
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

                <div className="TimeBooking-doc-details">
                  <p className="SpecialistProfile-name">{name}</p>
                  <p className="SpecialistProfile-qualifications TimeBooking-qualifications">
                    {qualifications}
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

              <p className="Confirmation-text">Confirm Your Appointment</p>

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

export default withRouter(Confirmation);
