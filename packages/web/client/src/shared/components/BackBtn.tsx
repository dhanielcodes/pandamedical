import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const BackBtn = ({ history }: RouteComponentProps) => (
  <div className="BackBtn">
    <i className="fas fa-arrow-left" onClick={() => history.goBack()} />
  </div>
);

export default withRouter(BackBtn);
