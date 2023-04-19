import React from 'react';
import { v4 as uuid4 } from 'uuid';
import moment from 'moment';

interface IProps {
  timeOfDay: string;
  timeSlots: string[];
  selected: string;
  select: (slot: string) => any;
}

const TimeSlots = ({ timeOfDay, timeSlots, selected, select }: IProps) => (
  <div className="TimeSlots">
    <div
      className={`TimeSlots-time-of-day ${
        timeOfDay === 'morning' && 'TimeSlots-morning'
      } ${timeOfDay === 'afternoon' && 'TimeSlots-afternoon'} ${
        timeOfDay === 'evening & night' && 'TimeSlots-evening-night'
      }`}
    >
      {timeOfDay}
    </div>

    <div
      className={`TimeSlots-slots ${
        !timeSlots.length ? 'TimeSlots-empty' : ''
      }`}
    >
      {timeSlots.length ? (
        timeSlots.map((slot) => {
          const isSelected = selected === moment(slot, 'hh:mm a').format('HH');
          return (
            <div
              key={uuid4()}
              className={`TimeSlots-slot ${isSelected && 'TimeSlots-selected'}`}
              onClick={() => select(slot)}
            >
              {slot}
            </div>
          );
        })
      ) : (
        <p className="TimeSlots-empty-text">No slots available</p>
      )}
    </div>
  </div>
);

export default TimeSlots;
