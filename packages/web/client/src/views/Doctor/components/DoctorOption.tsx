import React from 'react';

interface IProps {
  icon: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const DoctorOption = ({ icon, title, className, onClick }: IProps) => (
  <div className={`DoctorOption ${className}`} onClick={onClick}>
    <div className="DoctorOption-content">
      <img src={icon} alt={title} className="DoctorOption-icon" />
      <div>
        <p className="DoctorOption-title">{title}</p>
      </div>
    </div>
  </div>
);

DoctorOption.defaultProps = {
  className: '',
  onClick: () => {},
};

export default DoctorOption;
