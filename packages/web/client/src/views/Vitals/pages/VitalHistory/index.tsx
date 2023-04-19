/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-responsive-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import dateformat from 'dateformat';
import 'react-responsive-modal/styles.css';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import VitalAdd from '../../../../shared/themes/assets/images/add-vital.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import axiosCustom from '../../../../utilities/axios';
import TestResultCard from '../../../../shared/components/TestResultCard';
import { vitalInfo } from '../../../../helpers/vitalsHelper';
import MiniLoader from '../../../../shared/components/MiniLoader';

interface RouteParams {
  vital: string;
}

const VitalHistory = ({ history, match }: RouteComponentProps<RouteParams>) => {
  const { vital: vitalName } = match.params;

  const [userVitalHistory, setVitalHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const fetchVitalHistory = async () => {
    const data = await axiosCustom().get(`/vitalshistory/${vitalName}`);
    setVitalHistory(data.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchVitalHistory();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Vitals">
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Vital History</p>

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
              {userVitalHistory.length ? (
                userVitalHistory.map((vital: { [key: string]: any }, index) => {
                  const observer = vital?.created_by;

                  const dateCreated = dateformat(
                    vital.date_entered,
                    'dd/mm/yyyy',
                  );

                  const vitalResults = vital?.vitals;

                  const { title } = vital?.vitals[0];

                  const time = moment(vital?.timestamp, 'hh:mm').format(
                    'hh:mm a',
                  );

                  const vitalPosition = index + 1;

                  return (
                    <Link
                      to={`/vitals/history/${vitalName}/${vitalPosition}`}
                      key={vital?._id}
                      className="link"
                    >
                      <TestResultCard
                        observer={observer}
                        testName={title}
                        labTests={vitalResults}
                        lastRecorded={dateCreated}
                        time={time}
                        isVital
                      />
                    </Link>
                  );
                })
              ) : (
                <div className="Vitals-empty">
                  <img src={Empty} alt="empty" className="Vitals-empty-image" />
                  <p className="Vitals-empty-text">Empty!</p>
                  <p className="Vitals-empty-info">
                    No record found for {vitalInfo(vitalName)?.title}
                  </p>
                </div>
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
        classNames={{ modal: 'Dashboard-modal' }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default VitalHistory;
