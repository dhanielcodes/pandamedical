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
import CalendarImage from '../../../../shared/themes/assets/images/calendar.svg';
import Menu from '../../../../shared/components/Menu';
import Toolbar from '../../../../shared/components/Toolbar';
import axiosCustom from '../../../../utilities/axios';
import Loader from '../../../../shared/components/Loader';

interface RouteParams {
  vitalPosition: string;
  vital: string;
}

const VitalDetails = ({ history, match }: RouteComponentProps<RouteParams>) => {
  const [userVitalHistory, setVitalHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { vitalPosition, vital: vitalName } = match.params;
  const vitalIndex = Number(vitalPosition) - 1;

  const vital: { [key: string]: any } = userVitalHistory[vitalIndex];

  const vitalRecords = vital?.vitals.map(
    (record: { [key: string]: any }) => record,
  );

  const time = vital?.timestamp
    ? moment(vital?.timestamp, 'hh:mm').format('hh:mm a')
    : '';
  const comment = vital?.comment;
  const dateEntered = vital?.date_entered
    ? dateformat(vital?.date_entered, 'dd/mm/yyyy')
    : '';
  const source = vital?.source;
  const observer = vital?.created_by;

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
      {loading && <Loader />}
      <div className="Vitals-header">
        <span className="Vitals-header-text-back">
          <div onClick={() => history.goBack()}>
            <img src={BackArrow} alt="back" className="Vitals-back" />
          </div>
          <p>Vital Details</p>

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
          {vitalRecords?.length ? (
            vitalRecords.map((record: { [key: string]: any }) => (
              <div className="Vitals-vital-value" key={record._id}>
                <p className="Vitals-label">Vital</p>
                <div className="Vitals-value LabDetails-value">
                  {record?.title}
                </div>

                {record.vitals_key === 'blood_pressure' ? (
                  <>
                    <p className="Vitals-label">BP Systolic</p>
                    <div className="Vitals-value LabDetails-value">
                      {record?.vitals_default_value}
                    </div>

                    <p className="Vitals-label">BP Diastolic</p>
                    <div className="Vitals-value LabDetails-value">
                      {record?.vitals_secondary_value}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="Vitals-label">Value</p>
                    <div className="Vitals-value LabDetails-value">
                      {record?.vitals_default_value}
                    </div>
                  </>
                )}

                <p className="Vitals-label">Unit</p>
                <div className="Vitals-value LabDetails-value">
                  {record?.unit}
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

export default VitalDetails;
