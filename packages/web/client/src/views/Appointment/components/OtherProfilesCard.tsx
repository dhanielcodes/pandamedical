import React from 'react';
import Avatar from '../../../shared/themes/assets/images/avatar.jpg';
import Star from '../../../shared/themes/assets/images/star.svg';
import EyeIcon from '../../../shared/themes/assets/images/eye.svg';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  practice: string;
  fee: string;
  rating: string;
  isHospital?: boolean;
  linkTo?: string;
}

const OtherProfilesCard = ({
  name,
  practice,
  fee,
  rating,
  isHospital,
  linkTo,
}: IProps) => (
  <div className="SpecialistProfile-other-doc SpecialistProfile-info-section">
    <div className="SpecialistProfile-other-doc-details">
      <div className="SpecialistProfile-other-doc-avatar">
        <img src={Avatar} alt="avatar" />
      </div>

      <div className="SpecialistProfile-other-doc-info">
        <p className="SpecialistProfile-other-doc-name">{name}</p>
        <p className="SpecialistProfile-other-doc-practice">{practice}</p>
        <p className="SpecialistProfile-other-doc-fee">$ {fee}</p>
      </div>
    </div>

    {!isHospital ? (
      <div className="SpecialistProfile-other-doc-rating-view">
        <div className="SpecialistProfile-other-doc-star-rating">
          <img
            src={Star}
            alt="rating"
            className="SpecialistProfile-other-doc-star"
          />
          <span className="SpecialistProfile-other-doc-rating">{rating}</span>
        </div>

        <Link to={linkTo!} className="link">
          <div className="SpecialistProfile-other-doc-view">
            <span>
              <img
                src={EyeIcon}
                alt="view"
                className="SpecialistProfile-other-doc-eye-icon"
              />
            </span>
            View
          </div>
        </Link>
      </div>
    ) : (
      <Link to={linkTo!} className="link book-link">
        <div className="SpecialistProfile-other-doc-book">Book</div>
      </Link>
    )}
  </div>
);

OtherProfilesCard.defaultProps = {
  isHospital: false,
  linkTo: undefined,
};

export default OtherProfilesCard;
