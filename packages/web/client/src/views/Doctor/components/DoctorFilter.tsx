import React from 'react';
import FilterCancel from '../../../shared/themes/assets/images/filter-cancel.svg';

interface IProps {
  closeModal: () => void;
}

const Filter = ({ closeModal }: IProps) => (
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
        <p className="Filter-sub-heading">Sort By</p>
        <div>
          <label htmlFor="consultation-fee" className="Filter-radio-label">
            <input
              type="radio"
              id="consultation-fee"
              name="fee"
              value="consultation-fee"
              className="Filter-radio"
            />
            Consultation Fee
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Availability</p>
        <div className="Filter-option">
          <label htmlFor="any-day" className="Filter-radio-label">
            <input
              type="radio"
              id="any-day"
              name="availability"
              value="any-day"
              className="Filter-radio"
            />
            Available Any Day
          </label>
        </div>
        <div className="Filter-option">
          <label htmlFor="today" className="Filter-radio-label">
            <input
              type="radio"
              id="today"
              name="availability"
              value="today"
              className="Filter-radio"
            />
            Available Today
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="next-three-days" className="Filter-radio-label">
            <input
              type="radio"
              id="next-three-days"
              name="availability"
              value="next-three-days"
              className="Filter-radio"
            />
            Available in next 3 days
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="coming-weekend" className="Filter-radio-label">
            <input
              type="radio"
              id="coming-weekend"
              name="availability"
              value="coming-weekend"
              className="Filter-radio"
            />
            Available coming weekend
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">In Hospital</p>
        <div className="Filter-option">
          <label htmlFor="in-hospital" className="Filter-radio-label">
            <input
              type="radio"
              id="in-hospital"
              name="in-hospital"
              value="in-hospital"
              className="Filter-radio"
            />
            In Hospital
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Online Booking</p>
        <div className="Filter-option">
          <label htmlFor="online-booking" className="Filter-radio-label">
            <input
              type="radio"
              id="online-booking"
              name="online-booking"
              value="online-booking"
              className="Filter-radio"
            />
            Consultation Fee
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Consultation Fee</p>
        <div className="Filter-option">
          <label htmlFor="free" className="Filter-radio-label">
            <input
              type="radio"
              id="free"
              name="consultation-fee"
              value="free"
              className="Filter-radio"
            />
            Free
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="1-200" className="Filter-radio-label">
            <input
              type="radio"
              id="1-200"
              name="consultation-fee"
              value="1-200"
              className="Filter-radio"
            />
            1-200
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="201-500" className="Filter-radio-label">
            <input
              type="radio"
              id="201-500"
              name="consultation-fee"
              value="201-500"
              className="Filter-radio"
            />
            201-500
          </label>
        </div>

        <div className="Filter-option">
          <label htmlFor="500-1000" className="Filter-radio-label">
            <input
              type="radio"
              id="500-1000"
              name="consultation-fee"
              value="500-1000"
              className="Filter-radio"
            />
            500-1000
          </label>
        </div>
      </div>

      <div className="Filter-radio-group">
        <p className="Filter-sub-heading">Gender</p>
        <div className="Filter-option">
          <label htmlFor="male" className="Filter-radio-label">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="Filter-radio"
            />
            Male
          </label>
        </div>
        <div className="Filter-option">
          <label htmlFor="female" className="Filter-radio-label">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="Filter-radio"
            />
            Female
          </label>
        </div>
      </div>

      <div className="Filter-submit-container">
        <input type="submit" value="Continue" className="btn-primary" />
      </div>
    </form>
  </div>
);

export default Filter;
