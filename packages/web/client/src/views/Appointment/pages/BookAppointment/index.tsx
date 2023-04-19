import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import MiniLoader from '../../../../shared/components/MiniLoader';
import SearchInput from '../../../../shared/components/SearchInput';
import CancelIcon from '../../../../shared/themes/assets/images/cancel.svg';
import axiosCustom from '../../../../utilities/axios';
import BookAppointmentList from '../../components/BookAppointmentList';

const BookAppointment = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');
  const [bookingsList, setBookingsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookingsList = async () => {
    try {
      const data = await axiosCustom().get('/bookingslist');
      setBookingsList(data.data.data.bookingslist);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookingsList();
  }, []);

  return (
    <div className="BookAppointment">
      <div className="BookAppointment-header">
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={CancelIcon}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
          <p>Book Appointment</p>
        </span>
        <SearchInput
          placeholder="Doctors, specialities, clinics"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="BookAppointment-search"
        />
      </div>

      <div className="BookAppointment-body">
        {loading ? (
          <div className="MiniLoader-container BookAppointment-loader-container">
            <MiniLoader />
          </div>
        ) : (
          <div>
            {bookingsList.length ? (
              bookingsList.map((item: { [key: string]: any }) => (
                <Link
                  to={`/appointment/${item?.key}`}
                  className="link"
                  key={item?.key}
                >
                  <BookAppointmentList
                    profession={item?.title}
                    description={item?.description}
                  />
                </Link>
              ))
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(BookAppointment);
