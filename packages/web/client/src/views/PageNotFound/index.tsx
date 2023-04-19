import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BackArrow from '../../shared/themes/assets/images/back-grey.svg';
import NotFoundImage from '../../shared/themes/assets/images/not-found.svg';

const PageNotFound = ({ history }: RouteComponentProps) => (
  <div className="PageNotFound">
    <div className="PageNotFound-text-back">
      <div onClick={() => history.goBack()}>
        <img src={BackArrow} alt="back" className="Vitals-back" />
      </div>
      <p className="PageNotFound-text">Page Not Found!</p>
    </div>

    <div>
      <img
        src={NotFoundImage}
        alt="page not found"
        className="PageNotFound-image"
      />
    </div>

    <div>
      <p className="PageNotFound-oops">OOPS!</p>
      <p className="PageNotFound-info">
        We can&lsquo;t seem to find the page you&lsquo;re looking for
      </p>
      <p className="PageNotFound-goback">
        Please, go{' '}
        <span
          className="PageNotFound-back-link"
          onClick={() => history.goBack()}
        >
          BACK
        </span>
      </p>
    </div>
  </div>
);

export default PageNotFound;
