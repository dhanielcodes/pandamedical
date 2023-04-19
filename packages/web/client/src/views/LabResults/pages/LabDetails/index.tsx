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
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import VitalAdd from '../../../../shared/themes/assets/images/add-vital.svg';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  resultPosition: string;
}

const LabDetails = ({ history, match }: RouteComponentProps<RouteParams>) => {
  const [labResults, setLabResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const { resultPosition } = match.params;
  const resultIndex = Number(resultPosition) - 1;

  const result: { [key: string]: any } = labResults[resultIndex];

  const labTests = result?.lab_tests.map(
    (test: { [key: string]: any }) => test,
  );

  const time = result?.timestamp
    ? moment(result?.timestamp, 'hh:mm').format('hh:mm a')
    : '';
  const comment = result?.comment;
  const dateEntered = result?.date_entered
    ? dateformat(result?.date_entered, 'dd/mm/yyyy')
    : '';
  const source = result?.source;
  const observer = result?.created_by;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const fetchLabResults = async () => {
    const data = await axiosCustom().get('/labtestresults');
    setLabResults(data.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLabResults();
  }, []);

  return (
    <div className="Vitals">
      {loading && <Loader />}
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Lab Details</p>

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
          {labTests?.length ? (
            labTests.map((labTest: { [key: string]: any }) => (
              <div className="Vitals-vital-value" key={labTest._id}>
                <p className="Vitals-label">Lab Result</p>
                <div className="Vitals-value LabDetails-value">
                  {labTest?.lab_name}
                </div>

                <p className="Vitals-label">Value</p>
                <div className="Vitals-value LabDetails-value">
                  {labTest?.lab_default_value}
                </div>

                <p className="Vitals-label">Unit</p>
                <div className="Vitals-value LabDetails-value">
                  {labTest?.unit}
                </div>
              </div>
            ))
          ) : (
            <div />
          )}

          <p className="Vitals-label">Observed by:</p>
          <div className="Vitals-value LabDetails-value">{observer}</div>

          <p className="Vitals-label">Source</p>
          <div className="Vitals-value LabDetails-value LabDetails-source">
            {source}
          </div>

          <p className="Vitals-label">Date</p>
          <div className="InputField border-input">
            <div className="Vitals-value LabDetails-value">{dateEntered}</div>
            <img
              src={CalendarImage}
              alt="calendar"
              className="InputField-icon InputField-cal-icon Vitals-icon"
              style={{ top: '35%' }}
            />
          </div>

          <p className="Vitals-label">Time</p>
          <div className="Vitals-value LabDetails-value LabDetails-time">
            {time}
          </div>

          <p className="Vitals-label">Comment</p>
          <div className="Vitals-comment LabDetails-comment">{comment}</div>
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

export default LabDetails;
