import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../../../shared/themes/assets/images/star.svg';
import Doctor from '../../../shared/themes/assets/images/doctor.svg';
import LocationPin from '../../../shared/themes/assets/images/location-pin.svg';

interface IProps {
  profilePicture: string;
  avatarStyle?: string;
  name: string;
  votes: number;
  feedback: number;
  rating: number;
  qualifications: string[];
  speciality: string;
  profession: string;
  yearsOfExperience: number;
  title: string;
  location: string;
  categories?: string[] | undefined;
  percentageRating: number;
  linkTo: string;
  buttonLink: string;
}

const SpecialityProfileCard = ({
  profilePicture,
  avatarStyle,
  votes,
  feedback,
  name,
  rating,
  qualifications,
  speciality,
  profession,
  yearsOfExperience,
  title,
  location,
  categories,
  percentageRating,
  linkTo,
  buttonLink,
}: IProps) => (
  <div className="SpecialityProfileCard">
    <div className="top-section">
      <div className="SpecialityProfileCard-avi-section">
        <div className="SpecialityProfileCard-avatar-container">
          <div className={`SpecialityProfileCard-avatar ${avatarStyle}`}>
            <img src={profilePicture} alt="avatar" />
          </div>
          <div className="SpecialityProfileCard-percentage-rating">
            {percentageRating}%
          </div>
        </div>
        <div className="SpecialityProfileCard-votes">{votes} votes</div>
        <div className="SpecialityProfileCard-feedback">
          {feedback} Feedback
        </div>
      </div>

      <div className="SpecialityProfileCard-details-section">
        <div className="SpecialityProfileCard-name-rating">
          <Link to={linkTo} className="link">
            <p className="SpecialityProfileCard-name">{name}</p>
          </Link>
          <div className="SpecialityProfileCard-star-rating">
            <span>
              <img
                src={Star}
                alt="rating"
                className="SpecialityProfileCard-star"
              />
            </span>
            <span className="SpecialityProfileCard-rating">{rating}</span>
          </div>
        </div>

        <div className="SpecialityProfileCard-summary">
          <div className="SpecialityProfileCard-qualifications-speciality">
            <span className="SpecialityProfileCard-qualifications">
              {qualifications.join(', ')}
            </span>{' '}
            <span className="SpecialityProfileCard-speciality">
              - {speciality}
            </span>
          </div>
          <div>{profession}</div>
          <div>{yearsOfExperience} years of experience</div>
        </div>

        <div className="SpecialityProfileCard-title-location">
          <div className="SpecialityProfileCard-title">
            <span>
              <img
                src={Doctor}
                alt="title"
                className="SpecialityProfileCard-title-icon"
              />
            </span>
            <p className="SpecialityProfileCard-title-text">{title}</p>
          </div>
          <div className="SpecialityProfileCard-location">
            <span>
              <img
                src={LocationPin}
                alt="location"
                className="SpecialityProfileCard-location-icon"
              />
            </span>
            <p className="SpecialityProfileCard-location-text">{location}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="SpecialityProfileCard-categories">
      {categories?.length ? (
        <>
          {categories?.[0] ? (
            <div className="SpecialityProfileCard-category">
              <p>{categories?.[0]}</p>
            </div>
          ) : (
            <div />
          )}

          {categories?.[1] ? (
            <div className="SpecialityProfileCard-category">
              <p>{categories?.[1]}</p>
            </div>
          ) : (
            <div />
          )}

          {categories?.length > 2 ? (
            <div className="SpecialityProfileCard-category and-more">
              <p>+{categories?.length - 2} more</p>
            </div>
          ) : (
            <div />
          )}
        </>
      ) : (
        <div />
      )}
    </div>
    <Link to={buttonLink} className="link">
      <div className="SpecialityProfileCard-get-appointment">
        Get Appointment
      </div>
    </Link>
  </div>
);

SpecialityProfileCard.defaultProps = {
  avatarStyle: '',
  categories: [''],
};

export default SpecialityProfileCard;
