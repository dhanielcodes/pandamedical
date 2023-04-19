import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  image: string;
  title: string;
  value: string;
  symbol: string;
  numberOfRecords: string;
  lastRecorded: string;
  linkTo?: string | undefined;
}

const VitalRecordCard = ({
  image,
  title,
  value,
  symbol,
  numberOfRecords,
  lastRecorded,
  linkTo,
}: IProps) => (
  <Link to={linkTo!} className="link">
    <div className="VitalRecordCard">
      <div className="VitalRecordCard-img-title">
        <img src={image} alt="heart rate" className="VitalRecordCard-image" />

        <div>
          <p className="VitalRecordCard-value">{`${value} ${symbol}`}</p>
          <p className="VitalRecordCard-title">{title}</p>
        </div>
      </div>

      <div className="VitalRecordCard-info">
        <p className="VitalRecordCard-value">
          {numberOfRecords}{' '}
          {Number(numberOfRecords) === 1 ? 'Record' : 'Records'}
        </p>
        <p className="VitalRecordCard-date">
          last Recorded{' '}
          <span className="VitalRecordCard-last-recorded">{lastRecorded}</span>
        </p>
      </div>
    </div>
  </Link>
);

VitalRecordCard.defaultProps = { linkTo: undefined };

export default VitalRecordCard;
