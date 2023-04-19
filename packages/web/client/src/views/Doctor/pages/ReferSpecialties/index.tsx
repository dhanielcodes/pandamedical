import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchInput from '../../../../shared/components/SearchInput';
import CancelIcon from '../../../../shared/themes/assets/images/cancel.svg';
import axiosCustom from '../../../../utilities/axios';

const ReferSpecialties = ({ history }: RouteComponentProps) => {
  const [searchVal, setSearchVal] = useState('');

  const [specialities, setSpecialities] = useState([]);

  const fetchSpecialities = async () => {
    try {
      const data = await axiosCustom().get('/medicalspecialty');

      setSpecialities(data?.data?.data?.list);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
    }
  };

  useEffect(() => {
    fetchSpecialities();
  }, []);

  return (
    <div className="BookAppointment ReferSpecialties">
      <div className="BookAppointment-header">
        <span className="BookAppointment-header-text-cancel">
          <div onClick={() => history.goBack()}>
            <img
              src={CancelIcon}
              alt="cancel"
              className="BookAppointment-cancel"
            />
          </div>
          <p>Top Specialities</p>
        </span>
        <SearchInput
          placeholder="Search Doctors"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="BookAppointment-search"
        />
      </div>

      <div className="BookAppointment-body BookAppointment-specialities-body ReferSpecialties-body">
        {specialities.length ? (
          specialities.map((speciality: { [key: string]: any }) => (
            <Link
              to={`/doctor/patients/referral/specialties/${speciality?.key}`}
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
    </div>
  );
};

export default withRouter(ReferSpecialties);
