import React from 'react';

interface IProps {
  observer: string;
  lastRecorded: string;
  time: string;
  testName: string;
  labTests: any[];
  isVital?: boolean;
}

const TestResultCard = ({
  observer,
  testName,
  lastRecorded,
  time,
  labTests,
  isVital,
}: IProps) => (
  <div className="TestResultCard">
    <div className="TestResultCard-info">
      <p className="TestResultCard-observer">{observer}</p>
      <p className="TestResultCard-test-name">{testName}</p>
      <p className="TestResultCard-date">
        {isVital ? 'Recorded on' : 'Last Recorded'} {lastRecorded} at{' '}
        <span className="TestResultCard-time">{time}</span>
      </p>
    </div>
    <div className="TestResultCard-result-details">
      {labTests?.length > 1 ? (
        <div className="TestResultCard-view-all">View All</div>
      ) : (
        <>
          <p className="TestResultCard-value">
            {labTests[0].lab_default_value || labTests[0].vitals_default_value}
          </p>
          <p className="TestResultCard-unit">{labTests[0].unit}</p>
        </>
      )}
    </div>
  </div>
);

TestResultCard.defaultProps = {
  isVital: false,
};

export default TestResultCard;
