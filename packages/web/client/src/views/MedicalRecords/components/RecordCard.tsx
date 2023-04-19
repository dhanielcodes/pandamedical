import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  image: string;
  linkTo: string;
}

const RecordCard = ({ title, image, linkTo }: IProps) => (
  <Link to={linkTo} className="link">
    <div className="RecordCard">
      <div>
        <img src={image} alt={title} className="RecordCard-image" />
      </div>
      <p className="RecordCard-title">{title}</p>
    </div>
  </Link>
);

export default RecordCard;
