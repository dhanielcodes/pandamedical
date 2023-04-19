import React from 'react';
import MenuCaret from '../../../shared/themes/assets/images/menu-caret-right.svg';

interface IProps {
  userImage: string;
  name: string;
  title: string;
  date: string;
  time: string;
  status: string;
}

const AppointmentRecord = ({
  userImage,
  name,
  title,
  date,
  time,
  status,
}: IProps) => (
  <div className="AppointmentRecord">
    <div className="AppointmentRecord-image-details">
      <div className="AppointmentRecord-avatar">
        <img src={userImage} alt="name" />
      </div>

      <div className="AppointmentRecord-details">
        <p className="AppointmentRecord-name">{name}</p>
        <p className="AppointmentRecord-title">{title}</p>
        <p className="AppointmentRecord-date">
          On {date} at {time}
        </p>
      </div>
    </div>

    <div className="AppointmentRecord-caret-status">
      <img src={MenuCaret} alt="caret" className="AppointmentRecord-caret" />
      <p className="AppointmentRecord-status">{status}</p>
    </div>
  </div>
);

export default AppointmentRecord;
