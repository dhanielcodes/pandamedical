/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import dateformat from 'dateformat';
import 'react-responsive-modal/styles.css';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import { AuthContext } from '../../../../store/context';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import VitalRecordCard from '../../components/VitalRecordCard';
import axiosCustom from '../../../../utilities/axios';
import VitalAdd from '../../../../shared/themes/assets/images/add-vital.svg';
import Heart from '../../../../shared/themes/assets/images/vitals-heart-rate.svg';
import Oxygen from '../../../../shared/themes/assets/images/vitals-oxygen.svg';
import Weight from '../../../../shared/themes/assets/images/vitals-weight.svg';
import Lungs from '../../../../shared/themes/assets/images/vitals-lungs.svg';
import BP from '../../../../shared/themes/assets/images/vitals-bp.svg';
import Height from '../../../../shared/themes/assets/images/vitals-height.svg';
import Temp from '../../../../shared/themes/assets/images/vitals-temp.svg';
import BMI from '../../../../shared/themes/assets/images/vitals-bmi.svg';
import BSA from '../../../../shared/themes/assets/images/vitals-bsa.svg';
import MiniLoader from '../../../../shared/components/MiniLoader';
import { toast } from 'react-toastify';

const VitalsRecords = ({ history }: RouteComponentProps) => {
  const { state } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const { user } = state;
  const unitSystem = user?.unit_system;
  const [vitals, setVitals] = useState([]);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
    <div className="Vitals">
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Vital(s)</p>

          <Link to="/vitals/add" className="Vitals-header-add link">
            <img src={VitalAdd} alt="add" />
          </Link>
        </span>

        <div className="Vitals-img">
          <img src={VitalsImg} alt="vitals" />
        </div>
      </div>

      <div className="Vitals-body-container">
        <div className="Vitals-body">
          {loading ? (
            <div className="MiniLoader-container">
              <MiniLoader />
            </div>
          ) : (
            <div>
              {vitals.length ? (
                vitals.map((vital: { [key: string]: any }) => {
                  const image = vitalCardImage(vital.key);

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

                  const numRecords =
                    userVitals[vital.key]?.number_of_records || '--';

                  const latestRecord = userVitals[vital.key]?.latest_record;
                  const lastRecorded = latestRecord
                    ? dateformat(latestRecord, 'dd/mm/yyyy')
                    : '--';

                  return (
                    <VitalRecordCard
                      linkTo={`/vitals/history/${vital.key}`}
                      image={image}
                      title={vital.title}
                      key={vital._id}
                      value={value}
                      symbol={symbol}
                      numberOfRecords={numRecords}
                      lastRecorded={lastRecorded}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </div>

      <Toolbar onButtonClick={onOpenModal} backgroundColor="#fff" />

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'Dashboard-modal',
        }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default VitalsRecords;
