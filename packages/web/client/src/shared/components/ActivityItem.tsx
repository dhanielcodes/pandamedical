import React from 'react';

interface IProps {
  avatar: string;
  patientName: string;
  time: string;
  description?: string;
  date?: string;
  timeFinished?: string;
}

const ActivityItem = ({
  avatar,
  patientName,
  time,
  description,
  date,
  timeFinished,
}: IProps) => (
  <div className="ActivityItem">
    <div className="ActivityItem-avatar-name">
      <div className="ActivityItem-avatar">
        <img src={avatar} alt={patientName} />
      </div>

      <div className="ActivityItem-name-description-time">
        <p className="ActivityItem-name">{patientName}</p>
        <p className="ActivityItem-description">{description}</p>
        <p className="ActivityItem-date-time">
          {date ? `On ${date}` : ''}{' '}
          <span>{timeFinished ? `at ${timeFinished}` : ''}</span>
        </p>
      </div>
    </div>

    <p className="ActivityItem-time">{time}</p>
  </div>
);

ActivityItem.defaultProps = {
  description: '',
  date: '',
  timeFinished: '',
};

export default ActivityItem;
