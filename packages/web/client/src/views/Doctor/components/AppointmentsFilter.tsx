import React from 'react';
import FilterCancel from '../../../shared/themes/assets/images/filter-cancel.svg';

interface IProps {
  closeModal: () => void;
}

const AppointmentsFilter = ({ closeModal }: IProps) => (
  <div className="Filter">
    <div className="Filter-cancel">
      <span onClick={closeModal}>
        <img src={FilterCancel} alt="cancel" />
      </span>
    </div>
    <div className="Filter-top-section">
      <h3 className="Filter-heading">Filter</h3>
      <p>Clear Filter</p>
    </div>
    <form>
      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Date</p>
        <div className="Filter-option">
          <label htmlFor="today" className="Filter-radio-label">
            <input
              type="radio"
              id="today"
              name="date"
              value="today"
              className="Filter-radio"
            />
            Today
          </label>
        </div>
        <div className="Filter-option">
          <label htmlFor="this-week" className="Filter-radio-label">
            <input
              type="radio"
              id="this-week"
              name="date"
              value="this-week"
              className="Filter-radio"
            />
            This Week
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="this-month" className="Filter-radio-label">
            <input
              type="radio"
              id="this-month"
              name="date"
              value="this-month"
              className="Filter-radio"
            />
            This Month
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Status</p>
        <div className="Filter-option">
          <label htmlFor="pending" className="Filter-radio-label">
            <input
              type="radio"
              id="pending"
              name="status"
              value="pending"
              className="Filter-radio"
            />
            Pending
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="accepted" className="Filter-radio-label">
            <input
              type="radio"
              id="accepted"
              name="status"
              value="accepted"
              className="Filter-radio"
            />
            Accepted
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="rescheduled" className="Filter-radio-label">
            <input
              type="radio"
              id="rescheduled"
              name="status"
              value="rescheduled"
              className="Filter-radio"
            />
            Rescheduled
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="rejected" className="Filter-radio-label">
            <input
              type="radio"
              id="rejected"
              name="status"
              value="rejected"
              className="Filter-radio"
            />
            Rejected
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Timeline</p>
        <div className="Filter-option">
          <label htmlFor="past-appointments" className="Filter-radio-label">
            <input
              type="radio"
              id="past-appointments"
              name="timeline"
              value="past-appointments"
              className="Filter-radio"
            />
            Past Appointments
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="past-appointments" className="Filter-radio-label">
            <input
              type="radio"
              id="upcoming-appointments"
              name="timeline"
              value="upcoming-appointments"
              className="Filter-radio"
            />
            Upcoming Appointments
          </label>
        </div>
      </div>

      <div className="Filter-submit-container">
        <input type="submit" value="Continue" className="btn-primary" />
      </div>
    </form>
  </div>
);

export default AppointmentsFilter;
