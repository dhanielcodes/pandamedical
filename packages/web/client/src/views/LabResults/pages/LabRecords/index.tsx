/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Modal } from 'react-responsive-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import dateformat from 'dateformat';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import BackArrow from '../../../../shared/themes/assets/images/back-grey.svg';
import VitalsImg from '../../../../shared/themes/assets/images/vitals-graph.svg';
import VitalAdd from '../../../../shared/themes/assets/images/add-vital.svg';
import Empty from '../../../../shared/themes/assets/images/empty.svg';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import axiosCustom from '../../../../utilities/axios';
import TestResultCard from '../../../../shared/components/TestResultCard';
import MiniLoader from '../../../../shared/components/MiniLoader';

const LabRecords = ({ history }: RouteComponentProps) => {
  const [labResults, setLabResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const fetchLabResults = async () => {
    try {
      const data = await axiosCustom().get('/labtestresults');
      setLabResults(data.data.data);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.errMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabResults();
  }, []);

  return (
    <div className="Vitals">
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Lab Result(s)</p>

          <Link to="/lab-results/add" className="Vitals-header-add link">
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
              {labResults.length ? (
                labResults.map((result: { [key: string]: any }, index) => {
                  const observer = result?.created_by;

                  const lastRecorded = dateformat(
                    result.date_entered,
                    'dd/mm/yyyy',
                  );

                  const labTests = result.lab_tests;
                  const testNames = labTests.map(
                    (test: { [key: string]: any }) => test.lab_name,
                  );

                  const testName = testNames.join(', ');

                  const time = moment(result?.timestamp, 'hh:mm').format(
                    'hh:mm a',
                  );

                  const position = index + 1;
                  return (
                    <Link
                      to={`/lab-results/${position}/details`}
                      className="link"
                      key={result?._id}
                    >
                      <TestResultCard
                        observer={observer}
                        testName={testName}
                        lastRecorded={lastRecorded}
                        time={time}
                        labTests={labTests}
                      />
                    </Link>
                  );
                })
              ) : (
                <div className="Vitals-empty">
                  <img src={Empty} alt="empty" className="Vitals-empty-image" />
                  <p className="Vitals-empty-text">Empty!</p>
                  <p className="Vitals-empty-info">No lab results found</p>
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
        classNames={{
          modal: 'Dashboard-modal',
        }}
      >
        <Menu />
      </Modal>
    </div>
  );
};

export default LabRecords;
