import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import MiniLoader from '../../../../shared/components/MiniLoader';
import SearchInput from '../../../../shared/components/SearchInput';
import CancelIcon from '../../../../shared/themes/assets/images/cancel.svg';
import axiosCustom from '../../../../utilities/axios';

const Specialities = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSpecialities = async () => {
    try {
      const data = await axiosCustom().get('/medicalspecialty');

      setSpecialities(data?.data?.data?.list);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSpecialities();
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
          <p>Physicians</p>
        </span>
        <SearchInput
          placeholder="Search Doctors"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="BookAppointment-search"
        />
      </div>

      <p className="BookAppointment-body-heading">Top Specialities</p>

      <div className="BookAppointment-body BookAppointment-specialities-body">
        {loading ? (
          <div className="MiniLoader-container BookAppointment-loader-container">
            <MiniLoader />
          </div>
        ) : (
          <div>
            {specialities.length ? (
              specialities.map((speciality: { [key: string]: any }) => (
                <Link
                  to={`/appointment/speciality/${speciality?.key}`}
                  className="link"
                  key={speciality?.key}
                >
                  <div className="BookAppointment-speciality-container">
                    <p className="BookAppointment-speciality">
                      {speciality?.title}
                    </p>
                  </div>
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

export default withRouter(Specialities);
