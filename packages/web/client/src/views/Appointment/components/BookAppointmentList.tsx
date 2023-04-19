import React from 'react';

interface Props {
  profession: string;
  description: string;
}

const BookAppointmentList = ({ profession, description }: Props) => (
  <div className="BookAppointmentList">
    <div>
      <p className="BookAppointmentList-profession">{profession}</p>
      <p className="BookAppointmentList-description">{description}</p>
    </div>
  </div>
);

export default BookAppointmentList;
